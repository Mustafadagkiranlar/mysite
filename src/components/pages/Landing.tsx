"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const texts = [
  "Software engineer",
  "Project manager",
  "Robotics",
  "Web technologies",
  "web design",
  "React",
  "Django",
];

function Landing() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen" id="home">
      {/* {init && (
        <Particles
          className="-z-10"
          id="tsparticles"
          options={{
            fpsLimit: 120,
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 3,
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 5,
                direction: "none",
              },
              color: {
                value: "#000",
              },
              opacity: {
                value: 0.5,
              },
            },
            detectRetina: true,
          }}
        />
      )} */}
      <div className="flex flex-col gap-44 flex-grow text-center">
        <h1 className="text-6xl md:text-9xl">
          Software
          <br />
          Engineer
        </h1>
        <div className="bg-shitty-pink py-8 md:py-12 flex flex-grow">
          <Marquee className="text-white text-xl md:text-3xl font-bold italic">
            Software engineer - Project Manager - Robotics - Web technologies -
            Web design - React - Django
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Landing;
