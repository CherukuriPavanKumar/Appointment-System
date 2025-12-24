export default function Footer() {
  return (
    <footer className="bg-real-estate-dark text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="font-serif-display text-3xl font-medium mb-6 text-white tracking-tight">Webbheads</h3>
            <p className="text-real-estate-gray-400 leading-relaxed max-w-sm mb-8">
              Your trusted partner in exclusive property experiences.
              We connect discerning clients with exceptional real estate opportunities through a seamless, personalized service.
            </p>
            <div className="flex space-x-4">
              {/* Social Placeholders with improved styling */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-real-estate-accent transition-colors cursor-pointer">
                  <span className="sr-only">Social Media</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-6h2v1.1c.36-.67 1.25-1.1 2-1.1 1.66 0 3 1.34 3 3v3z" /></svg>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest text-real-estate-gray-500 mb-6">Discovery</h4>
            <ul className="space-y-4">
              {['Properties', 'Services', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-real-estate-gray-300 hover:text-real-estate-accent transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-px bg-real-estate-accent mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest text-real-estate-gray-500 mb-6">Get in Touch</h4>
            <ul className="space-y-6 text-real-estate-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-real-estate-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (555) 123-4567
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-real-estate-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@webbheads.com
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-real-estate-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  123 Madison Avenue<br />
                  Suite 100, New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-real-estate-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-real-estate-gray-500">
          <p>&copy; {new Date().getFullYear()} Webbheads Real Estate. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-real-estate-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-real-estate-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
