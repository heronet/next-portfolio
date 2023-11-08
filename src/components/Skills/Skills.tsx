import Skill from "./Skill/Skill";
import classes from "./skills.module.scss";

const skills = {
  Frontend: [
    { id: 1, title: "Angular", logo: "Angular" },
    { id: 2, title: "NextJS", logo: "NextJS" },
    { id: 3, title: "React", logo: "React" },
    { id: 4, title: "ViteJS", logo: "ViteJS" },
    { id: 5, title: "TypeScript", logo: "TypeScript" },
    { id: 6, title: "Shadcn UI", logo: "ShadcnUI" },
    { id: 7, title: "Tailwind", logo: "Tailwind" },
    { id: 8, title: "Bootstrap", logo: "Bootstrap" },
    { id: 9, title: "HTML5", logo: "HTML5" },
    { id: 10, title: "CSS3", logo: "CSS3" },
    { id: 11, title: "SASS", logo: "SASS" },
  ],
  Backend: [
    { id: 1, title: "ASP.NET Core", logo: "ASP.NET Core" },
    { id: 2, title: "PostgreSQL", logo: "PostgreSQL" },
    { id: 3, title: "SQL", logo: "SQL" },
    { id: 4, title: "NodeJS", logo: "NodeJS" },
    { id: 5, title: "ExpressJS", logo: "ExpressJS" },
    { id: 6, title: "MongoDB", logo: "MongoDB" },
    { id: 7, title: "Prisma", logo: "Prisma" },
    { id: 8, title: "Django", logo: "Django" },
    { id: 9, title: "Flask", logo: "Flask" },
    { id: 10, title: "ChatGPT", logo: "ChatGPT" },
    { id: 11, title: "Postman", logo: "Postman" },
    { id: 12, title: "Swagger", logo: "Swagger" },
  ],
  Mobile: [
    { id: 1, title: "Android SDK", logo: "Android" },
    { id: 2, title: "Android XML", logo: "XML" },
    { id: 3, title: "Jetpack Compose", logo: "Jetpack Compose" },
    { id: 4, title: "Room Database", logo: "SQL" },
    { id: 5, title: "Dagger Hilt", logo: "Dagger" },
    { id: 6, title: "Retrofit 2", logo: "Square" },
    { id: 7, title: "Flutter", logo: "Flutter" },
    { id: 8, title: "React Native", logo: "React" },
  ],
  Tools: [
    { id: 1, title: "Linux", logo: "Linux" },
    { id: 2, title: "Docker", logo: "Docker" },
    { id: 3, title: "Podman", logo: "Podman" },
    { id: 4, title: "Google Cloud", logo: "Google Cloud" },
    { id: 5, title: "Microsoft Azure", logo: "Microsoft Azure" },
    { id: 6, title: "Firebase", logo: "Firebase" },
    { id: 7, title: "CI/CD", logo: "CI-CD" },
    { id: 8, title: "Git", logo: "Git" },
    { id: 9, title: "Github", logo: "Github-dark" },
    { id: 10, title: "Bash", logo: "Bash" },
    { id: 11, title: "Vercel", logo: "Vercel" },
  ],
  Languages: [
    { id: 1, title: "C/C++", logo: "C++" },
    { id: 2, title: "C#", logo: "C Sharp" },
    { id: 3, title: "TypeScript", logo: "TypeScript" },
    { id: 4, title: "JavaScript", logo: "JavaScript" },
    { id: 5, title: "Java", logo: "Java" },
    { id: 6, title: "Kotlin", logo: "Kotlin" },
    { id: 7, title: "Rust", logo: "Rust" },
    { id: 8, title: "Python", logo: "Python" },
    { id: 9, title: "Dart", logo: "Dart" },
    { id: 10, title: "SQL", logo: "SQL" },
    { id: 11, title: "PowerShell", logo: "PowerShell" },
    { id: 12, title: "Markdown", logo: "Markdown" },
    { id: 13, title: "Groovy", logo: "Groovy" },
  ],
};

const Skills = () => {
  return (
    <div className={classes.container} id="skills">
      <div className={classes.content}>
        <div className={classes.text}>
          <h1>Skills</h1>
          <span>
            Throughout the years, I have diligently honed my expertise by
            acquiring a wealth of knowledge and skills across a diverse spectrum
            of programming languages and cutting-edge tools. Allow me to share
            just a glimpse of the remarkable arsenal I have cultivated.
          </span>
        </div>
        <div className={classes.skills}>
          {Object.entries(skills).map(([key, val]) => (
            <Skill category={key} items={val} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
