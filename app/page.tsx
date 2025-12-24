import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <BookingForm />
      <Footer />
    </main>
  );
}
