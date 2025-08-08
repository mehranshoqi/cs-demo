require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const axios = require('axios');

const DiscordStrategy = require('passport-discord').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const SteamStrategy = require('passport-steam').Strategy;

const app = express();
const PORT = process.env.PORT || 3000;

// Session setup
app.use(session({
    secret: process.env.SESSION_SECRET || 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000
    }
}));

app.use(passport.initialize());
app.use(passport.session());

// Session handling
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// --- Discord Strategy ---
passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL,
    scope: ['identify', 'email']
}, (accessToken, refreshToken, profile, done) => {
    const user = {
        id: profile.id,
        username: `${profile.username}#${profile.discriminator}`,
        email: profile.email,
        avatar: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`
    };
    console.log('Discord User:', user);
    return done(null, user);
}));

// --- Google Strategy ---
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
}, (accessToken, refreshToken, profile, done) => {
    const user = {
        id: profile.id,
        name: profile.displayName,
        email: profile.emails?.[0]?.value,
        avatar: profile.photos?.[0]?.value
    };
    console.log('Google User:', user);
    return done(null, user);
}));

// --- Steam Strategy ---
passport.use(new SteamStrategy({
    returnURL: process.env.STEAM_CALLBACK_URL,
    realm: process.env.STEAM_REALM || 'http://localhost:3000/',
    apiKey: process.env.STEAM_API_KEY
}, async (identifier, profile, done) => {
    const steamID = identifier.split('/').pop();

    try {
        const res = await axios.get('https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/', {
            params: {
                key: process.env.STEAM_API_KEY,
                steamids: steamID
            }
        });

        const player = res.data.response.players[0] || {};
        const user = {
            id: steamID,
            username: player.personaname,
            avatar: player.avatarfull,
            profile: player.profileurl
        };

        console.log('Steam User:', user);
        return done(null, user);

    } catch (err) {
        console.error('Steam API error:', err);
        return done(err, null);
    }
}));

// ----------- ROUTES -------------

app.get('/', (req, res) => {
    res.send(`
    <h2>Login using:</h2>
    <a href="/auth/discord">Discord</a><br/>
    <a href="/auth/google">Google</a><br/>
    <a href="/auth/steam">Steam</a>
  `);
});

// --- Discord Auth ---
app.get('/auth/discord', passport.authenticate('discord'));
app.get('/auth/discord/callback',
    passport.authenticate('discord', { failureRedirect: '/' }),
    (req, res) => {
        res.send(`<pre>Logged in with Discord:\n${JSON.stringify(req.user, null, 2)}</pre>`);
    }
);

// --- Google Auth ---
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.send(`<pre>Logged in with Google:\n${JSON.stringify(req.user, null, 2)}</pre>`);
    }
);

// --- Steam Auth ---
app.get('/auth/steam', passport.authenticate('steam'));
app.get('/auth/steam/return',
    passport.authenticate('steam', { failureRedirect: '/' }),
    (req, res) => {
        res.send(`<pre>Logged in with Steam:\n${JSON.stringify(req.user, null, 2)}</pre>`);
    }
);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});