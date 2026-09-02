'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CALVES_DATA } from '@/data/calves';

export default function ReserveForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      type: 'reservation',
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      pic: formData.get('pic'),
      calfOfInterest: formData.get('calfOfInterest'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {success && (
        <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-sm mb-4">
          Thank you for your reservation request! Our team will review your application and contact you shortly.
        </div>
      )}
      {error && (
        <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-sm mb-4">
          Sorry, something went wrong. Please try again later.
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="r_firstName" className="block text-sm font-medium text-[#1E293B] mb-1">First Name</label>
          <input id="r_firstName" type="text" name="firstName" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" required />
        </div>
        <div>
          <label htmlFor="r_lastName" className="block text-sm font-medium text-[#1E293B] mb-1">Last Name</label>
          <input id="r_lastName" type="text" name="lastName" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="r_email" className="block text-sm font-medium text-[#1E293B] mb-1">Email Address</label>
          <input id="r_email" type="email" name="email" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" required />
        </div>
        <div>
          <label htmlFor="r_phone" className="block text-sm font-medium text-[#1E293B] mb-1">Phone Number</label>
          <input id="r_phone" type="tel" name="phone" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" required />
        </div>
      </div>
      <div>
        <label htmlFor="r_pic" className="block text-sm font-medium text-[#1E293B] mb-1">Property Identification Code (PIC)</label>
        <input id="r_pic" type="text" name="pic" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" required placeholder="Required for Australian buyers" />
      </div>
      <div>
        <label htmlFor="r_calf" className="block text-sm font-medium text-[#1E293B] mb-1">Calf of Interest</label>
        <select id="r_calf" name="calfOfInterest" className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" required>
          <option value="">Select a calf...</option>
          {CALVES_DATA.filter((calf) => calf.status === 'Available').map((calf) => (
            <option key={calf.id} value={calf.ear_tag}>
              {calf.name} ({calf.ear_tag}) - ${calf.price}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="r_message" className="block text-sm font-medium text-[#1E293B] mb-1">Message or Additional Details</label>
        <textarea id="r_message" name="message" rows={4} className="w-full px-4 py-3 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors resize-none" placeholder="Tell us a bit about your property, existing herd, and experience..."></textarea>
      </div>
      <div className="pt-4 border-t border-[#1E293B]/10">
        <button type="submit" disabled={loading} className="w-full py-4 bg-[#1C3B2B] text-white font-medium text-lg rounded-sm hover:bg-[#152C20] transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
          {loading ? 'Submitting...' : 'Submit Reservation Request'}
        </button>
        <p className="text-center text-sm text-[#1E293B]/50 mt-4">
          By submitting this form, you agree to our <Link href="/process" className="underline hover:text-[#C2673F]">Adoption & Sales terms</Link>.
        </p>
      </div>
    </form>
  );
}
