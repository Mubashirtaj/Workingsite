"use client";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
const Whychooseus = () => {
  const [Counter1, Setcounter1] = useState(0);
  const [Counter2, SetCounter2] = useState(0);
  const [Counter3, SetCounter3] = useState(0);
  const [Counter4, Setcounter4] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const interval1 = setInterval(() => {
        Setcounter1((prevCounter) => {
          if (prevCounter >= 45) {
            clearInterval(interval1);
            return prevCounter; // Stop updating the counter
          }
          return prevCounter + 1;
        });
      }, 100);

      const interval2 = setInterval(() => {
        SetCounter2((prevCounter) => {
          if (prevCounter >= 30) {
            clearInterval(interval2);
            return prevCounter; // Stop updating the counter
          }
          return prevCounter + 1;
        });
      }, 100);

      const interval3 = setInterval(() => {
        SetCounter3((prevCounter) => {
          if (prevCounter >= 15) {
            clearInterval(interval3);
            return prevCounter; // Stop updating the counter
          }
          return prevCounter + 1;
        });
      }, 100);
      const interval4 = setInterval(() => {
        Setcounter4((prevCounter) => {
          if (prevCounter >= 10) {
            clearInterval(interval4);
            return prevCounter; // Stop updating the counter
          }
          return prevCounter + 1;
        });
      }, 100);

      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
        clearInterval(interval4);
      };
    }
  }, [isInView]);
  return (
    <div className="bg-slate-950 Why_Mainconatiner">
      <div className="Why_container ">
        <h1>Why choose us?</h1>
        <p>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate.
        </p>
        <p className="Why_highlight">
          We have 35+ years of experience. We offer marketing and consulting
          services
        </p>
        <div className="Why_stats" ref={ref}>
          <div className="Why_stat">
            <h2>{Counter1}%</h2>
            <h3>Business Setup Growth</h3>
            <p>Sample text. Click to select the Text Element.</p>
          </div>
          <div className="Why_stat">
            <h2>{Counter2}%</h2>
            <h3>Business Problem Solving</h3>
            <p>Sample text. Click to select the Text Element.</p>
          </div>
          <div className="Why_stat">
            <h2>{Counter3}%</h2>
            <h3>Sample Headline</h3>
            <p>Sample text. Click to select the Text Element.</p>
          </div>
          <div className="Why_stat">
            <h2>{Counter4}%</h2>
            <h3>Business Growth</h3>
            <p>Sample text. Click to select the Text Element.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychooseus;
