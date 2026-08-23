"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMapMarkerAlt, faBed, faMusic, faClock, 
  faExclamationTriangle, faPhone, faExternalLinkAlt, 
  faBook, faUserGroup, faKey, faWifi, faDoorOpen
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// Interface definitions
interface Detail {
  icon: IconDefinition;
  label: string;
  value: string;
}

interface Facility {
  icon: IconDefinition;
  text: string;
}

interface InfoCardProps {
  cardIcon: IconDefinition;
  title: string;
  details: Detail[];
  rules: string[];
  facilities?: Facility[];
  mapLink: string;
  mapLinkText: string;
  note?: string;
}

// InfoCard Component
const InfoCard: React.FC<InfoCardProps> = ({ 
  cardIcon, 
  title, 
  details, 
  rules, 
  facilities, 
  mapLink, 
  mapLinkText,
  note 
}) => (
  <div className="card p-6 md:p-8 backdrop-blur-sm bg-black/20 border border-white/10 flex flex-col space-y-6 h-full hover:border-ci-gold/30 transition-all duration-300">
    <h2 className="text-2xl font-bold text-ci-gold flex items-center gap-3">
      <FontAwesomeIcon icon={cardIcon} />
      <span>{title}</span>
    </h2>
    
    <div className="space-y-3 text-white/90">
      {details.map((detail, index) => (
        <p key={index} className="flex items-start">
          <FontAwesomeIcon icon={detail.icon} className="mr-3 mt-1 w-4 text-ci-gold flex-shrink-0" />
          <span><strong>{detail.label}:</strong> {detail.value}</span>
        </p>
      ))}
    </div>

    {facilities && facilities.length > 0 && (
      <div>
        <h3 className="text-lg font-bold text-ci-gold flex items-center gap-2 mb-3">
          <FontAwesomeIcon icon={faDoorOpen} />
          สิ่งอำนวยความสะดวก
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {facilities.map((facility, index) => (
            <div key={index} className="flex items-center gap-2 text-white/80">
              <FontAwesomeIcon icon={facility.icon} className="text-ci-gold w-4" />
              <span>{facility.text}</span>
            </div>
          ))}
        </div>
      </div>
    )}

    <div>
      <h3 className="text-lg font-bold text-ci-gold flex items-center gap-2 mb-3">
        <FontAwesomeIcon icon={faExclamationTriangle} />
        ข้อควรปฏิบัติ
      </h3>
      <ul className="list-disc list-inside space-y-2 text-white/80 bg-black/20 p-4 rounded-md border border-white/10">
        {rules.map((rule, index) => (
          <li key={index} className="leading-relaxed">{rule}</li>
        ))}
      </ul>
    </div>

    {note && (
      <div className="text-white/70 text-sm italic">
        {note}
      </div>
    )}

    <div className="mt-auto pt-4">
      <a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary w-full sm:w-auto hover:bg-ci-gold hover:text-black transition-all duration-300"
      >
        <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
        {mapLinkText}
      </a>
    </div>
  </div>
);

