"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faMapMarkerAlt, 
    faPhone, 
    faEnvelope, 
    faUserTie,
    faBuilding,
    faUserCircle,
    faExternalLinkAlt,
    faGlobe
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Image from 'next/image'; // 1. Import Next.js Image component

export default function Contact() {
    const teamMembers = [
        {
            name: "ผศ.ดร.วัศการก แก้วลอย",
            email: "peerka@kku.ac.th",
            role: "",
            tel: "083-675-7727",
            image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c87536c45566.webp"
        },
        {
            name: "รศ.ดร.ธรณัส หินอ่อน",
            email: "tharanat@kku.ac.th",
            role: "",
            tel: "084-956-9746",
            image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c874de13eee8-1.webp"
        },
        {
            name: "รศ.ดร. จตุพร สีม่วง",
            email: "jatuporn@kku.ac.th",
            role: "",
            tel: "089-444-7009",
            image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c8753694f971.webp"
        },
        {
            name: "รศ.จรัญ กาญจนประดิษฐ์",
            email: "jarun@kku.ac.th",
            role: "",
            tel: null,
            image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c875369dd496.webp"
        }
    ];
    
    return (
        <div className="max-w-6xl mx-auto py-12 px-4 font-kku fade-in">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-ci-gold font-sao mb-3">
                    ติดต่อเรา
                </h1>
                <p className="text-lg text-white/80">
                    หากมีข้อสงสัยหรือต้องการข้อมูลเพิ่มเติม สามารถติดต่อได้ตามช่องทางด้านล่าง
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
                {/* Left Column: Contact Info */}
                <div className="lg:col-span-2 card p-6 md:p-8 backdrop-blur-sm bg-black/20 border border-white/10 space-y-8">
                    {/* Address */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-ci-gold flex items-center gap-3">
                            <FontAwesomeIcon icon={faBuilding} />
                            ที่อยู่และเบอร์โทรศัพท์
                        </h2>
                        <div className="pl-8 space-y-2 text-white/80">
                            <p className="font-semibold text-white">คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น</p>
                            <p>123 ถ.มิตรภาพ ต.ในเมือง<br/>อ.เมือง จ.ขอนแก่น 40002</p>
                            <a href="tel:043202396" className="flex items-center gap-3 pt-2 hover:text-ci-gold transition-colors">
                                <FontAwesomeIcon icon={faPhone} className="w-4" />
                                <span>043 202396 (โทรศัพท์/โทรสาร)</span>
                            </a>
                        </div>
                    </div>
                    
                    {/* Online Channels */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-ci-gold flex items-center gap-3">
                            <FontAwesomeIcon icon={faUserTie} />
                            ช่องทางออนไลน์
                        </h2>
                        <div className="pl-8 flex flex-wrap gap-3">
                            <a href="https://www.facebook.com/KKUThaiMusicContest" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="btn btn-secondary inline-flex items-center gap-2">
                                <FontAwesomeIcon icon={faFacebook} className="text-lg" />
                                <span>Facebook Page</span>
                            </a>
                            <a href="http://fa.kku.ac.th/" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="btn btn-secondary inline-flex items-center gap-2">
                                <FontAwesomeIcon icon={faGlobe} />
                                <span>เว็บไซต์คณะ</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Map */}
                <div className="lg:col-span-3 card p-2 backdrop-blur-sm bg-black/20 border border-white/10">
                     <iframe
                        className="w-full h-80 md:h-full rounded-lg"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps?q=Faculty%20of%20Fine%20and%20Applied%20Arts%2C%20Khon%20Kaen%20University&output=embed"
                        title="แผนที่คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น"
                    />
                </div>
            </div>

            {/* Team Members */}
            <div className="space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold font-sao text-ci-gold">
                        คณะทำงาน
                    </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} 
                             className="card p-5 text-center backdrop-blur-sm bg-black/20 border border-white/10 rounded-xl flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                            
                            {/* 2. Display Image or Placeholder */}
                            <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden bg-ci-purple-dark border-2 border-white/10 flex items-center justify-center">
                                {member.image ? (
                                    <Image
                                        src={member.image}
                                        alt={`รูปภาพของ ${member.name}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-300 group-hover:scale-110"
                                    />
                                ) : (
                                    <FontAwesomeIcon icon={faUserCircle} className="text-6xl text-ci-gold/40" />
                                )}
                            </div>

                            <h3 className="font-bold text-white text-md leading-tight">
                                {member.name}
                            </h3>
                            <p className="text-ci-gold text-sm font-medium my-2">
                                {member.role || "คณะทำงาน"}
                            </p>
                            <div className="mt-auto pt-3 space-y-2 text-sm w-full">
                                <a href={`mailto:${member.email}`} 
                                   className="text-white/70 flex items-center justify-center gap-2 hover:text-ci-gold transition-colors text-xs truncate">
                                    <FontAwesomeIcon icon={faEnvelope} className="w-3" />
                                    <span className="truncate">{member.email}</span>
                                </a>
                                {member.tel && (
                                    <a href={`tel:${member.tel}`} 
                                       className="text-white/70 flex items-center justify-center gap-2 hover:text-ci-gold transition-colors">
                                        <FontAwesomeIcon icon={faPhone} className="w-3" />
                                        <span>{member.tel}</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}