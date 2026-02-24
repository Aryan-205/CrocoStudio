'use client';

import React from 'react';

const LINKS = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'Vimeo', href: '#' },
  { label: 'AI Lab', href: '#' },
];

export default function ContactPanel({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop — above navbar (z-50) so click-outside closes */}
      <div
        className="fixed inset-0 z-60 bg-black/20 transition-opacity duration-300"
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        onClick={onClose}
        aria-hidden
      />
      {/* Panel: fixed right, animate translateX */}
      <aside
        className="fixed top-0 right-0 z-70 h-full w-full max-w-md bg-[#FF4D00] text-white shadow-2xl transition-transform duration-300 ease-out"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
        aria-modal
        aria-label="Contact information"
      >
        <div className="flex h-full flex-col p-8 pt-12">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-8 flex h-10 w-10 items-center justify-center rounded-full text-black transition hover:bg-black/10"
            aria-label="Close contact panel"
          >
            <span className="text-2xl font-light leading-none">×</span>
          </button>

          <div className="mt-4 flex flex-1 flex-col justify-center space-y-8">
            <a
              href="tel:+496994946890"
              className="text-2xl font-bold tracking-tight md:text-3xl"
            >
              +49 69 9494 689-0
            </a>
            <a
              href="mailto:info@styleframe.de"
              className="text-2xl font-bold tracking-tight md:text-3xl"
            >
              info@styleframe.de
            </a>
            <p className="max-w-[16rem] text-xl font-medium leading-snug md:text-2xl">
              Hanauer Landstr. 287<br />
              60314 Frankfurt am Main,<br />
              Germany
            </p>
            <a
              href="https://maps.google.com/?q=Hanauer+Landstr+287+60314+Frankfurt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white/90 transition hover:text-white"
            >
              Map ↗
            </a>
          </div>

          <ul className="space-y-3 border-t border-black/20 pt-8">
            {LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-2 text-lg font-medium text-black transition hover:underline"
                >
                  <span aria-hidden>›</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
