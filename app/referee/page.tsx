export default function Referee() {
    const referees = [
        { name: "ครูพัฒนี พร้อมสมบัติ", affiliation: "ผู้เชี่ยวชาญ", position: "", image: "/ci/pathanee.png" },
        { name: "ผศ.ศุภกิจ จารุจรณ", affiliation: "ผู้เชี่ยวชาญ", image: "/ci/supakit.jpg" },
        { name: "ผศ.ดร.อำนาจ บุญอนนต์", affiliation: "คณะมนุษยศาสตร์และสังคมศาสตร์ มหาวิทยาลัยราชภัฏอุตรดิตถ์", position: "", image: "/ci/Amnat.png" },
        { name: "ดร.ศิลปชัย เจริญ", affiliation: "คณะมนุษยศาสตร์และสังคมศาสตร์ มหาวิทยาลัยราชภัฏอุดรธานี", position: "", image: "/ci/silpachai.jpg" },
        { name: "ผศ.ดร.ณัฐชยา นัจจนาวากุล", affiliation: "วิทยาลัยดุริยางคศิลป์ มหาวิทยาลัยมหิดล", position: "", image: "https://www.music.mahidol.ac.th/wp-content/uploads/2021/12/Natchaya-Natchanawakul.jpg" },
        { name: "ดร.พิษณุ บุญศรีอนันต์", affiliation: "วิทยาลัยดุริยางคศิลป์ มหาวิทยาลัยมหาสารคาม", position: "", image: "/ci/pitsanu.jpg" },
        { name: "รศ.ดร.จตุพร สีม่วง", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น", image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c8753694f971.webp" },
        { name: "รศ.จรัญ กาญจนประดิษฐ์", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น", image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c875369dd496.webp" },
        { name: "ผศ.ดร.สันติ อุดมศรี", affiliation: "คณะดนตรีและการแสดง มหาวิทยาลัยบูรพา", position: "", image: "https://static.wixstatic.com/media/e80224_f5daf7fa62bd4375970e70b7f0693f1d~mv2.jpg/v1/fill/w_467,h_582,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e80224_f5daf7fa62bd4375970e70b7f0693f1d~mv2.jpg" },
        { name: "ผศ.ดร.สุวรรณี ชูเสน", affiliation: "คณะศิลปะนาฏดุริยางค์ สถาบันบัณฑิตพัฒนศิลป์", position: "", image: "/ci/suwanee.jpg" },
        { name: "ผศ.ดร.ปาณิสรา เผือกแห้ว", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยรามคำแหง", position: "", image: "/ci/panisara.jpg" },
        { name: "รศ.ดร.ธรณัส หินอ่อน", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น", image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c874de13eee8-1.webp" },
        { name: "ผศ.ดร.พรชัย ผลนิโครธ", affiliation: "คณะมนุษยศาสตร์ มหาวิทยาลัยนเรศวร", image: "/ci/pornchai.jpg" },
        { name: "ผศ.บุตรี สุขปาน", affiliation: "คณะมนุษยศาสตร์ มหาวิทยาลัยนเรศวร", image: "https://mis.human.nu.ac.th/e-profiles/picup/large/2020_09_14_14_31_51.jpg" },
        { name: "ผศ.ดร.วัศการก แก้วลอย", affiliation: "คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น", image: "https://fa.kku.ac.th/wp-content/uploads/2022/11/5c87536c45566.webp" },
        { name: "ผศ.ดร.พนาสินธุ์ ศรีวิเศษ", affiliation: "มหาวิทยาลัยราชภัฏบุรีรัมย์", position: "", image: "/ci/Panasin.png" },
        { name: "อ.กฤษฏิ์ โพชนุกูล", affiliation: "วิทยาลัยนาฏศิลปพัทลุง", image: "/ci/pochanukul.jpg" },
        { name: "ดร.ธนรัฐ อยู่สุขเจริญ", affiliation: "วิทยาลัยนาฏศิลปสุโขทัย", image: "/ci/thanarat.jpg" },
        { name: "ผศ.ดร.คมกริช การินทร์", affiliation: "วิทยาลัยดุริยางคศิลป์ มหาวิทยาลัยมหาสารคาม", position: "", image: "/ci/komgrich.jpg" },
        { name: "ผศ.(พิเศษ)ชยุติ ทัศนวงศ์วรา", affiliation: "ผู้เชี่ยวชาญ", image: "/ci/chayuti.jpg" },
        { name: "อ.ธีรวิทย์ กลิ่นจุ้ย", affiliation: "คณะศึกษาศาสตร์ มหาวิทยาลัยขอนแก่น", image: "/ci/Theerawit.png" },
        { name: "อ.นิติพงษ์ ใคร่รู้", affiliation: "คณะครุศาสตร์ มหาวิทยาลัยราชภัฏบุรีรัมย์", image: "/ci/nitipong.jpg" },
    ];

    const categories = [
        {
            level: "ระดับประถมศึกษา",
            instruments: [
                {
                    name: "ซอด้วง",
                    judges: ["ผศ.ดร.อำนาจ บุญอนนต์", "ผศ.ดร.พนาสินธุ์ ศรีวิเศษ", "อ.ธีรวิทย์ กลิ่นจุ้ย"],
                    song: "ช้างประสานงา สองชั้น",
                },
                {
                    name: "ซออู้",
                    judges: ["ผศ.ดร.สุวรรณี ชูเสน", "ผศ.ดร.พนาสินธุ์ ศรีวิเศษ", "อ.ธีรวิทย์ กลิ่นจุ้ย"],
                    song: "ช้างประสานงา สองชั้น",
                },
                {
                    name: "จะเข้",
                    judges: ["ผศ.ดร.ณัฐชยา นัจจนาวากุล", "รศ.ดร.จตุพร สีม่วง", "อ.กฤษฏิ์ โพชนุกูล"],
                    song: "ช้างประสานงา สองชั้น",
                },
                {
                    name: "ขับร้อง",
                    judges: ["ครูพัฒนี พร้อมสมบัติ", "อ.นิติพงษ์ ใคร่รู้", "ผศ.บุตรี สุขปาน"],
                    song: "เชื้อ สองชั้น",
                },
                {
                    name: "ขิม",
                    judges: ["ดร.ศิลปชัย เจริญ", "รศ.ดร.จตุพร สีม่วง", "อ.กฤษฏิ์ โพชนุกูล"],
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
                    judges: ["ผศ.ดร.อำนาจ บุญอนนต์", "ผศ.ดร.สุวรรณี ชูเสน", "รศ.ดร.ธรณัส หินอ่อน"],
                    song: "ต้นเพลงฉิ่ง สองชั้น",
                },
                {
                    name: "ซอด้วง",
                    judges: ["ผศ.ดร.อำนาจ บุญอนนต์", "ผศ.ดร.สุวรรณี ชูเสน", "อ.ธีรวิทย์ กลิ่นจุ้ย"],
                    song: "อัปสรสำอาง สองชั้น",
                },
                {
                    name: "ซออู้",
                    judges: ["ผศ.ดร.อำนาจ บุญอนนต์", "ผศ.ดร.สุวรรณี ชูเสน", "ผศ.ดร.พนาสินธุ์ ศรีวิเศษ"],
                    song: "อัปสรสำอาง สองชั้น",
                },
                {
                    name: "จะเข้",
                    judges: ["ผศ.ดร.ณัฐชยา นัจจนาวากุล", "อ.กฤษฏิ์ โพชนุกูล", "ผศ.บุตรี สุขปาน"],
                    song: "สุดสงวน สามชั้น",
                },
                {
                    name: "ขับร้อง",
                    judges: ["ครูพัฒนี พร้อมสมบัติ", "ผศ.บุตรี สุขปาน", "ดร.ธนรัฐ อยู่สุขเจริญ"],
                    song: "นกขมิ้น สามชั้น",
                },
                {
                    name: "ขลุ่ยเพียงออ",
                    judges: ["ดร.ศิลปชัย เจริญ", "รศ.จรัญ กาญจนประดิษฐ์", "ผศ.ดร.ปาณิสรา เผือกแห้ว"],
                    song: "กล่อมนารี สามชั้น",
                },
                {
                    name: "ระนาดเอก",
                    judges: ["ผศ.ดร.สันติ อุดมศรี", "ดร.พิษณุ บุญศรีอนันต์", "ผศ.ดร.พรชัย ผลนิโครธ"],
                    song: "การเวกเล็ก สามชั้น",
                },
                {
                    name: "ระนาดทุ้ม",
                    judges: ["ผศ.ดร.คมกริช การินทร์", "ผศ.ดร.วัศการก แก้วลอย", "ผศ.(พิเศษ)ชยุติ ทัศนวงศ์วรา"],
                    song: "การเวกเล็ก สามชั้น",
                },
                {
                    name: "ฆ้องวงใหญ่",
                    judges: ["ผศ.ดร.คมกริช การินทร์", "ผศ.ดร.สันติ อุดมศรี", "ผศ.ดร.วัศการก แก้วลอย"],
                    song: "การเวกเล็ก สามชั้น",
                },
                {
                    name: "ฆ้องวงเล็ก",
                    judges: ["ผศ.ดร.สันติ อุดมศรี", "ผศ.ดร.พรชัย ผลนิโครธ", "ดร.พิษณุ บุญศรีอนันต์"],
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
