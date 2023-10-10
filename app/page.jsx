import CustomPosts from "./components/CustomPosts/CustomPosts";
import Hero from "./components/Hero";
import ModalGallery from "./components/ModalGallery/ModalGallery";
import Single from "./components/Single";

function Home() {
  return (
    <main>
      <Hero />

      <Single />

      <ModalGallery />

      <CustomPosts />
    </main>
  );
}

export default Home;

