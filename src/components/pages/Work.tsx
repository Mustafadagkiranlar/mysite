import Link from "next/link";
import React from "react";


const experiences = [
  {
    company: "Caretta Robotics",
    dates: "Oct20 May23",
    websiteLink: "https://carettarobotics.com/",
    title:
      "Caretta Robotics is a robotics company focused on Underwater Autonomous Vehicles and Artificial Intelligence",
    body: "I developed Dockerized BlueOS plugins for an Unmanned Autonomous Underwater Vehicle, featuring web interfaces for logging and displaying information using Flask. Designed and implemented a patent-pending AI algorithm for Google's Tensor Processing Unit. Optimized vehicle network communication using TCP and UDP for transmitting detected species and information. Established a software distribution system with Microsoft Azure.",
    cardColor: "bg-card-1",
  },
  {
    company: "Cyprus Robotics",
    dates: "Jul20 Present",
    websiteLink: "https://www.cyprusrobotics.eu/en/",
    title:
      "Caretta Robotics is a robotics company focused on Underwater Autonomous Vehicles and Artificial Intelligence",
    body: "Under resource constraints, I successfully implemented hardware integration, demonstrating my proficiency in algorithm implementation with limited documentation and instructions. I developed MySQL databases for robot authentication and authorization, and logged critical data for future diagnosis. To enhance user interaction, I designed and created a web user interface that allows users to control the robot effectively. Furthermore, I developed robust authorization and authentication processes using Node.js-based REST APIs.",
    cardColor: "bg-card-2",
  },
  {
    company: "Noku Soft",
    dates: "Nov23 Present",
    websiteLink: "#",
    title:
      "Noku software",
    body: "My Friends and I we are the founders of Noku Software, a company that specializes in developing websites using the latest web technologies. Our primary focus areas include artificial intelligence, web technologies, and emerging fields such as Web3 and blockchain technology. We strive to stay at the forefront of technological advancements, ensuring our solutions are innovative and future-proof. Our team is dedicated to creating robust, secure, and user-friendly applications that meet the diverse needs of our clients. By leveraging our expertise in these domains, we aim to drive digital transformation and contribute to the evolution of the tech industry.",
    cardColor: "bg-card-3",
  },
];



function ExperienceCards({
  company,
  dates,
  websiteLink,
  title,
  body,
  cardColor,
}: {
  company: String;
  dates: String;
  websiteLink: String;
  title: String;
  body: String;
  cardColor: String;
}) {
  return (
    <div className={`${cardColor} rounded-xl p-6 flex flex-col md:flex-row gap-6 w-3/4 mx-auto`}>
      <div className="">
        <p className="w-0 text-3xl font-semibold">{company}</p>
        <p>{dates}</p>
        <div className="mt-7 rounded-xl bg-black py-2 text-center w-36">
          <Link href={`${websiteLink}`}>
            <p className=" italic font-medium text-white">
              website
              <span className="text-nice-green font-bold text-xl">.</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <p className="font-medium text-xl">{title}</p>
        <p className="mt-3">{body}</p>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="work"
    >
      <p className="font-medium text-4xl my-16">My Journey</p>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCards
            body={experience.body}
            cardColor={experience.cardColor}
            company={experience.company}
            dates={experience.dates}
            title={experience.title}
            websiteLink={experience.websiteLink}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
