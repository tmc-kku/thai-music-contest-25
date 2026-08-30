"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCalendarAlt,
  faInfoCircle,
  faMapMarkerAlt,
  faMusic,
  faUser,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

type Event = {
  time: string;
  text: string;
  details?: string;
  icon: typeof faUser;
  highlight?: boolean;
};

type Room = {
  name: string;
  location: string;
  events: Event[];
};

const saturdayRooms: Room[] = [
  {
    name: "FA Theater",
    location: "โรงละครคณะศิลปกรรมศาสตร์",
    events: [
      { time: "๐๙.๐๐ – ๑๐.๐๐ น.", text: "ระนาดทุ้ม มัธยมศึกษา", icon: faMusic },
      { time: "๑๐.๐๐ – ๑๑.๐๐ น.", text: "ระนาดเอก มัธยมศึกษา", icon: faMusic },
      { time: "๑๑.๐๐ – ๑๒.๐๐ น.", text: "ฆ้องวงเล็ก มัธยมศึกษา", icon: faMusic },
      { time: "๑๓.๐๐ – ๑๔.๓๐ น.", text: "เดี่ยวฆ้องวงใหญ่ มัธยมศึกษา", icon: faMusic },
      {
        time: "๑๔.๓๐ – ๑๗.๐๐ น.",
        text: "วงเครื่องสายเครื่องเดี่ยว มัธยมศึกษา",
        icon: faMusic,
      },
    ],
  },
  {
    name: "PAS 1",
    location: "ห้อง PAS 1",
    events: [
      { time: "๐๙.๐๐ – ๑๐.๐๐ น.", text: "ซอด้วง มัธยมศึกษา", icon: faMusic },
      { time: "๑๐.๐๐ – ๑๑.๐๐ น.", text: "ซออู้ มัธยมศึกษา", icon: faMusic },
      { time: "๑๑.๐๐ – ๑๒.๐๐ น.", text: "ซอสามสาย มัธยมศึกษา", icon: faMusic },
      { time: "๑๓.๐๐ – ๑๓.๔๐ น.", text: "ซอด้วง ประถมศึกษา", icon: faMusic },
      { time: "๑๓.๔๐ – ๑๔.๓๐ น.", text: "ซออู้ ประถมศึกษา", icon: faMusic },
    ],
  },
  {
    name: "PAS 2",
    location: "ห้อง PAS 2",
    events: [
      { time: "๐๙.๐๐ – ๑๐.๓๐ น.", text: "ขิม ประถมศึกษา", icon: faMusic },
      { time: "๑๐.๓๐ – ๑๑.๐๐ น.", text: "ขลุ่ยเพียงออ ประถมศึกษา", icon: faMusic },
      { time: "๑๑.๐๐ – ๑๒.๐๐ น.", text: "ขลุ่ยเพียงออ มัธยมศึกษา", icon: faMusic },
      { time: "๑๓.๐๐ – ๑๔.๐๐ น.", text: "จะเข้ ประถมศึกษา", icon: faMusic },
    ],
  },
  {
    name: "FAG 1",
    location: "ห้อง FAG 1",
    events: [
      { time: "๐๙.๐๐ – ๑๐.๓๐ น.", text: "ขับร้อง มัธยมศึกษา", icon: faMusic },
      { time: "๑๐.๓๐ – ๑๒.๐๐ น.", text: "จะเข้ มัธยมศึกษา", icon: faMusic },
      { time: "๑๓.๐๐ – ๑๔.๐๐ น.", text: "ขับร้อง ประถมศึกษา", icon: faMusic },
    ],
  },
];

const saturdayNotes = [
  "การลงทะเบียน เพื่อแสดงการยืนยันในการเข้าร่วมประกวด รวมทั้งตรวจสอบข้อมูลผู้เข้าประกวดให้ถูกต้อง เพื่อจัดทำเกียรติบัตร หากไม่แก้ไขและมีข้อผิดพลาด คณะดำเนินงานขอสงวนสิทธิ์ในการแก้ไขข้อมูล",
  "การรายงานตัว เพื่อเตรียมความพร้อมก่อนการประกวด ผู้เข้าประกวดทุกคนต้องรายงานตัวหน้าห้องที่ประกวดก่อนเริ่มประกวดของแต่ละประเภท ๑๕ นาที",
  "หากนักเรียนไม่มารายงานตัวก่อนการประกวดตามเวลาที่กำหนด ถือว่าสละสิทธิ์",
  "เมื่อรายงานตัวแล้ว ให้นั่งรอตามที่คณะกรรมการกำหนด ซึ่งไม่อนุญาตไปซ้อม",
];

