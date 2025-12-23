"use client";

import Link from "next/link";
import { projects } from "@/lib/data";
import { useEffect } from "react";
import { ChevronLeft, Github } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ProjectsPage() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="min-h-screen">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 py-20 sm:py-32">
          <div className="flex items-center justify-between mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to portfolio
            </Link>
            <ThemeToggle />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light">
                Featured Projects
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A curated selection of projects that showcase my expertise in
                full-stack development, design systems, and devops.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="space-y-8 sm:space-y-12">
              {projects.map((project) => (
                <div key={project.slug}>
                  <article className="group p-6 my-6 border-b border-border rounded-lg hover:border-muted-foreground/50 hover:shadow-lg transition-all duration-500 cursor-pointer">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <h2 className="text-lg sm:text-2xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                            {project.name}
                          </h2>
                          <div className="flex flex-row gap-x-2">
                            <Link
                              href={project.link}
                              target="_blank"
                              onClick={(e) => e.stopPropagation()}
                              className="bg-accent/45 backdrop-blur-lg inline-flex items-center gap-2 px-2 py-0.5 text-sm border border-muted-foreground/30 rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
                            > 
                              Live Project
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </Link>
                            <Link
                              href={project.github}
                              target="_blank"
                              className="inline-flex bg-accent/45 backdrop-blur-lg items-center gap-2 px-2 py-0.5 border border-muted-foreground/30 rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
                            >
                              Source Code
                              <Github className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-accent/45 backdrop-blur-lg border border-dashed border-border rounded-lg hover:border-muted-foreground/50 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
