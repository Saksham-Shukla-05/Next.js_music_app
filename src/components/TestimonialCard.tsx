"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = [
  {
    quote:
      "Joining this music academy was the best decision I made for my creative journey. The mentors don’t just teach—they inspire. I now compose with confidence and purpose.",
    name: "Aarav Sharma",
    title: "Student - Music Composition",
  },
  {
    quote:
      "The facilities here are phenomenal. From soundproof studios to top-tier equipment, it felt like I was recording at a professional label. Highly recommended for serious learners!",
    name: "Meera Joshi",
    title: "Graduate - Sound Engineering",
  },
  {
    quote:
      "I had zero music background, but the flexible learning programs allowed me to grow at my own pace. Today, I can play the piano and even teach others. Unbelievable!",
    name: "Rohan Mehta",
    title: "Beginner to Performer Track",
  },
  {
    quote:
      "The instructors are true artists and incredible educators. They care deeply about your progress and make sure every note counts. The support is unmatched.",
    name: "Sneha Verma",
    title: "Advanced Vocals Program",
  },
  {
    quote:
      "What truly sets this academy apart is the community. I've made lifelong friends, collaborated on original pieces, and grown in ways beyond music.",
    name: "Kabir Malhotra",
    title: "Student - Guitar and Composition",
  },
  {
    quote:
      "As a working professional, the weekend classes were a blessing. I could pursue my passion without disrupting my job. Their program fits every lifestyle.",
    name: "Ananya Iyer",
    title: "Weekend Music Production Course",
  },
];

import { cn } from "@/utils/cn";
export default function TestimonialCard() {
  return (
    <div className="relative h-[40rem] items-center justify-center overflow-hidden flex flex-col w-full bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <h2 className="relative text-3xl font-bold text-center  mb-8 z-40">
        Hear our Harmony Voices of Success{" "}
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={Testimonials}
            direction="left"
            speed="fast"
          />
        </div>
      </div>
    </div>
  );
}
