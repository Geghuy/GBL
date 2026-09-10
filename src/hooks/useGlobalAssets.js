// src/hooks/useGlobalAssets.js
import { useState } from 'react';

export function useGlobalAssets() {
  const [activeModal, setActiveModal] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  return {
    activeModal,
    openModal: (type) => setActiveModal(type),
    closeModal: () => setActiveModal(null),
    isChatOpen,
    toggleChat: () => setIsChatOpen((prev) => !prev),
    currentLanguage,
    setLanguage: (lang) => setCurrentLanguage(lang)
  };
}