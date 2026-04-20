"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrameId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    const mouse = {
      x: -9999,
      y: -9999,
      radius: 180,
    };

    const PARTICLE_COUNT = Math.min(
      110,
      Math.max(55, Math.floor((width * height) / 22000))
    );

    const createParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.8 + 1.2,
      }));
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const devicePixelRatio = window.devicePixelRatio || 1;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      createParticles();
    };

    const drawBackgroundGlow = () => {
      const glow1 = context.createRadialGradient(
        width * 0.32,
        height * 0.45,
        0,
        width * 0.32,
        height * 0.45,
        320
      );
      glow1.addColorStop(0, "rgba(16, 185, 129, 0.11)");
      glow1.addColorStop(1, "rgba(16, 185, 129, 0)");

      const glow2 = context.createRadialGradient(
        width * 0.72,
        height * 0.22,
        0,
        width * 0.72,
        height * 0.22,
        260
      );
      glow2.addColorStop(0, "rgba(16, 185, 129, 0.05)");
      glow2.addColorStop(1, "rgba(16, 185, 129, 0)");

      context.fillStyle = glow1;
      context.fillRect(0, 0, width, height);

      context.fillStyle = glow2;
      context.fillRect(0, 0, width, height);
    };

    const drawParticle = (particle: Particle) => {
      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fillStyle = "rgba(16, 185, 129, 0.82)";
      context.shadowColor = "rgba(16, 185, 129, 0.55)";
      context.shadowBlur = 10;
      context.fill();
      context.shadowBlur = 0;
    };

    const drawLine = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      opacity: number,
      widthValue = 1
    ) => {
      context.beginPath();
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
      context.lineWidth = widthValue;
      context.stroke();
    };

    const animate = () => {
      context.clearRect(0, 0, width, height);
      drawBackgroundGlow();

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= height) particle.vy *= -1;
      }

      for (let i = 0; i < particles.length; i += 1) {
        const particleA = particles[i];

        drawParticle(particleA);

        for (let j = i + 1; j < particles.length; j += 1) {
          const particleB = particles[j];
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.22;
            drawLine(
              particleA.x,
              particleA.y,
              particleB.x,
              particleB.y,
              opacity
            );
          }
        }

        const mouseDx = particleA.x - mouse.x;
        const mouseDy = particleA.y - mouse.y;
        const mouseDistance = Math.sqrt(
          mouseDx * mouseDx + mouseDy * mouseDy
        );

        if (mouseDistance < mouse.radius) {
          const opacity = (1 - mouseDistance / mouse.radius) * 0.5;
          drawLine(
            particleA.x,
            particleA.y,
            mouse.x,
            mouse.y,
            opacity,
            1.2
          );

          context.beginPath();
          context.arc(mouse.x, mouse.y, 2.2, 0, Math.PI * 2);
          context.fillStyle = "rgba(16, 185, 129, 0.95)";
          context.shadowColor = "rgba(16, 185, 129, 0.6)";
          context.shadowBlur = 16;
          context.fill();
          context.shadowBlur = 0;
        }
      }

      animationFrameId = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 bg-black"
      aria-hidden="true"
    />
  );
}