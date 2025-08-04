"use client";

import { SignedIn, SignedOut, useClerk, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const SocialLink = ({ href, icon }: { href: string; icon: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 mt-2 text-sm text-white hover:text-white"
    >
      <Image
        src={`/svg/${icon}`}
        width={20}
        height={20}
        alt={icon}
        className="text-white"
      />
    </Link>
  );
};

const Footer = () => {
  const router = useRouter();
  const { signOut, user } = useClerk();
  const isAdmin = user?.publicMetadata?.role === "admin";

  return (
    <footer className="w-full text-white py-10 border-t border-zinc-700 mt-24 relative">
      <video
        muted
        loop
        autoPlay
        playsInline
        src="/video/skills-bg.webm"
        className="absolute top-0 left-0 w-full h-full object-cover z-1 opacity-20 pointer-events-none"
      >
        <source src="/video/skills-bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-xl font-bold mb-2">Artwork3D</h2>
          <p className="text-sm text-zinc-400">
            Building 3D visuals and experiences using cutting-edge modern
            technology.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-sm text-zinc-400">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Gallery</li>
            <li className="hover:text-white cursor-pointer">Skills</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm text-zinc-400">jn.artwerk3d@gmail.com</p>
          <p className="text-sm text-zinc-400">Connecticut</p>
          <div className="flex justify-between">
            <SocialLink
              href="mailto:samjurookie@gmail.com"
              icon="discord.svg"
            />
            <SocialLink
              href="https://www.roblox.com/users/2332327299/profile"
              icon="roblox.svg"
            />
            <SocialLink
              href="https://www.behance.net/jn-Artwerk3d"
              icon="behance.svg"
            />
            <SocialLink
              href="https://www.instagram.com/artwerk.3d/"
              icon="instagram.svg"
            />
          </div>
        </div>

        {/* Auth & Admin Buttons */}
        <div className="flex flex-col gap-3">
          <UserButton />

          <SignedOut>
            <Button
              className="w-full"
              variant="secondary"
              onClick={() => router.push("/sign-in")}
            >
              Sign In
            </Button>
          </SignedOut>

          <SignedIn>
            <Button className="w-full" onClick={() => signOut()}>
              Sign Out
            </Button>

            {isAdmin && (
              <>
                <Button
                  className="w-full"
                  onClick={() => router.push("/dashboard")}
                >
                  Admin Dashboard
                </Button>
                <p className="text-xs text-zinc-500 text-center">
                  You are an admin of this site.
                </p>
              </>
            )}
          </SignedIn>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="mt-10 text-center text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} Artwork3D. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
