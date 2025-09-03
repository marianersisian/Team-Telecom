import { FaFacebookF, FaInstagram, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa';
import React, { FC } from 'react';

interface FooterColumn {
  image: string;
  title: string;
  items: string[];
}

interface FooterProps {
  data: FooterColumn[];
}

const Footer: FC<FooterProps> = ({ data }) => {
  return (
    <>
      <footer className="bg-[#01415F] text-white py-10 px-6 w-full">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {/* Լոգո և սոցիալական */}
          <div>
            <a href="/">
              <img src="https://www.telecomarmenia.am/img/logo-light.svg?v=1" alt="Telecom Armenia Logo" className="w-[150px] h-[60px]" />
            </a>
            <div className="flex space-x-3 mb-4 text-xl mt-4">
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
            </div>
            <div className="text-sm space-y-2">
              <div className="flex items-center gap-2"><FaPhone /> 100</div>
              <div className="flex items-center gap-2"><FaEnvelope /> info@telecomarmenia.am</div>
            </div>
            <div className="flex gap-4 pt-7">
              <img src="https://www.telecomarmenia.am/img/redesign/qr.svg" alt="QR Code" className="w-[100px] h-[100px] mt-3" />
              <div>
                <img src="https://www.telecomarmenia.am/img/redesign/app_store.png" alt="App Store" className="w-[180px] h-[50px] mb-4" />
                <img src="https://www.telecomarmenia.am/img/redesign/google_play.png" alt="Google Play" className="w-[180px] h-[50px]" />
              </div>
            </div>
          </div>

          {/* Մնացած տվյալներ */}
          {data.map((column, index) => (
            <div key={index} className='pl-7'>
              <img src={column.image} alt={column.title} />
              <h2 className="text-lg font-semibold my-3">{column.title}</h2>
              <ul className="text-sm space-y-1">
                {column.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='w-full h-[40px] bg-[#022739] text-center pt-3 text-white text-[11px]'>
        Team © 2025
      </div>
    </>
  );
};

export default Footer;
