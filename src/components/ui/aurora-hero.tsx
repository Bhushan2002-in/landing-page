"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FeyButton } from "@/components/ui/fey-button";

const titleLine1 = "Do you want to feel like you";
const titleLine2 = "know what you're doing in business";
const titleLine3 = "AND increase your profits?";
const subtitle = "Come learn the 5 key drivers that increase your PROFITS and which are the ones YOU need to be working on!";

export function AuroraHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const gradients = [
      { hue: 225, radius: 180, speed: 0.4 },
      { hue: 270, radius: 220, speed: 0.3 },
      { hue: 200, radius: 200, speed: 0.5 },
    ];
    const draw = (t: number) => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      gradients.forEach((g, i) => {
        const x = canvas.width / 2 + Math.sin(t * g.speed + i) * canvas.width * 0.2;
        const y = canvas.height / 2 + Math.cos(t * g.speed + i) * 120;
        const radial = ctx.createRadialGradient(x, y, g.radius * 0.2, x, y, g.radius);
        radial.addColorStop(0, `hsla(${g.hue}, 80%, 65%, 0.5)`);
        radial.addColorStop(1, "transparent");
        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fill();
      });
      animationFrame = requestAnimationFrame(draw);
    };
    animationFrame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const words = [titleLine1, titleLine2, titleLine3];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white text-slate-900">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#eaf0ff]/70 to-[#ffe8fb]/70" />

      <div className="relative z-10 container mx-auto px-6 py-24 flex min-h-screen items-center justify-center">
        <div className="max-w-5xl text-center space-y-8">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm uppercase tracking-[0.4em] text-indigo-500/80"
          >
            Path to Profits Workshop
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-[4.5rem] font-semibold leading-tight text-balance"
          >
            {words.map((line, idx) => (
              <span
                key={line}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-sky-500 to-rose-500"
              >
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>

          <motion.div
            ref={undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <FeyButton aria-label="Register now" onClick={() => {
              const target = document.getElementById("workshop-details");
              target?.scrollIntoView({ behavior: "smooth" });
            }}>
              Register Now
            </FeyButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
