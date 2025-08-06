import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const startups = [
  {
    name: "Athlete Connect",
    stage: "Business Idea",
    summary: "An app connecting student-athletes to D1 mentors.",
    details: "We provide direct messaging, training schedules, and mentorship pairing.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    name: "Gridiron Edge",
    stage: "Revenue Made",
    summary: "Online training programs with personalized video breakdowns.",
    details: "Currently serving over 150 athletes monthly with subscription packages.",
    videoUrl: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    name: "NextGen Recruit",
    stage: "Investor Backed",
    summary: "A platform linking recruiters to verified athlete portfolios.",
    details: "Backed by two angel investors, launching in 25 high schools this fall.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
];

export default function GridironCoaching() {
  const [query, setQuery] = useState("");
  const [hovered, setHovered] = useState(null);

  const filteredStartups = startups.filter((startup) =>
    startup.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero section with city skyline */}
      <div
        className="h-96 bg-cover bg-center flex items-center justify-center text-white text-5xl font-bold shadow-lg"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506719040632-7d586470b7a6?auto=format&fit=crop&w=1500&q=80')" }}
      >
        Welcome to Your Future
      </div>

      {/* Search bar */}
      <div className="p-6 text-center">
        <Input
          type="text"
          placeholder="Search startups..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md mx-auto"
        />
      </div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
        {['Business Idea', 'Revenue Made', 'Investor Backed'].map((stage) => (
          <div key={stage}>
            <h2 className="text-2xl font-bold mb-4 text-center">{stage}</h2>
            <div className="space-y-4">
              {filteredStartups.filter(s => s.stage === stage).map((startup, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-300 p-4 bg-white shadow-md rounded-xl border hover:shadow-xl cursor-pointer ${hovered === idx ? 'scale-105 bg-gray-50' : ''}`}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <h3 className="text-xl font-semibold">{startup.name}</h3>
                  <p className="text-gray-700 text-sm">{startup.summary}</p>
                  {hovered === idx && (
                    <>
                      <p className="text-gray-600 mt-2 text-sm">{startup.details}</p>
                      <video src={startup.videoUrl} controls className="w-full mt-2 rounded" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer growth and trust elements */}
      <div className="bg-white py-12 mt-8 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Grow with Gridiron Coaching</h3>
          <p className="text-gray-600 mb-6">
            Earn badges, track your D1-readiness, and connect with verified coaches who’ve been where you want to go.
          </p>
          <Button className="text-lg">Join Our Newsletter</Button>
        </div>
      </div>
    </div>
  );
}
