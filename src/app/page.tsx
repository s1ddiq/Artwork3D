import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="bg-primary-purple min-h-screen overflow-x-hidden text-white flex flex-col gap-y-24">
      <div className="p-6 md:px-12 lg:px-40 xl:px-64 2xl:px-96 bg-primary-purple min-h-screen overflow-x-hidden text-white flex flex-col gap-y-24">
        <Navbar />
        <Hero />
        <Gallery />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
