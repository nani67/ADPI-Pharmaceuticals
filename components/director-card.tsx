import React from 'react';

interface DirectorCardProps {
  name: string;
  role: string;
  bio: string;
  delay?: number;
}

export default function DirectorCard({ name, role, bio, delay = 0 }: DirectorCardProps) {
  // Generate initials from name
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase().slice(0, 2);

  return (
    <div 
      className="relative flex flex-col h-full p-6 bg-gray-800/40 rounded-[1.25rem] border border-gray-700/50 hover:border-teal-500/30 transition-colors duration-300"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
        {/* Decorative background effect similar to features/testimonials */}
        <div className="absolute inset-0 -z-10 rounded-[1.25rem] bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 opacity-50" aria-hidden="true" />
        
        <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-teal-500/20 to-teal-500/10 border border-teal-500/30 text-teal-200 font-bold text-lg font-nacelle">
                {initials}
            </div>
            <div>
                <h3 className="font-nacelle text-lg font-semibold text-gray-200">{name}</h3>
                <p className="text-sm text-teal-500 font-medium">{role}</p>
            </div>
        </div>
        
        <div className="relative">
            <p className="text-teal-200/65 text-sm leading-relaxed">
                {bio}
            </p>
        </div>
    </div>
  );
}
