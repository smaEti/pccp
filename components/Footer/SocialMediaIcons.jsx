import { FaTelegram, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

function SocialMediaIcons() {
  return (
    <div className="flex justify-center pb-4 gap-5">
      <Link href="#" target="_blank" rel="noopener noreferrer">
        <FaTelegram className="w-6 h-6 text-orange-600/90 hover:text-orange-500/90 transition duration-300" />
      </Link>
      <Link href="#" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="w-6 h-6 text-orange-600/90 hover:text-orange-500/90 transition duration-300" />
      </Link>
      <Link href="#" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-6 h-6 text-orange-600/90 hover:text-orange-500/90 transition duration-300" />
      </Link>
    </div>
  );
}

export default SocialMediaIcons;
