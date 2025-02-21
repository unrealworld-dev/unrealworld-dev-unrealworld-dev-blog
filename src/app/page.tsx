import ScrollDownIndicator from "@/components/blog/title/ScrollDownIndicator";
import TitleImage from "@/components/blog/title/TitleImage";
import Typewriter from "@/components/blog/title/TypingTitle";
import { vt323, } from "@/utils/fonts";

export default function Home() {
  return (
    <div>
      <div className="flex-col z-0">
        <div className="h-0">
          <TitleImage />
        </div>
        <div className="flex z-10 w-full h-screen items-center justify-center bg-black bg-opacity-40">
          <div className="flex-col w-full text-center">
            <p className={`text-6xl md:text-8xl ${vt323.className} text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500`}>
              Unreal World
            </p>
            <Typewriter
              texts={[
                "Immersive Worlds Await",
                "Shaping the Future of Gaming",
                "The Power of Virtual Reality"
              ]}
              typingSpeed={120}
              delayBetweenTexts={2000}
              className={`${vt323.className} text-1xl text-white dark:text-gray-100 mt-4 md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-gradient`}
            />
            <p className={`text-4xl md:text-6xl ${vt323.className} text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-600 drop-shadow-xl`}>
              Developer
            </p>
            <ScrollDownIndicator />
          </div>
        </div>
        <div className="text-center text-white mt-8">다음 글입니다</div>
      </div>
    </div>
  );
}
