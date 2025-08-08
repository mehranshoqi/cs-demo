'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function AuthCallback() {
    const router = useRouter();
    const params = useParams();
    const provider = params.provider as string;

    useEffect(() => {
        // This page will be loaded in the popup window
        // The parent window will detect the URL change and close the popup
        // No need to do anything here as the socialAuthService handles the callback
    }, []);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#1a1a1a',
            color: '#ffffff'
        }}>
            <div style={{ textAlign: 'center' }}>
                <h2>Authenticating with {provider}...</h2>
                <p>Please wait while we complete your login.</p>
                <div style={{
                    width: '40px',
                    height: '40px',
                    border: '4px solid #333',
                    borderTop: '4px solid #007bff',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    margin: '20px auto'
                }}></div>
                <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
            </div>
        </div>
    );
}
