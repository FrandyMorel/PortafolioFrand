"use client"

import { Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { serviceData } from '../../data';
import { SwiperSlide } from "swiper/react";

const SliderServices = () => {
    return ( 
        
        <Swiper
        breakpoints={{
            320:{
                slidesPerView: 1,
                spaceBetween: 15
            },
            768:{
                slidesPerView: 2,
                spaceBetween: 15
            },
            1024:{
                slidesPerView: 3,
                spaceBetween: 15
            }    
        }}
        freeMode={true}
        pagination={{
            clickable: true
        }}
        modules={[Pagination]}
        className="h-[200px] md:h-[380px] w-[320px] md:w-[620]"
        >
            {serviceData.map((item, index) =>(
                <SwiperSlide key={index}>
                    <div className="flex px-6 py-8 h-auto md:h-[290px] rounded-lg
                    cursor-pointer bg-[rgba(86,182,198,0.15)] sm:flex-col gap-x-6 sm:gap-x-0
                    group hover:bg-[rgba(86,182,198,0.15)] transition-all duration-100 border-2 border-transparent hover:border-secondary ">
                        <div className="mb-4 text-4xl text-secondary">
                            {item.icon}
                            </div>
                        <div>
                            <h3 className="mb-4 text-lg"> 
                                {item.title}
                            </h3>
                            <p className="md:text-md text-sm">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
 
export default SliderServices;