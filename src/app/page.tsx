import Link from "next/link";
import { LightAndDarkBtn } from "./components/LightAndDarkBtn";
import Search from "./components/Search";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full p-1.5 sm:p-4 pt-10 sm:pt-12 transition-all dark:bg-slate-800">
      {/* Container */}
      <div className="mx-auto flex w-full max-w-[600px] flex-col gap-8 rounded p-2">
        <section className="flex justify-between gap-3">
          <p className="text-xl font-semibold">devFinder</p>
          <LightAndDarkBtn />
        </section>
        <p>
              Welcome to devFinder! This is a simple app that allows you to
              search for developers on GitHub.
            </p>
        <section className="flex flex-col gap-6">
          <Search />
          <main className="flex w-full flex-col gap-5 rounded-lg dark:bg-slate-700 bg-slate-100 px-4 py-8 min-h-[200px]">
            <section className="flex gap-4">
              <Image 
              width={200} 
              height={200} 
              className="h-20 w-20 rounded-full"
              src={'https://avatars.githubusercontent.com/u/22480295'} 
              alt="user-image" />
              <section className="flex flex-col justify-between gap-1 transition-all sm:w-full sm:flex-row">
                <div>
                  <h1 className="text-2xl font-semibold">Stephen S</h1>
                  <p className="text-sm">@StephenS</p>
                  <Link
                    href={"#"}
                    className="text-sm text-blue-500 hover:underline transition-all"
                  >
                    View Profile
                  </Link>
                </div>
                <p>Joined on July 2022</p>
              </section>
            </section>
          </main>
        </section>
      </div>
    </div>
  );
}
