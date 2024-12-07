import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex justify-between">
        <div className="text-lg font-semibold">Marrfa</div>
        &nbsp;
        <div className="space-x-6">
          <a href="#privacy" className="text-lg text-gray-300 hover:text-white">Privacy Policy</a>
          <a href="#tos" className="text-lg text-gray-300 hover:text-white">Terms of Service</a>
          <a href="#support" className="text-lg text-gray-300 hover:text-white">Support</a>
        </div>
      </div>
      <div className="text-center mt-4 text-gray-400 text-sm">created by Vishal Rathod © 2024 Marrfa. All Rights Reserved. </div>

    </footer>
  );
};

export default Footer;
