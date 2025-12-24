'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  appointmentType: string;
  date: string;
  time: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  date?: string;
  time?: string;
  appointmentType?: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    appointmentType: '',
    date: '',
    time: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Available time slots
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM'
  ];

  // Appointment types
  const appointmentTypes = [
    'Site Visit',
    'Virtual Tour',
    'Consultation Call',
    'Property Discussion'
  ];

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.appointmentType) {
      newErrors.appointmentType = 'Please select an appointment type';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Please select a future date';
      }
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time slot';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Appointment booked:', formData);

      // Store in localStorage for demo purposes
      const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
      appointments.push({
        ...formData,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem('appointments', JSON.stringify(appointments));

      setIsSubmitting(false);
      setIsSuccess(true);
      // Determine the booking section to scroll to
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1500);
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      appointmentType: '',
      date: '',
      time: '',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  if (isSuccess) {
    return (
      <section id="booking" className="py-24 bg-gradient-to-br from-real-estate-light to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 text-center border border-real-estate-gray-100 animate-fade-in-up">
              {/* Success Icon */}
              <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-green-50 rounded-full">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Success Message */}
              <h2 className="font-serif-display text-4xl md:text-5xl font-medium text-real-estate-dark mb-4">
                Appointment Confirmed
              </h2>
              <p className="text-lg text-real-estate-gray-600 mb-10 font-light">
                Thank you, <span className="font-semibold text-real-estate-primary">{formData.fullName}</span>. We look forward to meeting you.
              </p>

              {/* Appointment Details */}
              <div className="bg-real-estate-gray-50 rounded-2xl p-8 mb-10 text-left border border-real-estate-gray-100">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm mr-4 mt-1 text-real-estate-primary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-real-estate-gray-500 font-medium mb-1">Date & Time</div>
                      <div className="font-serif-display text-lg text-real-estate-dark font-medium">
                        {new Date(formData.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })} at {formData.time}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm mr-4 mt-1 text-real-estate-primary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-real-estate-gray-500 font-medium mb-1">Service Type</div>
                      <div className="font-serif-display text-lg text-real-estate-dark font-medium">{formData.appointmentType}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm mr-4 mt-1 text-real-estate-primary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-real-estate-gray-500 font-medium mb-1">Contact Number</div>
                      <div className="font-serif-display text-lg text-real-estate-dark font-medium">{formData.phone}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <p className="text-real-estate-gray-600 mb-10">
                Our agent will contact you shortly at <span className="font-semibold text-real-estate-dark">{formData.phone}</span> to
                confirm the details.
              </p>

              {/* Action Button */}
              <button
                onClick={handleReset}
                className="px-10 py-4 bg-real-estate-primary text-white font-medium rounded-full hover:bg-real-estate-primary/90 shadow-lg shadow-real-estate-primary/20 focus:outline-none focus:ring-4 focus:ring-real-estate-primary/20 transition-all transform hover:-translate-y-0.5"
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-gradient-to-br from-real-estate-light via-white to-real-estate-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-medium text-real-estate-dark mb-6">
              Book Your <span className="text-real-estate-primary italic">Experience</span>
            </h2>
            <p className="text-lg text-real-estate-gray-600 font-light max-w-2xl mx-auto">
              Ready to find your dream property? Fill out the form below and we'll arrange a personalized visit associated with your schedule.
            </p>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-3xl shadow-xl shadow-real-estate-gray-200/50 p-8 md:p-12 border border-real-estate-gray-100 relative overflow-hidden">
            {/* Decorative Background for Form */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-real-estate-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-real-estate-accent/5 rounded-full blur-3xl pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="group">
                  <label htmlFor="fullName" className="block text-sm font-medium text-real-estate-gray-700 mb-2 group-focus-within:text-real-estate-primary transition-colors">
                    Full Name <span className="text-real-estate-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border ${errors.fullName ? 'border-red-300 bg-red-50' : 'border-real-estate-gray-200 bg-real-estate-gray-50/30'
                      } focus:ring-2 focus:ring-real-estate-primary/10 focus:border-real-estate-primary focus:bg-white outline-none transition-all placeholder:text-real-estate-gray-400`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-500 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-medium text-real-estate-gray-700 mb-2 group-focus-within:text-real-estate-primary transition-colors">
                    Phone Number <span className="text-real-estate-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border ${errors.phone ? 'border-red-300 bg-red-50' : 'border-real-estate-gray-200 bg-real-estate-gray-50/30'
                      } focus:ring-2 focus:ring-real-estate-primary/10 focus:border-real-estate-primary focus:bg-white outline-none transition-all placeholder:text-real-estate-gray-400`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-500 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email (Optional) */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-real-estate-gray-700 mb-2 group-focus-within:text-real-estate-primary transition-colors">
                    Email <span className="text-real-estate-gray-400 text-xs font-normal ml-1">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-real-estate-gray-200 bg-real-estate-gray-50/30 focus:ring-2 focus:ring-real-estate-primary/10 focus:border-real-estate-primary focus:bg-white outline-none transition-all placeholder:text-real-estate-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Appointment Type */}
                <div className="group">
                  <label htmlFor="appointmentType" className="block text-sm font-medium text-real-estate-gray-700 mb-2 group-focus-within:text-real-estate-primary transition-colors">
                    Appointment Type <span className="text-real-estate-accent">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="appointmentType"
                      name="appointmentType"
                      value={formData.appointmentType}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border appearance-none ${errors.appointmentType ? 'border-red-300 bg-red-50' : 'border-real-estate-gray-200 bg-real-estate-gray-50/30'
                        } focus:ring-2 focus:ring-real-estate-primary/10 focus:border-real-estate-primary focus:bg-white outline-none transition-all cursor-pointer`}
                    >
                      <option value="">Select an option</option>
                      {appointmentTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-real-estate-gray-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                  {errors.appointmentType && (
                    <p className="mt-2 text-sm text-red-500 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {errors.appointmentType}
                    </p>
                  )}
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Date */}
                <div className="group">
                  <label htmlFor="date" className="block text-sm font-medium text-real-estate-gray-700 mb-2 group-focus-within:text-real-estate-primary transition-colors">
                    Preferred Date <span className="text-real-estate-accent">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={getMinDate()}
                    className={`w-full px-5 py-4 rounded-xl border ${errors.date ? 'border-red-300 bg-red-50' : 'border-real-estate-gray-200 bg-real-estate-gray-50/30'
                      } focus:ring-2 focus:ring-real-estate-primary/10 focus:border-real-estate-primary focus:bg-white outline-none transition-all text-real-estate-gray-700 placeholder:text-real-estate-gray-400`}
                  />
                  {errors.date && (
                    <p className="mt-2 text-sm text-red-500 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {errors.date}
                    </p>
                  )}
                </div>

                {/* Time */}
                <div className="group">
                  <label htmlFor="time" className="block text-sm font-medium text-real-estate-gray-700 mb-2 group-focus-within:text-real-estate-primary transition-colors">
                    Preferred Time <span className="text-real-estate-accent">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl border appearance-none ${errors.time ? 'border-red-300 bg-red-50' : 'border-real-estate-gray-200 bg-real-estate-gray-50/30'
                        } focus:ring-2 focus:ring-real-estate-primary/10 focus:border-real-estate-primary focus:bg-white outline-none transition-all cursor-pointer`}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-real-estate-gray-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                  {errors.time && (
                    <p className="mt-2 text-sm text-red-500 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {errors.time}
                    </p>
                  )}
                </div>
              </div>

              {/* Optional Message */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-real-estate-gray-700 mb-2 group-focus-within:text-real-estate-primary transition-colors">
                  Additional Message <span className="text-real-estate-gray-400 text-xs font-normal ml-1">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl border border-real-estate-gray-200 bg-real-estate-gray-50/30 focus:ring-2 focus:ring-real-estate-primary/10 focus:border-real-estate-primary focus:bg-white outline-none transition-all resize-none placeholder:text-real-estate-gray-400"
                  placeholder="Tell us about your preferences, budget, or any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 px-8 bg-real-estate-primary text-white text-lg font-medium rounded-full shadow-xl shadow-real-estate-primary/20 hover:bg-real-estate-primary/95 hover:shadow-2xl hover:shadow-real-estate-primary/30 focus:outline-none focus:ring-4 focus:ring-real-estate-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 ${isSubmitting ? 'opacity-70 cursor-not-allowed transform-none' : ''
                  }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing Request...
                  </span>
                ) : (
                  'Confirm Appointment'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
