import React, { useEffect, useRef } from 'react';

interface PetalParticlesProps {
  enabled?: boolean;
}

export const PetalParticles: React.FC<PetalParticlesProps> = ({ enabled = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create romantic rose petals and warm specks
    const petalCount = Math.min(28, Math.floor(width / 50));
    const petals = Array.from({ length: petalCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 8 + 6,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1.2 + 0.6,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 1.5 - 0.75,
      opacity: Math.random() * 0.4 + 0.2,
      isPetal: Math.random() > 0.35, // 65% rose petals, 35% warm golden sparkle motes
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.4;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        if (p.isPetal) {
          // Romantic dusty rose / soft burgundy petal
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.6, Math.PI / 4, 0, 2 * Math.PI);
          ctx.fillStyle = `rgba(217, 166, 160, ${p.opacity})`;
          ctx.fill();
        } else {
          // Warm golden light mote
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.3, 0, 2 * Math.PI);
          ctx.fillStyle = `rgba(200, 169, 126, ${p.opacity * 0.8})`;
          ctx.shadowBlur = 6;
          ctx.shadowColor = 'rgba(200, 169, 126, 0.5)';
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ opacity: 0.85 }}
    />
  );
};
