import CustomPosts from "./components/CustomPosts/CustomPosts";
import Hero from "./components/Hero";
import ModalGallery from "./components/ModalGallery/ModalGallery";
import Newsletter from "./components/Newsletter";
import Single from "./components/Single";

function Home() {
  return (
    <main>
      <Hero />

      <Single />

      <Newsletter />

      <ModalGallery />

      <CustomPosts />
    </main>
  );
}

export default Home;

