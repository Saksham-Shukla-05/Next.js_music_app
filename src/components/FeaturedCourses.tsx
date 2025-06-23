import Link from "next/link";
import coursesData from "../data/music_courses.json";
import BackgroundGradient from "./ui/background-gradient";

interface Course {
  id: number;

  title: string;

  slug: string;

  description: string;

  price: number;

  instructor: string;

  isFeatured: boolean;
}

export default function FeaturedCourses() {
  const FtCourses = coursesData.courses.filter(
    (courses: Course) => courses.isFeatured
  );
  return (
    <div className="py-12  bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Lean With the best
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {FtCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <div className="  bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  <p className="text-gray-600 mb-2">
                    Instructor: {course.instructor}
                  </p>
                  <p className="text-teal-600 font-bold mb-4">
                    ${course.price}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-teal-500 hover:underline"
                  >
                    View Course
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}>View All Courses</Link>
      </div>
    </div>
  );
}
