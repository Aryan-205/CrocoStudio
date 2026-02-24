'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ContactPanel from '@/components/ContactPanel';

export default function NavbarWithContact() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <>
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <ContactPanel
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
