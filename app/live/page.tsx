"use client";

import { useMemo } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function LivePage() {
  const lives = [
    { day: '6 กันยายน 2568', title: 'ห้องที่ 1 (โรงละคร)', url: 'https://www.facebook.com/profile.php?id=100057643420110' },
    { day: '6 กันยายน 2568', title: 'ห้องที่ 2 (PAS 1)', url: 'https://www.facebook.com/profile.php?id=100064752726252' },
    { day: '6 กันยายน 2568', title: 'ห้องที่ 3 (PAS 2)', url: 'https://www.facebook.com/FAKKUofficial' },
    { day: '6 กันยายน 2568', title: 'ห้องที่ 4 (FAG 1)', url: 'https://www.facebook.com/profile.php?id=100083038366633' },
    { day: '7 กันยายน 2568', title: 'ห้องประกวดหลัก (โรงละคร)', url: 'https://www.facebook.com/profile.php?id=100057643420110' },
  ];

  // Group live streams by day
  const groupedLives = useMemo(() => {
    return lives.reduce((acc, live) => {
      (acc[live.day] = acc[live.day] || []).push(live);
      return acc;
    }, {} as Record<string, typeof lives>);
  }, [lives]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 font-kku fade-in">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-ci-gold font-sao mb-3 flex items-center justify-center gap-4">
          การถ่ายทอดสด
        </h1>
        <p className="text-lg text-white/80">
          ติดตามชมการถ่ายทอดสดการประกวดผ่านทาง Facebook Live
        </p>
      </div>

      {/* Live Stream Cards */}
      <div className="space-y-10">
        {Object.entries(groupedLives).map(([day, streams], index) => (
          <div key={index} className="space-y-6">
            <h3 className="text-2xl font-sao font-bold text-ci-gold border-b-2 border-ci-gold/20 pb-3">
              {day}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {streams.map((stream, streamIndex) => (
                <a
                  key={streamIndex}
                  href={stream.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-5 backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl flex items-center gap-5 group hover:bg-ci-gold/10 hover:border-ci-gold/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-ci-purple-dark border-2 border-white/10 flex items-center justify-center text-ci-gold group-hover:border-ci-gold transition-all duration-300">
                    <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-lg text-white group-hover:text-ci-gold transition-colors duration-300">
                      {stream.title}
                    </h4>
                    <p className="text-sm text-white/60 flex items-center gap-2">
                      รับชมการถ่ายทอดสด
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}