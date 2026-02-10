import React, { useEffect, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { useTranslation } from "../../hooks/useTranslation";
import { getTranslatedProjects } from "../../utilities/dataHelpers";
import "./Projects.css";

export default function Projects(props) {
  const { t, language } = useTranslation();

  // Get translated projects data
  const projectsData = useMemo(
    () => {
      const data = getTranslatedProjects(language);
      console.log('Projects data:', data);
      return data;
    },
    [language]
  );

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  useEffect(() => {
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return () => {
      fadeInSubscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('Translation object:', t.projects);
  console.log('Language:', language);

  return (
    <div>
      <ScreenHeading
        title={t.projects.title}
        subHeading={t.projects.subTitle}
      />
      <section className="project-section fade-in" id={props.id || ""}>
        <Slider {...sliderSettings} key={language}>
          {projectsData.map((project) => (
            <div key={project.id}>
              <div className="project-item">
                <div className="project-desc">
                  <p>
                    <i className="fa fa-quote-left" />
                    {project.description}
                    <i className="fa fa-quote-right" />
                  </p>
                </div>
                <div className="project-info">
                  <h5>{project.title}</h5>
                  <p>{project.technology}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}
