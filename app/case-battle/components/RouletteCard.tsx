"use client";

import { useEffect, useRef } from 'react';

export default function RouletteCard() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size to match container
        const resizeCanvas = () => {
            const container = canvas.parentElement;
            if (container) {
                canvas.width = container.clientWidth;
                canvas.height = container.clientHeight;
            }
        };

        // Initial resize
        resizeCanvas();

        // Create radial gradient
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(canvas.width, canvas.height) / 2;

        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
        gradient.addColorStop(0, 'rgba(255, 94, 21, 0.2)'); // Orange center with 0.5 opacity
        gradient.addColorStop(1, 'rgba(255, 165, 0, 0)'); // Transparent edges

        // Fill canvas with gradient
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Handle window resize
        const handleResize = () => {
            resizeCanvas();
            // Redraw gradient after resize
            const newCenterX = canvas.width / 2;
            const newCenterY = canvas.height / 2;
            const newRadius = Math.min(canvas.width, canvas.height) / 2;

            const newGradient = ctx.createRadialGradient(newCenterX, newCenterY, 0, newCenterX, newCenterY, newRadius);
            newGradient.addColorStop(0, 'rgba(255, 94, 21, 0.2)');
            newGradient.addColorStop(1, 'rgba(255, 165, 0, 0)');

            ctx.fillStyle = newGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="bg-gray-800 h-full rounded-lg flex-1 relative">
            <canvas
                ref={canvasRef}
                className="w-full h-full absolute inset-0"
                style={{ borderRadius: 'inherit' }}
            />
        </div>
    );
} 