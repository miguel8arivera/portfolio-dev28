import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { contactAnimationSequence, contactDescription } from "../../data/contactMeData";
import "./ContactMe.css";

export default function Contactme(props) {
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    // Validate fields BEFORE sending
    if (!name.trim() || !email.trim() || !message.trim()) {
      setBanner("Please fill all the fields");
      toast.error("Please fill all the fields");
      return;
    }

    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post("/contact", data);

      if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);

        // Clear form after successful submission
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setBanner("There was an error sending your message. Please try again.");
      toast.error("Failed to send message. Please try again.");
    } finally {
      // Always reset loading state
      setBool(false);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets keep in Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <TypeAnimation
              sequence={contactAnimationSequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>
              {contactDescription}
              <p></p>
              <img src={imgBack} alt="Contact background illustration" />
            </h4>
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea id="message" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="Loading spinner" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
