import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import mobile from "../../images/mobile.png"
import mobile2 from "../../images/mobile1.png"
import mobile3 from "../../images/mobile2.png"
import LeftButton from "./LeftButton"
import RightButton from "./RightButton"




export default function ProductGallery() {
    const images = [
        {
            original: `${mobile}`,
        },
        {
            original: `${mobile2}`,
        },
        {
            original: `${mobile3}`,
        },
    ];
    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">
            <ImageGallery items={images}
                defaultImage={mobile}
                showFullscreenButton={false}
                isRTL={false}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />

        </div>
    )
}
