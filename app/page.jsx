import Hero from "./components/Hero";
import ModalGallery from "./components/ModalGallery/ModalGallery";
import Single from "./components/Single";

function Home() {
  return (
    <main>
      <Hero />

      <Single />

      <ModalGallery />
    </main>
  );
}

export default Home;

