import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";

const style = { color: "#FFF", fontSize: "1.5em" }

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome style={style} />,
    cName: "nav-text"
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaUserAstronaut style={style} />,
    cName: "nav-text"
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <BsIcons.BsLaptop style={style} />,
    cName: "nav-text"
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <IoIcons.IoIosPaper style={style} />,
    cName: "nav-text"
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaEnvelopeOpenText style={style} />,
    cName: "nav-text"
  },
  {
    title: "Articles",
    path: "/articles",
    icon: <IoIcons.IoIosPaper style={style} />,
    cName: "nav-text"
  },
];
