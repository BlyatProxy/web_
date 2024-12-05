"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(20deg) scale(0.95)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <Link
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(25deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl bg-gradient-to-br from-neutral-900/95 via-neutral-900/90 to-neutral-900/80 shadow-[0_8px_32px_rgb(0_0_0/0.4)] backdrop-blur-md border border-white/[0.2] group-hover/pin:border-cyan-500/50 group-hover/pin:shadow-[0_12px_36px_rgb(0_0_0/0.5)] transition-all duration-700 overflow-hidden"
        >
          <div className={cn("relative z-10", className)}>{children}</div>
          
          {/* Animated gradient background */}
          <div 
            className="absolute inset-0 opacity-0 group-hover/pin:opacity-100 transition-opacity duration-700"
            style={{
              background: "radial-gradient(circle at center, rgba(6,182,212,0.15) 0%, transparent 70%)",
              animation: "pulse 4s infinite"
            }}
          />
          
          {/* Inner glow effects */}
          <div className="absolute inset-0 opacity-0 group-hover/pin:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent" />
          </div>
          
          {/* Animated corner highlights */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-tl-2xl opacity-0 group-hover/pin:opacity-100 transition-opacity duration-700" 
            style={{
              animation: "shimmer 2s infinite"
            }}
          />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/10 to-transparent rounded-br-2xl opacity-0 group-hover/pin:opacity-100 transition-opacity duration-700"
            style={{
              animation: "shimmer 2s infinite reverse"
            }}
          />

          {/* Sparkle effects */}
          <div className="absolute inset-0">
            <div className="absolute top-[10%] left-[10%] w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover/pin:opacity-100 transition-opacity duration-700"
              style={{ animation: "sparkle 1.5s infinite" }}
            />
            <div className="absolute top-[40%] right-[20%] w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover/pin:opacity-100 transition-opacity duration-700"
              style={{ animation: "sparkle 1.5s infinite 0.5s" }}
            />
            <div className="absolute bottom-[30%] left-[30%] w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover/pin:opacity-100 transition-opacity duration-700"
              style={{ animation: "sparkle 1.5s infinite 1s" }}
            />
          </div>
        </div>
      </div>
      <PinPerspective title={title} />

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        @keyframes shimmer {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }
        @keyframes sparkle {
          0%, 100% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </Link>
  );
};

export const PinPerspective = ({
  title,
}: {
  title?: string;
}) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-gradient-to-b from-neutral-800/95 to-neutral-900/95 py-1.5 px-6 ring-1 ring-white/20 group-hover/pin:ring-cyan-500/40 group-hover/pin:bg-gradient-to-b group-hover/pin:from-neutral-800/95 group-hover/pin:to-neutral-900/95 transition-all duration-300">
            <span className="relative z-20 text-white text-sm font-semibold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover/btn:opacity-100"></span>
          </div>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(25deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-cyan-500/[0.15] shadow-[0_8px_16px_rgb(0_0_0/0.5)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-cyan-500/[0.15] shadow-[0_8px_16px_rgb(0_0_0/0.5)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-cyan-500/[0.15] shadow-[0_8px_16px_rgb(0_0_0/0.5)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px] z-[70]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 z-[70]" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-[70] blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-[70]" />
        </>
      </div>
    </motion.div>
  );
};
