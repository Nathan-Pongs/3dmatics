import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import function1Img from '../img/function1_img.png';
import function2Img from '../img/function2_img.png';
import function3Img from '../img/function3_img.png';
import function4Img from '../img/function4_img.png';
const Functionalities = () => {
    const functionData = [
        {
            title: "Chatacter",
            imgSrc: function1Img,
        },
        {
            title: "Aparment",
            imgSrc: function2Img,
        },
        {
            title: "Building",
            imgSrc: function3Img,
        },
        {
            title: "Car",
            imgSrc: function4Img,
        },
    ];
    return (
    <div data-aos="fade-up" data-aos-duration="3000" className="relative h-auto font-mono">
      <div className="block">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          className="relative p-[10px] pb-[30px] h-auto mb-4"
        >
          {functionData.map((func, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="relative w-full items-center justify-center text-2xl">
                  <img className="w-full" src={func.imgSrc} alt={`${func.title} icon`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default Functionalities;