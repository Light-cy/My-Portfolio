
import React, { useRef, useEffect } from "react";

/**
 * Simple animated particles background.
 * Very lightweight. Dots float randomly with slight movement.
 */
const NUM = 32;

const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min;

function randomColor() {
  // Soft blues and violets for dark theme
  const palette = [
    "rgba(57, 99, 221, 0.15)",
    "rgba(144, 95, 215, 0.13)",
    "rgba(90, 210, 237, 0.12)",
    "rgba(255,255,255,0.08)"
  ];
  return palette[Math.floor(Math.random() * palette.length)];
}

interface Particle {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  c: string;
}

export default function AnimatedParticlesBg() {
  const ref = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    particles.current = [];
    for (let i = 0; i < NUM; i++) {
      particles.current.push({
        x: getRandom(0, canvas.width),
        y: getRandom(0, canvas.height),
        r: getRandom(6, 28),
        dx: getRandom(-0.25, 0.25),
        dy: getRandom(-0.2, 0.2),
        c: randomColor()
      });
    }

    let anim = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles.current) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.c;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        // Bounce
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      }
      anim = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(anim);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 w-full h-full z-0"
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw",
        height: "100vh"
      }}
      aria-hidden
    />
  );
}
