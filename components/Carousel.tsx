"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { CarouselApi } from "./ui/carousel";
import { carousel } from "@/data/home.json";
import Image from "next/image";
import { Button } from "./ui/button";

export default function HomeCarousel() {
  const [current, setCurrent] = React.useState<number>(0);
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 5000);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
    return () => clearInterval(interval);
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="w-full">
        <CarouselPrevious/>
        <CarouselContent className="m-2">
          {carousel.map((slide) => (
            <CarouselItem
              key={slide.title}
              className="border rounded-lg m-2 p-4 flex flex-col md:flex-row gap-4"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <div>
                <h3 className="text-lg font-semibold mt-2 pb-2">
                  {slide.title}
                </h3>
                <p className="text-gray-600">{slide.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext/>
      </Carousel>
      <div className="py-2 text-center">
        {carousel.slice(0,5).map((_, index) => (
            <Button
                key={index}
                variant='ghost'
                onClick={() => api?.scrollTo(index)}
                className={`h-2 w-2 rounded-full p-0 mx-1 ${ index === current ? 'bg-black' : 'bg-gray-300'}`}
            />
        ))}
      </div>
    </>
  );
}
