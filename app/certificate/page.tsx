import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faDownload } from "@fortawesome/free-solid-svg-icons";

const certificateFolderUrl =
  "https://drive.google.com/drive/folders/19DxR8R3l9rFR655HisQLOfttr9bAVNnc?usp=sharing";

export default function CertificatePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-8 font-kku fade-in">
      <header className="text-center">
        <FontAwesomeIcon icon={faAward} className="mb-4 text-5xl text-ci-gold" />
        <h1 className="text-4xl font-bold text-ci-gold font-sao md:text-5xl">เกียรติบัตร</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          ดาวน์โหลดเกียรติบัตรการประกวดดนตรีไทย ภาคตะวันออกเฉียงเหนือ ครั้งที่ ๒๕
        </p>
      </header>

      <section className="card border border-ci-gold/30 bg-black/20 p-6 text-center backdrop-blur-sm sm:p-10">
        <p className="text-white/80">
          สามารถดาวน์โหลดเกียรติบัตรได้จากโฟลเดอร์ Google Drive ของการประกวด
        </p>
        <a
          href={certificateFolderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-6 inline-flex items-center justify-center gap-2"
        >
          <FontAwesomeIcon icon={faDownload} />
          ดาวน์โหลดเกียรติบัตร
        </a>
      </section>
    </div>
  );
}