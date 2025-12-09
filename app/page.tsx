import HeaderIntro from "@/components/home/HeaderIntro";
import HomeClient from "@/components/home/HomeClient";
import JobItem from "@/components/home/JobItem";
import ProjectsList from "@/components/home/ProjectsList";
import { jobs, projects } from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative ">
      <HomeClient />

      <main className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16">
        <header id="intro" className="min-h-screen flex items-center">
          <HeaderIntro />
        </header>


        <section id="work" className="min-h-screen py-20 sm:py-32">
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-medium">
                My Work
              </h2>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {jobs.map((job,index) => (
                <div className="space-y-8 sm:space-y-12" key={index}>
                  <JobItem job={job} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen py-20 sm:py-32">
            <ProjectsList projects={projects} />
        </section>
      </main>
    </div>
  );
}
