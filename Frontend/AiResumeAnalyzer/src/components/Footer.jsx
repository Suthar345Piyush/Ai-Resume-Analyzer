import React from 'react';
import { FaGithub,  FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: 'https://github.com/yourusername',
      icon: <FaGithub className="w-5 h-5" />,
      label: 'GitHub'
    },
    {
      href: 'https://x.com/PiyushS35',
      icon: <FaXTwitter className="w-5 h-5"/>,
      label: 'Twitter'
    },
    {
      href: 'https://www.linkedin.com/in/piyush-suthar-641a0826a/',
      icon: <FaLinkedin className="w-5 h-5" />,
      label: 'LinkedIn'
    }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-0">
          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-300 text-sm order-2 md:order-1">
            © {currentYear} Made by Piyush with ❤️
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 order-1 md:order-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
