

import CustomPosts from "./components/CustomPosts/CustomPosts";
import Hero from "./components/Hero";
import ModalGallery from "./components/ModalGallery/ModalGallery";
import Newsletter from "./components/Newsletter";
import Single from "./components/Single";


export const metadata = {
  title: "Next13 demo",
  description: "next13 + scss",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};


export default function Home() {
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




