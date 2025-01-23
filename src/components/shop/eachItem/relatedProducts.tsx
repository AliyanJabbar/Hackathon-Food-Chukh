import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useFetchFoods } from "../fetchFoodsFromSanity";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import ShopItem from "@/components/microComponents/ShopItem";
import { urlFor } from "@/sanity/lib/image";
import { useRef } from "react";

const RelatedProducts = ({ id }: { id: number }) => {
  const swiperRef = useRef<SwiperType | undefined>(undefined);
  const products = useFetchFoods();
  const filteredProducts = products.filter((item) => item.id !== id);

  return (
    <main className="py-10 px-[5%] mx-auto lg:py-24 lg:px-[7%]">
      <div className="flex justify-between items-center">
        <h1 className="font-sans text-[32px] font-bold text-txtBlack">
          Similar Products
        </h1>
        <div className="flex gap-5 select-none">
          <div
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-3 rounded-full bg-faqEntry hover:bg-orangeLike hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <IoArrowBack size={25} />
          </div>
          <div
            onClick={() => swiperRef.current?.slideNext()}
            className="p-3 rounded-full bg-faqEntry hover:bg-orangeLike hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <IoArrowForward size={25} />
          </div>
        </div>
      </div>

      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full mt-8"
      >
        {filteredProducts.map((item) => (
          <SwiperSlide
            key={item.id}
            className="block relative h-[267px] w-auto rounded overflow-hidden"
          >
            <div className="object-cover object-center w-full h-full block">
              <ShopItem
                title={item.name}
                link={item.id}
                src={urlFor(item.image).url()}
                price={item.price}
                originalPrice={item.originalPrice}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default RelatedProducts;
