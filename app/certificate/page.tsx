import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faDownload, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const certificateFolders = [
  {
    level: "ระดับประถมศึกษา",
    description: "เกียรติบัตรสำหรับผู้เข้าร่วมการประกวดระดับประถมศึกษา",
    url: "https://drive.google.com/drive/folders/1P80ED1FJUcuAhu-Srhtfy8ySEmuLLEQV",
  },
  {
    level: "ระดับมัธยมศึกษา",
    description: "เกียรติบัตรสำหรับผู้เข้าร่วมการประกวดระดับมัธยมศึกษา",
    url: "https://drive.google.com/drive/folders/1ibN_wCxjPhc3O9wxYSX4GGYtDljBc-Uj",
  },
];

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

      <section className="grid gap-6 md:grid-cols-2">
        {certificateFolders.map((certificate) => (
          <article
            key={certificate.level}
            className="card border border-ci-gold/30 bg-black/20 p-6 text-center backdrop-blur-sm sm:p-8"
          >
            <FontAwesomeIcon icon={faGraduationCap} className="mb-4 text-4xl text-ci-gold" />
            <h2 className="text-2xl font-bold text-ci-gold font-sao">{certificate.level}</h2>
            <p className="mt-3 text-white/80">{certificate.description}</p>
            <a
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-6 inline-flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faDownload} />
              ดาวน์โหลดเกียรติบัตร
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}