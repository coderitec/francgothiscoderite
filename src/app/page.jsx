import HomePage from "./components/HomePage";
import SlideOne from "./components/SlideOne";
import SlideTwo from "./components/SlideTwo";
import Wishes from "./components/Wishes";
import ShortStory from "./components/ShortStory";
import GratitudeSlide from "./components/GratitudeSlide";
import Footer from "./components/Footer";
import GalleryPage from "./components/GalleryPage";
import CountDown from "./components/CountDown";

export const metadata = {
  title: "Nassy & Franc",
  description: "A Story of Love",
};

export default function Home() {
  return (
    <main>
      {/* <CountDown/> */}
      <HomePage />
      <SlideOne />
      <SlideTwo />
      <ShortStory />
      <GalleryPage />
      <Wishes />
      <GratitudeSlide />
      <Footer />
    </main>
  );
}
