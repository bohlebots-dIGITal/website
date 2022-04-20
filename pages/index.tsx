import type { NextPage } from "next";
import { createRef, useEffect, useRef, useState } from "react";

const Home: NextPage = () => {
  const [position, setPosition] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // videoRef = createRef()
    window.onwheel = (e) => {
      console.log(window.scrollY);
      if (videoRef.current) {
        videoRef.current.currentTime += e.deltaY / 300;
      }
    };

    window.onkeydown = (e) => {
      if (e.key == "ArrowDown" || e.key == "j") {
        if (videoRef.current) {
          videoRef.current.currentTime += 1;
        }
      } else if (e.key == "ArrowUp" || e.key == "k") {
        if (videoRef.current) {
          videoRef.current.currentTime -= 1;
        }
      }
    };
  });

  return (
    <div>
      <video
        src="/animation.webm"
        ref={videoRef}
        className="object-cover -z-10 h-screen w-screen"
      ></video>
      <div className="flex justify-center items-center z-10 h-screen absolute left-0 top-0 w-screen flex-col">
        <h1 className="text-9xl text-white font-bold">dIGITal</h1>
        <p className="text-white text-2xl">At least halfway decent</p>
      </div>
      <section className="w-full bg-black py-20 px-72">
        <span className="text-white text-6xl font-bold">
          63 commits.{" "}
          {Math.floor(
            (new Date().getTime() - new Date("2021-05-03").getTime()) /
              1000 /
              60 /
              60 /
              24
          )}{" "}
          days. 27 parts. 54 hardware-iterations.{" "}
          <span className="text-purple-400">
            One robot that plays f*cking soccer.
          </span>
        </span>
      </section>
    </div>
  );
};

export default Home;
