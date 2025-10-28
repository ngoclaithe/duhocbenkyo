import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import HomeHighlights from "./components/HomeHighlights";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroCarousel />
        <HomeHighlights />
      </main>
      <Footer />
    </div>
  );
}
