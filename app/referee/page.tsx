export default function Referee() {
    const referees = [
        { name: "ครูพัฒนี พร้อมสมบัติ", affiliation: "ผู้เชี่ยวชาญ", position: "", image: "/ci/pathanee.png" },
        { name: "ศ.ดร.เฉลิมศักดิ์ พิกุลศรี", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น", image: "/ci/chalermsak.jpg" },
        { name: "ผศ.ศุภกิจ จารุจรณ", affiliation: "ผู้เชี่ยวชาญ", image: "/ci/supakit.jpg" },
        { name: "ดร.ศิลปชัย เจริญ", affiliation: "คณะมนุษยศาสตร์และสังคมศาสตร์ มหาวิทยาลัยราชภัฏอุดรธานี", position: "", image: "/ci/silpachai.jpg" },
        { name: "ผศ.ดร.ณัฐชยา นัจจนาวากุล", affiliation: "วิทยาลัยดุริยางคศิลป์ มหาวิทยาลัยมหิดล", position: "", image: "https://www.music.mahidol.ac.th/wp-content/uploads/2021/12/Natchaya-Natchanawakul.jpg" },
        { name: "ดร.พิษณุ บุญศรีอนันต์", affiliation: "วิทยาลัยดุริยางคศิลป์ มหาวิทยาลัยมหาสารคาม", position: "", image: "/ci/pitsanu.jpg" },
        { name: "รศ.ดร.จตุพร สีม่วง", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น", image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c8753694f971.webp" },
        { name: "ผศ.ดร.คมกริช การินทร์", affiliation: "วิทยาลัยดุริยางคศิลป์ มหาวิทยาลัยมหาสารคาม", position: "", image: "/ci/komgrich.jpg" },
        { name: "ผศ.กฤตษิพัฒน์ เอื้อจิตรเมศ", affiliation: "คณะมนุษยศาสตร์และสังคมศาสตร์ มหาวิทยาลัยราชภัฏนครศรีธรรมราช", position: "", image: "/ci/kritsipat.jpg" },
        { name: "รศ.จรัญ กาญจนประดิษฐ์", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น", image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c875369dd496.webp" },
        { name: "ผศ.ดร.วิชฏาลัมพก์ เหล่าวานิช", affiliation: "คณะครุศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย", image: "https://static.wixstatic.com/media/a0425a_3b7a6b7206814bb89bce753139649038~mv2.jpg/v1/crop/x_0,y_92,w_3266,h_3217/fill/w_680,h_670,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/240620_H0717.jpg" },
        { name: "ผศ.ดร.สันติ อุดมศรี", affiliation: "คณะดนตรีและการแสดง มหาวิทยาลัยบูรพา", position: "", image: "https://static.wixstatic.com/media/e80224_f5daf7fa62bd4375970e70b7f0693f1d~mv2.jpg/v1/fill/w_467,h_582,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e80224_f5daf7fa62bd4375970e70b7f0693f1d~mv2.jpg" },
            { name: "ผศ.ดร.สุวรรณี ชูเสน", affiliation: "คณะศิลปะนาฏดุริยางค์ สถาบันบัณฑิตพัฒนศิลป์", position: "", image: "/ci/suwanee.jpg" },
        { name: "ผศ.ดร.ปาณิสรา เผือกแห้ว", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยรามคำแหง", position: "", image: "/ci/panisara.jpg" },
        { name: "รศ.ดร.ธรณัส หินอ่อน", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น", image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c874de13eee8-1.webp" },
        { name: "ผศ.บุตรี สุขปาน", affiliation: "คณะมนุษยศาสตร์ มหาวิทยาลัยนเรศวร", image: "https://mis.human.nu.ac.th/e-profiles/picup/large/2020_09_14_14_31_51.jpg" },
        { name: "ผศ.พรชัย ผลนิโครธ", affiliation: "คณะมนุษยศาสตร์ มหาวิทยาลัยนเรศวร", image: "ci/pornchai.jpg" },
        { name: "ผศ.ดร.วัศการก แก้วลอย", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น", image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c87536c45566.webp" },
        { name: "อ.กฤษฏิ์ โพชนุกูล", affiliation: "วิทยาลัยนาฏศิลปพัทลุง", image: "/ci/pochanukul.jpg" },
        { name: "ดร.ธนรัฐ อยู่สุขเจริญ", affiliation: "วิทยาลัยนาฏศิลปสุโขทัย", image: "/ci/thanarat.jpg" },
        { name: "อ.นิติพงษ์ ใคร่รู้", affiliation: "คณะครุศาสตร์ มหาวิทยาลัยราชภัฏบุรีรัมย์", image: "/ci/nitipong.jpg" },
        { name: "ดร.ราชันย์ เจริญแก่นทราย", affiliation: "คณะครุศาสตร์และการพัฒนามนุษย์ มหาวิทยาลัยราชภัฏร้อยเอ็ด", image: "/ci/rachun.jpg" },
        { name: "ผศ.(พิเศษ)ชยุติ ทัศนวงศ์วรา", affiliation: "ผู้เชี่ยวชาญ", image: "ci/chayuti.jpg" },
    ];

    const categories = [
        {
            level: "ระดับประถมศึกษา",
            instruments: [
                {
                    name: "ซอด้วง และซออู้",
                    judges: ["รศ.ดร.ธรณัส หินอ่อน", "ผศ.ดร.สุวรรณี ชูเสน", "ผศ.ดร.วิชฏาลัมพ์ เหล่าวานิช"],
                    song: "ช้างประสานงา สองชั้น",
                },
                {
                    name: "จะเข้",
                    judges: ["ผศ.ดร.ณัฐชยา นัจจนาวากุล", "ดร.ราชันย์ เจริญแก่นทราย", "อ.กฤษฏิ์ โพชนุกูล"],
                    song: "ช้างประสานงา สองชั้น",
                },
                {
                    name: "ขับร้อง",
                    judges: ["ผศ.บุตรี สุขปาน", "ดร.ธนรัฐ อยู่สุขเจริญ", "อ.นิติพงษ์ ใคร่รู้"],
                    song: "เชื้อ สองชั้น",
                },
                {
                    name: "ขิม",
                    judges: ["ดร.ศิลปชัย เจริญ", "รศ.ดร.จตุพร สีม่วง", "ผศ.พรชัย ผลนิโครธ"],
                    song: "เพลงนาคบริพัตร สองชั้น",
                },
                {
                    name: "ขลุ่ยเพียงออ",
                    judges: ["รศ.จรัญ กาญจนประดิษฐ์", "ผศ.ศุภกิจ จารุจรณ", "ผศ.ดร.ปาณิสรา เผือกแห้ว"],
                    song: "กระบี่ลีลา สองชั้น",
                },
            ],
        },
        {
            level: "ระดับมัธยมศึกษา",
            instruments: [
                {
                    name: "ซอสามสาย",
                    judges: ["ผศ.กฤตษิพัฒน์ เอื้อจิตรเมศ", "ผศ.ดร.สุวรรณี ชูเสน", "รศ.ดร.ธรณัส หินอ่อน"],
                    song: "ต้นเพลงฉิ่ง สองชั้น",
                },
                {
                    name: "ซอด้วง และซออู้",
                    judges: ["ผศ.กฤตษิพัฒน์ เอื้อจิตรเมศ", "ผศ.ดร.สุวรรณี ชูเสน", "ผศ.ดร.วิชฏาลัมพก์ เหล่าวานิช"],
                    song: "ถอนสมอ สองชั้น",
                },
                {
                    name: "จะเข้",
                    judges: ["ผศ.ดร.ณัฐชยา นัจจนาวากุล", "ดร.ราชันย์ เจริญแก่นทราย", "อ.กฤษฏิ์ โพชนุกูล"],
                    song: "สุดสงวน สามชั้น",
                },
                {
                    name: "ขับร้อง",
                    judges: ["ครูพัฒนี พร้อมสมบัติ", "รศ.ดร.จตุพร สีม่วง", "ผศ.บุตรี สุขปาน"],
                    song: "นกขมิ้น สามชั้น",
                },
                {
                    name: "ขลุ่ยเพียงออ",
                    judges: ["ดร.ศิลปชัย เจริญ", "รศ.จรัญ กาญจนประดิษฐ์", "ผศ.ดร.ปาณิสรา เผือกแห้ว"],
                    song: "กล่อมนารี สามชั้น",
                },
                {
                    name: "ระนาดเอก",
                    judges: ["ศ.ดร.เฉลิมศักดิ์ พิกุลศรี", "ดร.พิษณุ บุญศรีอนันต์", "ผศ.พรชัย ผลนิโครธ"],
                    song: "การเวกเล็ก สามชั้น",
                },
                {
                    name: "ระนาดทุ้ม",
                    judges: ["ผศ.ดร.วัศการก แก้วลอย", "ผศ.ดร.คมกริช การินทร์", "ผศ.(พิเศษ)ชยุติ ทัศนวงศ์วรา"],
                    song: "การเวกเล็ก สามชั้น",
                },
                {
                    name: "ฆ้องวงใหญ่",
                    judges: ["ผศ.ดร.คมกริช การินทร์", "ผศ.ดร.สันติ อุดมศรี", "ผศ.ดร.วัศการก แก้วลอย"],
                    song: "การเวกเล็ก สามชั้น",
                },
                {
                    name: "ฆ้องวงเล็ก",
                    judges: ["ผศ.ดร.สันติ อุดมศรี", "ผศ.พรชัย ผลนิโครธ", "ดร.พิษณุ บุญศรีอนันต์"],
                    song: "การเวกเล็ก สามชั้น",
                }
            ],
        },
    ];

    return (
        <div className="space-y-10 fade-in">
            <h1 className="text-3xl font-bold text-ci-gold font-sao text-center">
                คณะกรรมการตัดสินการประกวดดนตรีไทย ครั้งที่ ๒๕
            </h1>

            {/* รายชื่อคณะกรรมการ */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {referees.map((referee, index) => (
                    <div key={index} className="card p-5 space-y-3">
                        <img
                            src={referee.image}
                            alt={referee.name}
                            className="w-32 h-32 object-cover rounded-full mx-auto"
                        />
                        <h3 className="font-semibold text-center">{referee.name}</h3>
                        {referee.position && <p className="text-center text-ci-gold">{referee.position}</p>}
                        <p className="text-center text-white/80">{referee.affiliation}</p>
                    </div>
                ))}
            </div>

            {/* รายละเอียดการตัดสิน */}
            {categories.map((category, index) => (
                <div key={index} className="space-y-6">
                    <h2 className="text-2xl font-bold text-ci-gold">{category.level}</h2>
                    {category.instruments.map((instrument, idx) => (
                        <div key={idx} className="card p-5 space-y-3">
                            <h3 className="font-semibold text-ci-gold">{instrument.name}</h3>
                            <hr className="border-t border-white/30" />
                            <p className="text-white/80">เพลงที่ใช้ประกวด <span><b>{instrument.song}</b></span></p>
                            <p className="text-white/80">กรรมการตัดสิน:</p>
                            <ul className="list-disc ml-5 text-white/80">
                                {instrument.judges.map((judge, jIndex) => (
                                    <li key={jIndex}>{judge}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
