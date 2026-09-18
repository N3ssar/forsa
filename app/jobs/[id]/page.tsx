interface JobDetailsProps {
  params: Promise<{
    id: string;
  }>;
}
import { JOBS } from "../page";
export default async function JobDetails({ params }: JobDetailsProps) {
  const { id } = await params;
  const job = JOBS.find((job) => job.id === Number(id));
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
                {job?.title}
              </h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                {job?.description}
              </p>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Company: {job?.company}
              </p>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Location: {job?.location}
              </p>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Salary: {job?.salary}
              </p>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Date: {job?.date}
              </p>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Type: {job?.type}
              </p>
              <div className="mt-4">
                {job?.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
