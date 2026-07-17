/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookMessenger, FaWhatsapp, FaTimes, FaComments } from 'react-icons/fa';

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleMessenger = () => {
    window.open('https://m.me/YOUR_PAGE_USERNAME', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/YOUR_NUMBER', '_blank');
  };

  const popupVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  };

  const buttonRotate = isOpen ? 45 : 0;

  return (
    <div className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close contact widget' : 'Open contact widget'}
        aria-expanded={isOpen}
        className="w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-xl flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
      >
        <motion.div
          animate={{ rotate: buttonRotate }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaComments className="w-6 h-6" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={popupRef}
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute bottom-24 right-0 bg-white rounded-3xl shadow-2xl overflow-hidden"
            style={{
              width: 'clamp(280px, 95vw, 420px)',
            }}
          >
            <div className="flex flex-col">
             
              <div className="px-6 pb-6 pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  Hi There! 👋
                </h2>
                <p className="text-gray-600 text-sm sm:text-[14px] mb-6 leading-relaxed">
                  Let us know if we can help you with anything at all
                </p>

                <button
                  onClick={handleMessenger}
                  aria-label="Contact us via Facebook Messenger"
                  className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3  px-4 rounded-2xl flex items-center justify-center gap-3 mb-3 transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  <FaFacebookMessenger className="w-5 h-5" />
                  <span>Messenger</span>
                </button>

                <button
                  onClick={handleWhatsApp}
                  aria-label="Contact us via WhatsApp"
                  className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold py-3  px-4 rounded-2xl flex items-center justify-center gap-3 transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}