const liveChannels = [
  "ห้องที่ ๑: Facebook การประกวดดนตรีไทย ภาคตะวันออกเฉียงเหนือ",
  "ห้องที่ ๒: Facebook Thai Music FA KKU",
  "ห้องที่ ๓: Facebook คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น",
  "ห้องที่ ๔: Facebook Music Education KKU",
];

function EventRow({ event }: { event: Event }) {
  return (
    <div
      className={`flex gap-3 rounded-lg p-3 ${
        event.highlight ? "border border-ci-gold/30 bg-ci-gold/15" : "bg-black/10"
      }`}
    >
      <FontAwesomeIcon icon={event.icon} className="mt-1 w-4 shrink-0 text-ci-gold" />
      <div className="min-w-0">
        <p className="font-semibold text-ci-gold">{event.time}</p>
        <p className={event.highlight ? "font-bold text-white" : "text-white/90"}>{event.text}</p>
        {event.details && <p className="mt-1 text-sm text-white/65">{event.details}</p>}
      </div>
    </div>
  );
}

export default function Schedule() {
  const saturdayMainEvents: Event[] = [
    {
      time: "๐๗.๓๐ – ๐๘.๓๐ น.",
      text: "ลงทะเบียนผู้เข้าประกวดทุกรายการ",
      icon: faUser,
    },
    {
      time: "๐๘.๓๐ – ๐๘.๔๐ น.",
      text: "กล่าวต้อนรับผู้เข้าร่วมประกวดดนตรีไทย",
      details: "โดย รองศาสตราจารย์ ดร.บุรินทร์ เปล่งดีสกุล คณบดีคณะศิลปกรรมศาสตร์",
      icon: faUser,
    },
    {
      time: "๐๙.๐๐ – ๑๒.๐๐ น.",
      text: "การประกวดเดี่ยวเครื่องดนตรีไทยระดับประถมศึกษาและมัธยมศึกษา",
      details: "แบ่งการประกวดออกเป็น ๔ ห้อง ตามรายละเอียดด้านล่าง",
      icon: faMusic,
    },
    {
      time: "๑๒.๐๐ – ๑๓.๐๐ น.",
      text: "พักรับประทานอาหารกลางวัน",
      icon: faUtensils,
    },
    {
      time: "๑๓.๐๐ – ๑๔.๓๐ น.",
      text: "การประกวดเดี่ยวเครื่องดนตรีไทย ระดับประถมศึกษาและมัธยมศึกษา",
      icon: faMusic,
    },
    {
      time: "๑๔.๓๐ – ๑๗.๐๐ น.",
      text: "การประกวดวงเครื่องสายเครื่องเดี่ยว ระดับมัธยมศึกษา",
      icon: faMusic,
    },
    {
      time: "๑๗.๐๐ – ๑๗.๓๐ น.",
      text: "ประกาศผลตัดสินการประกวด",
      details:
        "รางวัลเดี่ยวเครื่องดนตรีไทยและขับร้อง และรางวัลเครื่องดนตรีดีเด่นและรางวัลวงเครื่องสายเครื่องเดี่ยว ระดับมัธยมศึกษา",
      icon: faAward,
      highlight: true,
    },
  ];

  const sundayEvents: Event[] = [
    { time: "๐๗.๓๐ – ๐๘.๓๐ น.", text: "ลงทะเบียนวงที่เข้าประกวดทุกรายการ", icon: faUser },
    { time: "๐๘.๓๐ – ๐๘.๔๕ น.", text: "การบรรเลงเพลงถวายอาลัย", icon: faMusic },
    { time: "๐๘.๔๕ – ๐๘.๕๐ น.", text: "การจับฉลากลำดับการประกวด", icon: faUser },
    {
      time: "๐๙.๐๐ – ๑๒.๐๐ น.",
      text: "การประกวดวงเครื่องสายประสมปี่พาทย์ ระดับประถมศึกษา",
      details: "เพลงแขกกล่อมเจ้า สองชั้น",
      icon: faMusic,
    },
    { time: "๑๒.๐๐ – ๑๓.๐๐ น.", text: "พักรับประทานอาหารกลางวัน", icon: faUtensils },
    {
      time: "๑๓.๐๐ – ๑๖.๓๐ น.",
      text: "การประกวดวงเครื่องสายประสมปี่พาทย์ ระดับมัธยมศึกษา",
      details: "เพลงพราหมณ์ดีดน้ำเต้า เถา",
      icon: faMusic,
    },
    {
      time: "๑๖.๓๐ – ๑๗.๐๐ น.",
      text: "ประกาศผลตัดสินการประกวดและพิธีการเข้ารับถ้วยพระราชทาน",
      details:
        "ประธานในพิธี รองศาสตราจารย์ นพ.ชาญชัย พานทองวิริยะกุล อธิการบดีมหาวิทยาลัยขอนแก่น พร้อมประกาศรางวัลเครื่องดนตรีดีเด่นและรางวัลวงเครื่องสายประสมปี่พาทย์ ทั้งระดับประถมศึกษาและมัธยมศึกษา",
      icon: faAward,
      highlight: true,
    },
    { time: "๑๗.๐๐ – ๑๗.๑๕ น.", text: "ผู้ได้รับรางวัลร่วมถ่ายภาพเป็นที่ระลึก", icon: faUser },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-4 font-kku fade-in sm:py-8">
      <header className="text-center">
        <h1 className="flex items-center justify-center gap-3 text-3xl font-bold text-ci-gold font-sao md:text-4xl">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-2xl" />
          กำหนดการประกวด
        </h1>
        <div className="mx-auto mt-5 max-w-3xl space-y-2 text-white/80">
          <h2 className="text-xl text-white font-sao md:text-2xl">
            การประกวดดนตรีไทยภาคตะวันออกเฉียงเหนือ ครั้งที่ ๒๕
          </h2>
          <p>ถ้วยพระราชทานสมเด็จพระกนิษฐาธิราชเจ้า กรมสมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี</p>
          <p>และถ้วยประทานพระเจ้าวรวงศ์เธอ พระองค์เจ้าโสมสวลี กรมหมื่นสุทธนารีนาถ</p>
          <p className="font-semibold text-ci-gold">รอบชิงชนะเลิศ</p>
        </div>
      </header>

      <section className="card border border-white/10 bg-black/20 p-5 backdrop-blur-sm sm:p-7">
        <div className="mb-6 border-b border-white/10 pb-5">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-ci-gold font-sao">
            <FontAwesomeIcon icon={faCalendarAlt} /> วันเสาร์ ที่ ๕ กันยายน ๒๕๖๙
          </h2>
          <p className="mt-2 text-lg text-white">การประกวดเดี่ยวเครื่องดนตรีและขับร้อง ระดับประถมศึกษาและมัธยมศึกษา</p>
          <p className="mt-1 flex items-center gap-2 text-white/65">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-ci-gold" /> คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {saturdayMainEvents.map((event) => <EventRow key={event.time} event={event} />)}
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-bold text-ci-gold font-sao">รายละเอียดห้องประกวด</h3>
          <div className="grid gap-5 lg:grid-cols-2">
            {saturdayRooms.map((room) => (
              <article key={room.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h4 className="text-lg font-bold text-ci-gold">{room.name}</h4>
                <p className="mb-3 text-sm text-white/60">{room.location}</p>
                <div className="space-y-2">
                  {room.events.map((event) => <EventRow key={`${room.name}-${event.time}`} event={event} />)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="card border border-white/10 bg-black/20 p-5 backdrop-blur-sm sm:p-7">
        <div className="mb-6 border-b border-white/10 pb-5">
          <h2 className="flex items-center gap-3 text-2xl font-bold text-ci-gold font-sao">
            <FontAwesomeIcon icon={faCalendarAlt} /> วันอาทิตย์ ที่ ๖ กันยายน ๒๕๖๙
          </h2>
          <p className="mt-2 text-lg text-white">การประกวดวงดนตรีไทยระดับประถมศึกษาและมัธยมศึกษา</p>
          <p className="mt-1 flex items-center gap-2 text-white/65">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-ci-gold" /> โรงละครคณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {sundayEvents.map((event) => <EventRow key={event.time} event={event} />)}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="card border border-white/10 bg-black/20 p-5">
          <h2 className="flex items-center gap-3 text-xl font-bold text-ci-gold font-sao">
            <FontAwesomeIcon icon={faInfoCircle} /> หมายเหตุสำหรับผู้เข้าประกวด
          </h2>
          <ol className="mt-4 space-y-3 text-white/80">
            {saturdayNotes.map((note, index) => (
              <li key={note} className="flex gap-3">
                <span className="font-bold text-ci-gold">{index + 1}.</span>
                <span>{note}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="card border border-white/10 bg-black/20 p-5">
          <h2 className="flex items-center gap-3 text-xl font-bold text-ci-gold font-sao">
            <FontAwesomeIcon icon={faFacebook} /> การถ่ายทอดสด
          </h2>
          <p className="mt-3 text-white/75">วันเสาร์ ถ่ายทอดสดแยกตามห้องประกวด</p>
          <ul className="mt-3 space-y-2 text-white/80">
            {liveChannels.map((channel) => <li key={channel}>{channel}</li>)}
          </ul>
          <p className="mt-4 border-t border-white/10 pt-4 text-white/80">
            วันอาทิตย์ ถ่ายทอดสดผ่าน Facebook: การประกวดดนตรีไทย ภาคตะวันออกเฉียงเหนือ
          </p>
        </div>
      </section>
    </div>
  );
}
