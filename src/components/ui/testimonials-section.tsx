"use client";

import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const testimonials = [
  {
    quote:
      "We finally know exactly which levers drive profit. The workshop replaced guesswork with a clear plan we executed the same week.",
    name: "Lauren Matthews",
    designation: "Owner, Studio Eight",
    src: "https://images.unsplash.com/photo-1502720705749-3c9255857a66?w=800&q=80",
  },
  {
    quote:
      "Tracey translated our messy numbers into a story. Within 30 days we’d identified the offers and metrics that matter.",
    name: "Jason Grant",
    designation: "Director, Coastline Builds",
    src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
  },
  {
    quote:
      "The energy in the room was electric. I left with focus, accountability partners, and confidence to act immediately.",
    name: "Kimberly Rose",
    designation: "Founder, Salt Bloom",
    src: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800&q=80",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#eff2ff] to-white py-24">
      <div className="absolute inset-x-0 top-1/2 h-[120%] rounded-[55%] bg-gradient-to-r from-[#dee2ff]/60 via-transparent to-[#ecd9ff]/60 blur-[160px]" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-600">Client Voices</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mt-3">
            Proof that Path to Profits delivers momentum.
          </h2>
          <p className="mt-4 text-slate-600 text-base">
            Hear from Gold Coast owners who used the five drivers to reshape their revenue and
            reclaim calm.
          </p>
        </div>
        <div className="mt-16 flex justify-center">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay
            colors={{
              name: "#0f172a",
              designation: "#475569",
              testimony: "#0f172a",
              arrowBackground: "#111729",
              arrowForeground: "#f8fafc",
              arrowHoverBackground: "#4f46e5",
            }}
            fontSizes={{ name: "1.85rem", designation: "1rem", quote: "1.1rem" }}
          />
        </div>
      </div>
    </section>
  );
}
