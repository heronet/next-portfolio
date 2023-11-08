import classes from "./footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <p>© 2023 Sirat. All rights reserved.</p>
        <div className={classes.power}>
          <span>Powerd by NextJS </span>
          <Image src="/icons/NextJS alt.svg" alt="react-logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
