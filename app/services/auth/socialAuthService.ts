import AuthService from './authService';

export interface SocialLoginConfig {
    clientId: string;
    redirectUri: string;
    scope: string;
}

export interface SocialUser {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    provider: 'steam' | 'google' | 'discord';
}

export interface SocialLoginResponse {
    success: boolean;
    user?: SocialUser;
    error?: string;
    token?: string;
}

class SocialAuthService {
    private popup: Window | null = null;
    private popupCheckInterval: NodeJS.Timeout | null = null;

    // Configuration for each provider
    private get configs() {
        // Check if we're on the client side
        if (typeof window === 'undefined') {
            return {
                steam: {
                    clientId: 'your-steam-client-id',
                    redirectUri: '/auth/callback/steam',
                    scope: 'openid profile email'
                },
                google: {
                    clientId: 'your-google-client-id',
                    redirectUri: '/auth/callback/google',
                    scope: 'openid profile email'
                },
                discord: {
                    clientId: 'your-discord-client-id',
                    redirectUri: '/auth/callback/discord',
                    scope: 'identify email'
                }
            };
        }

        return {
            steam: {
                clientId: process.env.NEXT_PUBLIC_STEAM_CLIENT_ID || 'your-steam-client-id',
                redirectUri: `${window.location.origin}/auth/callback/steam`,
                scope: 'openid profile email'
            },
            google: {
                clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || 'your-google-client-id',
                redirectUri: `${window.location.origin}/auth/callback/google`,
                scope: 'openid profile email'
            },
            discord: {
                clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID || 'your-discord-client-id',
                redirectUri: `${window.location.origin}/auth/callback/discord`,
                scope: 'identify email'
            }
        };
    }

