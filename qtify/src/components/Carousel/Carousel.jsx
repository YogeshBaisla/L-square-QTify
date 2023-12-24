import React from "react";
import styles from "./Carousel.module.css";
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { useEffect } from "react";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({data}) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0);
    },[data]);
    return <></>

}
export default function Carousel({data,renderComponent}){
return (
<div className={styles.wrapper}>
<Swiper
      style={{padding:"0px 20px"}}
      initialSlide={0}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={"auto"}
      allowTouchMove
    >
        <Controls data={data}/>
        <CarouselRightNavigation/>
        <CarouselLeftNavigation/>
        {data.map((ele)=>(
                       <SwiperSlide> {renderComponent(ele)}</SwiperSlide>
                    ))}
    
    </Swiper>
    </div>
)    
}