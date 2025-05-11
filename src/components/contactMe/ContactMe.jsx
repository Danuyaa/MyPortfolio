import { useRef, useState } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const SingleInfo = ({ text, Icon }) => (
  <div className="flex gap-4 items-center justify-start">
    <Icon className="text-3xl" />
    <p>{text}</p>
  </div>
);

SingleInfo.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

const SingleContactSocial = ({ Icon, link }) => (
  <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center">
    <a href={link} className="cursor-pointer" target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  </div>
);

SingleContactSocial.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
};

const ContactInfo = () => (
  <div className="flex flex-col gap-4">
    <SingleInfo text="danuarim09@gmail.com" Icon={HiOutlineMail} />
    <SingleInfo text="+62 822 5834 6648" Icon={FiPhone} />
    <SingleInfo text="Purwokerto, Indonesia" Icon={IoLocationOutline} />
  </div>
);

const ContactSocial = () => (
  <div className="flex gap-4">
    <SingleContactSocial link="https://www.linkedin.com/in/danuar-im-650007252/" Icon={FaLinkedinIn} />
    <SingleContactSocial link="https://github.com/Danuyaa" Icon={FiGithub} />
    <SingleContactSocial link="https://www.instagram.com/danuuyaa_/?next=%2F" Icon={FaInstagram} />
  </div>
);

const ContactText = () => (
  <div>
    <h2 className="text-orange text-3xl mb-4">Hubungi Saya</h2>
    <p>
      Jangan ragu untuk menghubungi saya jika Anda ingin
      <br />
      berkolaborasi atau memiliki pertanyaan tinggal klik tombol di bawah!
    </p>
  </div>
);

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_jzia1lg", "template_4qtv1rd", form.current, {
        publicKey: "KfnfRRiGHw5zxVyan",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          rows="9"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

const ContactMeLeft = () => (
  <div className="flex flex-col gap-8 w-full">
    <ContactText />
    <ContactForm />
  </div>
);

const ContactMeRight = () => (
  <div className="flex flex-col items-center justify-center gap-12">
    <img
      src="/images/email-image.png"
      alt="email illustration"
      className="max-w-[300px]"
    />
    <ContactInfo />
    <ContactSocial />
  </div>
);

const ContactMe = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4"
    >
      <h2 className="text-6xl text-cyan mb-10 text-center">Contact Me</h2>
      <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMe;
