import HeroCarousel from "./components/HeroCarousel";
import CategoryBrowser from "./components/CategoryBrowser";
import GiftingSection from "./components/GiftingSection";
import Promises from "./components/Promises";
import CollectionCarousel from "./components/CollectionCarousel";
import BestSellers from "./components/BestSellers";
import ShopByBudget from "./components/ShopByBudget";
import Testimonials from "./components/Testimonials";
import StoreLocator from "./components/StoreLocator";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <CategoryBrowser />
      <GiftingSection />
      <Promises />
      <CollectionCarousel />
      <BestSellers />
      <ShopByBudget />
      <Testimonials />
      <StoreLocator />
    </>
  );
}
