"use client";

import { SocialLinks } from "@/components/ui/social-links";

const socials = [
  {
    name: "Instagram",
    image: "https://link-hover-lndev.vercel.app/instagram.png",
  },
  {
    name: "LinkedIn",
    image: "https://link-hover-lndev.vercel.app/linkedin.png",
  },
  {
    name: "Spotify",
    image: "https://link-hover-lndev.vercel.app/spotify.png",
  },
  {
    name: "TikTok",
    image: "https://link-hover-lndev.vercel.app/tiktok.png",
  },
];

export function FooterSection() {
  return (
    <footer className="w-full bg-white border-t border-slate-200/60 pt-14 pb-6">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-600">Connect</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
          Gold Coast Business Coaching
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Follow Tracey for practical insights, workshop updates, and behind-the-scenes coaching
          moments.
        </p>
        <div className="flex justify-center mt-4">
          <SocialLinks socials={socials} className="gap-6 flex-wrap" />
        </div>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Gold Coast Business Coaching. 
        </p>
      </div>
    </footer>
  );
}
