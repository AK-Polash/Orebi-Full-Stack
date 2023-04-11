import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ListItem = ({ className, linkStyle, href, onClick, item }) => {
  const [screenSize, setScreenSize] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setScreenSize(true);
    } else {
      setScreenSize(false);
    }
  }, []);

  return (
    <>
      {screenSize ? (
        <li className={className}>
          <NavLink className={linkStyle} to={href} onClick={onClick}>
            {item}
          </NavLink>
        </li>
      ) : (
        <li className={className}>
          <NavLink className={linkStyle} to={href}>
            {item}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default ListItem;
