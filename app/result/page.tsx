"use client";

import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faGraduationCap,
  faMedal,
  faMusic,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import bandResults from "@/data/latest-band-results.json";
import soloResults from "@/data/latest-solo-results.json";
import resultStatus from "@/data/result-status.json";

type ResultEntry = {
  prize: string;
  medal?: string;
  name: string;
  school?: string;
};

type Competition = {
  level: string;
  title: string;
  trophyContext: string;
  announcementDate: string;
  results: ResultEntry[];
  outstandingAwards?: { instrument: string; name: string; school: string }[];
};

const bandCompetitions = bandResults as Competition[];
const soloCompetitions = soloResults as Competition[];
const levels = ["ประถมศึกษา", "มัธยมศึกษา"];

const publishedStatus = resultStatus as {
  band: { isPublished: boolean; message: string };
  solo: { isPublished: boolean; message: string };
};

function AwardRow({ entry }: { entry: ResultEntry }) {
  const displayName = entry.name === "พบพร เจาะดี" ? "เด็กหญิงพบพร เจาะดี" : entry.name;

  return (
    <div className="grid gap-2 border-t border-white/10 py-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
      <div>
        <p className="font-semibold text-white">{displayName}</p>
        {entry.school && <p className="text-sm text-white/60">{entry.school}</p>}
      </div>
      <div className="text-left sm:text-right">
        <p className="font-semibold text-ci-gold">{entry.prize}</p>
        {entry.medal && <p className="text-sm text-white/65">{entry.medal}</p>}
      </div>
    </div>
  );
}

function OutstandingRow({ award }: { award: NonNullable<Competition["outstandingAwards"]>[number] }) {
  return (
    <div className="border-t border-white/10 py-3">
      <p className="font-semibold text-ci-gold">{award.name}</p>
      <p className="mt-1 text-sm text-white/65">{award.school}</p>
    </div>
  );
}

function BandResults({ competition }: { competition: Competition }) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-3 flex items-center gap-2 text-lg font-bold text-ci-gold">
        <FontAwesomeIcon icon={faTrophy} />
        รายชื่อวงที่ได้รับรางวัล
      </div>
      {competition.results.map((entry) => <AwardRow key={entry.name} entry={entry} />)}
    </div>
  );
}

function OutstandingAwards({ competition }: { competition: Competition }) {
  const [selectedInstrument, setSelectedInstrument] = useState("");
  const groupedAwards = (competition.outstandingAwards ?? []).reduce<Record<string, NonNullable<Competition["outstandingAwards"]>>>(
    (groups, award) => {
      const instrument = award.instrument.replace(/\s*ดีเด่น$/, "");
      groups[instrument] = [...(groups[instrument] ?? []), award];
      return groups;
    },
    {}
  );
  const instruments = Object.keys(groupedAwards);
  const activeInstrument = selectedInstrument && groupedAwards[selectedInstrument]
    ? selectedInstrument
    : instruments[0];
  const selectedAwards = activeInstrument ? groupedAwards[activeInstrument] : [];

  return (
    <div className="mx-auto max-w-3xl">
      <label htmlFor="instrument" className="mb-2 block font-semibold text-ci-gold">เลือกเครื่องดนตรี</label>
      <select
        id="instrument"
        value={activeInstrument ?? ""}
        onChange={(event) => setSelectedInstrument(event.target.value)}
        className="w-full rounded-lg border border-white/15 bg-ci-plum px-4 py-3 text-white outline-none focus:border-ci-gold"
      >
        {instruments.map((instrument) => <option key={instrument} value={instrument}>{instrument}</option>)}
      </select>

      {activeInstrument && (
        <section className="mt-6">
          <h3 className="mb-1 border-b border-white/10 pb-3 font-bold text-ci-gold">{activeInstrument}</h3>
          <div>{selectedAwards.map((award) => <OutstandingRow key={`${award.instrument}-${award.name}`} award={award} />)}</div>
        </section>
      )}
    </div>
  );
}

