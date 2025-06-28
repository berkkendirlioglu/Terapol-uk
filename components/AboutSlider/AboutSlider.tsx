"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./aboutslider.css";
import Image from "next/image";

function ThumbnailPlugin(mainRef: any) {
  return (slider: any) => {
    function removeActive() {
      slider.slides.forEach((slide: any) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: any) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide: any, idx: any) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main: any) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function AboutSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop:true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );
  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide h-[320px]">
          <Image
            className="object-cover"
            src={"/assets/about/1.png"}
            alt="abouts"
            fill
          />
        </div>
        <div className="keen-slider__slide h-[320px]">
          <Image
            className="object-cover"
            src={"/assets/about/2.png"}
            alt="abouts"
            fill
          />
        </div>
        <div className="keen-slider__slide h-[320px]">
          <Image
            className="object-cover"
            src={"/assets/about/3.png"}
            alt="abouts"
            fill
          />
        </div>
        <div className="keen-slider__slide h-[320px]">
          <Image
            className="object-cover"
            src={"/assets/about/4.png"}
            alt="abouts"
            fill
          />
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

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <div className="keen-slider__slide">
          <Image
            className="object-cover"
            src={"/assets/about/1.png"}
            alt="abouts"
            fill
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            className="object-cover"
            src={"/assets/about/2.png"}
            alt="abouts"
            fill
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            className="object-cover"
            src={"/assets/about/3.png"}
            alt="abouts"
            fill
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            className="object-cover"
            src={"/assets/about/4.png"}
            alt="abouts"
            fill
          />
        </div>
      </div>
    </>
  );
}

function Arrow(props: any) {
  const disabled = props.disabled ? "about-arrow--disabled" : "";
  return (
    <div onClick={props.onClick} className={`${
          props.left ? "about-arrow--left" : "about-arrow--right"
        } ${disabled} about-arrow-container`}>
      <svg
        className={`about-arrow`}
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
