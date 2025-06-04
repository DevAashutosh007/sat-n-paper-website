import Link from "next/link";
import Image from "next/image";
import { coursePrograms } from "@/data/coursePrograms";
import { CheckCircle, Star } from "lucide-react";

const CourseProgramsPage = () => {
  return (
    <div className="p-6">
      {/* Use your theme primary color for the main heading */}
      <h1 className="text-3xl font-bold mb-6 text-primary">All Course Programs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursePrograms.map((program) => (
          <div
            key={program.slug}
            className="border rounded-2xl p-4 shadow-md hover:shadow-lg transition bg-white"
          >
            <div className="relative w-full h-40 mb-4">
              <Image
                src={program.image}
                alt={program.title}
                layout="fill"
                className="rounded-lg object-cover"
              />
            </div>

            {/* Title with theme header color */}
            <h2 className="text-lg font-bold mb-1 text-primary">{program.title}</h2>

            <div className="text-sm text-muted mb-2">
              Enrolled {program.enrolled}{" "}
              <span className="inline-flex items-center text-green-600 ml-2">
                <Star className="w-4 h-4 fill-green-500 mr-1" />
                {program.rating}
              </span>
            </div>

            <ul className="text-sm space-y-1 mb-2">
              {program.highlights.map((point, i) => (
                <li key={i} className="flex items-start text-gray-800">
                  <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 mr-2" />
                  {point}
                </li>
              ))}
            </ul>

            {program.bestFor && (
              <div className="text-sm text-gray-700 mb-3 flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                <span className="italic">Best for: {program.bestFor}</span>
              </div>
            )}

            <div className="text-xl font-semibold text-black mb-1">
              ₹ {program.price.toLocaleString()}
            </div>
            <div className="text-sm text-muted mb-3">{program.priceNote}</div>

            <Link
              href={`/programs/${program.slug}`}
              className="block text-center border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition font-medium py-2 rounded-md"
            >
              View Program
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseProgramsPage;