export default function ResultPage() {
  const [resultType, setResultType] = useState<"band" | "solo">("solo");
  const [selectedLevel, setSelectedLevel] = useState("ประถมศึกษา");
  const [selectedCompetition, setSelectedCompetition] = useState("");
  const [bandView, setBandView] = useState<"results" | "outstanding">("results");

  const competitions = resultType === "solo" ? soloCompetitions : bandCompetitions;
  const availableLevels = levels.filter((level) => competitions.some((competition) => competition.level === level));
  const isPublished = publishedStatus[resultType].isPublished;
  const levelCompetitions = useMemo(
    () => competitions
      .filter((competition) => competition.level === selectedLevel)
      .sort((first, second) => Number(second.title === "วงเครื่องสายเครื่องเดี่ยว") - Number(first.title === "วงเครื่องสายเครื่องเดี่ยว")),
    [competitions, selectedLevel]
  );
  const activeCompetition = levelCompetitions.find((competition) => competition.title === selectedCompetition) ?? levelCompetitions[0];

  const selectType = (type: "band" | "solo") => {
    setResultType(type);
    setSelectedLevel(type === "solo" ? "ประถมศึกษา" : "มัธยมศึกษา");
    setSelectedCompetition("");
    setBandView("results");
  };

  const selectLevel = (level: string) => {
    setSelectedLevel(level);
    setSelectedCompetition("");
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-4 font-kku fade-in sm:py-8">
      <header className="space-y-3 text-center">
        <h1 className="flex items-center justify-center gap-3 font-sao text-3xl font-bold text-ci-gold md:text-4xl"><FontAwesomeIcon icon={faTrophy} className="text-2xl" />ประกาศผลการประกวด</h1>
        <p className="text-white/75">ผลการประกวดดนตรีไทย ภาคตะวันออกเฉียงเหนือ ครั้งที่ ๒๕</p>
      </header>

      <div className="grid gap-3 sm:grid-cols-2" role="tablist" aria-label="ประเภทผลการประกวด">
        <button role="tab" aria-selected={resultType === "solo"} onClick={() => selectType("solo")} className={`rounded-xl border p-4 text-left transition ${resultType === "solo" ? "border-ci-gold bg-ci-gold/20" : "border-white/10 bg-black/20 hover:border-ci-gold/50"}`}><FontAwesomeIcon icon={faUser} className="mr-3 text-ci-gold" />ผลการประกวดประเภทเดี่ยว<span className="mt-1 block text-sm text-white/60">เดี่ยวเครื่องดนตรีและขับร้อง</span></button>
        <button role="tab" aria-selected={resultType === "band"} onClick={() => selectType("band")} className={`rounded-xl border p-4 text-left transition ${resultType === "band" ? "border-ci-gold bg-ci-gold/20" : "border-white/10 bg-black/20 hover:border-ci-gold/50"}`}><FontAwesomeIcon icon={faMusic} className="mr-3 text-ci-gold" />ผลการประกวดประเภทวง<span className="mt-1 block text-sm text-white/60">ผลการแข่งขันวงเครื่องสาย</span></button>
      </div>

      <section className="space-y-4">
        <h2 className="flex items-center gap-2 text-xl font-bold text-ci-gold"><FontAwesomeIcon icon={faGraduationCap} />เลือกระดับชั้น</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {availableLevels.map((level) => <button key={level} onClick={() => selectLevel(level)} className={`rounded-lg border p-3 font-semibold transition ${selectedLevel === level ? "border-ci-gold bg-ci-gold/20 text-ci-gold" : "border-white/10 bg-black/20 text-white hover:border-ci-gold/50"}`}>{level}</button>)}
        </div>
      </section>

      <section className="card border border-white/10 bg-black/20 p-5 backdrop-blur-sm sm:p-7">
        {!isPublished ? (
          <div className="rounded-xl border border-ci-gold/30 bg-ci-gold/10 px-5 py-8 text-center">
            <FontAwesomeIcon icon={faAward} className="mb-3 text-3xl text-ci-gold" />
            <h2 className="text-xl font-bold text-ci-gold">ยังไม่ประกาศผลรายการนี้</h2>
            <p className="mt-2 text-white/75">{publishedStatus[resultType].message}</p>
          </div>
        ) : <>
          <label htmlFor="competition" className="mb-2 block font-semibold text-ci-gold">เลือกรายการประกวด</label>
          <select id="competition" value={activeCompetition?.title ?? ""} onChange={(event) => setSelectedCompetition(event.target.value)} className="w-full rounded-lg border border-white/15 bg-ci-plum px-4 py-3 text-white outline-none focus:border-ci-gold">
            {levelCompetitions.map((competition) => <option key={competition.title} value={competition.title}>{competition.title}</option>)}
          </select>

        {activeCompetition && <div className="mt-7">
          <div className="mb-5 border-b border-white/10 pb-4"><h2 className="text-2xl font-bold text-white">{activeCompetition.title} <span className="text-ci-gold">ระดับ{activeCompetition.level}</span></h2><p className="mt-1 text-sm text-white/60">ประกาศผลวันที่ {activeCompetition.announcementDate}</p></div>
          {resultType === "band" ? <>
            <div className="mb-5 grid gap-3 sm:grid-cols-2">
              <button onClick={() => setBandView("results")} className={`rounded-lg border p-3 text-left font-semibold transition ${bandView === "results" ? "border-ci-gold bg-ci-gold/20 text-ci-gold" : "border-white/10 bg-white/5 text-white hover:border-ci-gold/50"}`}><FontAwesomeIcon icon={faMedal} className="mr-2" />ผลการแข่งขัน</button>
              <button onClick={() => setBandView("outstanding")} className={`rounded-lg border p-3 text-left font-semibold transition ${bandView === "outstanding" ? "border-ci-gold bg-ci-gold/20 text-ci-gold" : "border-white/10 bg-white/5 text-white hover:border-ci-gold/50"}`}><FontAwesomeIcon icon={faAward} className="mr-2" />รางวัลเครื่องดนตรีดีเด่น</button>
            </div>
            {bandView === "results" ? <BandResults competition={activeCompetition} /> : <OutstandingAwards key={activeCompetition.title} competition={activeCompetition} />}
          </> : <div><div className="mb-4 flex items-center gap-2 text-lg font-bold text-ci-gold"><FontAwesomeIcon icon={faMedal} />รายชื่อผู้ได้รับรางวัล</div>{activeCompetition.results.map((entry) => <AwardRow key={entry.name} entry={entry} />)}</div>}
        </div>}
        </>}
      </section>
    </div>
  );
}