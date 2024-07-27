import Body from "./components/SlideOne";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import SlideOne from "./components/SlideOne";
import SlideTwo from "./components/SlideTwo";
import StoryPage from "./our-story/page";

export default function Home() {
  return (
    <main>
      <Header />
      <HomePage />
      <SlideOne />
      <SlideTwo />
      <StoryPage />
      
    </main>
  );
}
