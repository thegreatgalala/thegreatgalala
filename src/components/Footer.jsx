import React from "react";
import Sociallinks from "./ui-components/Sociallinks";
import tgglogo from "../assets/tgglogo.svg";
import PeriNeonize from "../assets/PeriNeonize.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="text-white text-xl tracking-tight lg:text-3xl w-full overflow-hidden px-6 py-2 flex flex-col items-center">
        <div
          className="my-6 flex items-center gap-4 text-center w-full justify-center sm:justify-normal 
                after:h-1 after:bg-gray-500 after:rounded-full after:content-[''] 
                after:flex-1 after:w-full sm:after:w-3/4 md:after:w-1/2 lg:after:w-1/4 xl:after:w-1/6 
                after:hidden sm:after:block"
        >
          Contact Us
        </div>
      </div>

      <div className="px-6 py-4 lg:py-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 py-6 text-base">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center space-y-4">
            <img
              src={PeriNeonize}
              alt="theme logo"
              className="w-1/2 max-w-xs rounded-lg shadow-md items-center"
              loading="lazy"
            />
            <img
              src={tgglogo}
              alt="Footer Banner"
              className="w-6/7 max-w-lg rounded-lg shadow-md"
              loading="lazy"
            />
          </div>

          {/* Coordinators Grid */}
          <div
            className="grid grid-cols-1 gap-6 py-6 md:grid-cols-3 text-center md:text-left"
            style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
          >
            <div>
              <h2 className="mb-4 text-xs font-semibold text-white uppercase">
                Staff Co-Ordinators
              </h2>
              <ul className="text-gray-300 text-sm">
                <li className="mb-4">Mr. Anil Kumar - 9566137223</li>
                <li className="mb-4">Dr. N. Thangam - 9025278164</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xs font-semibold text-white uppercase">
                Students Co-Ordinators
              </h2>
              <ul className="text-gray-300 text-sm">
                <li className="mb-4">Mr. S S Sujeeth - 9790232920</li>
                <li className="mb-4">Mr. Harish Babu - 9360491955</li>
                <li className="mb-4">Ms. Sabitha - 7603992191</li>
                <li className="mb-4">Ms. S. Divya - 9345375156</li>
                <li className="mb-4">Mr. Sai Prasanth- 7305608399</li>
              </ul>
            </div>
            <div className="w-full flex justify-center">
              <iframe
                title="Google Map"
                className="w-full max-w-sm h-48 rounded-lg shadow-lg border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.338419902346!2d80.05822857569747!3d12.885947216749166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f67971dc2abd%3A0xcbeea3c6a9d067b0!2sPERI%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1740861369666!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Copyright & Social Links Bar */}
      <div className="w-full bg-black py-4 px-4">
        <div
          className="w-full px-10 flex flex-col md:flex-row items-center justify-between text-sm"
          style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
        >
          <span className="text-sm text-gray-300 text-center md:text-left">
            © 2025{" "}
            <a
              href="https://peri.education/periit/index.php"
              className="text-white text-sm"
              style={{ fontFamily: "LexendDecaRegular, sans-serif" }}
            >
              PERI
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex items-center justify-center w-2/12">
            <a
              href="https://www.linkedin.com/in/the-great-galala-peri-fiesta/"
              className="m-2 hover:cursor-pointer"
              target="blank"
            >
              <LinkedInIcon fontSize="large" />
            </a>
            <a
              href="https://www.instagram.com/peri_neonize.25/"
              className="m-2 hover:cursor-pointer"
              target="blank"
            >
              <InstagramIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
