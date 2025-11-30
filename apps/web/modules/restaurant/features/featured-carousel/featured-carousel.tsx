import { FeaturedCarouselItem } from "./components/feature-carousel-item";

export function FeaturedCarousel() {
  return (
    <div className="border-2 border-purple-400 rounded-lg p-6 bg-white mb-4">
      <p className="text-center text-purple-600 font-semibold">FeaturedCarousel</p>
      <div className="flex justify-between">
      <FeaturedCarouselItem/>
      <FeaturedCarouselItem/>
      <FeaturedCarouselItem/>
      <FeaturedCarouselItem/>
      <FeaturedCarouselItem/>
      </div>
    </div>
  )
}
