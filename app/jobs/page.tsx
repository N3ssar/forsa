import Link from "next/link";

export const JOBS = [
  {
    id: 1,
    title: "Software Engineer",
    description: "Develop and maintain web applications.",
    company: "TechCorp",
    location: "San Francisco, CA",
    salary: "$100,000 - $120,000",
    date: "2023-01-01",
    type: "Full-time",
    tags: ["JavaScript", "React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    description: "Build and maintain user interfaces for web applications.",
    company: "ABC Company",
    location: "New York, NY",
    salary: "$80,000 - $90,000",
    date: "2023-02-01",
    type: "Part-time",
    tags: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    id: 3,
    title: "Backend Developer",
    description: "Design and implement server-side logic for web applications.",
    company: "XYZ Corp",
    location: "San Francisco, CA",
    salary: "$90,000 - $110,000",
    date: "2023-03-01",
    type: "Full-time",
    tags: ["Python", "Django", "PostgreSQL", "Redis"]
  }
];
export default function Jobs() {
  return (
    <div>
      <h1>Jobs</h1>
      <ul className="list-none p-0 flex items-center *:flex-col">
        {JOBS.map((job) => (
          <Link key={job.id} href={`/jobs/${job.id}`}>
            <li className="border p-4 mb-4 rounded hover:bg-gray-600 cursor-pointer">
              <h2>{job.title}</h2>
              <p>{job.description}</p>
              <p>{job.company}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
