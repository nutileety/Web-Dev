import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>The website of signing user</h1>
      <div>
        <Link href={'/signup'}>click to signup here</Link>
        <Link href={'/signin'}>click to signin here</Link>
      </div>
    </div>
  );
}
