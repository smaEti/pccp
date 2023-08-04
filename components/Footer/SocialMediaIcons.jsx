import React from 'react';
import { FaTelegram, FaInstagram, FaLinkedin } from 'react-icons/fa';

function SocialMediaIcons() {
  return (
    <div className="flex justify-center pb-4 gap-5">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaTelegram className="w-6 h-6 text-orange-600 hover:text-orange-500 transition duration-300" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="w-6 h-6 text-orange-600 hover:text-orange-500 transition duration-300" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-6 h-6 text-orange-600 hover:text-orange-500 transition duration-300" />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
