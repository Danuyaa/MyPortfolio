import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
    >
      {/* About Me Text */}
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
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
      </motion.div>

      {/* About Me Image */}
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="h-[500px] w-[300px] relative">
          <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
            <img
              src="/images/about.jpg"
              alt="About Me Image"
              className="h-full w-auto object-cover"
            />
          </div>
          <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
