"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Discover Your Sound with Us",
    description:
      "Embark on a musical journey that's uniquely yours.Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://www.berklee.edu/sites/default/files/d7/bcm/career_communities/PrivateInstructor.jpg"
          width="100%"
          height="100%"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Expert Instructors Guiding Every Step",
    description:
      "Learn from passionate, experienced musicians who are committed to your progress. Our instructors tailor lessons to your goals, ensuring you receive the guidance and encouragement needed to excel at every level.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://www.careersinmusic.com/wp-content/uploads/2021/07/music-teacher_.jpg"
          width="100%"
          height="100%"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "A Vibrant Community for Creative Growth",
    description:
      "Join a supportive community of fellow music lovers. Participate in workshops, performances, and collaborative projects that inspire creativity and foster lasting connections.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://c8.alamy.com/comp/B78030/a-school-music-class-using-indian-instruments-including-sitars-B78030.jpg"
          width="100%"
          height="100%"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "State-of-the-Art Facilities and Resources",
    description:
      "Practice and perform in modern studios equipped with the latest instruments and technology. Our facilities provide the perfect environment to nurture your talent and achieve your musical ambitions.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://raagaschool.com/wp-content/uploads/2023/01/Raaga-School_Annual-Day_104-scaled.jpg"
          width="100%"
          height="100%"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Flexible Programs for Every Lifestyle",
    description:
      "Choose from a variety of programs designed to fit your schedule and learning style. Whether you're a beginner or an advanced musician, our flexible options ensure you can pursue your passion for music at your own pace.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://i0.wp.com/theindianmusicdiaries.com/wp-content/uploads/2020/01/krimson-avenue-studios-nungambakkam-chennai-recording-studios-rwgwc.jpg?resize=642%2C642"
          width="100%"
          height="100%"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export default function ChooseUs() {
  return (
    <div className="">
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}
