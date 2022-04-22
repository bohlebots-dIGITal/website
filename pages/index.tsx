import type { NextPage } from "next";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Logo from "../public/logo.png";

import Haii from "../public/people/haii.jpg";
import Niels from "../public/people/niels.jpg";
import Jonathan from "../public/people/jonathan.jpg";
import Helena from "../public/people/helena.jpg";
import Jakob from "../public/people/jakob.jpg";

const Home: NextPage = () => {
  const duration = 0.4;

  useEffect(() => {});

  return (
    <div>
      <video
        muted
        playsInline
        autoPlay
        loop
        className="object-cover -z-10 h-screen w-screen"
      >
        <source src="/animation.mp4" type="video/mp4" />
        <source src="/animation.webm" type="video/webm" />
        This browser does not support HTML5 video elements.
      </video>
      <div className="flex justify-center items-center z-10 h-screen absolute left-0 top-0 w-screen flex-col text-center">
        <div className="relative md:w-[30rem] w-72">
          <Image src={Logo} className="absolute top-0 left-0" alt="dIGITal" />
        </div>
        <p className="text-white text-2xl">At least halfway decent</p>
      </div>
      <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
        {({ isVisible }: any) => (
          <section className="w-full bg-black py-20 px-4 md:px-24">
            {isVisible ? (
              <span className="text-white text-6xl font-bold">
                <CountUp end={30340} duration={duration} /> SCOC.{" "}
                {Math.floor(
                  (new Date().getTime() - new Date("2021-05-03").getTime()) /
                    1000 /
                    60 /
                    60 /
                    24
                )}{" "}
                days. <CountUp end={27} duration={duration} /> parts.{" "}
                <CountUp end={95} duration={duration} /> hardware iterations.{" "}
                <CountUp end={2} duration={duration} /> wins. 0 losses.{" "}
                <span className="text-purple-400">
                  One robot that plays f*cking soccer.
                </span>
              </span>
            ) : null}
          </section>
        )}
      </VisibilitySensor>
      <section className="w-full py-20 px-2 md:px-24">
        <h2 className="text-4xl font-bold">About us</h2>
        <div className="flex flex-col md:flex-row md:flex-wrap  mt-10 justify-center md:justify-between gap-[1rem] ">
          <ProfilePicture name="Helena" image={Helena} role="project manager" />
          <ProfilePicture name="Niels 🦆" image={Niels} role="software ente" />
          <ProfilePicture
            name="Jonathan"
            image={Jonathan}
            role="✨ScHiEf EnGiNeEr✨"
          />
          <ProfilePicture
            name="Jakob"
            image={Jakob}
            role="mechanical engineer"
          />
          <ProfilePicture name="Haiii" image={Haii} role="cute" />
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row ">
        <div className="md:w-1/2 w-full bg-[url('/sunglasses.jpg')] bg-cover bg-center md:min-h-[30rem] min-h-[20rem]"></div>
        <div className="md:w-1/2 w-full bg-black py-10 px-10 md:px-10 text-white text-2xl">
          <h2 className="text-4xl font-bold">Info</h2>
          <ul className="list-disc">
            <li>&mu;C: Espressif ESP-WROOM-32 dev-board</li>
            <li>Pixy-2 camera module</li>
            <li>Integrated IR-Ring module</li>
            <li>Four DC-Motors with Omniwheels</li>
            <li>
              Load-bearing aluminum extrusion-columns mounted between two PCBs
              (without traces, only for mounting stuff upon)
            </li>
            <li>Sunglasses for extra #swag</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

function ProfilePicture(props: { image: any; name: string; role: string }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-[10rem] ">
        <Image
          src={props.image}
          alt={props.name}
          className="absolute top-0 bottom-0 rounded-full"
        />
      </div>
      <span className="font-bold text-2xl">{props.name}</span>
      <span className="text-2xl">{props.role}</span>
    </div>
  );
}

export default Home;
