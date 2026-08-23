'use client';

import { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faMedal, faAward, faCertificate, faStar, faChevronRight, faClock, faGraduationCap, faMusic, faUsers, faSchool, faDoorOpen, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import bandResultsData from '../../data/results.json';
import soloResultsData from '../../data/solo-results.json';
import resultStatusData from '../../data/result-status.json';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// --- Interfaces and Styles (ปรับปรุงสี) ---
interface Result {
  prize: string;
  trophy?: string;
  name: string;
  school?: string;
  province?: string;
  medal?: string;
}

interface OutstandingAward {
  instrument: string;
  name: string;
  school: string;
}

interface CompetitionResult {
  level: string;
  title: string;
  announcementDate: string;
  results: Result[];
  trophyContext?: string;
  outstandingAwards?: OutstandingAward[];
}

type ResultType = 'band' | 'solo';

interface PublicationStatus {
  isPublished: boolean;
  expectedAnnouncement: string;
  message: string;
}

interface ResultStatus {
  band: PublicationStatus;
  solo: PublicationStatus;
  certificate: {
    isAvailable: boolean;
    url: string;
  };
}

const resultStatus = resultStatusData as ResultStatus;

const prizeStyles: { [key: string]: { icon: IconDefinition; color: string; border: string; bg: string } } = {
  'รางวัลชนะเลิศ': { icon: faTrophy, color: 'text-yellow-400', border: 'border-yellow-400/50', bg: 'bg-yellow-400/10' },
  'รางวัลรองชนะเลิศอันดับ ๑': { icon: faMedal, color: 'text-slate-300', border: 'border-slate-300/50', bg: 'bg-slate-300/10' },
  'รางวัลรองชนะเลิศอันดับ ๒': { icon: faMedal, color: 'text-orange-400', border: 'border-orange-400/50', bg: 'bg-orange-400/10' },
  'รางวัลชมเชย': { icon: faAward, color: 'text-blue-400', border: 'border-blue-400/50', bg: 'bg-blue-400/10' },
  'รางวัลเหรียญทอง': { icon: faStar, color: 'text-yellow-500', border: 'border-yellow-500/30', bg: 'bg-yellow-500/10' },
  'รางวัลเกียรติบัตรเหรียญทอง': { icon: faStar, color: 'text-yellow-500', border: 'border-yellow-500/30', bg: 'bg-yellow-500/10' },
  'รางวัลเหรียญเงิน': { icon: faStar, color: 'text-slate-400', border: 'border-slate-400/30', bg: 'bg-slate-400/10' },
  'รางวัลเกียรติบัตรเหรียญเงิน': { icon: faStar, color: 'text-slate-400', border: 'border-slate-400/30', bg: 'bg-slate-400/10' },
  'รางวัลเหรียญทองแดง': { icon: faStar, color: 'text-amber-600', border: 'border-amber-600/30', bg: 'bg-amber-600/10' },
  'รางวัลเข้าร่วม': { icon: faCertificate, color: 'text-gray-500', border: 'border-gray-500/30', bg: 'bg-gray-500/10' },
};

// --- Reusable Components ---

// ResultItem (สำหรับ Mobile View)
const ResultItem: React.FC<{ result: Result; index: number }> = ({ result, index }) => {
  const style = prizeStyles[result.prize] || { icon: faCertificate, color: 'text-gray-500', border: 'border-gray-500/30', bg: 'bg-gray-500/10' };
  return (
    <div className={`relative flex items-start gap-4 p-4 rounded-lg border ${style.border} ${style.bg}`}>
      <span className="absolute top-2 right-3 text-sm font-bold text-white/30">#{index + 1}</span>
      <FontAwesomeIcon icon={style.icon} className={`text-3xl mt-1 w-8 flex-shrink-0 ${style.color}`} />
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <p className={`text-lg font-bold ${style.color}`}>{result.prize}</p>
          {result.medal && <span className={`text-xs font-semibold px-2 py-1 rounded-full ${style.bg} ${style.color}`}>{result.medal}</span>}
        </div>
        {result.trophy && <p className="text-xs text-yellow-300/80 font-kku">{result.trophy}</p>}
        <p className="text-xl font-semibold text-white mt-1">{result.name}</p>
        {result.school && <p className="text-md text-white/80 font-kku">{result.school}</p>}
        {result.province && <p className="text-sm text-white/60 font-kku">{result.province}</p>}
      </div>
    </div>
  );
};

// CompetitionCard (ปรับปรุงใหม่ให้มีทั้ง Table และ Card)
const CompetitionCard: React.FC<{ competition: CompetitionResult }> = ({ competition }) => (
  <div className="card backdrop-blur-sm bg-black/20 border border-white/10 overflow-hidden animate-fade-in">
    <div className="p-6 md:p-8 border-b border-white/10">
      <h2 className="text-2xl md:text-3xl font-bold text-ci-gold font-sao">{competition.title}</h2>
      <p className="text-lg text-white/80 mb-1 font-kku">ระดับ{competition.level}</p>
      {competition.trophyContext && <p className="text-sm text-yellow-300/80 mb-2 font-kku">{competition.trophyContext}</p>}
      <p className="text-sm text-white/60">ประกาศผล ณ วันที่ {competition.announcementDate}</p>
    </div>
    
    {/* Mobile View: List of Cards */}
    <div className="grid gap-4 md:hidden p-6">
      {competition.results.map((result, resultIndex) => (
        <ResultItem key={resultIndex} result={result} index={resultIndex} />
      ))}
    </div>

    {/* Desktop View: Table */}
    <div className="hidden md:block">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-white/5">
            <tr>
              <th className="p-4 font-semibold text-ci-gold w-16 text-center">ลำดับ</th>
              <th className="p-4 font-semibold text-ci-gold">รางวัล</th>
              <th className="p-4 font-semibold text-ci-gold">ชื่อ-สกุล / ชื่อวง</th>
              <th className="p-4 font-semibold text-ci-gold">สถานศึกษา</th>
              <th className="p-4 font-semibold text-ci-gold w-32 text-center">เหรียญ</th>
            </tr>
          </thead>
          <tbody>
            {competition.results.map((result, idx) => {
              const style = prizeStyles[result.prize] || { color: 'text-gray-500', icon: faCertificate, bg: 'bg-gray-500/10' };
              return (
                <tr key={idx} className="border-t border-white/10 hover:bg-white/10 transition-colors">
                  <td className="p-4 text-center text-white/70 font-sarabun">{idx + 1}</td>
                  <td className={`p-4 font-sarabun font-semibold ${style.color}`}>
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon icon={style.icon} />
                      <span>{result.prize}</span>
                    </div>
                  </td>
                  <td className="p-4 font-kku font-sarabun font-semibold text-white">{result.name}</td>
                  <td className="p-4 font-kku font-sarabun text-white/80">{result.school || '-'}</td>
                  <td className="p-4 font-kku font-sarabun text-center">
                    {result.medal ? (
                      <span className={`font-semibold px-2 py-1 rounded-full text-xs ${style.bg} ${style.color}`}>
                        {result.medal}
                      </span>
                    ) : '-'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>

    {/* Outstanding Awards Section */}
    {competition.outstandingAwards && competition.outstandingAwards.length > 0 && (
      <div className="border-t border-white/10 p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-ci-gold mb-4 flex items-center gap-3 font-sao">
          <FontAwesomeIcon icon={faStar} />
          <span>รางวัลเครื่องมือดีเด่น</span>
        </h3>

        {/* Mobile View for Outstanding Awards */}
        <div className="grid gap-3 md:hidden">
          {competition.outstandingAwards.map((award, index) => (
            <div key={index} className="bg-black/20 p-4 rounded-lg border border-white/10">
              <p className="font-semibold text-yellow-400">{award.instrument}</p>
              <p className="text-lg text-white mt-1">{award.name}</p>
              <p className="text-sm text-white/70 font-kku">{award.school}</p>
            </div>
          ))}
        </div>

        {/* Desktop View for Outstanding Awards */}
        <div className="hidden md:block">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white/5">
                <tr>
                  <th className="p-3 font-semibold text-ci-gold">เครื่องดนตรี</th>
                  <th className="p-3 font-semibold text-ci-gold">ชื่อ-สกุล</th>
                  <th className="p-3 font-semibold text-ci-gold">สถานศึกษา/วง</th>
                </tr>
              </thead>
              <tbody>
                {competition.outstandingAwards.map((award, index) => (
                  <tr key={index} className="border-t border-white/10">
                    <td className="p-3 font-sarabun font-semibold text-yellow-400">{award.instrument}</td>
                    <td className="p-3 font-kku font-sarabun text-white">{award.name}</td>
                    <td className="p-3 font-kku font-sarabun text-white/80">{award.school}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )}
  </div>
);

const PendingResultsNotice: React.FC<{ status: PublicationStatus; type: ResultType }> = ({ status, type }) => (
  <div className="card mx-auto max-w-2xl border border-ci-gold/30 bg-black/20 p-8 text-center backdrop-blur-sm">
    <FontAwesomeIcon icon={faClock} className="text-4xl text-ci-gold" />
    <h2 className="mt-4 text-3xl font-bold text-ci-gold font-sao">ยังไม่ประกาศผลการประกวด</h2>
    <p className="mt-3 text-lg text-white/85">{status.message}</p>
    <p className="mt-2 text-white/60">กำหนดประกาศผลประเภท{type === 'band' ? 'วง' : 'เดี่ยว'}: {status.expectedAnnouncement}</p>
  </div>
);

// --- Main Page Component ---
export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState<'band' | 'solo'>('band');
  
  // States for Band
  const [selectedBandCompetition, setSelectedBandCompetition] = useState<CompetitionResult | null>(null);

  // States for Solo
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const soloCategories = useMemo(() => {
    if (!selectedLevel) return [];
    return Array.from(new Set(
      soloResultsData
        .filter(d => d.level === selectedLevel)
        .map(d => d.title)
    ));
  }, [selectedLevel]);

  const selectedSoloCompetition = useMemo(() => {
    if (!selectedLevel || !selectedCategory) return null;
    return soloResultsData.find(d => d.level === selectedLevel && d.title === selectedCategory) || null;
  }, [selectedLevel, selectedCategory]);

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(prev => (prev === level ? null : level));
    setSelectedCategory(null);
  };

  const handleBandSelect = (competition: CompetitionResult) => {
    setSelectedBandCompetition(prev => (prev?.title === competition.title && prev?.level === competition.level ? null : competition));
  };

  const handleTabChange = (tab: 'band' | 'solo') => {
    setActiveTab(tab);
    // Reset selections when changing tabs
    setSelectedBandCompetition(null);
    setSelectedLevel(null);
    setSelectedCategory(null);
  }

  const activeStatus = resultStatus[activeTab];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 font-kku fade-in space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-ci-gold font-sao mb-3">
          ประกาศผลการประกวด
        </h1>
        <p className="text-lg text-white/80">
          การประกวดดนตรีไทย ภาคตะวันออกเฉียงเหนือ ครั้งที่ ๒๕
        </p>
      </div>
      
      {/* Certificate Download Button (shown only when certificates are ready) */}
      {resultStatus.certificate.isAvailable && resultStatus.certificate.url && (
        <div className="text-center">
          <a
            href={resultStatus.certificate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-ci-gold hover:bg-yellow-300 text-black font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faCertificate} className="mr-3" />
            <span>ดาวน์โหลดเกียรติบัตร</span>
          </a>
          <p className="text-white/70 text-sm mt-2">เกียรติบัตรประเภทเดี่ยวเครื่องดนตรีและประเภทวงดนตรี</p>
        </div>
      )}

      {/* Tab Switcher */}
      <div className="flex justify-center bg-black/20 p-1 rounded-xl max-w-md mx-auto">
        <button onClick={() => handleTabChange('band')} className={`w-1/2 p-3 rounded-lg font-bold transition-all ${activeTab === 'band' ? 'bg-ci-gold text-black' : 'text-white/70 hover:bg-white/10'}`}>
          <FontAwesomeIcon icon={faUsers} className="mr-2" /> ประเภทวง
        </button>
        <button onClick={() => handleTabChange('solo')} className={`w-1/2 p-3 rounded-lg font-bold transition-all ${activeTab === 'solo' ? 'bg-ci-gold text-black' : 'text-white/70 hover:bg-white/10'}`}>
          <FontAwesomeIcon icon={faMusic} className="mr-2" /> ประเภทเดี่ยว
        </button>
      </div>

      {/* Content based on active tab */}
      <div className="min-h-[300px]">
        {!activeStatus.isPublished ? (
          <PendingResultsNotice status={activeStatus} type={activeTab} />
        ) : activeTab === 'band' ? (
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-xl font-bold text-white text-center">เลือกรายการประกวดประเภทวง</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {bandResultsData.map((comp, index) => (
                <button key={index} onClick={() => handleBandSelect(comp)}
                  className={`p-5 rounded-xl border-2 text-left transition-all duration-300 flex flex-col justify-between h-full ${selectedBandCompetition?.title === comp.title && selectedBandCompetition?.level === comp.level ? 'bg-ci-gold/20 border-ci-gold scale-105' : 'bg-black/20 border-transparent hover:border-ci-gold/50'}`}>
                  <div>
                    <p className="text-lg font-bold font-sao text-ci-gold">{comp.title}</p>
                    <p className="text-sm text-white/60">ระดับ{comp.level}</p>
                  </div>
                  <div className={`mt-3 text-xs font-bold self-end ${selectedBandCompetition?.title === comp.title && selectedBandCompetition?.level === comp.level ? 'text-ci-gold' : 'text-white/40'}`}>
                    ดูผลลัพธ์
                  </div>
                </button>
              ))}
            </div>
            {selectedBandCompetition && (
              <div className="mt-8">
                <CompetitionCard competition={selectedBandCompetition} />
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="bg-ci-gold text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                เลือกระดับชั้น
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {['ประถมศึกษา', 'มัธยมศึกษา'].map(level => (
                  <button key={level} onClick={() => handleLevelSelect(level)}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 flex items-center justify-between ${selectedLevel === level ? 'bg-ci-gold/20 border-ci-gold scale-105' : 'bg-black/20 border-transparent hover:border-ci-gold/50'}`}>
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faGraduationCap} className="text-xl text-ci-gold" />
                      <span className="text-lg font-semibold text-white">{level}</span>
                    </div>
                    <FontAwesomeIcon icon={faChevronRight} className={`transition-transform duration-300 ${selectedLevel === level ? 'rotate-90 text-ci-gold' : 'text-white/30'}`} />
                  </button>
                ))}
              </div>
            </div>

            {selectedLevel && (
              <div className="card p-6 backdrop-blur-sm bg-black/20 animate-fade-in">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="bg-ci-gold text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  เลือกรายการประกวด
                </h3>
                {soloCategories.length > 0 ? (
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {soloCategories.map(cat => (
                      <button key={cat} onClick={() => setSelectedCategory(cat)}
                        className={`p-4 rounded-lg border text-left transition-all duration-300 flex items-center gap-3 ${selectedCategory === cat ? 'bg-ci-gold/20 border-ci-gold' : 'bg-black/20 border-white/10 hover:bg-white/5'}`}>
                        <FontAwesomeIcon icon={faMusic} className="text-ci-gold/70" />
                        <span className="text-white/90 text-sm">{cat}</span>
                      </button>
                    ))}
                  </div>
                ) : <p className="text-center text-white/60 py-4">ไม่พบข้อมูลรายการประกวดในระดับชั้นนี้</p>}
              </div>
            )}

            {selectedSoloCompetition && (
              <div className="mt-8">
                <CompetitionCard competition={selectedSoloCompetition} />
              </div>
            )}
          </div>
        )}
      </div>

      {activeStatus.isPublished && bandResultsData.length === 0 && soloResultsData.length === 0 && (
        <div className="text-center card p-10">
          <h2 className="text-2xl text-white/80">ยังไม่มีการประกาศผลรางวัล</h2>
          <p className="text-white/60 mt-2">โปรดกลับมาตรวจสอบอีกครั้งหลังสิ้นสุดการแข่งขัน</p>
        </div>
      )}
    </div>
  );
}
