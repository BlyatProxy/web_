"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { LinkPreview } from "@/components/ui/link-preview";
import { motion } from "framer-motion";
export function HeroTitle() {
  return (
    <div className="z-10 flex items-center justify-center w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full p-6 sm:p-8 lg:p-10 rounded-3xl border-2 border-neutral-800/50 bg-gradient-to-br from-black/80 via-purple-900/30 to-black/80 backdrop-blur-sm relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
          style={{
            animation: "borderPulse 4s ease-in-out infinite"
          }}
        />
        
        <div className="relative flex flex-col items-center space-y-6 sm:space-y-8">
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl border-2 border-neutral-800 bg-black/30 text-white/90 transition-all hover:bg-black/40">
            <span className="text-base sm:text-lg font-semibold tracking-wide text-center">⚠️ Disclaimer: This is a fan-made community</span>
          </AnimatedShinyText>
          
          <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 py-4 sm:py-6">
            <WordPullUp
              words="Ujang Geng's Roblox Community"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white/90 text-center"
              framerProps={{
                hidden: { y: 40, opacity: 0 },
                show: { 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    damping: 12
                  }
                }
              }}
            />
            <WordPullUp
              words="Join our amazing community of Roblox players"
              className="text-xl sm:text-2xl font-medium text-neutral-200/80 text-center"
              delayMultiple={1}
              framerProps={{
                hidden: { y: 20, opacity: 0 },
                show: { 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    damping: 15
                  }
                }
              }}
            />
            <WordPullUp
              words="where fun and friendship come together."
              className="text-xl sm:text-2xl font-medium text-neutral-200/80 text-center"
              delayMultiple={2}
              framerProps={{
                hidden: { y: 20, opacity: 0 },
                show: { 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    damping: 15
                  }
                }
              }}
            />
            <div className="flex items-center justify-center px-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    damping: 15,
                    delay: 0.6
                  }
                }}
                className="text-lg sm:text-2xl font-medium text-neutral-200/80 text-center"
              >
                Join us on{" "}
                <LinkPreview
                  url="https://dsc.gg/ujang"
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 transition-all"
                  isStatic={true}
                  imageSrc="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxsG72wAo9EWJR4yQWyJJaDb6rYcBtJvTvH3UoAS4JFNDaxGhmKNaMwgElLURlRFeVkLCjkfnXmWtINWZIrPGYq0-&format=source"
                >
                  Discord
                </LinkPreview>{" "}
                to be part of our growing community!
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes borderPulse {
          0% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.02);
          }
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

import WordPullUp from "@/components/ui/word-pull-up";

export function WelcomeSection() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black">
      <ContainerScroll titleComponent={<HeroTitle />}>
        <Image
          src={`/lol.gif`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full w-full object-left-top border-2 border-gray-800"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}

import { PinContainer } from "@/components/ui/3d-pin"
export function Contributors() {
  return (
    <div className="relative py-12 sm:py-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 mb-4 hover:scale-105 transition-transform duration-300"
          >
            Meet Our Team
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 rounded-full mb-8 sm:mb-16"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -top-40 left-0 right-0 h-40 bg-cyan-500/10 blur-3xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 mt-8">
          <PinContainer
            title="Dennz"
            href="https://www.roblox.com/users/1108086154/profile"
            containerClassName="h-[400px]"
          >
            <div className="flex flex-col p-4 w-[300px]">
              <img
                src="/dennz.png"
                alt="Dennz"
                className="w-full aspect-square mb-4 rounded-xl"
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                Dennz
              </h3>
              <p className="text-neutral-200 text-sm leading-relaxed">
                Creator of the Discord server and website. Co-founder and platform developer with a passion for building communities.
              </p>
            </div>
          </PinContainer>

          <PinContainer
            title="vanitas"
            href="https://www.roblox.com/users/2036694053/profile"
            containerClassName="h-[400px]"
          >
            <div className="flex flex-col p-4 w-[300px]">
              <img
                src="/vanitas.png"
                alt="vanitas"
                className="w-full aspect-square mb-4 rounded-xl"
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                Vanitas
              </h3>
              <p className="text-neutral-200 text-sm leading-relaxed">
                Mastermind behind Geng Ujang and founder of the iconic group. Visionary leader who brought the community together.
              </p>
            </div>
          </PinContainer>

          <PinContainer
            title="Flintt"
            href="https://www.roblox.com/users/3391602656/profile"
            containerClassName="h-[400px]"
          >
            <div className="flex flex-col p-4 w-[300px]">
              <img
                src="/flint.png"
                alt="Flintt"
                className="w-full aspect-square mb-4 rounded-xl"
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                Flintt
              </h3>
              <p className="text-neutral-200 text-sm leading-relaxed">
                Friend of Vanitas and supporter of the Ujang Geng vision. Helped bring the community together through shared passion.
              </p>
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-hidden bg-black">
      <WelcomeSection />
      <Contributors />
    </div>
  );
}
