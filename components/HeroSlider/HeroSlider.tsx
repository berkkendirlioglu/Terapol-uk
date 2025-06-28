"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./style.css";
import Image from "next/image";

const imgs = [
  "/assets/hero/0.png",
  "/assets/hero/1.png",
  "/assets/hero/2.png",
  "/assets/hero/3.png",
  "/assets/hero/4.png",
  "/assets/hero/5.png",
  "/assets/hero/6.png",
  "/assets/hero/7.png",
  "/assets/hero/8.png",
  "/assets/hero/9.png",
  "/assets/hero/10.png",
  "/assets/hero/11.png",
  "/assets/hero/12.png",
  "/assets/hero/13.jpg",
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className="relative">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider !h-[580px]">
          {imgs.map((img, index) => (
            <div key={index} className="keen-slider__slide !relative">
              <Image className="object-cover" src={img} alt="slidePhoto" fill />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Arrow(props: any) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <div onClick={props.onClick} className={`${
          props.left ? "arrow--left" : "arrow--right"
        } ${disabled} arrow-container !w-[50px] lg:!w-[250px]`}>
      <svg
        className={`arrow`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </div>
  );
}
