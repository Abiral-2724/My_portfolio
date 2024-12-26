import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

const contributions = [
  {
    title: "HactoberFest 2023",
    avatarUrl: "https://i.ytimg.com/vi/fxgY__YLNOQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA-pajiCAAGI16b8uGBS-B7ZbeFNg",
    description: "In Hacktoberfest 2023, I successfully completed four merged pull requests, specifically contributing to ACM JEC's Web Development and Competitive Programming repositories. Through these contributions, I tackled key improvements and optimizations that enhanced both repositories. This experience allowed me to apply my skills directly to projects that benefit the student community, combining my passion for coding with meaningful collaboration. Hacktoberfest 2023 was a rewarding opportunity to deepen my expertise in web development and competitive programming within an active, supportive open-source community.",
    contributionLink: "https://github.com/acmjec/Competitive_Coding_Hacktoberfest2023",
    pullRequests: 4,
    year: "2023"
  },
  {
    title: "HactoberFest 2024",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMA-DHwQpLmBbL05tOmvOQTQSYlyl944o7PQ&s",
    description: "During Hacktoberfest 2024, I successfully completed four merged pull requests, contributing to ACM JEC's Web Development and Competitive Programming repositories. These contributions involved optimizing code, implementing new features, and resolving issues to improve user experience and functionality. This Hacktoberfest was an incredible opportunity to collaborate with fellow developers, further refine my technical skills, and make meaningful contributions that benefit the community. Engaging with open source through these projects continues to fuel my passion for impactful, community-driven development.",
    contributionLink: "https://github.com/acmjec/CompetitiveCoding_Hacktoberfest2024",
    pullRequests: 4,
    year: "2024"
  },
];

export function OpenSourceContributions() {
  return (
    <div className="bg-background pt-4 mt-[-120px] pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="mb-6 space-y-1 flex flex-col items-center text-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground whitespace-nowrap">
            Open Source Contributions
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            Contributing to the developer community
          </p>
        </div>


        <div className="space-y-6">
          {contributions.map((contribution) => (
            <Card 
              key={contribution.title}
              className="group transition-all duration-300 hover:shadow-lg bg-card border border-border"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <Avatar className="w-20 h-20 rounded-xl border-2 border-border shadow-sm">
                      <AvatarImage
                        src={contribution.avatarUrl}
                        alt={`${contribution.title}`}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-secondary text-secondary-foreground text-xl">
                        {contribution.year}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex-grow space-y-4">
                    <div>
                      <h2 className="text-xl font-semibold text-card-foreground mb-2">
                        {contribution.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {contribution.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Github className="w-4 h-4" />
                          <span>{contribution.pullRequests} Pull Requests</span>
                        </div>
                      </div>

                      <Link 
                        href={contribution.contributionLink} 
                        target="_blank"
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        <span>View Contribution</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OpenSourceContributions;