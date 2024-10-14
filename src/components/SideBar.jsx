import { useState } from "react";
import sideBarStyles from "../cssFolder/SideBar.module.css";
import searchIcon from "../icons/search.png";
import homeIcon from "../icons/home.png";
import tvShowsIcon from "../icons/tvShows.png";
import moviesIcon from "../icons/movies.png";
import genresIcon from "../icons/genres.png";
import watchLaterIcon from "../icons/watchLater.png";
import userIcon from "../icons/user.png";

function SideBar({isHover, setIsHover}) {

  return (
    <div
      className={!isHover ? sideBarStyles.sideBar : sideBarStyles.sideBarActive}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={!isHover ? sideBarStyles.userInfo : sideBarStyles.userInfoActive}>
        <img src={userIcon} alt="#" className={sideBarStyles.userIconActive} />
        <p>UserName</p>
      </div>

      <div className={sideBarStyles.sidebarMenuActive}>
        <div className={!isHover ? sideBarStyles.menuSection : sideBarStyles.menuSectionActive}>
          <img src={searchIcon} alt="" style={{ width: "25px", height: "21px", objectFit: "contain" }} />
          <p style={!isHover ? { display: "none" } : {}}>Search</p>
        </div>
        <div className={!isHover ? sideBarStyles.menuSection : sideBarStyles.menuSectionActive}>
          <img src={homeIcon} alt="" style={{ width: "21px", height: "25px", objectFit: "contain" }} />
          <p style={!isHover ? { display: "none" } : {}}>Home</p>
        </div>
        <div className={!isHover ? sideBarStyles.menuSection : sideBarStyles.menuSectionActive}>
          <img src={tvShowsIcon} alt="" style={{ width: "22px", height: "23px", objectFit: "contain" }} />
          <p style={!isHover ? { display: "none" } : {}}>TV Shows</p>
        </div>
        <div className={!isHover ? sideBarStyles.menuSection : sideBarStyles.menuSectionActive}>
          <img src={moviesIcon} alt="" style={{ width: "23px", height: "21px", objectFit: "contain" }} />
          <p style={!isHover ? { display: "none" } : {}}>Movies</p>
        </div>
        <div className={!isHover ? sideBarStyles.menuSection : sideBarStyles.menuSectionActive}>
          <img src={genresIcon} alt="" style={{ width: "23px", height: "24px", objectFit: "contain" }} />
          <p style={!isHover ? { display: "none" } : {}}>Genres</p>
        </div>
        <div className={!isHover ? sideBarStyles.menuSection : sideBarStyles.menuSectionActive}>
          <img src={watchLaterIcon} alt="" style={{ width: "25px", height: "21px", objectFit: "contain" }} />
          <p style={!isHover ? { display: "none" } : {}}>Watch Later</p>
        </div>
      </div>

      <div className={!isHover ? sideBarStyles.bottomOfsideBar : sideBarStyles.bottomOfsideBarActive}>
        <p>LANGUAGE</p>
        <p>GET HELP</p>
        <p>EXIT</p>
      </div>
    </div>
  );
}

export default SideBar;
