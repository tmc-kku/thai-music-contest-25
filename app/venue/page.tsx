"use client";

import Image from 'next/image';

export default function VenuePage() {
  const floorPlan = {
    title: "แผนผังห้องประกวด",
    description: "โรงละครคณะศิลปกรรมศาสตร์, PAS 1, PAS 2 และ FAG 1",
    imageSrc: "/venue/room-plan@3x.png"
  };

  return (
    <div className="w-full min-h-[calc(100vh-160px)] bg-ci-purple px-4 py-8 font-kku text-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ci-gold font-sao leading-tight">
            {floorPlan.title}
          </h1>
          <p className="mt-3 text-base md:text-xl text-white/85">
            {floorPlan.description}
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/20 backdrop-blur-sm">
          <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-[#f3f3f1]">
            <Image
              src={floorPlan.imageSrc}
              alt="ผังห้องประกวด"
              width={1400}
              height={1100}
              priority
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
