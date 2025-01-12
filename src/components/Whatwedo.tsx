"use client";
import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  MdOutlineSlowMotionVideo,
  MdScreenSearchDesktop,
} from "react-icons/md";

const Whatwedo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="What_MainContainer">
      <div className="What_container">
        <div className="What_text-section">
          <h2>OUR SERVICES</h2>
          <h1>
            What We <span>Do.</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            facilisis egestas erat, et bibendum lorem. Praesent nec magna,
            semper.
          </p>
          <p>
            Donec sed enim, rhoncus ac pellentesque sit amet, congue venenatis
            ipsum. Donec non blandit elit.
          </p>
          <a href="#" className="What_view-all">
            VIEW ALL
          </a>
        </div>
        <div className="What_services">
          <div
            className="What_service"
            ref={ref}
            style={{
              transform: isInView ? "none" : "scale(0.5)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <i className="fas fa-palette flex justify-center	items-center	">
              <CiMobile3 />
            </i>
            <h3>App Development</h3>
            <p>We bring the right people together to challenge</p>
          </div>
          <div
            className="What_service"
            style={{
              transform: isInView ? "none" : "scale(0.5)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <i className="fas fa-palette flex justify-center	items-center	">
              <MdScreenSearchDesktop />
            </i>
            <h3>Website Development</h3>
            <p>We bring the right people together to challenge</p>
          </div>
          <div
            className="What_service"
            style={{
              transform: isInView ? "none" : "scale(0.5)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <i className="fas fa-palette flex justify-center	items-center	">
              <HiOutlinePaintBrush />
            </i>{" "}
            <h3>UI & UX Design</h3>
            <p>We bring the right people together to challenge</p>
          </div>
          <div
            className="What_service"
            style={{
              transform: isInView ? "none" : "scale(0.5)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <i className="fas fa-palette flex justify-center	items-center">
              {" "}
              <MdOutlineSlowMotionVideo />
            </i>{" "}
            <h3>Amimations</h3>
            <p>We bring the right people together to challenge</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
