import Link from "next/link";
import Image from "next/image";
import classes from "./hero.module.scss";

const socials = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/siratul-islam/",
    title: "LinkedIn",
  },
  { id: 2, url: "https://github.com/heronet/", title: "Github" },
  { id: 3, url: "https://www.facebook.com/senorsirat/", title: "Facebook" },
];
const Hero = () => {
  return (
    <div id="hero" className={classes.container}>
      <div className={classes.intro}>
        <div className={classes.text}>
          <div className={classes.title}>
            <span className={classes.name}> I&apos;m Sirat</span>, <br />
            <span>A Software Developer.</span>
          </div>
          <div className={classes.desc}>
            I develop Mobile and Full-stack Web applications. I love to make my
            ideas come to life using modern technologies.
          </div>
          <Link href="/pdfs/resume.pdf" className={classes.resume}>
            My Resume
          </Link>
        </div>
        <div className={classes.details}>
          <Image src="/imgs/me.jpeg" alt="me" className={classes.img} />
          <ul className={classes.social}>
            {socials.map((each) => (
              <li key={each.id} className={classes.item}>
                <Image
                  src={`/icons/${each.title}.svg`}
                  alt={each.title}
                  className={classes.icon}
                />
                <Link href={each.url}>{each.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
