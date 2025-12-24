'use client';

export default function Hero() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-real-estate-light via-white to-real-estate-gray-100 py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 10% 20%, rgb(30, 58, 138) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgb(197, 160, 89) 0%, transparent 20%)`
      }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 mb-8 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-real-estate-gray-200 animate-fade-in-up">
            <span className="text-real-estate-primary font-medium text-xs tracking-widest uppercase">
              Webbheads Real Estate
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-real-estate-dark mb-8 leading-[1.1] tracking-tight">
            Discover Homes That <br className="hidden md:block" />
            <span className="text-real-estate-primary relative italic pr-2">
              Inspire You
              {/* Underline decoration */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-real-estate-accent opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 2.99996 83.2503 0.999912 198.001 3.99995" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-real-estate-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Experience a curated selection of premium properties.
            Schedule visits, virtual tours, and expert consultations seamlessly.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToBooking}
            className="group inline-flex items-center px-8 py-4 bg-real-estate-primary text-white text-lg font-medium rounded-full shadow-lg shadow-real-estate-primary/20 hover:bg-real-estate-primary/90 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-real-estate-primary transition-all duration-300"
          >
            Book Your Appointment
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>

          {/* Trust indicators */}
          <div className="mt-20 pt-10 border-t border-real-estate-gray-200/60 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center px-4 border-r border-real-estate-gray-200 last:border-0">
              <div className="font-serif-display text-3xl sm:text-4xl font-bold text-real-estate-dark mb-1">500+</div>
              <div className="text-xs sm:text-sm font-medium text-real-estate-gray-500 uppercase tracking-wide">Premium Listings</div>
            </div>
            <div className="text-center px-4 border-r border-real-estate-gray-200 last:border-0">
              <div className="font-serif-display text-3xl sm:text-4xl font-bold text-real-estate-dark mb-1">10k+</div>
              <div className="text-xs sm:text-sm font-medium text-real-estate-gray-500 uppercase tracking-wide">Happy Clients</div>
            </div>
            <div className="text-center px-4">
              <div className="font-serif-display text-3xl sm:text-4xl font-bold text-real-estate-dark mb-1">24/7</div>
              <div className="text-xs sm:text-sm font-medium text-real-estate-gray-500 uppercase tracking-wide">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
