"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface AuthRequiredProps {
    children: ReactNode;
    redirectTo?: string;
    fallback?: ReactNode;
}

export const AuthRequired: React.FC<AuthRequiredProps> = ({
    children,
    redirectTo = "/",
    fallback = <div>Loading...</div>
}) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem("authToken");

            if (!token || token.trim() === "") {
                router.push(redirectTo);
                return;
            }

            setIsAuthenticated(true);
            setIsLoading(false);
        };

        checkAuth();
    }, [router, redirectTo]);

    if (isLoading) {
        return <>{fallback}</>;
    }

    if (!isAuthenticated) {
        return null;
    }

    return <>{children}</>;
};

// Simple hook for checking auth status
export const useAuthCheck = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        setIsAuthenticated(!!(token && token.trim() !== ""));
    }, []);

    return isAuthenticated;
};
