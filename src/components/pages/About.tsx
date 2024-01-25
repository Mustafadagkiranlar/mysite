import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const skills = [
  {
    isFirst: true,
    bottom: "Contact",
    body: "My Sills",
    color: "bg-card-1",
  },
  {
    isFirst: false,
    bottom: "Robotics",
    body: "Python | C | C++ | Docker ROS1 & ROS2 | Flask & Django | Image Processing | Artificial Intelligence | Network & Communication",
    color: "bg-card-2",
  },
  {
    isFirst: false,
    bottom: "Web",
    body: "Figma | NodeJS | MongoDB | ReactJS | Typescripy | Postgres & MySQL | NextJS",
    color: "bg-card-3",
  },
  {
    isFirst: false,
    bottom: "Soft Skills",
    body: "Project management | listening skills | time management | problem-solving | leadership | representing",
    color: "bg-card-4",
  },
];

function SkillCards({
  isFirst,
  body,
  bottom,
  color,
}: {
  isFirst: boolean;
  body: String;
  bottom: String;
  color: String;
}) {
  return (
    <div
      className={`${color} flex flex-col justify-between p-5 rounded-xl h-60 w-60 mx-5`}
    >
      <p
        className={`  ${
          isFirst ? "text-2xl font-semibold tracking-widest" : ""
        } `}
      >
        {body}
      </p>
      {isFirst ? (
        <Link href={"#"} className="rounded-xl bg-black py-2 text-center w-36">
          <p className="text-white italic font-medium">
            {bottom}{" "}
            <span className="text-nice-green font-bold text-xl">.</span>
          </p>
        </Link>
      ) : (
        <p className="text-black text-lg font-semibold tracking-wider">
          {bottom} <span className="text-nice-green font-bold text-xl">.</span>
        </p>
      )}
    </div>
  );
}

function About() {
  return (
    <div className="flex flex-col items-center justify-center sm:h-screen mt-6 sm:mt-0" id="about">
      <div className="sm:w-1/2 mx-auto flex flex-col items-center sm:flex-row gap-8 mb-20">
        <div className="flex flex-col items-center mb-8 sm:mb-0">
          <p className="text-5xl flex gap-1 mb-8">Hello <span className="text-nice-green">!</span> </p>
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/43909833?v=4" alt="profile image of me"/>
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <p className=" text-lg sm:text-2xl text-center sm:text-start px-4 sm:px-0">
            I am an ambitious software engineer with 4 years of experience in
            software development and project management. I am skilled in
            developing plans, managing projects, creating user documentation,
            and possess expertise in programming languages, frameworks,
            artificial intelligence, databases, and different types of operating
            systems. In addition to these skills, I am adaptive to new topics in
            academia. I like to learn and research about emerging topics and
            methodologies in software and project management.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-0">
        {skills.map((skill, index) => (
          <SkillCards
            key={index}
            isFirst={skill.isFirst}
            bottom={skill.bottom}
            body={skill.body}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
