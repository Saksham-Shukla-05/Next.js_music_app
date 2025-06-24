"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export default function UpcomingWeb() {
  const projects = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enchance your musical skills",
      slug: "understanding-music-theory",
    },
    {
      title: "Mastering Guitar Techniques",
      description:
        "Learn advanced guitar techniques to take your playing to the next level.",
      slug: "mastering-guitar-techniques",
    },
    {
      title: "Vocal Training Essentials",
      description:
        "Improve your vocal range and control with expert-led vocal training sessions.",
      slug: "vocal-training-essentials",
    },
    {
      title: "Digital Music Production",
      description:
        "Explore the world of digital music production using modern tools and software.",
      slug: "digital-music-production",
    },
    {
      title: "Songwriting Workshop",
      description:
        "Unlock your creativity and learn the art of songwriting from industry professionals.",
      slug: "songwriting-workshop",
    },
    {
      title: "Live Performance Tips",
      description:
        "Gain confidence and stage presence with tips for successful live performances.",
      slug: "live-performance-tips",
    },
  ];
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enchance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect items={projects} />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}
