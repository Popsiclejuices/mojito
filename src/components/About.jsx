import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

import React from "react";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: " words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Drinks</p>
            <h2>
              Where Every Detail Matters <span className="text-white">-</span>
              From Murdle to Garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              At Zenbucks Cafe, we believe that every drinks tells a story. From
              the meticulous selection of ingredients to the artistry of
              presentation, our drinks are crafted with passion and precision.
              Join us in celebrating the art of mixology, where each sip is a
              journey through flavor and creativity.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                Based on 100,000+ reviews
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy">
            <img
              src="/images/abt3.jpg"
              alt="grid-img-3"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="noisy">
            <img
              src="/images/abt1.jpg"
              alt="grid-img-1"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="noisy">
            <img
              src="/images/abt5.jpg"
              alt="grid-img-5"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy">
            <img
              src="/images/abt2.jpg"
              alt="grid-img-2"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="noisy">
            <img
              src="/images/abt4.jpg"
              alt="grid-img-4"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
