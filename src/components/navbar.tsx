"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="rounded-lg w-full p-4 backdrop-blur-md bg-radial from-primary via-transparent-100% to-primary sticky top-0">
      {/* Background video */}
      {isClient && (
        <video
          muted
          loop
          autoPlay
          playsInline
          className="absolute top-0 left-0 w-full h-full pointer-events-none object-cover opacity-80"
        >
          <source src="/video/blackhole.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Foreground content */}
      <div className="relative z-10 text-white font-semibold flex justify-between items-center">
        <div className="space-x-2 flex justify-center items-end">
          <Image
            src="/svg/logo.svg"
            width={32}
            height={32}
            alt="Logo"
            className="inline"
          />
          <div className="flex items-end">
            <h2 className="inline text-sm font-extralight tracking-tighter">
              Artwork3D
            </h2>
          </div>
        </div>
        <div className="text-lg font-extralight tracking-wide flex gap-8">
          <Link href="/" className="cursor-pointer">
            About Me
          </Link>
          <Link href="/" className="cursor-pointer">
            3D Gallery
          </Link>
          <Link href="/" className="cursor-pointer">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
