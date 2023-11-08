import TechItem from "../../../ui/TechItem/TechItem";
import classes from "./skill.module.scss";

type Props = {
  category: string;
  items: { id: number; title: string; logo: string }[];
};

const Skill = (props: Props) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.name}>{props.category}</h2>
      <ul className={classes.list}>
        {props.items.map((skill) => (
          <TechItem tech={skill} key={skill.id} />
        ))}
      </ul>
    </div>
  );
};

export default Skill;
