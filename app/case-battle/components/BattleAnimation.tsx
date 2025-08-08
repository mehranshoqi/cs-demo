"use client";

import { useEffect, useRef } from 'react';
import { ReactNode } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
}

interface BattleAnimationProps {
    className?: string;
    children?: ReactNode;
}

export default function BattleAnimation({ className = "", children }: BattleAnimationProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        // Check if we're on the client side
        if (typeof window === 'undefined') {
            return;
        }

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

        // Particle system
        const createParticle = (): Particle => {
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 2 + 1; // Random speed between 1-3

            return {
                x: centerX,
                y: centerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 0,
                maxLife: Math.random() * 100 + 50 // Random life between 50-150
            };
        };

        const updateParticles = () => {
            // Add new particles randomly
            if (Math.random() < 0.1) { // 10% chance each frame
                particlesRef.current.push(createParticle());
            }

            // Update existing particles
            particlesRef.current = particlesRef.current.filter(particle => {
                const centerX = canvas.width / 2;
                const centerY = canvas.height / 2;
                const distanceFromCenter = Math.sqrt(
                    Math.pow(particle.x - centerX, 2) + Math.pow(particle.y - centerY, 2)
                );

                // If particle is far from center, add spiral movement
                if (distanceFromCenter > 50) {
                    // Calculate angle from center
                    const angle = Math.atan2(particle.y - centerY, particle.x - centerX);

                    // Add spiral effect (perpendicular force)
                    const spiralForce = 0.3;
                    const perpendicularAngle = angle + Math.PI / 2; // 90 degrees

                    particle.vx += Math.cos(perpendicularAngle) * spiralForce;
                    particle.vy += Math.sin(perpendicularAngle) * spiralForce;
                } else {
                    // Normal random movement when close to center
                    particle.vx += (Math.random() - 0.5) * 0.2;
                    particle.vy += (Math.random() - 0.5) * 0.2;
                }

                // Limit velocity to prevent too fast movement
                const maxSpeed = 3;
                const currentSpeed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
                if (currentSpeed > maxSpeed) {
                    particle.vx = (particle.vx / currentSpeed) * maxSpeed;
                    particle.vy = (particle.vy / currentSpeed) * maxSpeed;
                }

                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.life++;

                // Remove particles that are out of bounds or dead
                return particle.life < particle.maxLife &&
                    particle.x >= 0 && particle.x <= canvas.width &&
                    particle.y >= 0 && particle.y <= canvas.height;
            });
        };

        const drawParticles = () => {
            ctx.fillStyle = 'rgba(255, 94, 21, 0.8)'; // Orange particles
            particlesRef.current.forEach(particle => {
                const alpha = 1 - (particle.life / particle.maxLife);
                ctx.globalAlpha = alpha;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2); // 2px diameter
                ctx.fill();
            });
            ctx.globalAlpha = 1;
        };

        const animate = () => {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw gradient background
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const radius = Math.min(canvas.width, canvas.height) / 2;

            const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
            gradient.addColorStop(0, 'rgba(255, 94, 21, 0.2)');
            gradient.addColorStop(1, 'rgba(255, 165, 0, 0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            updateParticles();
            drawParticles();

            animationRef.current = requestAnimationFrame(animate);
        };

        // Start animation
        animate();

        // Handle window resize
        const handleResize = () => {
            resizeCanvas();
            // Clear particles on resize
            particlesRef.current = [];
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div className={`relative ${className}`}>
            <canvas
                ref={canvasRef}
                className="w-full h-full absolute inset-0"
                style={{ borderRadius: 'inherit' }}
            />
            {children}
        </div>
    );
} 