"use client";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

export default function Instructors() {
  const Instructors = [
    {
      id: 1,
      name: "Aayush Trivedi",
      designation: "Vocal Coach",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Priya Sharma",
      designation: "Piano Instructor",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Rohan Mehra",
      designation: "Guitar Teacher",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Sneha Iyer",
      designation: "Tabla Maestro",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];
  return (
    <div className=" relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4 ">
          Dicover the talented professionals who will guide your musical journey
        </p>

        <div className="flex flex-row justify-center items-center mb-10 w-full">
          <AnimatedTooltip items={Instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}
