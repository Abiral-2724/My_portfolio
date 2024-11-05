import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const contributions = [
  {
    title: "HactoberFest 2023",
    avatarUrl: "https://i.ytimg.com/vi/fxgY__YLNOQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA-pajiCAAGI16b8uGBS-B7ZbeFNg",
    description: "In Hacktoberfest 2023, I successfully completed four merged pull requests, specifically contributing to ACM JEC's Web Development and Competitive Programming repositories. Through these contributions, I tackled key improvements and optimizations that enhanced both repositories. This experience allowed me to apply my skills directly to projects that benefit the student community, combining my passion for coding with meaningful collaboration. Hacktoberfest 2023 was a rewarding opportunity to deepen my expertise in web development and competitive programming within an active, supportive open-source community.",
    contributionLink: "https://github.com/acmjec/Competitive_Coding_Hacktoberfest2023",
  },
  {
    title: "HactoberFest 2024",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMA-DHwQpLmBbL05tOmvOQTQSYlyl944o7PQ&s",
    description: "During Hacktoberfest 2024, I successfully completed four merged pull requests, contributing to ACM JEC's Web Development and Competitive Programming repositories. These contributions involved optimizing code, implementing new features, and resolving issues to improve user experience and functionality. This Hacktoberfest was an incredible opportunity to collaborate with fellow developers, further refine my technical skills, and make meaningful contributions that benefit the community. Engaging with open source through these projects continues to fuel my passion for impactful, community-driven development.",
    contributionLink: "https://github.com/acmjec/CompetitiveCoding_Hacktoberfest2024",
  },
];

export function OpenSourceContributions() {
  return (
    <div className="min-h-screen bg-gradient-to-br to-gray-200 py-0 " style={{marginTop:'-200px'}}>
      <h1  className="text-3xl font-bold tracking-tighter sm:text-5xl " style={{marginLeft:'35px' ,marginBottom:'20px'}}>Open Source Contributions</h1>
      <ul className="list-none space-y-8 p-4 max-w mx-auto">
        {contributions.map((contribution) => (
          <li 
            key={contribution.title} 
            className="relative flex items-start p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Avatar className="border-2 border-gray-300 size-10 shadow-md mr-3">
              <AvatarImage
                src={contribution.avatarUrl}
                alt={`${contribution.title} Avatar`}
                className="object-cover rounded-full"
              />
              <AvatarFallback className="bg-green-100 text-green-600">
                {contribution.title.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <h2 className="font-semibold text-lg text-gray-800" style={{ fontFamily: 'serif' }}>
                {contribution.title}
              </h2>
              <p className="text-sm text-gray-600">{contribution.description}</p>
            </div>
            <Link href={contribution.contributionLink} target="_blank" passHref>
              <button className="flex items-center space-x-1 text-green-600 hover:text-green-800 transition-colors duration-200 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded ml-auto px-2 py-1 bg-green-100">
                <span>View Contribution</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  className="w-4 h-4"
                >
                  <path d="M13 5l7 7-7 7M5 12h14" />
                </svg>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OpenSourceContributions;
