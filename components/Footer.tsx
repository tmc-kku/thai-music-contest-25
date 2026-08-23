import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-ci-purple relative pt-16 pb-8 font-kku border-t-2 border-ci-gold/30">
      {/* Effect */}
      <div className="absolute top-0 left-0 w-full h-2 bg-ci-gold/20 blur-xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          
          {/* Column 1: About & Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/ci/KKU-gold.svg" alt="KKU Logo" width={40} height={40} />
              <div>
                <h3 className="text-xl font-sao font-bold text-ci-gold">
                  การประกวดดนตรีไทย
                </h3>
                <p className="text-white/60 font-sao text-ms">ภาคตะวันออกเฉียงเหนือ</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              ภาควิชาดนตรีไทย สาขาดนตรีและการแสดง<br />
              คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-sao font-bold text-ci-gold">ลิงก์เว็บไซต์</h3>
            <ul className="space-y-2">
              <li><Link href="/schedule" className="footer-link">กำหนดการ</Link></li>
              <li><Link href="/finalists" className="footer-link">รายชื่อผู้เข้ารอบ</Link></li>
              <li><Link href="/band" className="footer-link">รายชื่อวงดนตรี</Link></li>
              <li><Link href="/referee" className="footer-link">คณะกรรมการ</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-2 lg:col-span-2 space-y-3">
            <h3 className="text-lg font-sao font-bold text-ci-gold">ติดต่อสอบถาม</h3>
            <div className="space-y-3">
              <p className="flex items-start gap-3 text-sm text-white/80">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-ci-gold w-4 mt-1 flex-shrink-0" />
                <span>คณะศิลปกรรมศาสตร์ 123 ถ.มิตรภาพ ต.ในเมือง อ.เมือง จ.ขอนแก่น 40002</span>
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                <p className="flex items-center gap-3 text-sm text-white/80">
                  <FontAwesomeIcon icon={faPhone} className="text-ci-gold w-4" />
                  <a href="tel:043202396" className="hover:text-ci-gold transition-colors">043-202396</a>
                </p>
                <p className="flex items-center gap-3 text-sm text-white/80">
                  <FontAwesomeIcon icon={faEnvelope} className="text-ci-gold w-4" />
                  <a href="pburin@kku.ac.th" className="hover:text-ci-gold transition-colors">pburin@kku.ac.th</a>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10">
          <p className="text-white/50 text-xs text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear() + 543} คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น | Developed by Yanakon S.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/profile.php?id=100057643420110" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook Page"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-ci-gold hover:text-ci-purple transition-all duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}