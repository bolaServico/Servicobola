import React from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingLink: string;
  isDarkMode: boolean;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, bookingLink, isDarkMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className={`fixed inset-0 transition-opacity ${
          isDarkMode ? 'bg-black bg-opacity-90' : 'bg-black bg-opacity-75'
        }`} onClick={onClose}></div>
        
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        
        <div className={`inline-block align-bottom rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full sm:p-6 ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
        }`}>
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="btn-secondary p-2"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-2xl leading-6 font-bold mb-4 text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}>
                Schedule Your AI Strategy Session
              </h3>
              <p className="mb-6 text-white transition-colors duration-300" style={{ fontFamily: "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                Book a complimentary 30-minute consultation to discuss your practice's AI transformation roadmap.
              </p>
              
              <div className="w-full h-96 sm:h-[600px]">
                <iframe
                  src={bookingLink}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="rounded-lg"
                  title="Book AI Strategy Session"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;