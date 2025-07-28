"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

let timer: NodeJS.Timeout;

const heroSlides = [
  {
    type: "image",
    imageurl: "/images/hero-1.png",
    key: "slide1",
  },
  {
    type: "video",
    imageurl: "/videos/intro.mp4",
    key: "slide2",
  },
];

function clearTimer() {
  if (timer) clearTimeout(timer);
}

export default function HeroSection() {
  const t = useTranslations("HeroSection");
  const locale = useLocale();
  const isArabic = locale === "ar";
  const swiperRef = useRef<any>(null);

  const handleSlideChange = (swiper: any) => {
    clearTimer();
    const currentIndex = swiper.realIndex;
    const currentSlide = heroSlides[currentIndex];

    if (currentSlide.type === "video") {
      const videoEl = document.querySelector(
        `.video-slide-${currentIndex}`
      ) as HTMLVideoElement;
      if (videoEl) {
        videoEl.currentTime = 0;
        videoEl.play();
        videoEl.onended = () => {
          swiper.slideNext();
        };
      }
    } else {
      timer = setTimeout(() => {
        swiper.slideNext();
      }, 5000);
    }
  };

  useEffect(() => clearTimer, []);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero-2.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#4b2515]/40 z-0" />

      <Swiper
        modules={[Pagination]}
        loop
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        dir={isArabic ? "rtl" : "ltr"}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        className="h-full w-full relative z-20"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.key}>
            <div className="h-full w-full px-6 md:px-16 py-12 flex items-center justify-center">
              <div
                className={clsx(
                  "grid grid-cols-1 md:grid-cols-2 items-center w-full gap-12",
                  isArabic ? "text-right" : "text-left"
                )}
              >
                {/* Text */}
                <div
                  className={clsx(
                    isArabic ? "md:order-1" : "md:order-2",
                    "order-1"
                  )}
                >
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
                    {t(`${slide.key}.title`)}
                  </h1>
                  <p className="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl">
                    {t(`${slide.key}.description`)}
                  </p>
                  <Link
                    href={t(`${slide.key}.ctalink`)}
                    className="inline-block mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
                  >
                    {t(`${slide.key}.ctatext`)}
                  </Link>
                </div>

                {/* Media */}
                <div
                  className={clsx(
                    isArabic ? "md:order-1" : "md:order-2", // image on left in Arabic
                    "order-2 max-w-lg mx-auto md:mx-0"
                  )}
                >
                  <div className="aspect-video md:aspect-square overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10 m-5">
                    {slide.type === "image" ? (
                      <Image
                        src={slide.imageurl}
                        alt={t(`${slide.key}.title`)}
                        width={800}
                        height={450}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <video
                        className={`w-full h-full object-cover video-slide-${index}`}
                        muted
                        playsInline
                      >
                        <source src={slide.imageurl} type="video/mp4" />
                      </video>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation + Pagination */}
      <div
        className={clsx(
          "hidden md:flex absolute z-30 flex-col items-center gap-3",
          isArabic ? "right-4" : "left-4",
          "top-1/2 -translate-y-1/2"
        )}
      >
        <button
          onClick={handleNext}
          className="text-white text-xl rounded-full w-9 h-9 flex items-center justify-center hover:bg-white/30 transition cursor-pointer"
          aria-label="Next Slide"
        >
          {isArabic ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
        <div className="custom-pagination flex flex-col gap-2 mt-1" />
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background-color: white;
          border: 1px solid white;
          opacity: 0.4;
          transition: all 0.2s ease-in-out;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
