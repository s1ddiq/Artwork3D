import Image from "next/image";
import { Button } from "./ui/button";

const GalleryImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="group relative">
      <Image
        src={src}
        width={256}
        height={256}
        alt={`Gallery Image ${alt}`}
        className="inline-block w-full max-w-xs mb-4 rounded-lg shadow-md break-inside-avoid
      hover:-translate-y-2 cursor-pointer
      duration-300 transition-all
      hover:opacity-80
      
      "
        loading="lazy"
        quality={100}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-1 rounded-lg p-0.5 w-full flex justify-center items-center">
        <div></div>
        <Button className="w-1/2 shadow-lg">Open Preview</Button>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="mt-24 relative flex justify-center items-center flex-col">
      <div className="absolute flex flex-wrap">
        {Array.from({ length: 2 }, (_, i) => (
          <Image
            src="/images/glow.png"
            width={512}
            height={512}
            alt="Glow Effect"
            className="w-full object-cover"
            key={i}
          />
        ))}
      </div>
      <p className="font-extralight tracking-wide text-3xl text-center mb-6">
        Creating visuals with cutting-edge 3D tools.
      </p>

      <div className="md:columns-3 columns-2 gap-4 p-4 pb-24">
        {Array.from({ length: 9 }, (_, i) => (
          <GalleryImage
            key={i}
            src={`/images/renders/${i + 1}.png`}
            alt={`Render ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
