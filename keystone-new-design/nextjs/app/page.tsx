import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import SectionRail from "@/components/SectionRail";
import RevealObserver from "@/components/RevealObserver";
import HeroScene from "@/components/scenes/HeroScene";
import ProblemScene from "@/components/scenes/ProblemScene";
import TransformScene from "@/components/scenes/TransformScene";
import ProductsScene from "@/components/scenes/ProductsScene";
import ServicesScene from "@/components/scenes/ServicesScene";
import MarketScene from "@/components/scenes/MarketScene";
import MoatScene from "@/components/scenes/MoatScene";
import OriginScene from "@/components/scenes/OriginScene";
import ContactScene from "@/components/scenes/ContactScene";
import Footer from "@/components/Footer";
import CubeStageClient from "@/components/3d/CubeStageClient";

export default function Page() {
  return (
    <>
      <Loader />
      <Cursor />
      <Nav />
      <SectionRail />
      <RevealObserver />

      <CubeStageClient />
      <div className="vignette fixed inset-0 z-[2] pointer-events-none" aria-hidden />
      <div className="grain fixed -inset-1/2 z-[3] pointer-events-none opacity-[0.04]" aria-hidden />

      <main className="relative z-[5]">
        <HeroScene />
        <ProblemScene />
        <TransformScene />
        <ProductsScene />
        <ServicesScene />
        <MarketScene />
        <MoatScene />
        <OriginScene />
        <ContactScene />
      </main>

      <Footer />
    </>
  );
}
