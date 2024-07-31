import HomePage from "./components/HomePage";
import SlideOne from "./components/SlideOne";
import SlideTwo from "./components/SlideTwo";
import Wishes from "./components/Wishes";
import ShortStory from "./components/ShortStory";
import GratitudeSlide from "./components/GratitudeSlide";
import Footer from "./components/Footer";

export const metadata = {
  title: "Nassy & Franc",
  description: "A Story of Love",
};

export default function Home() {
  return (
    <main>
      <HomePage />
      <SlideOne />
      <SlideTwo />
      <ShortStory />
      <Wishes />
      <GratitudeSlide />
      <Footer />
    </main>
  );
}
