import ContactForm from "./contact-form";
const Contact = () => {
  return (
    <div className="flex justify-center flex-col gap-6">
      <div className="flex justify-center flex-col items-center gap-4">
        <p className="font-extralight tracking-wide text-3xl text-center">
          Have an idea? Let’s bring it to life together.
        </p>

        <p className="font-extralight tracking-wide text-xl text-center">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </div>

      <div className="relative">
        <video
          muted
          loop
          autoPlay
          playsInline
          src="/video/encryption-bg.webm"
          className="absolute top-0 left-0 w-full h-full object-cover z-1 opacity-20 pointer-events-none"
        >
          <source src="/video/skills-bg.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
