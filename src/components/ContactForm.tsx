'use client';

import { useState } from 'react';

export default function ContactForm() {
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
      type: 'contact',
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
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
    <form className="space-y-4" onSubmit={handleSubmit}>
      {success && (
        <div className="p-4 bg-green-50 text-green-700 border border-green-200 rounded-sm mb-4">
          Thank you for your message! We will get back to you shortly.
        </div>
      )}
      {error && (
        <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-sm mb-4">
          Sorry, something went wrong. Please try again later.
        </div>
      )}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-[#1E293B] mb-1">First Name</label>
          <input id="firstName" type="text" name="firstName" required className="w-full px-4 py-2 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-[#1E293B] mb-1">Last Name</label>
          <input id="lastName" type="text" name="lastName" required className="w-full px-4 py-2 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#1E293B] mb-1">Email Address</label>
        <input id="email" type="email" name="email" required className="w-full px-4 py-2 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1E293B] mb-1">Message</label>
        <textarea id="message" name="message" required rows={4} className="w-full px-4 py-2 bg-[#FDFBF7] border border-[#1E293B]/10 rounded-sm focus:outline-none focus:border-[#C2673F] transition-colors resize-none"></textarea>
      </div>
      <button type="submit" disabled={loading} className="w-full py-3 bg-[#1C3B2B] text-white font-medium rounded-sm hover:bg-[#152C20] transition-colors mt-4 disabled:opacity-70 disabled:cursor-not-allowed">
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
