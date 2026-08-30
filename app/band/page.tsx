"use client";

import { useState, useMemo } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faGraduationCap, faChevronRight, faListCheck, faInfoCircle, faSchool, faMapPin } from "@fortawesome/free-solid-svg-icons";
import allContests from '@/data/band.json';

const contestOrder = ['วงเครื่องสายเครื่องเดี่ยว', 'วงเครื่องสายประสมปี่พาทย์'];

export default function BandContestPage() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedContestTitle, setSelectedContestTitle] = useState<string | null>(null);

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(prev => (prev === level ? null : level));
    setSelectedContestTitle(null);
  };

  const availableContests = useMemo(() => {
    if (!selectedLevel) return [];
    return allContests
      .filter(c => c.level === selectedLevel)
      .sort((first, second) => contestOrder.indexOf(first.title) - contestOrder.indexOf(second.title));
  }, [selectedLevel]);

  const selectedContest = useMemo(() => {
    if (!selectedContestTitle) return null;
    // Find the contest from the already-filtered list for the selected level
    return availableContests.find(c => c.title === selectedContestTitle);
  }, [selectedContestTitle, availableContests]);

  const bands = selectedContest?.bands ?? [];

  return (

    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8 font-kku">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-ci-gold font-sao flex items-center justify-center gap-3">
          การประกวดดนตรีไทย
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base">
          ตรวจสอบรายชื่อวงที่ผ่านเข้ารอบชิงชนะเลิศ การประกวดดนตรีไทย ภาคตะวันออกเฉียงเหนือ ครั้งที่ ๒๔
        </p>
      </div>

      {/* Step 1: Level Selection */}
      <div className="space-y-4 slide-up" style={{ animationDelay: '200ms' }}>
        <h2 className="text-xl font-bold text-ci-gold flex items-center gap-2">
          <span className="bg-ci-gold text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
          เลือกระดับชั้น
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {['ประถมศึกษา', 'มัธยมศึกษา'].map(level => (
            <button
              key={level}
              onClick={() => handleLevelSelect(level)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 flex items-center justify-between group
                ${selectedLevel === level
                  ? 'bg-ci-gold/20 border-ci-gold scale-105 shadow-lg shadow-ci-gold/20'
                  : 'bg-black/20 border-transparent hover:border-ci-gold/50'}`}
            >
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faGraduationCap} className="text-xl text-ci-gold group-hover:scale-110 transition-transform" />
                <span className="text-lg font-semibold text-white">{level}</span>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className={`transition-transform duration-300 ${selectedLevel === level ? 'rotate-90 text-ci-gold' : 'text-white/30'}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Contest Selection */}
      {selectedLevel && (
        <div className="card p-6 backdrop-blur-sm bg-black/20 slide-up" style={{ animationDelay: '100ms' }}>
          <h2 className="text-xl font-bold text-ci-gold mb-4 flex items-center gap-2">
            <span className="bg-ci-gold text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
            เลือกประเภทการประกวด
          </h2>
          {availableContests.length > 0 ? (
            <div className="space-y-3">
              {availableContests.map((contest, idx) => (
                <button
                  key={contest.title}
                  onClick={() => setSelectedContestTitle(contest.title)}
                  className={`w-full p-4 rounded-lg border text-left transition-all duration-300 flex items-center gap-3 scale-in
                    ${selectedContestTitle === contest.title
                      ? 'bg-ci-gold/20 border-ci-gold'
                      : 'bg-black/20 border-white/10 hover:bg-white/5'}`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <FontAwesomeIcon icon={faUsers} className="text-ci-gold/70" />
                  <span className="text-white/90">{contest.title}</span>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-center text-white/60 py-4 scale-in">ไม่พบรายการประกวดในระดับชั้นนี้</p>
          )}
        </div>
      )}

      {/* Step 3: Bands List */}
      {selectedContest && (
        <div className="space-y-6 slide-up" style={{ animationDelay: '200ms' }}>
          <div className="border-b text-center border-white/10 pb-4">
            <h3 className="text-2xl font-bold text-ci-gold">{selectedContest.title}</h3>
            <p className="text-white/80 mt-1">
              วงดนตรีไทยที่ผ่านเข้ารอบชิงชนะเลิศ จำนวน {selectedContest.count} วง
            </p>
          </div>

          <div className="bg-ci-gold/10 border-l-4 font-bold border-ci-gold text-ci-gold/90 p-3 rounded-r-lg text-lg flex items-center gap-3">
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>{selectedContest.drawInfo}</span>
          </div>

          {bands.length > 0 ? (
            <div>
              {/* Mobile View: List of Cards (visible on screens smaller than md) */}
              <div className="grid gap-4 md:hidden">
                {bands.map((band, idx) => (
                  <div
                    key={band.name}
                    className="card p-4 backdrop-blur-sm bg-black/20 rounded-xl border border-white/5"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-ci-gold text-lg pr-4">{band.name}</h4>
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-ci-gold/70 text-ci-gold"
                        aria-label="รอจับสลากลำดับการแข่งขัน"
                        title="รอจับสลากลำดับการแข่งขัน"
                      >
                        —
                      </span>
                    </div>
                    <div className="mt-3 space-y-2 text-sm">
                      <p className="flex items-start gap-3 text-white/80">
                        <FontAwesomeIcon icon={faSchool} className="text-ci-gold/70 w-4 mt-1" />
                        <span>{band.school || '-'}</span>
                      </p>
                      <p className="flex items-center gap-3 text-white/80">
                        <FontAwesomeIcon icon={faMapPin} className="text-ci-gold/70 w-4" />
                        <span>{band.province}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop View: Table (visible on md screens and up) */}
              <div className="hidden md:block backdrop-blur-sm bg-black/20 rounded-xl border border-white/5 overflow-hidden p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[600px]">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="p-4 font-semibold text-ci-gold w-28 text-center">ลำดับ</th>
                        <th className="p-4 font-semibold text-ci-gold">ชื่อวง</th>
                        <th className="p-4 font-semibold text-ci-gold">สถานศึกษา</th>
                        <th className="p-4 font-semibold text-ci-gold">จังหวัด</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bands.map((band, idx) => (
                        <tr
                          key={band.name}
                          className="border-t font-sarabun border-white/10 hover:bg-white/10 transition-all duration-300 fade-in"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          <td className="p-4 text-center">
                            <span
                              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-ci-gold/70 text-ci-gold"
                              aria-label="รอจับสลากลำดับการแข่งขัน"
                              title="รอจับสลากลำดับการแข่งขัน"
                            >
                              —
                            </span>
                          </td>
                          <td className="p-4 font-semibold text-white">{band.name}</td>
                          <td className="p-4 text-white/80">{band.school || '-'}</td>
                          <td className="p-4 text-white/70">{band.province}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-10 text-white/60 scale-in">
              <FontAwesomeIcon icon={faListCheck} className="text-4xl mb-4" />
              <p>ไม่พบข้อมูลวงดนตรีในรายการนี้</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
