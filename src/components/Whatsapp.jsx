import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import whatsappIcon from '../assets/images/whatsapp.png';

const Whatsapp = () => {
  const phoneNumber = '3017522772';
  const [isBouncing, setIsBouncing] = useState(false);

  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, '_blank');
    return true;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBouncing(true);
      setTimeout(() => {
        setIsBouncing(false);
      }, 200);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-50">
      <Link to="#" onClick={handleWhatsAppClick} target="_blank">
        <img
          className={`w-12 h-auto transition-transform sm:w-14 md:w-12 lg:w-16 
          ${isBouncing ? 'transform scale-110' : ''
            }`}
          src={whatsappIcon}
          alt="WhatsApp"
        />
      </Link>
    </div>
  );
};

export default Whatsapp;


