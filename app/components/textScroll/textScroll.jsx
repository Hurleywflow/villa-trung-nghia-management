"use client";
import Image from "next/image";
// import Paragraph from '@/components/Paragraph';
import Word from "./Word";
// import Character from '@/components/Character';

const paragraph =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

export default function TextScroll() {
  return (
    <section id="services">
      {/* <div style={{height: "100vh"}}></div>
        <Paragraph paragraph={paragraph}/> */}
      <div style={{ height: "30vh" }}></div>
      <h1 className="mb-20 text-6xl">Dich vu</h1>
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 md:flex-row">
        <div className="w-full md:w-2/3">
          <Word paragraph={paragraph} />
        </div>
        <div className="w-full md:w-1/3">
          <div className="relative mx-auto aspect-square h-full w-full">
            <Image
              alt="pizza"
              src="/images/1.jpg"
              // width={500}
              // height={500}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
      <div style={{ height: "30vh" }}></div>
      {/* <Character paragraph={paragraph} />
        <div style={{height: "100vh"}}></div> */}
    </section>
  );
}
