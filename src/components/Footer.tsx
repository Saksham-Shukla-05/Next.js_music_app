"use client";

import { BackgroundBeams } from "./ui/background-beams";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="bg-black relative overflow-hidden text-gray-400 p-12">
      <div className="sm:mt-0 -mt-10 relative z-10">
        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div className="p-3 flex flex-col gap-3 justify-start  sm:items-start items-center  ">
            <h2 className="sm:text-xl text-sm">About Us</h2>
            <p className="text-[15px] sm:text-[17px] sm:text-left text-center tracking-wide ">
              Music School is a premier institution dedicated to the art and
              science of music, We nurture talent from the ground up, fostering
              a vibrant community of musicians
            </p>
          </div>
          <div className="p-3 flex flex-col gap-3 justify-start  sm:items-start items-center  ">
            <h2 className="sm:text-xl text-sm">Quick Links</h2>
            <ul className="text-[15px] sm:text-[17px] text-left leading-relaxed">
              <li>Home</li>
              <li>About</li>
              <li>Courses</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="p-3 flex flex-col gap-3 justify-start  sm:items-start items-center  ">
            <h2 className="sm:text-xl text-sm">Follow Us</h2>
            <ul className="text-[15px] sm:text-[17px] text-left leading-relaxed">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className="p-3 flex flex-col gap-3 justify-start  sm:items-start items-center  ">
            <h2 className="sm:text-xl text-sm">Contact Us</h2>
            <div className=" flex flex-col gap-3">
              <p className=" sm:text-left  text-[15px] sm:text-[17px] text-center leading-relaxed">
                New Delhi,India Delhi 10001
              </p>
              <p className=" sm:text-left  text-[15px] sm:text-[17px] text-center leading-relaxed">
                Email : info@musicschool.com
              </p>
              <p className=" sm:text-left  text-[15px] sm:text-[17px] text-center leading-relaxed">
                Phone : (123) 456-7890
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="w-full text-center mt-4 text-xs">
        &copy; {date.getFullYear()} Music School. All rights reserved
      </p>
      <BackgroundBeams />
    </footer>
  );
}
