import React from "react";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "./TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "./CardHeader";
import { ToolboxItems } from "./ToolboxItems";
const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];
const hobbies = [
  { title: "", emoji: "", left: "5%", top: "5%" },
  {
    title: "",
    emoji: "",
    left: "50%",
    top: "5%",
  },
  {
    title: "",
    emoji: "",
    left: "10%",
    top: "35%",
  },
  {
    title: "",
    emoji: "",
    left: "35%",
    top: "40%",
  },
];
const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am what I do and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="md:grid md:grid-cols-5 md:gap-8">
            <Card className="h-[320px] md:col-span-2">
              <CardHeader
                title="My reads"
                description="Explore the books shaping my perspective"
              />
              <div className="w-40 mx-auto mt-8">
                <Image src={bookImage} alt="book cover" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-3">
              <CardHeader
                title="My ToolBox"
                description="Expore the technologies and tools I use to create digital
                experiences"
                className="px-6 pt-6"
              />
              <ToolboxItems items={toolboxItems} className="mt-6" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the code"
              className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute "
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative">
            <Image
              src={mapImage}
              alt="map"
              className="h-full w-full object-cover object-left-top"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <Image src={smileMemoji} alt="smile emoji" className="size-20" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
