import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2 className="text-8xl font-bold mb-5">Forsa</h2>
      <p>Job board interview assistant</p>
      <Link href="/jobs">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
          Browse Jobs
        </button>
      </Link>
    </div>
  );
}
