import Image from "next/image";
import classes from "./techitem.module.scss";

type Props = {
  tech: {
    id: number;
    title: string;
    logo: string;
  };
};

const TechItem = ({ tech }: Props) => {
  return (
    <li key={tech.id} className={`${classes.item}`}>
      <Image
        src={`/icons/${tech.logo}.svg`}
        alt={tech.title}
        className={classes.img}
      />
      <span className={classes.title}>{tech.title}</span>
    </li>
  );
};

export default TechItem;
