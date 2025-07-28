"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import IconLink from "../atom/IconLink";

const teamSection = {
  title: "Our Team",
  description: "Meet the talented professionals behind our success.",
  teammembers: [
    {
      name: "John Doe",
      imageurl: "/images/person.png",
      position: "Founder & CEO",
      whatsappnum: "+971501234567",
      cell: "+971501234567",
      email: "john@example.com",
    },
    {
      name: "Sarah Ahmed",
      imageurl: "/images/person.png",
      position: "Operations Manager",
      whatsappnum: "+971502345678",
      cell: "+971502345678",
      email: "sarah@example.com",
    },
    {
      name: "Ali Khan",
      imageurl: "/images/person.png",
      position: "Marketing Head",
      whatsappnum: "+971503456789",
      cell: "+971503456789",
      email: "ali@example.com",
    },
    {
      name: "Ali Khan",
      imageurl: "/images/person.png",
      position: "Marketing Head",
      whatsappnum: "+971503456789",
      cell: "+971503456789",
      email: "ali@example.com",
    },
    // More team members...
  ],
};

export default function TeamSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-gray-100 py-16 text-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {teamSection.title}
        </h2>
        <p className="text-gray-600 text-lg mb-10">{teamSection.description}</p>

        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button
              ref={prevRef}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button
              ref={nextRef}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
          >
            {teamSection.teammembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-md p-6 text-center h-full">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <Image
                      src={member.imageurl}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 mb-2">{member.position}</p>
                  <div className="flex gap-3 align-center justify-center">
                    {" "}
                    <IconLink
                      href="https://wa.me/971501234567"
                      iconSrc="/images/team/wa.png"
                      altKey="whatsapp"
                      titleKey="whatsapp"
                    />
                    <IconLink
                      href="tel:+971501234567"
                      iconSrc="/images/team/call.png"
                      altKey="call"
                      titleKey="call"
                    />
                    <IconLink
                      href="mailto:john@example.com"
                      iconSrc="/images/team/email.png"
                      altKey="email"
                      titleKey="email"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
