import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaBandcamp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">

        {/* Send Message Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Send us a message!</h3>
          <form className="flex flex-col items-center">
            <textarea
              placeholder="Type your message here"
              className="w-1/2 max-w-md px-4 py-2 text-black rounded-md mb-4 focus:outline-none"
              rows="4"
            />
            <button type="submit" className="px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200">
              Send Message
            </button>
          </form>
        </div>

        {/* <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:opacity-75">
            <FaFacebook className="w-8 h-8" />
          </a>
          <a href="#" className="hover:opacity-75">
            <FaInstagram className="w-8 h-8" />
          </a>
          <a href="#" className="hover:opacity-75">
            <FaTiktok className="w-8 h-8" />
          </a>
          <a href="#" className="hover:opacity-75">
            <FaBandcamp className="w-8 h-8" />
          </a>
        </div> */}

        <div className="mb-4">
          <img src="/Pi7_logo1.png" alt="Nixie" className="mx-auto w-20 h-auto" />
        </div>

        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Account</a>
        </div>

        <div className="mt-4 text-sm">
          <p className="mb-2">©Copyright 2024 CareConnect, Inc All Rights Reserved</p>
          <p className="space-x-4">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Refunds</a>
            <a href="#" className="hover:underline">Site by Manufacturer</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
