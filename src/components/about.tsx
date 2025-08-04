import Image from "next/image";
const About = () => {
  return (
    <div className="flex justify-center flex-col gap-6">
      <div className="flex justify-center flex-col items-center gap-4">
        <p className="font-extralight tracking-wide text-3xl text-center">
          Creating visuals with cutting-edge 3D tools.
        </p>
        <Image
          src="/images/blender_logo_no_socket_white.png"
          width={256}
          height={256}
          alt="Blender Logo"
          className="pointer-events-none"
        />
      </div>
    </div>
  );
};

export default About;
