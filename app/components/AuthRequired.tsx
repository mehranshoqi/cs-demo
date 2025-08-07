"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { useUserStore } from "../store/userStore";

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
    const { isAuthenticated, token } = useUserStore();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (!token || token.trim() === "") {
                router.push(redirectTo);
                return;
            }
            setIsLoading(false);
        }
    }, [token, router, redirectTo]);

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
    const { isAuthenticated } = useUserStore();
    return isAuthenticated;
};
