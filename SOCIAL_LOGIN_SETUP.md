# Social Login Setup Guide

This project includes a comprehensive social login system for Steam, Google, and Discord with popup functionality.

## Features

✅ **Popup-based authentication** - Clean popup windows for each provider  
✅ **Error handling** - Comprehensive error display and management  
✅ **Loading states** - Visual feedback during authentication  
✅ **TypeScript support** - Fully typed interfaces and responses  
✅ **Clean architecture** - Separated service, hooks, and components  

## File Structure

```
app/
├── services/auth/
│   └── socialAuthService.ts    # Core social authentication logic
├── hooks/
│   └── useSocialLogin.ts       # React hook for social login
├── auth/callback/[provider]/
│   └── page.tsx               # OAuth callback handler
└── components/Auth/
    └── AuthModal.tsx          # Updated modal with social login
```

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Steam OpenID
NEXT_PUBLIC_STEAM_CLIENT_ID=your-steam-client-id

# Google OAuth
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id

# Discord OAuth
NEXT_PUBLIC_DISCORD_CLIENT_ID=your-discord-client-id
```

### 2. OAuth Provider Setup

#### Steam
1. Go to [Steam Community](https://steamcommunity.com/dev/apikey)
2. Create a new API key
3. Set the redirect URI to: `http://localhost:3000/auth/callback/steam`

#### Google
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Set redirect URI to: `http://localhost:3000/auth/callback/google`

#### Discord
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Go to OAuth2 settings
4. Add redirect URI: `http://localhost:3000/auth/callback/discord`

### 3. Usage

The social login system is already integrated into the AuthModal component. Users can click on any of the social login buttons to initiate authentication.

## How It Works

1. **User clicks social login button** → Opens popup window
2. **Popup redirects to provider** → User authenticates with provider
3. **Provider redirects back** → To our callback page
4. **Service detects callback** → Parses user data and closes popup
5. **Success callback** → User is logged in automatically

## Customization

### Adding New Providers

1. Add provider config to `socialAuthService.ts`
2. Update the `buildAuthUrl` method
3. Add provider to the `useSocialLogin` hook
4. Update the AuthModal component

### Styling

The social login buttons use the existing `OutlinedButton` component with enhanced hover effects. You can customize the styling in:

- `OutlinedButton.module.scss` - Button styles
- `AuthModal.module.scss` - Container and error styles

## Error Handling

The system includes comprehensive error handling:

- **Popup blocked** - Shows error message
- **Authentication cancelled** - Handled gracefully
- **Network errors** - Displayed to user
- **Provider errors** - Parsed and shown

## Security Features

- **CSRF protection** - Random state parameter
- **Popup validation** - Checks for popup blocking
- **Cleanup** - Proper resource cleanup on unmount
- **Error boundaries** - Graceful error handling

## Testing

To test the system:

1. Set up the environment variables
2. Run the development server
3. Open the auth modal
4. Click any social login button
5. Complete the authentication flow

The system will simulate the authentication process and return mock user data for testing purposes.
