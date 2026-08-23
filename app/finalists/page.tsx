"use client";

import { useState, useMemo } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTrophy, faGraduationCap, faMusic,
  faUsers, faChevronRight, faSchool, faDoorOpen, faBookOpen, faListCheck
} from "@fortawesome/free-solid-svg-icons"
import contestantsData from '@/data/contestants.json'

// Filter out any invalid data entries first at the top level
const data = contestantsData.filter(d => d.name && d.level && d.category && d.school);

export default function FinalistsPage() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Memoize derived data for performance
  const categories = useMemo(() => {
    if (!selectedLevel) return [];
    return Array.from(new Set(
      data
        .filter(d => d.level === selectedLevel)
        .map(d => d.category)
    ));
  }, [selectedLevel]);

  const contestants = useMemo(() => {
    if (!selectedLevel || !selectedCategory) return [];
    return data.filter(d =>
      d.level === selectedLevel &&
      d.category === selectedCategory
    );
  }, [selectedLevel, selectedCategory]);

  const handleLevelSelect = (level: string) => {
    // Toggle off if the same level is clicked again
    if (selectedLevel === level) {
      setSelectedLevel(null);
      setSelectedCategory(null);
    } else {
      setSelectedLevel(level);
      setSelectedCategory(null); // Reset category when level changes
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 fade-in p-4 sm:p-6 md:p-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-ci-gold font-sao flex items-center justify-center gap-3">
          รายชื่อผู้เข้ารอบ
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base">
          ตรวจสอบรายชื่อผู้ผ่านเข้ารอบชิงชนะเลิศ การประกวดดนตรีไทย ภาคตะวันออกเฉียงเหนือ ครั้งที่ ๒๕
        </p>
      </div>

      <div className="flex justify-center mt-8">
        <a 
          href="/band" 
          className="btn btn-secondary flex items-center justify-center gap-3 
                    group hover:scale-105 transition-all duration-300 
                    shadow-lg hover:shadow-ci-gold/20"
        >
          <span className="text-lg">การประกวดวงดนตรีไทย</span>
        </a>
      </div>

      {/* Step 1: Level Selection */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-ci-gold flex items-center gap-2">
          <span className="bg-ci-gold text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
          เลือกระดับชั้น
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {['ประถมศึกษา', 'มัธยมศึกษา'].map(level => (
            <button
              key={level}
              onClick={() => handleLevelSelect(level)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 flex items-center justify-between
                ${selectedLevel === level
                  ? 'bg-ci-gold/20 border-ci-gold scale-105'
                  : 'bg-black/20 border-transparent hover:border-ci-gold/50'}`}
            >
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faGraduationCap} className="text-xl text-ci-gold" />
                <span className="text-lg font-semibold text-white">{level}</span>
              </div>
              <FontAwesomeIcon icon={faChevronRight} className={`transition-transform duration-300 ${selectedLevel === level ? 'rotate-90 text-ci-gold' : 'text-white/30'}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Category Selection */}
      {selectedLevel && (
        <div className="card p-6 backdrop-blur-sm bg-black/20 animate-fade-in">
          <h2 className="text-xl font-bold text-ci-gold mb-4 flex items-center gap-2">
            <span className="bg-ci-gold text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
            เลือกรายการประกวด
          </h2>
          {categories.length > 0 ? (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`p-4 rounded-lg border text-left transition-all duration-300 flex items-center gap-3
                    ${selectedCategory === cat
                      ? 'bg-ci-gold/20 border-ci-gold'
                      : 'bg-black/20 border-white/10 hover:bg-white/5'}`}
                >
                  <FontAwesomeIcon icon={faMusic} className="text-ci-gold/70" />
                  <span className="text-white/90">{cat}</span>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-center text-white/60 py-4">ไม่พบข้อมูลรายการประกวดในระดับชั้นนี้</p>
          )}
        </div>
      )}

      {/* Step 3: Contestants List (Responsive View) */}
      {selectedCategory && (
        <div className="space-y-6 animate-fade-in font-kku">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/10 pb-4 gap-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FontAwesomeIcon icon={faUsers} className="text-ci-gold" />
              ผู้เข้าประกวด: {selectedCategory} ({contestants.length} คน)
            </h3>
            {contestants.length > 0 && contestants[0].piece && (
              <p className="text-white/60 text-sm flex items-center gap-2">
                <FontAwesomeIcon icon={faBookOpen} />
                เพลงที่ใช้ประกวด: {contestants[0].piece}
              </p>
            )}
          </div>

          {contestants.length > 0 ? (
            <div>
              {/* Mobile View: List of Cards (visible on screens smaller than md) */}
              <div className="grid gap-4 md:hidden">
                {contestants.map((contestant, idx) => (
                  <div
                    key={idx}
                    className="card p-4 backdrop-blur-sm bg-black/20 rounded-xl border border-white/5"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-ci-gold text-lg pr-4">{contestant.name}</h4>
                      <span className="text-sm font-sarabun font-mono text-white/60 whitespace-nowrap">
                        ลำดับที่ {idx + 1}
                      </span>
                    </div>
                    <div className="mt-3 space-y-2 text-sm">
                      <p className="flex items-start gap-3 text-white/80">
                        <FontAwesomeIcon icon={faSchool} className="text-ci-gold/70 w-4 mt-1" />
                        <span>{contestant.school}</span>
                      </p>
                      {contestant.room && (
                        <p className="flex items-center gap-3 text-white/80">
                          <FontAwesomeIcon icon={faDoorOpen} className="text-ci-gold/70 w-4" />
                          <span>ห้องประกวด: {contestant.room}</span>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop View: Table (visible on md screens and up) */}
              <div className="hidden md:block backdrop-blur-sm bg-black/20 rounded-xl border border-white/5 overflow-hidden p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="p-4 font-semibold text-ci-gold w-16 text-center">ลำดับ</th>
                        <th className="p-4 font-semibold text-ci-gold">ชื่อ-สกุล</th>
                        <th className="p-4 font-semibold text-ci-gold">สถานศึกษา</th>
                        <th className="p-4 font-semibold text-ci-gold w-32 text-center">ห้องประกวด</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contestants.map((contestant, idx) => (
                        <tr key={idx} className="border-t border-white/10 hover:bg-white/10 transition-colors">
                          <td className="p-4 text-center font-sarabun  text-white/70">{idx + 1}</td>
                          <td className="p-4 font-sarabun font-semibold text-white">{contestant.name}</td>
                          <td className="p-4 font-sarabun text-white/80">{contestant.school}</td>
                          <td className="p-4 font-sarabun text-center text-white/70">{contestant.room || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-10 text-white/60">
              <FontAwesomeIcon icon={faListCheck} className="text-4xl mb-4" />
              <p>ไม่พบข้อมูลผู้เข้าประกวดในรายการนี้</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
