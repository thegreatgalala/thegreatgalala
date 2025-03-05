import React from "react";
import Sociallinks from "./ui-components/Sociallinks";
import tgglogo from "../assets/tgglogo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 w-full">
      <div className="text-white text-2xl tracking-tight lg:mt-16 lg:text-4xl w-full overflow-hidden px-6 py-4 flex-col items-center">
        <div
          className="my-8 flex items-center gap-4 after:h-2 after:bg-gray-300 after:rounded-full after:content-[''] 
                      after:flex-1 after:w-full sm:after:w-3/4 md:after:w-1/2 lg:after:w-1/4 xl:after:w-1/6 
                      after:hidden sm:after:block text-center"
        >
          Contact Us
        </div>
      </div>
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-8">
        {/* Image Section (Inside Footer) */}
        <div className="flex justify-center mb-6">
          <img
            src={tgglogo}
            alt="Footer Banner"
            className="w-full max-w-lg rounded-lg shadow-md"
          />
        </div>

        {/* Coordinators Grid */}
        <div className="grid grid-cols-1 gap-10 py-6 md:grid-cols-3 text-center md:text-left">
          <div>
            <h2 className="mb-10 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Student Coordinators
            </h2>
            <ul className="text-gray-300 dark:text-gray-400 font-medium">
              <li className="mb-4">Student 9039034903</li>
              <li className="mb-4">Student 9039034903</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-10 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Staff Coordinators
            </h2>
            <ul className="text-gray-600 dark:text-gray-400 font-medium">
              <li className="mb-4">Staff 9039034903</li>
              <li className="mb-4">Staff 9039034903</li>
            </ul>
          </div>
          <div>
            <iframe
              title="Google Map"
              className="w-full max-w-lg h-64 rounded-lg shadow-lg border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.338419902346!2d80.05822857569747!3d12.885947216749166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f67971dc2abd%3A0xcbeea3c6a9d067b0!2sPERI%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1740861369666!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Full-width Copyright & Social Links Bar */}
      <div className="w-full bg-gray-100 dark:bg-gray-700 py-6 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 text-center md:text-left">
            © 2025 <a href="https://peri.education/periit/index.php">PERI</a>.
            All Rights Reserved.
          </span>
          <div className="flex mt-4 md:mt-0 space-x-5">
            <Sociallinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
