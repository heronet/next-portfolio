"use client";
import { useState } from "react";
import MenuButton from "../../ui/MenuButton";
import classes from "./header.module.scss";
import CloseButton from "../../ui/CloseButton";

const links = [
  { id: 1, title: "Skills", url: "#skills" },
  { id: 2, title: "Projects", url: "#projects" },
  { id: 3, title: "About", url: "#about" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes["links-container"]}>
        <a href="#" className={classes.brand}>
          Sirat<span className={classes.xyz}>.site</span>
        </a>
        <ul className={classes.links}>
          {links.map((link) => (
            <li key={link.id} className={classes.link}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
          <li
            className={classes.menu}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <CloseButton /> : <MenuButton />}
          </li>
        </ul>
        {isOpen && (
          <ul className={classes.dropdown}>
            {links.map((link) => (
              <li key={link.id} className={classes.dropitem}>
                <a href={link.url} onClick={() => setIsOpen((open) => !open)}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
