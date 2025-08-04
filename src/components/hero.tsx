import Image from "next/image";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    <div className="w-full relative flex justify-center items-center">
      <Image
        src="/svg/solar-system.svg"
        width={512}
        height={512}
        alt="Solar System"
        className="animate-slow-spin duration-2000 absolute max-w-3xl w-full top-0 pointer-events-none"
      />

      <div className="w-full grid md:grid-cols-2 gap-6 ">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-extralight tracking-wide">
            Hi, I'm Artwork
          </p>
          <p className="text-5xl font-light">
            Delivering stunning{" "}
            <span className="brightness-125 text-secondary-purple">
              3D visuals
            </span>{" "}
            and experiences using blender.
          </p>
          <p className="font-extralight tracking-wide text-xl">
            I'm a 3D Artist and Blender Specialist with 4+ years experience in
            modeling, animation, and visual storytelling. Check out my projects
            and style.
          </p>

          <Button className="w-1/2">Learn More</Button>
        </div>

        <div className="grid grid-cols-2 grid-rows-[auto_1fr] gap-4 z-1">
          {/* Full-width video on top */}
          <video
            muted
            loop
            autoPlay
            playsInline
            src="/video/renders.mp4"
            className="w-full col-span-2 rounded-lg shadow-lg max-h-64 object-cover pointer-events-none"
          >
            <source src="/video/renders.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Two images below side-by-side */}
          <Image
            src="/images/dresser-render.webp"
            width={512}
            height={512}
            alt="TV Stand Render"
            className="rounded-lg shadow-lg opacity-80 w-full h-auto hover:-skew-x-6 transition-all pointer-events-none"
          />

          <div className="flex flex-col gap-4 ">
            <Image
              src="/images/tv-stand-render-2.webp"
              width={512}
              height={600}
              alt="Living Room Render"
              className="rounded-lg shadow-lg opacity-80 w-full h-auto hover:-skew-x-6 transition-all object-cover pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
