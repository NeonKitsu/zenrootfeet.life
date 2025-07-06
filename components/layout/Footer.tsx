
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 text-stone-600 py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/about" className="hover:text-amber-800 transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-amber-800 transition-colors">Contact</Link>
          <Link to="/legal" className="hover:text-amber-800 transition-colors">Legal & Disclaimers</Link>
        </div>
        <p className="text-xs max-w-2xl mx-auto">
          <strong>Medical Disclaimer:</strong> The content on zenrootfeet.life is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>
        <p className="text-sm mt-4">&copy; {new Date().getFullYear()} ZenRootFeet.life. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;