import classes from "./about.module.scss";

const About = () => {
  return (
    <div className={classes.container} id="about">
      <div className={classes.content}>
        <h1>About Me</h1>
        <p>
          Hello, my name is Sirat, and I am an accomplished fullstack web
          developer and Android developer. With a wide range of technical
          expertise, I have mastered various stacks and cutting-edge
          technologies that enable me to create exceptional digital experiences.
        </p>
        <p>
          My ultimate goal is to create apps that make a genuine difference in
          people&apos;s lives. I am driven by the desire to build impactful and
          useful solutions that address real-world challenges, providing users
          with seamless functionality and unparalleled value.
        </p>
        <p>
          With a meticulous attention to detail and a deep understanding of
          user-centric design principles, I strive to deliver compelling and
          intuitive applications that surpass expectations. I am excited to
          continue pushing the boundaries of technology and contributing to the
          ever-evolving world of software development.
        </p>
      </div>
    </div>
  );
};

export default About;
