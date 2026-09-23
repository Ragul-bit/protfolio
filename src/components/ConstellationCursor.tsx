import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  maxAlpha: number;
  isTrail?: boolean;
  life?: number;
  maxLife?: number;
}

export const ConstellationCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check for touch / mobile device
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates (client coords)
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 140,
      isMoving: false,
      hovering: false,
    };

    let lastMoveTime = Date.now();

    // Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Ambient floating constellation nodes
    const ambientCount = Math.min(Math.floor((width * height) / 24000), 45);
    const ambientParticles: Particle[] = [];

    for (let i = 0; i < ambientCount; i++) {
      ambientParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.6 + 1.2,
        baseRadius: Math.random() * 1.6 + 1.2,
        alpha: Math.random() * 0.4 + 0.25,
        maxAlpha: Math.random() * 0.4 + 0.25,
      });
    }

    // Dynamic trail particles created on mouse movement
    const trailParticles: Particle[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isMoving = true;
      lastMoveTime = Date.now();
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = Boolean(
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('.interactive-hover') ||
          target.closest('[role="button"]')
        );
        mouse.hovering = interactive;
        setIsHovering(interactive);
      }

      // Add a constellation trail star if moved sufficiently
      if (Math.random() > 0.35 && trailParticles.length < 28) {
        trailParticles.push({
          x: e.clientX + (Math.random() - 0.5) * 16,
          y: e.clientY + (Math.random() - 0.5) * 16,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 2 + 1.5,
          baseRadius: Math.random() * 2 + 1.5,
          alpha: 0.8,
          maxAlpha: 0.8,
          isTrail: true,
          life: 0,
          maxLife: Math.floor(Math.random() * 30 + 35),
        });
      }
    };

    // Burst stars on click
    const handleMouseDown = (e: MouseEvent) => {
      for (let i = 0; i < 9; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2.2 + 1.0;
        trailParticles.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: Math.random() * 2.2 + 1.2,
          baseRadius: Math.random() * 2.2 + 1.2,
          alpha: 1.0,
          maxAlpha: 1.0,
          isTrail: true,
          life: 0,
          maxLife: 45,
        });
      }
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Animation Render Loop
    let pulsePhase = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse position interpolation (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.28;
      mouse.y += (mouse.targetY - mouse.y) * 0.28;

      if (Date.now() - lastMoveTime > 150) {
        mouse.isMoving = false;
      }

      pulsePhase += 0.04;
      const pulseScale = 1 + Math.sin(pulsePhase) * 0.15;
      const connectionDist = mouse.hovering ? 165 : 130;
      const connectionDistSq = connectionDist * connectionDist;

      // Draw subtle ambient glow behind mouse
      if (mouse.x > -100 && mouse.y > -100) {
        const glowRadius = mouse.hovering ? 130 : 95;
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          glowRadius
        );
        gradient.addColorStop(0, mouse.hovering ? 'rgba(0, 113, 227, 0.14)' : 'rgba(0, 113, 227, 0.08)');
        gradient.addColorStop(0.5, 'rgba(56, 189, 248, 0.04)');
        gradient.addColorStop(1, 'rgba(0, 113, 227, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and collect all active particles
      const allParticles: Particle[] = [];

      // 1. Ambient Particles
      for (let i = 0; i < ambientParticles.length; i++) {
        const p = ambientParticles[i];

        // Gravitational reaction to mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < connectionDistSq && distSq > 400) {
          const force = (1 - Math.sqrt(distSq) / connectionDist) * 0.015;
          p.vx += dx * force;
          p.vy += dy * force;
        }

        // Apply friction
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Position update
        p.x += p.vx;
        p.y += p.vy;

        // Screen wrap
        if (p.x < -20) p.x = width + 20;
        else if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        else if (p.y > height + 20) p.y = -20;

        allParticles.push(p);
      }

      // 2. Trail Particles (Life decay)
      for (let i = trailParticles.length - 1; i >= 0; i--) {
        const p = trailParticles[i];
        p.life = (p.life || 0) + 1;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.95;
        p.vy *= 0.95;

        const lifeRatio = 1 - (p.life / (p.maxLife || 40));
        p.alpha = p.maxAlpha * lifeRatio;

        if (p.life >= (p.maxLife || 40) || p.alpha <= 0.01) {
          trailParticles.splice(i, 1);
        } else {
          allParticles.push(p);
        }
      }

      // 3. Draw Constellation Connection Lines Between Particles
      const total = allParticles.length;
      ctx.lineWidth = 0.85;

      for (let i = 0; i < total; i++) {
        const p1 = allParticles[i];

        // Connect particle to mouse
        if (mouse.x > -100 && mouse.y > -100) {
          const mdx = mouse.x - p1.x;
          const mdy = mouse.y - p1.y;
          const mDistSq = mdx * mdx + mdy * mdy;

          if (mDistSq < connectionDistSq) {
            const mDist = Math.sqrt(mDistSq);
            const lineAlpha = (1 - mDist / connectionDist) * (mouse.hovering ? 0.65 : 0.42);

            ctx.strokeStyle = `rgba(239, 68, 68, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // Connect particle to neighboring particles
        for (let j = i + 1; j < total; j++) {
          const p2 = allParticles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          const nodeDist = 85;

          if (distSq < nodeDist * nodeDist) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / nodeDist) * 0.25 * Math.min(p1.alpha, p2.alpha);

            ctx.strokeStyle = `rgba(220, 38, 38, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw the Particle Star Node
        ctx.fillStyle = `rgba(239, 68, 68, ${p1.alpha})`;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        // Star shimmer highlight
        if (p1.radius > 1.8) {
          ctx.fillStyle = `rgba(255, 255, 255, ${p1.alpha * 0.75})`;
          ctx.beginPath();
          ctx.arc(p1.x, p1.y, p1.radius * 0.45, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 4. Draw Central Cursor Constellation Nexus
      if (mouse.x > -100 && mouse.y > -100) {
        // Outer pulsing orbital ring
        const ringRadius = mouse.hovering ? 20 * pulseScale : 12;
        ctx.strokeStyle = mouse.hovering
          ? 'rgba(239, 68, 68, 0.8)'
          : 'rgba(239, 68, 68, 0.45)';
        ctx.lineWidth = mouse.hovering ? 1.5 : 1.0;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, ringRadius, 0, Math.PI * 2);
        ctx.stroke();

        // 4 Cardinal Constellation Crosshairs
        const crossLength = mouse.hovering ? 6 : 4;
        const offset = ringRadius + 2;
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.65)';
        ctx.lineWidth = 1;

        // Top, Bottom, Left, Right cross notches
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y - offset);
        ctx.lineTo(mouse.x, mouse.y - offset - crossLength);
        ctx.moveTo(mouse.x, mouse.y + offset);
        ctx.lineTo(mouse.x, mouse.y + offset + crossLength);
        ctx.moveTo(mouse.x - offset, mouse.y);
        ctx.lineTo(mouse.x - offset - crossLength, mouse.y);
        ctx.moveTo(mouse.x + offset, mouse.y);
        ctx.lineTo(mouse.x + offset + crossLength, mouse.y);
        ctx.stroke();

        // Inner Nexus Star
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.hovering ? 3.5 : 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Bright white center specular
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-40 h-full w-full select-none"
      aria-hidden="true"
    />
  );
};
