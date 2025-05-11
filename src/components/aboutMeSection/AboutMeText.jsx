import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Saya Danuar Ihza Mahendra, Mahasiswa Semester 6 Program Studi Rekayasa Perangkat Lunak di Universitas Telkom Purwokerto dengan fokus pada Fullstack Web Development.
        Berpengalaman mengembangkan aplikasi web dan mobile di sisi frontend maupun backend. Saya antusias mempelajari teknologi baru, senang berkolaborasi dalam tim, dan selalu berusaha memberikan kontribusi terbaik dalam setiap proyek yang saya kerjakan.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
