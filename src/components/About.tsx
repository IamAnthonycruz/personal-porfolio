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
  { title: "", emoji: "" },
  {
    title: "",
    emoji: "",
  },
  {
    title: "",
    emoji: "",
  },
  {
    title: "",
    emoji: "",
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
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My reads"
              description="Explore the books shaping my perspective"
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="book cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My ToolBox"
              description="Expore the technologies and tools I use to create digital
                experiences"
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6 -translate-x-1/2"
            />
          </Card>
          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the code"
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="smile emoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
