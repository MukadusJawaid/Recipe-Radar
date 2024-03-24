import React, { useState } from "react";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";

//icons
import { MdOutlineLogin } from "react-icons/md";
//imported images
import logo from "../../assets/logo.png";

export default function DesktopNavbar() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <section>
      <div className={classes.mainDiv}>
        <div className={classes.logoDiv}>
          <div className={classes.imgDiv}>
            <img src={logo} alt="logo" />
          </div>
          <h3>Recipe Radar</h3>
        </div>
        <div className={classes.navLinksDiv}>
          <div className={classes.links}>
            <Link className={classes.link} to={"/"}>
              Home
            </Link>
            <Link className={classes.link} to={"/search-recipes"}>
              Hunting Recipes
            </Link>
            <Link className={classes.link} to={"/recipes"}>
              Cook Book Corner
            </Link>

            {isLogin ? (
              <>
                <Link className={classes.link} to={"/favorite-recipes"}>
                  Favorite Dishes
                </Link>
                <Link className={classes.link} to={"/user-profile"}>
                  Profile
                </Link>
              </>
            ) : (
              <Link className={classes.link} to={"/login"}>
                <div className={classes.loginIcon}>
                  <MdOutlineLogin size={25} />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