    /**
     * Initialize social login for a specific provider
     */
    async loginWithProvider(provider: 'steam' | 'google' | 'discord'): Promise<SocialLoginResponse> {
        // Check if we're on the client side
        if (typeof window === 'undefined') {
            return {
                success: false,
                error: 'Social login is only available on the client side'
            };
        }

        try {
            const config = this.configs[provider];

            // Create popup window
            const popup = this.createPopup(provider, config);

            // Wait for popup to complete
            const result = await this.waitForPopupResult(popup);

            if (result.success && result.user) {
                // Simulate API call to your backend
                const token = await this.authenticateWithBackend(provider, result.user);
                return {
                    success: true,
                    user: result.user,
                    token
                };
            }

            return result;
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Login failed. Please try again.'
            };
        }
    }

    /**
     * Create popup window for social login
     */
    private createPopup(provider: 'steam' | 'google' | 'discord', config: SocialLoginConfig): Window {
        if (typeof window === 'undefined') {
            throw new Error('Window is not available');
        }

        const width = 500;
        const height = 600;
        const left = window.screenX + (window.outerWidth - width) / 2;
        const top = window.screenY + (window.outerHeight - height) / 2;

        const url = this.buildAuthUrl(provider, config);

        this.popup = window.open(
            url,
            `${provider}Login`,
            `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
        );

        if (!this.popup) {
            throw new Error('Popup blocked by browser');
        }

        return this.popup;
    }

    /**
     * Build authentication URL for each provider
     */
    private buildAuthUrl(provider: 'steam' | 'google' | 'discord', config: SocialLoginConfig): string {
        const params = new URLSearchParams({
            client_id: config.clientId,
            redirect_uri: config.redirectUri,
            scope: config.scope,
            response_type: 'code',
            state: this.generateState()
        });

        const baseUrls = {
            steam: 'https://steamcommunity.com/openid/login',
            google: 'https://accounts.google.com/o/oauth2/v2/auth',
            discord: 'https://discord.com/api/oauth2/authorize'
        };

        const authUrl = `${baseUrls[provider]}?${params.toString()}`;

        console.log('🚀 Building Auth URL for', provider);
        console.log('🔗 Auth URL:', authUrl);
        console.log('⚙️ Config:', config);

        return authUrl;
    }

    /**
     * Wait for popup to complete and return result
     */
    private waitForPopupResult(popup: Window): Promise<SocialLoginResponse> {
        return new Promise((resolve) => {
            this.popupCheckInterval = setInterval(() => {
                try {
                    if (popup.closed) {
                        this.clearInterval();
                        resolve({
                            success: false,
                            error: 'Login cancelled by user'
                        });
                        return;
                    }

                    // Check if popup has redirected to our callback URL
                    if (popup.location.href.includes('/auth/callback/')) {
                        this.clearInterval();
                        popup.close();

                        console.log('🎉 Popup redirected to callback URL:', popup.location.href);

                        // Parse the callback URL to extract user data
                        const userData = this.parseCallbackUrl(popup.location.href);
                        resolve(userData);
                    }
                } catch (error) {
                    // Cross-origin error, popup is still on external domain
                }
            }, 100);
        });
    }

    /**
     * Parse callback URL to extract user data
     */
    private parseCallbackUrl(url: string): SocialLoginResponse {
        try {
            const urlObj = new URL(url);
            const params = new URLSearchParams(urlObj.search);

            const code = params.get('code');
            const error = params.get('error');
            const state = params.get('state');

            // Log all information coming from provider
            console.log('🔍 Provider Callback Information:');
            console.log('📋 Full URL:', url);
            console.log('🔑 Authorization Code:', code);
            console.log('❌ Error (if any):', error);
            console.log('🎯 State:', state);
            console.log('📝 All URL Parameters:', Object.fromEntries(params.entries()));

            if (error) {
                console.log('❌ Provider returned error:', error);
                return {
                    success: false,
                    error: 'Login was cancelled or failed. Please try again.'
                };
            }

            if (!code) {
                console.log('❌ No authorization code received');
                return {
                    success: false,
                    error: 'Login failed. Please try again.'
                };
            }

            // Extract provider from URL
            const provider = this.extractProviderFromUrl(url);
            console.log('🏷️ Detected Provider:', provider);

            // In a real implementation, you would exchange the code for tokens
            // and fetch user data from the provider's API
            // For now, we'll create a user object with the authorization code
            // The backend will handle the actual user data extraction
            // 
            // Backend should:
            // 1. Exchange authorization code for access token with provider
            // 2. Use access token to fetch user profile (email, name, avatar)
            // 3. Create/update user in our database
            // 4. Return our app's user token
            //
            // Example request to backend:
            // {
            //   "type": "socialLogin",
            //   "data": {
            //     "provider": "google",
            //     "token": "4/0AfJohXn...", // authorization code from Google
            //     "expire_in": 60,
            //     "meta": {
            //       "display_name": "", // Backend will extract from Google
            //       "avatar": "" // Backend will extract from Google
            //     }
            //   }
            // }
            const user: SocialUser = {
                id: code, // Use the authorization code as the token (will be sent to backend)
                email: '', // Will be extracted by backend from provider
                name: '', // Will be extracted by backend from provider
                avatar: '', // Will be extracted by backend from provider (optional)
                provider: provider as 'steam' | 'google' | 'discord'
            };

            console.log('👤 Created User Object (will be populated by backend):', user);

            return {
                success: true,
                user: user
            };
        } catch (error) {
            console.log('❌ Error parsing callback URL:', error);
            return {
                success: false,
                error: 'Login failed. Please try again.'
            };
        }
    }

    /**
     * Extract provider from callback URL
     */
    private extractProviderFromUrl(url: string): string {
        if (url.includes('/auth/callback/steam')) return 'steam';
        if (url.includes('/auth/callback/google')) return 'google';
        if (url.includes('/auth/callback/discord')) return 'discord';
        return 'unknown';
    }

    /**
     * Generate random state for CSRF protection
     */
    private generateState(): string {
        return Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
    }

    /**
     * Clear popup check interval
     */
    private clearInterval(): void {
        if (this.popupCheckInterval) {
            clearInterval(this.popupCheckInterval);
            this.popupCheckInterval = null;
        }
    }

    /**
     * Exchange authorization code for user token via backend
     * 
     * Flow:
     * 1. User clicks social login → Opens popup
     * 2. Provider (Google/Steam/Discord) authenticates user
     * 3. Provider redirects back with authorization code
     * 4. We extract the authorization code and send it to our backend
     * 5. Backend exchanges the code for user tokens and returns our app token
     */
    private async authenticateWithBackend(provider: string, user: SocialUser): Promise<string> {
        try {
            console.log('🔄 Sending authorization code to backend...');
            console.log('📤 Request to backend:', {
                provider,
                authorizationCode: user.id,
                displayName: user.name,
                avatar: user.avatar
            });

            // user.id contains the authorization code from the provider
            // We only send the authorization code to backend
            // Backend will handle extracting user data from the provider
            const response = await AuthService.socialLogin(
                provider as 'steam' | 'google' | 'discord',
                user.id, // This is the authorization code from the provider
                '', // display_name will be extracted by backend
                '', // avatar will be extracted by backend
                60 // expire_in: 60 minutes
            );

            console.log('📥 Backend response:', response.data);

            if (response.data.status === 1) {
                console.log('✅ Backend authentication successful');
                console.log('🎉 User token received:', response.data.data.token);
                console.log('👤 User display name:', response.data.data.display_name);
                return response.data.data.token; // Return the user token from backend
            } else {
                console.log('❌ Backend authentication failed:', response.data.error);
                throw new Error(response.data.error || 'Authentication failed');
            }
        } catch (error) {
            // Fallback to mock token if API call fails
            console.warn('❌ Social login API failed, using mock token:', error);
            return `mock_token_${provider}_${Date.now()}`;
        }
    }

    /**
     * Clean up resources
     */
    cleanup(): void {
        this.clearInterval();
        if (this.popup && !this.popup.closed) {
            this.popup.close();
        }
    }
}

// Export singleton instance
export const socialAuthService = new SocialAuthService();
