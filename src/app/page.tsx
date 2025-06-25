import ChooseUs from "@/components/ChooseUs";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWeb from "@/components/UpcomingWebinars";

export default function Home() {
  return (
    <main className="min-h-screen  bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <HeroSection />
      <FeaturedCourses />
      <ChooseUs />
      <TestimonialCard />
      <UpcomingWeb />
      <Instructors />
      <Footer />
    </main>
  );
}
