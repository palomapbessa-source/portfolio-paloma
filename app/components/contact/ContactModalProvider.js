"use client";

import { createContext, useContext, useState } from "react";
import ContactModal from "./ContactModal";
import ContactToast from "./ContactToast";

export const ContactModalContext = createContext(null);

export default function ContactModalProvider({ children }) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [showToast, setShowToast] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSuccess = () => {
    setIsModalOpen(false);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  // return .

  
  return (
    <ContactModalContext.Provider
      value={{
        openContactModal: openModal,
      }}
    >
      {children}

      {showToast && <ContactToast />}

      <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSuccess={handleSuccess}
      />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);

  if (!context) {
    throw new Error(
      "useContactModal deve ser usado dentro de ContactModalProvider"
    );
  }

  return context;
}