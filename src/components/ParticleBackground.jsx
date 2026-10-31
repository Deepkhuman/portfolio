import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smooth interpolation
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Generate 3D Particles
    const PARTICLE_COUNT = Math.min(80, Math.floor(window.innerWidth / 18));
    const particles = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800 + 200, // Depth
        baseZ: Math.random() * 800 + 200,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        color: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#818cf8' : '#c084fc',
      });
    }

    const render = () => {
      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const offsetX = (mouse.x - width / 2) * 0.2;
      const offsetY = (mouse.y - height / 2) * 0.2;

      ctx.clearRect(0, 0, width, height);

      // Project each particle to 2D screen space
      const focalLength = 400;
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x > width) p.x = -width;
        if (p.x < -width) p.x = width;
        if (p.y > height) p.y = -height;
        if (p.y < -height) p.y = height;

        // 3D Perspective Projection
        const scale = focalLength / (p.z + focalLength);
        const screenX = width / 2 + (p.x + offsetX) * scale;
        const screenY = height / 2 + (p.y + offsetY) * scale;
        const alpha = Math.min(1, Math.max(0.1, 1 - p.z / 1200));

        projected.push({
          x: screenX,
          y: screenY,
          size: Math.max(0.8, p.size * scale * 2.5),
          alpha: alpha * 0.6,
          color: p.color,
        });

        // Draw particle
        ctx.beginPath();
        ctx.arc(screenX, screenY, Math.max(0.8, p.size * scale * 2.5), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha * 0.6;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
      }

      // Draw subtle connecting lines between close particles
      ctx.shadowBlur = 0;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.12;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.strokeStyle = '#818cf8';
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background dark grid */}
      <div className="absolute inset-0 cyber-grid opacity-40"></div>
      
      {/* Subtle radial vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#030712]/60 to-[#030712] pointer-events-none"></div>

      {/* 3D Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
};

export default ParticleBackground;
