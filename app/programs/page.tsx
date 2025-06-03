import Link from "next/link";
import Image from "next/image";
import { coursePrograms } from "@/app/data/coursePrograms";

const CourseProgramsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Course Programs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coursePrograms.map((program) => (
          <Link key={program.slug} href={`/programs/${program.slug}`}>
            <div className="border rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
              <Image
                src={program.image}
                alt={program.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{program.title}</h2>
                <div className="text-sm text-gray-600 line-through">
                  ₹{program.pricing.original.toLocaleString()}
                </div>
                <div className="text-lg font-bold text-green-600">
                  ₹{program.pricing.discounted.toLocaleString()}{" "}
                  <span className="text-sm text-red-500">
                    ({program.pricing.discountText})
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseProgramsPage;
