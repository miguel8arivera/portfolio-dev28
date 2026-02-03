import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { projectsData } from "../../data/projectsData";
import { carouselOptions } from "../../config/carouselConfig";
import "./Projects.css";

export default function Projects(props) {
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

  return (
    <div>
      <ScreenHeading
        title={"A Bit of My Project"}
        subHeading={"E&P - IT Related"}
      />
      <section className="project-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="project-carousel"
              {...carouselOptions}
            >
              {projectsData.map((project) => (
                <div className="col-lg-12" key={project.id}>
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
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
