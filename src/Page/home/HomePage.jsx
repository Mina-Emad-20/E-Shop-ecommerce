
import Slider from "../../Components/Slider";
import HomeCategories from "../../Components/home/HomeCategories";
import CardProductContainer from "../../Components/products/CardProductContainer";
import DiscountSection from "../../Components/home/DiscountSection";
import BrandFeatured from "../../Components/brands/BrandFeatured";












export default function HomePage() {
    return (
        <div className="font" style={{ minHeight: '670px' }}>

            <Slider />
            <HomeCategories />
            <CardProductContainer title='Best Seilling' btntitle='More' pathText='/products' />
            <DiscountSection />
            <CardProductContainer title='Latest Fashion' btntitle='More' pathText='/products' />
            <BrandFeatured title='Famous Brands' btntitle='More' />

        </div>
    )
}
