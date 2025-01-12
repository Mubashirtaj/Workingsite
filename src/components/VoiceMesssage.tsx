// // components/VoiceMessage.js
// import React, { useRef, useState } from "react";
// const VoiceMessage = () => {
//   // Path to your audio file
//   const audioSrc = "/kab.mp3"; // Update this path
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false); // State to track if audio is playing

//   const togglePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause(); // Pause the audio
//     } else {
//       audioRef.current.play(); // Play the audio
//     }
//     setIsPlaying(!isPlaying); // Toggle the playing state
//   };
//   return (
//     <div>
//       <div className="flex items-start gap-2.5">
//         <div className="flex flex-col gap-2.5 w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-black rounded-e-xl rounded-es-xl dark:bg-gray-700">
//           <div className="flex items-center space-x-2 rtl:space-x-reverse">
//             <span className="text-sm font-semibold text-white dark:text-white">
//               Please Listen
//             </span>
//           </div>
//           <div className="flex items-center space-x-2 rtl:space-x-reverse">
//             <button
//               className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
//               type="button"
//               onClick={togglePlayPause} // Play audio on button click
//             >
//               {isPlaying ? (
//                 <svg
//                   className="w-4 h-4 text-gray-800 dark:text-white"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 12 16"
//                 >
//                   <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-4 h-4 text-gray-800 dark:text-white"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="M4.5 0C3.67 0 3 0.67 3 1.5v13c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V1.5C14 0.67 13.33 0 12.5 0h-" />
//                 </svg>
//               )}
//             </button>
//             <div>
//               <svg
//                 aria-hidden="true"
//                 className="w-[145px] md:w-[185px] md:h-[40px]"
//                 viewBox="0 0 185 40"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <rect
//                   y="17"
//                   width="3"
//                   height="6"
//                   rx="1.5"
//                   fill="#6B7280"
//                   className="dark:fill-white"
//                 />
//                 <rect
//                   x="7"
//                   y="15.5"
//                   width="3"
//                   height="9"
//                   rx="1.5"
//                   fill="#6B7280"
//                   className="dark:fill-white"
//                 />
//                 <rect
//                   x="21"
//                   y="6.5"
//                   width="3"
//                   height="27"
//                   rx="1.5"
//                   fill="#6B7280"
//                   className="dark:fill-white"
//                 />
//                 <rect
//                   x="14"
//                   y="6.5"
//                   width="3"
//                   height="27"
//                   rx="1.5"
//                   fill="#6B7280"
//                   className="dark:fill-white"
//                 />
//                 <rect
//                   x="28"
//                   y="3"
//                   width="3"
//                   height="34"
//                   rx="1.5"
//                   fill="#6B7280"
//                   className="dark:fill-white"
//                 />
//                 <rect
//                   x="35"
//                   y="3"
//                   width="3"
//                   height="34"
//                   rx="1.5"
//                   fill="#6B7280"
//                   className="dark:fill-white"
//                 />
//                 <rect
//                   x="42"
//                   y="5.5"
//                   width="3"
//                   height="29"
//                   rx="1.5"
//                   fill="#6B7280"
//                   className="dark:fill-white"
//                 />
//                 <rect
//                   x="49"
//                   y="10"
//                   width="3"
//                   height="20"
//                   rx="1.5"
//                   fill="#6B7280"
//                   className="dark:fill-white"
//                 />
//                 <rect
//                   x="56"
//                   y="13.5"
//                   width="3"
//                   height="13"
//                   rx="1.5"
//                   fill="#6B7280"
//                   className="dark:fill-white"
//                 />
//                 <rect
//                   x="63"
//                   y="16"
//                   width="3"
//                   height="8"
//                   rx="1.5"
//                   fill="#6B7280"
//                   className="dark:fill-white"
//                 />
//                 <rect
//                   x="70"
//                   y="12.5"
//                   width="3"
//                   height="15"
//                   rx="1.5"
//                   fill="#E5E7EB"
//                   className="dark:fill-gray-500"
//                 />
//                 <rect
//                   x="77"
//                   y="3"
//                   width="3"
//                   height="34"
//                   rx="1.5"
//                   fill="#E5E7EB"
//                   className="dark:fill-gray-500"
//                 />
//                 <rect
//                   x="84"
//                   y="3"
//                   width="3"
//                   height="34"
//                   rx="1.5"
//                   fill="#E5E7EB"
//                   className="dark:fill-gray-500"
//                 />
//                 <rect
//                   x="91"
//                   y="0.5"
//                   width="3"
//                   height="39"
//                   rx="1.5"
//                   fill="#E5E7EB"
//                   className="dark:fill-gray-500"
//                 />
//                 <rect
//                   x="98"
//                   y="0.5"
//                   width="3"
//                   height="39"
//                   rx="1.5"
//                   fill="#E5E7EB"
//                   className="dark:fill-gray-500"
//                 />
//                 <rect
//                   x="105"
//                   y="2"
//                   width="3"
//                   height="36"
//                   rx="1.5"
//                   fill="#E5E7EB"
//                   className="dark:fill-gray-500"
//                 />
//                 <rect
//                   x="112"
//                   y="6.5"
//                   width="3"
//                   height="27"
//                   rx="1.5"
//                   fill="#E5E7EB"
//                   className="dark:fill-gray-500"
//                 />
//                 <rect
//                   x="119"
//                   y="9"
//                   width="3"
//                   height="22"
//                   rx="1.5"
//                   fill="#E5E7EB"
//                   className="dark:fill-gray-500"
//                 />
//                 <rect
//                   x="126"
//                   y="11.5"
//                   width="3"
//                   height="17"
//                   rx="1.5"
//                   fill="#E5E7EB"
//                   className="dark:fill-gray-500"
//                 />
//                 <rect
//                   x="133"
//                   y="2"
//                   width="3"
//                   height="36"
//                   rx="1.5"
//                   fill="#E5E7EB"
//                   className="dark:fill-gray-500"
//                 />
//                 <rect
//                   x="140"
//                   y="2"
//                   width="3"
//                   height="36"
//                   rx="1.5"
//                   fill="#E5E7EB"
//                   className="dark:fill-gray-500"
//                 />
//                 <rect
//                   x="147"
//                   y="7"
//                   width="3"
//                   height="26"
//                   rx="1.5"
//                   fill="#E5E7EB"
//                   className="dark:fill-gray-500"
//                 />
//                 <rect
//                   x="154"
//                   y="9"
//                   width="3"
//                   height="22"
//                   rx="1.5"
//                   fill="#E5E7EB"
//                   className="dark:fill-gray-500"
//                 />
//                 <rect
//                   x="161"
//                   y="9"
//                   width="3"
//                   height="22"
//                   rx="1.5"
//                   fill="#E5E7EB"
//                   className="dark:fill-gray-500"
//                 />
//                 <rect
//                   x="168"
//                   y="13.5"
//                   width="3"
//                   height="13"
//                   rx="1.5"
//                   fill="#E5E7EB"
//                   className="dark:fill-gray-500"
//                 />
//                 <rect
//                   x="175"
//                   y="16"
//                   width="3"
//                   height="8"
//                   rx="1.5"
//                   fill="#E5E7EB"
//                   className="dark:fill-gray-500"
//                 />
//                 <rect
//                   x="182"
//                   y="17.5"
//                   width="3"
//                   height="5"
//                   rx="1.5"
//                   fill="#E5E7EB"
//                   className="dark:fill-gray-500"
//                 />
//                 <rect
//                   x="66"
//                   y="16"
//                   width="8"
//                   height="8"
//                   rx="4"
//                   fill="#1C64F2"
//                 />
//               </svg>
//             </div>
//             <audio ref={audioRef} src={audioSrc} preload="auto" />
//             <span className="inline-flex self-center items-center p-2 text-sm font-medium text-white dark:text-white">
//               3:42
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VoiceMessage;

"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateWaveform } from "@/lib/generateWaveform";

const VoiceMessage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const waveformData = useRef(generateWaveform(50));

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("ended", handleEnded);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        audioRef.current.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="flex flex-row
     items-center p-2 rounded-lg border gap-3 border-white shadow-md w-full  "
    >
      <audio ref={audioRef} src="/kab.mp3" />
      <Button onClick={togglePlayPause} className="mt-4 mb-4">
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
      </Button>

      <div className="flex items-center justify-center h-16 bg-black rounded-md overflow-hidden">
        {waveformData.current.map((height, index) => (
          <div
            key={index}
            className="inline-block w-1 mx-px bg-blue-500  bottom-0"
            style={{
              height: `${height * 30}%`,
              left: `${(index / waveformData.current.length) * 100}%`,
              opacity:
                index / waveformData.current.length <= progress / 100 ? 1 : 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default VoiceMessage;
