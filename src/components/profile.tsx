import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    avatarUrl: "https://avatars.githubusercontent.com/u/41718343?s=280&v=4",
    profileLink: "https://leetcode.com/u/abiraljain2004/",
    description: "Data Structures & Algorithms"
  },
  {
    name: "GeeksforGeeks",
    avatarUrl: "https://cdn.icon-icons.com/icons2/3912/PNG/512/geeksforgeeks_logo_icon_248241.png",
    profileLink: "https://www.geeksforgeeks.org/user/abiral_274/",
    description: "Programming & Interview Prep"
  },
  {
    name: "Coding Ninjas",
    avatarUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQFGN6Sr_NqlUA/company-logo_200_200/company-logo_200_200/0/1688561179874?e=2147483647&v=beta&t=xvJIesZYoD6_xhHPu9aJ9eEmzRN1Wyn9KfxWq4wXINc",
    profileLink: "https://www.codingninjas.com/codestudio/profile/your-profile",
    description: "Competitive Programming"
  },
  {
    name: "Codeforces",
    avatarUrl: "https://cdn-1.webcatalog.io/catalog/codeforces/codeforces-icon-filled-256.webp?v=1714773964567",
    profileLink: "https://codeforces.com/profile/abiral2004jain",
    description: "Advanced Problem Solving"
  },
];

export function Profile() {
  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Coding Profiles
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            I am a passionate full-stack developer with a strong focus on problem-solving and efficiency in code. 
            My experience spans across various coding platforms where I consistently challenge myself to solve complex problems 
            and improve my skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {profiles.map((profile) => (
            <Card 
              key={profile.name}
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-card border border-border"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-16 h-16 rounded-lg border-2 border-border shadow-md">
                    <AvatarImage
                      src={profile.avatarUrl}
                      alt={`${profile.name} Avatar`}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-secondary text-secondary-foreground text-xl">
                      {profile.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-semibold text-card-foreground mb-1">
                      {profile.name}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      {profile.description}
                    </p>
                    
                    <Link 
                      href={profile.profileLink} 
                      target="_blank"
                      className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-medium text-sm group-hover:underline"
                    >
                      <span>View Profile</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
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

export default Profile;