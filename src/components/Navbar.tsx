'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

function CowLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M4 8C4 5 6 3 9 3C9.5 3 10.5 4.5 12 4.5C13.5 4.5 14.5 3 15 3C18 3 20 5 20 8C20 12 18 14 17 17C16.5 18.5 15 20 12 20C9 20 7.5 18.5 7 17C6 14 4 12 4 8Z" />
      <path d="M7 6C5 4 3 4 2 5C1 6 2 8 4 8" />
      <path d="M17 6C19 4 21 4 22 5C23 6 22 8 20 8" />
      <path d="M9 13C9 14.5 10 16 12 16C14 16 15 14.5 15 13" />
      <circle cx="9.5" cy="10.5" r="1" fill="currentColor" />
      <circle cx="14.5" cy="10.5" r="1" fill="currentColor" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [breedDropdown, setBreedDropdown] = useState(false);

  return (
    <div className="border-b border-[#1E293B]/10 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setIsOpen(false)}>
          <CowLogo className="w-8 h-8 text-[#1C3B2B]" />
          <div>
            <span className="font-serif text-2xl font-bold text-[#1C3B2B] leading-none block">Dunblane</span>
            <p className="text-[10px] tracking-widest text-[#C2673F] font-semibold uppercase mt-1">Highlands Australia</p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-bold">
          <Link href="/" className="hover:text-[#C2673F] transition-colors">
            Home
          </Link>
          <Link href="/calves" className="hover:text-[#C2673F] transition-colors">
            Available Calves
          </Link>

          {/* Breeds Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setBreedDropdown(!breedDropdown)}
              onMouseEnter={() => setBreedDropdown(true)}
              className="flex items-center gap-1 hover:text-[#C2673F] transition-colors py-2"
            >
              Breed Categories <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            <div
              onMouseLeave={() => setBreedDropdown(false)}
              className={`absolute left-0 top-full w-60 bg-white shadow-lg border border-[#1E293B]/10 py-2 rounded-sm transition-all duration-150 ${
                breedDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
              }`}
            >
              <Link
                href="/micro-highland-cows"
                onClick={() => setBreedDropdown(false)}
                className="block px-4 py-2 hover:bg-[#F4EFE6] text-xs font-semibold text-[#1C3B2B]"
              >
                Micro Highland Cows (&le;36&quot;)
              </Link>
              <Link
                href="/teacup-highland-cows"
                onClick={() => setBreedDropdown(false)}
                className="block px-4 py-2 hover:bg-[#F4EFE6] text-xs font-semibold text-[#1C3B2B]"
              >
                Teacup / Pocket Calves
              </Link>
              <Link
                href="/miniature-highland-cattle"
                onClick={() => setBreedDropdown(false)}
                className="block px-4 py-2 hover:bg-[#F4EFE6] text-xs font-semibold text-[#1C3B2B]"
              >
                Breed Guide &amp; Standards
              </Link>
            </div>
          </div>

          <Link href="/prices" className="hover:text-[#C2673F] transition-colors">
            Prices
          </Link>
          <Link href="/delivery" className="hover:text-[#C2673F] transition-colors">
            Delivery
          </Link>
          <Link href="/process" className="hover:text-[#C2673F] transition-colors">
            Adoption
          </Link>
          <Link href="/sold" className="hover:text-[#C2673F] transition-colors">
            Sold
          </Link>
          <Link href="/blog" className="hover:text-[#C2673F] transition-colors">
            Blog
          </Link>
          <Link href="/faq" className="hover:text-[#C2673F] transition-colors">
            FAQ
          </Link>
          <Link href="/about" className="hover:text-[#C2673F] transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#C2673F] transition-colors">
            Contact
          </Link>
          <Link
            href="/reserve"
            className="px-4 py-2 bg-[#1C3B2B] text-white rounded-sm hover:bg-[#152C20] transition-colors shadow-sm"
          >
            Reserve Now
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#1C3B2B] hover:bg-[#F4EFE6] rounded-sm transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[#1E293B]/10 px-4 py-6 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-3 font-semibold text-sm">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-sm hover:bg-[#F4EFE6] text-[#1C3B2B]"
            >
              Home
            </Link>
            <Link
              href="/calves"
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-sm hover:bg-[#F4EFE6] text-[#1C3B2B]"
            >
              Available Calves
            </Link>
            <div className="pl-3 py-1 border-l-2 border-[#C2673F] space-y-1 my-1">
              <Link
                href="/micro-highland-cows"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 px-3 text-xs text-[#1E293B]/80 hover:text-[#C2673F]"
              >
                &bull; Micro Highland Cows (&le;36&quot;)
              </Link>
              <Link
                href="/teacup-highland-cows"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 px-3 text-xs text-[#1E293B]/80 hover:text-[#C2673F]"
              >
                &bull; Teacup / Pocket Highland Cows
              </Link>
              <Link
                href="/miniature-highland-cattle"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 px-3 text-xs text-[#1E293B]/80 hover:text-[#C2673F]"
              >
                &bull; Breed Guide &amp; Standards
              </Link>
            </div>
            <Link
              href="/prices"
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-sm hover:bg-[#F4EFE6] text-[#1C3B2B]"
            >
              Price Guide
            </Link>
            <Link
              href="/delivery"
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-sm hover:bg-[#F4EFE6] text-[#1C3B2B]"
            >
              Delivery &amp; Freight
            </Link>
            <Link
              href="/process"
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-sm hover:bg-[#F4EFE6] text-[#1C3B2B]"
            >
              Adoption / Purchase Process
            </Link>
            <Link
              href="/sold"
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-sm hover:bg-[#F4EFE6] text-[#1C3B2B]"
            >
              Sold Gallery
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-sm hover:bg-[#F4EFE6] text-[#1C3B2B]"
            >
              Educational Blog
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-sm hover:bg-[#F4EFE6] text-[#1C3B2B]"
            >
              FAQ
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-sm hover:bg-[#F4EFE6] text-[#1C3B2B]"
            >
              About Dunblane
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-sm hover:bg-[#F4EFE6] text-[#1C3B2B]"
            >
              Contact Us
            </Link>
            <Link
              href="/urls"
              onClick={() => setIsOpen(false)}
              className="py-2 px-3 rounded-sm bg-[#F4EFE6] text-[#C2673F] text-xs font-bold"
            >
              Search Console URLs Directory
            </Link>
            <Link
              href="/reserve"
              onClick={() => setIsOpen(false)}
              className="py-3 px-4 text-center bg-[#1C3B2B] text-white rounded-sm font-bold shadow-sm"
            >
              Reserve a Calf Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
