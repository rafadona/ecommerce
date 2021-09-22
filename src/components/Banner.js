import { FastForwardIcon } from "@heroicons/react/outline";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import background_img1 from "../../public/assets/img/background/milky-way_1280.jpg";
import background_img2 from "../../public/assets/img/background/stairs_1280.jpg";
import background_img3 from "../../public/assets/img/background/stars_1280.jpg";


import Image from "next/image";


function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
                <div>
                    <Image loading="lazy" width={1500} height={719} src={background_img1} alt="" />
                </div>
                <div>
                    <Image loading="lazy" width={1500} height={719} src={background_img2} alt="" />
                </div>
                <div>
                    <Image loading="lazy" width={1500} height={719} src={background_img3} alt="" />
                </div>

            </Carousel>
        </div>
    );
}

export default Banner;
