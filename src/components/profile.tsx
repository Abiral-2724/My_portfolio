import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const profiles = [
  {
    name: "LeetCode",
    avatarUrl: "https://avatars.githubusercontent.com/u/41718343?s=280&v=4",
    profileLink: "https://leetcode.com/u/abiraljain2004/",
  },
  {
    name: "GeeksforGeeks",
    avatarUrl: "https://cdn.icon-icons.com/icons2/3912/PNG/512/geeksforgeeks_logo_icon_248241.png",
    profileLink: "https://www.geeksforgeeks.org/user/abiral_274/",
  },
  {
    name: "Coding Ninjas",
    avatarUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQFGN6Sr_NqlUA/company-logo_200_200/company-logo_200_200/0/1688561179874?e=2147483647&v=beta&t=xvJIesZYoD6_xhHPu9aJ9eEmzRN1Wyn9KfxWq4wXINc",
    profileLink: "https://www.codingninjas.com/codestudio/profile/your-profile",
  },
  {
    name: "Codeforces",
    avatarUrl: "https://cdn-1.webcatalog.io/catalog/codeforces/codeforces-icon-filled-256.webp?v=1714773964567",
    profileLink: "https://codeforces.com/profile/abiral2004jain",
  },
];

export function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br to-gray-200 py-1">
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-700 text-center max-w-xl mx-auto mt-6 text-sm sm:text-base lg:text-lg">
          I am a passionate full-stack developer with a strong focus on problem-solving and efficiency in code. 
          My experience spans across various coding platforms like LeetCode, GeeksforGeeks, Coding Ninjas, and Codeforces, 
          where I consistently challenge myself to solve complex problems and improve my skills. My dedication to continuous learning 
          is reflected by number of questions solved across the platforms. Here are my coding profiles.
        </p>
        
        <ul className="list-none space-y-4 mt-8 max-w-4xl mx-auto">
          {profiles.map((profile) => (
            <li 
              key={profile.name} 
              className="relative flex flex-col sm:flex-row items-center p-3 sm:p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 gap-3 sm:gap-0"
            >
              <div className="flex items-center w-full sm:w-auto">
                <Avatar className="border-2 border-gray-300 w-12 h-12 sm:w-10 sm:h-10 shadow-md mr-3">
                  <AvatarImage
                    src={profile.avatarUrl}
                    alt={`${profile.name} Avatar`}
                    className="object-cover rounded-full"
                  />
                  <AvatarFallback className="bg-blue-100 text-blue-600">
                    {profile.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <h2 className="font-semibold text-base sm:text-lg text-gray-800 text-center sm:text-left" style={{ fontFamily: 'serif' }}>
                    {profile.name}
                  </h2>
                </div>
              </div>
              
              <Link 
                href={profile.profileLink} 
                target="_blank" 
                className="w-full sm:w-auto"
                passHref
              >
                <button className="flex items-center justify-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-4 py-2 bg-blue-100 w-full sm:w-auto">
                  <span>View Profile</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
    </div>
  );
}

export default Profile;
