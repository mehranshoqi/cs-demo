import { useState, useCallback, useEffect } from 'react';
import { socialAuthService, SocialLoginResponse, SocialUser } from '@/app/services/auth/socialAuthService';

interface UseSocialLoginReturn {
    isLoading: boolean;
    error: string | null;
    loginWithSteam: () => Promise<void>;
    loginWithGoogle: () => Promise<void>;
    loginWithDiscord: () => Promise<void>;
    clearError: () => void;
}

export const useSocialLogin = (onSuccess?: (user: SocialUser, token: string) => void): UseSocialLoginReturn => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = useCallback(async (provider: 'steam' | 'google' | 'discord') => {
        setIsLoading(true);
        setError(null);

        try {
            const result: SocialLoginResponse = await socialAuthService.loginWithProvider(provider);
            console.log('result', result);

            if (result.success && result.user && result.token) {
                onSuccess?.(result.user, result.token);
            } else {
                setError(result.error || 'Authentication failed');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred');
        } finally {
            setIsLoading(false);
        }
    }, [onSuccess]);

    const loginWithSteam = useCallback(() => handleLogin('steam'), [handleLogin]);
    const loginWithGoogle = useCallback(() => handleLogin('google'), [handleLogin]);
    const loginWithDiscord = useCallback(() => handleLogin('discord'), [handleLogin]);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            socialAuthService.cleanup();
        };
    }, []);

    return {
        isLoading,
        error,
        loginWithSteam,
        loginWithGoogle,
        loginWithDiscord,
        clearError
    };
};