export default function RoomPage() {
  const accommodationData = {
    cardIcon: faBed,
    title: "ห้องพักสำหรับผู้เข้าแข่งขัน",
    details: [
      { icon: faMapMarkerAlt, label: "สถานที่", value: "หอพัก 9 หลัง มหาวิทยาลัยขอนแก่น" },
      { icon: faClock, label: "เช็คอิน", value: "6 กันยายน 2568, เวลา 13:00 น. เป็นต้นไป" },
      { icon: faClock, label: "เช็คเอาท์", value: "8 กันยายน 2568, ก่อนเวลา 12:00 น." },
      { icon: faUserGroup, label: "จำนวนที่รับได้", value: "4 คน/ห้อง" },
      { icon: faPhone, label: "ติดต่อ", value: "คุณสมหญิง ใจดี (ฝ่ายที่พัก) โทร: 081-234-5678" }
    ],
    facilities: [
      { icon: faWifi, text: "Wi-Fi ฟรี" },
      { icon: faKey, text: "คีย์การ์ด" },
      { icon: faBed, text: "เตียงเดี่ยว 4 เตียง" },
      { icon: faClock, text: "เปิด 24 ชั่วโมง" }
    ],
    rules: [
      "โปรดแสดงบัตรประจำตัวผู้เข้าแข่งขันเมื่อเข้าพัก",
      "รักษากฎระเบียบของหอพักอย่างเคร่งครัด",
      "งดส่งเสียงดังหรือกระทำการรบกวนผู้อื่นหลังเวลา 22:00 น.",
      "ผู้เข้าพักต้องรับผิดชอบต่อความเสียหายใดๆ ที่เกิดขึ้นกับทรัพย์สินของหอพัก",
      "กรุณาเก็บรักษาทรัพย์สินมีค่าของท่าน ทางคณะผู้จัดงานจะไม่รับผิดชอบกรณีสูญหาย",
      "ห้ามสูบบุหรี่ภายในห้องพักโดยเด็ดขาด",
      "ไม่อนุญาตให้บุคคลภายนอกเข้าพักค้างคืน"
    ],
    mapLink: "https://www.google.com/maps/search/?api=1&query=KKU+Dormitory+9",
    mapLinkText: "ดูแผนที่หอพัก",
    note: "* กรุณาแจ้งล่วงหน้าหากต้องการเช็คเอาท์นอกเวลาที่กำหนด"
  };

  const practiceRoomsData = {
    cardIcon: faMusic,
    title: "ห้องซ้อมดนตรี",
    details: [
      { icon: faMapMarkerAlt, label: "สถานที่", value: "อาคารเรียนคณะศิลปกรรมศาสตร์ (FA-1)" },
      { icon: faClock, label: "เวลาให้บริการ", value: "6-8 กันยายน 2568, เวลา 07:00 - 20:00 น." },
      { icon: faBook, label: "การจอง", value: "ลงชื่อจองคิวที่โต๊ะอำนวยการ โถงชั้น 1" },
      { icon: faUserGroup, label: "ความจุ", value: "ห้องละ 8-10 คน" }
    ],
    facilities: [
      { icon: faMusic, text: "กระจกเงา" },
      { icon: faClock, text: "จองล่วงหน้าได้" },
      { icon: faWifi, text: "Wi-Fi ฟรี" },
      { icon: faDoorOpen, text: "ห้องปรับอากาศ" }
    ],
    rules: [
      "จำกัดเวลาการใช้ห้องซ้อมครั้งละ 1 ชั่วโมง (หากไม่มีผู้รอคิว สามารถใช้ต่อได้)",
      "ห้ามนำอาหารและเครื่องดื่มทุกชนิดเข้ามาในห้องซ้อม",
      "โปรดรักษาความสะอาดและจัดเก็บอุปกรณ์ให้เรียบร้อยหลังใช้งาน",
      "กรุณาใช้เครื่องดนตรีและอุปกรณ์ด้วยความระมัดระวัง",
      "ทางคณะผู้จัดงานไม่มีบริการเครื่องดนตรีสำหรับการซ้อม",
      "กรุณาตรงต่อเวลาในการเข้าใช้ห้องซ้อม",
      "แจ้งเจ้าหน้าที่ทันทีหากพบความเสียหายของอุปกรณ์"
    ],
    mapLink: "https://www.google.com/maps/search/?api=1&query=Faculty+of+Fine+and+Applied+Arts,+Khon+Kaen+University",
    mapLinkText: "ดูแผนที่คณะฯ",
    note: "* สามารถจองห้องซ้อมล่วงหน้าได้ 1 วัน"
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 font-kku fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-ci-gold font-sao mb-3">
          เงื่อนไขการใช้ห้องพักและห้องซ้อม
        </h1>
        <p className="text-lg text-white/80">
          สำหรับผู้เข้าร่วมการประกวดดนตรีไทย ครั้งที่ ๒๕
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        <InfoCard {...accommodationData} />
        <InfoCard {...practiceRoomsData} />
      </div>
    </div>
  );
}
