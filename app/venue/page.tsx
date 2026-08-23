"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faBuilding, faExternalLinkAlt, faSearchPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

export default function VenuePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mainVenue = {
    title: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น",
    address: "123 ถนนมิตรภาพ ตำบลในเมือง อำเภอเมืองขอนแก่น ขอนแก่น 40002",
    mapSrc: "https://www.google.com/maps?q=Faculty%20of%20Fine%20and%20Applied%20Arts%2C%20Khon%20Kaen%20University&output=embed",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Faculty+of+Fine+and+Applied+Arts,+Khon+Kaen+University"
  };

  const floorPlan = {
    title: "ผังห้องประกวด",
    description: "โรงละครคณะศิลปกรรมศาสตร์, PAS1, PAS2 และ FAG",
    imageSrc: "/venue/room-plan.png"
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 font-kku fade-in">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-ci-gold font-sao mb-3">
          สถานที่จัดงาน
        </h1>
        <p className="text-lg text-white/80">
          การประกวดดนตรีไทย ภาคตะวันออกเฉียงเหนือ ครั้งที่ ๒๕
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Map */}
        <div className="lg:col-span-2 card p-6 md:p-8 backdrop-blur-sm bg-black/20 border border-white/10 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-ci-gold flex items-center gap-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>{mainVenue.title}</span>
            </h2>
            <p className="text-white/70 mt-2">{mainVenue.address}</p>
          </div>
          <div className="relative w-full rounded-xl overflow-hidden border-2 border-white/10 shadow-lg">
            <iframe
              className="w-full h-80 md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={mainVenue.mapSrc}
              title="แผนที่คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น"
            />
          </div>
          <a
            href={mainVenue.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full sm:w-auto"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
            เปิดใน Google Maps
          </a>
        </div>

        {/* Sidebar: Floor Plan */}
        <div className="lg:col-span-1 card p-6 md:p-8 backdrop-blur-sm bg-black/20 border border-white/10 space-y-4 flex flex-col">
          <h2 className="text-2xl font-bold text-ci-gold flex items-center gap-3">
            <FontAwesomeIcon icon={faBuilding} />
            <span>{floorPlan.title}</span>
          </h2>
          <p className="text-white/70">{floorPlan.description}</p>
          <div 
            className="relative mt-auto rounded-xl overflow-hidden border-2 border-white/10 cursor-pointer group"
            onClick={() => setIsModalOpen(true)}
          >
            <Image
              src={floorPlan.imageSrc}
              alt="ผังห้องประกวด"
              width={500}
              height={700}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center text-white p-4">
                <FontAwesomeIcon icon={faSearchPlus} className="text-4xl" />
                <p className="mt-2 font-semibold">คลิกเพื่อดูภาพขยาย</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal for Floor Plan */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-ci-purple-dark rounded-xl shadow-2xl p-2 border border-white/10 scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-3 -right-3 w-9 h-9 bg-ci-gold text-black rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 z-20"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="overflow-auto max-h-[calc(90vh-1rem)] rounded-lg">
              <Image
                src={floorPlan.imageSrc}
                alt="ผังห้องประกวด"
                width={1000}
                height={1400}
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
