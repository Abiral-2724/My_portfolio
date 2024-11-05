import React from 'react';
import Link from 'next/link';

const certificates = [
  {
    title: "Hacktoberfest 2023",
    link: "/certificates/Hacktoberfest2024.pdf",
  },
  {
    title: "Fullstack Development Bootcamp",
    link: "/certificates/FullstackBootcamp.pdf",
  },
  {
    title: "Competitive Programming Workshop",
    link: "/certificates/CompetitiveProgramming.pdf",
  },
  // Add more certificates as needed
];

export function Certificates() {
  return (
    <div className=" bg-gradient-to-br to-gray-200">
      <h1  className="text-3xl font-bold tracking-tighter sm:text-5xl " style={{fontFamily:'sans-serif' ,marginLeft:'150px'}}>My Certificates</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {certificates.map((certificate) => (
          <div 
            key={certificate.title} 
            className="bg-white p-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            <h2 className="text-lg font-medium text-gray-800 mb-2">{certificate.title}</h2>
            <Link href={certificate.link} target="_blank" passHref>
              <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
                View Certificate
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
