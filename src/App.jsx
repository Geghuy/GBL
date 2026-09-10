import React, { useState } from 'react';

// Common Components
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Modal from './common/Modal';
import ChatWidget from './common/ChatWidget';
import CustomCursor from './common/CustomCursor';

// Sections
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import About from './components/sections/About';
import EventCarousel from './components/sections/EventCarousel';
import RouteFinder from './components/sections/RouteFinder';
import Advisory from './components/sections/Advisory';
import ProjectsCarousel from './components/sections/ProjectsCarousel';
import Intelligence from './components/sections/Intelligence';
import Statement from './components/sections/Statement';

// Pages
import PropertyPage from './components/pages/PropertyPage';
import CitizenshipPage from './components/pages/CitizenshipPage';
import ResidencyPage from './components/pages/ResidencyPage';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home'); // สถานะหน้าปัจจุบัน
    const [modalType, setModalType] = useState(null);

    const openModal = (type = 'contact') => setModalType(type);
    const closeModal = () => setModalType(null);

    // ฟังก์ชันเลือกรีเทิร์นหน้าตาม currentPage
    const renderContent = () => {
        switch (currentPage) {
            case 'property':
                return <PropertyPage setCurrentPage={setCurrentPage} openModal={openModal} />;
            case 'citizenship':
                return <CitizenshipPage setCurrentPage={setCurrentPage} openModal={openModal} />;
            case 'residency':
                return <ResidencyPage setCurrentPage={setCurrentPage} openModal={openModal} />;
            default:
                return (
                    <>
                        <Hero openModal={openModal} />
                        <Marquee />
                        <About />
                        <EventCarousel openModal={openModal} />
                        <RouteFinder openModal={openModal} />
                        <Advisory openModal={openModal} setCurrentPage={setCurrentPage} />
                        <ProjectsCarousel openModal={openModal} />
                        <Intelligence />
                        <Statement openModal={openModal} />
                    </>
                );
        }
    };

    return (
        <>
        <CustomCursor />
            <Navbar openModal={openModal} setCurrentPage={setCurrentPage} />

            {renderContent()}

            <Footer setCurrentPage={setCurrentPage} />
            <Modal activeModal={modalType} closeModal={closeModal} />
            <ChatWidget />
        </>
    );
}