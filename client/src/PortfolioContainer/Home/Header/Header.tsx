import React, { useState, useEffect } from "react";
import {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from "../../../utilities/commonUtils";
import ScrollService from "../../../utilities/ScrollService";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { headerLogo } from "../../../data/headerData";
import ThemeToggle from "../../../components/ThemeToggle/ThemeToggle";
import LanguageToggle from "../../../components/LanguageToggle/LanguageToggle";
import { useTranslation } from "../../../hooks/useTranslation";
import "./Header.css";

export default function Header() {
  const { t } = useTranslation();
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  // Map screen names to translations
  const getTranslatedScreenName = (screenName: string): string => {
    const screenMap: { [key: string]: string } = {
      'Home': t.nav.home,
      'AboutMe': t.nav.aboutMe,
      'Resume': t.nav.resume,
      'Projects': t.nav.projects,
      'ContactMe': t.nav.contactMe,
    };
    return screenMap[screenName] || screenName;
  };

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };

  useEffect(() => {
    const currentScreenSubscription =
      ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

    return () => {
      currentScreenSubscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getHeaderOptions = () => {
    return TOTAL_SCREENS.map((Screen, i) => (
      <div
        key={Screen.screen_name}
        className={getHeaderOptionsClasses(i)}
        onClick={() => switchScreen(i, Screen)}
      >
        <span>{getTranslatedScreenName(Screen.screen_name)}</span>
      </div>
    ));
  };

  const getHeaderOptionsClasses = (index) => {
    let classes = "header-option ";
    if (index < TOTAL_SCREENS.length - 1) classes += "header-option-seperator ";

    if (selectedScreen === index) classes += "selected-header-option ";

    return classes;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  return (
    <div>
      <div
        className="header-container "
        onClick={() => setShowHeaderOptions(!showHeaderOptions)}
      >
        <div className="header-parent ">
          <div
            className="header-hamburger"
            onClick={() => setShowHeaderOptions(!showHeaderOptions)}
          >
            <FontAwesomeIcon className="header-hamburger-bars " icon={faBars} />
          </div>
          <div className="header-logo ">
            <span className="first-title ">{headerLogo.text} </span>
            <span className="second-title ">{headerLogo.emoji}</span>
          </div>
          <ThemeToggle />
          <div
            className={
              showHeaderOptions
                ? "header-options show-hamburger-options"
                : "header-options"
            }
          >
            {getHeaderOptions()}
            <LanguageToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
