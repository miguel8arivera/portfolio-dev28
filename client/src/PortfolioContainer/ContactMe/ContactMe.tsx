import React, { useState, useEffect, useMemo } from "react";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { useTranslation } from "../../hooks/useTranslation";
import { getContactAnimationSequence } from "../../utilities/animationHelpers";
import "./ContactMe.css";

export default function Contactme(props) {
  const { t, language } = useTranslation();

  // Get translated animation sequence
  const contactAnimationSequence = useMemo(
    () => {
      const sequence = getContactAnimationSequence(language);
      console.log('Contact animation sequence:', sequence);
      console.log('Current language:', language);
      return sequence;
    },
    [language]
  );
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
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Name validation - only letters and spaces
  const validateName = (name) => {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return nameRegex.test(name);
  };

  // Security validation - detect malicious patterns
  const containsMaliciousCode = (text) => {
    // Patterns to detect potential XSS and injection attacks
    const maliciousPatterns = [
      /<script[^>]*>.*?<\/script>/gi,           // Script tags
      /<iframe[^>]*>.*?<\/iframe>/gi,           // Iframe tags
      /<object[^>]*>.*?<\/object>/gi,           // Object tags
      /<embed[^>]*>/gi,                         // Embed tags
      /on\w+\s*=\s*["'][^"']*["']/gi,          // Event handlers (onclick, onerror, etc.)
      /javascript:/gi,                          // Javascript protocol
      /data:text\/html/gi,                      // Data URL with HTML
      /\$\{.*?\}/g,                             // Template literals
      /<.*?>/g,                                 // Any HTML tags
      /eval\s*\(/gi,                            // eval function
      /expression\s*\(/gi,                      // CSS expression
      /(union|select|insert|update|delete|drop|create|alter|exec|execute|script|javascript|alert|confirm|prompt)/gi, // SQL/JS keywords
    ];

    return maliciousPatterns.some(pattern => pattern.test(text));
  };

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);

    // Check for malicious code first
    if (value.trim() !== "" && containsMaliciousCode(value)) {
      setNameError(t.contact.validation.nameMalicious);
      return;
    }

    // Validate name format in real-time
    if (value.trim() === "") {
      setNameError("");
    } else if (!validateName(value)) {
      setNameError(t.contact.validation.invalidName);
    } else {
      setNameError("");
    }
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Check for malicious code first
    if (value.trim() !== "" && containsMaliciousCode(value)) {
      setEmailError(t.contact.validation.emailMalicious);
      return;
    }

    // Validate email format in real-time
    if (value.trim() === "") {
      setEmailError("");
    } else if (!validateEmail(value)) {
      setEmailError(t.contact.validation.invalidEmail);
    } else {
      setEmailError("");
    }
  };

  const handleMessage = (e) => {
    const value = e.target.value;
    setMessage(value);

    // Check for malicious code
    if (value.trim() !== "" && containsMaliciousCode(value)) {
      setMessageError(t.contact.validation.messageMalicious);
    } else {
      setMessageError("");
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    // Validate fields BEFORE sending
    if (!name.trim() || !email.trim() || !message.trim()) {
      setBanner(t.contact.validation.fillAllFields);
      toast.error(t.contact.toast.fillFields);
      return;
    }

    // Security check - detect malicious code in all fields
    if (containsMaliciousCode(name) || containsMaliciousCode(email) || containsMaliciousCode(message)) {
      setBanner(t.contact.validation.securityError);
      toast.error(t.contact.toast.securityError);
      return;
    }

    // Validate name format
    if (!validateName(name)) {
      setNameError(t.contact.validation.invalidName);
      setBanner(t.contact.validation.invalidName);
      toast.error(t.contact.toast.invalidName);
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setEmailError(t.contact.validation.invalidEmail);
      setBanner(t.contact.validation.invalidEmail);
      toast.error(t.contact.toast.invalidEmail);
      return;
    }

    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const apiUrl = import.meta.env.DEV ? "http://localhost:5000/contact" : "/contact";
      const res = await axios.post(apiUrl, data);

      if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(t.contact.toast.success);

        // Clear form after successful submission
        setName("");
        setEmail("");
        setMessage("");
        setEmailError("");
        setNameError("");
        setMessageError("");
      }
    } catch (error: any) {
      console.error("Error sending message:", error);
      console.error("Server response:", error.response?.data);
      const serverMessage = error.response?.data?.message || t.contact.toast.error;
      setBanner(serverMessage);
      toast.error(serverMessage);
    } finally {
      // Always reset loading state
      setBool(false);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={t.contact.subTitle} title={t.contact.title} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <TypeAnimation
              key={language}
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
              {t.contact.description}
              <p></p>
              <img src={imgBack} alt="Contact background illustration" />
            </h4>
          </div>
          <form onSubmit={submitForm}>
            {banner && <p className="form-banner">{banner}</p>}

            <div className="form-group">
              <label htmlFor="name">{t.contact.nameLabel}</label>
              <input
                id="name"
                type="text"
                onChange={handleName}
                value={name}
                placeholder={t.contact.namePlaceholder}
                className={nameError ? "input-error" : ""}
                required
              />
              {nameError && <p className="error-message">{nameError}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">{t.contact.emailLabel}</label>
              <input
                id="email"
                type="email"
                onChange={handleEmail}
                value={email}
                placeholder={t.contact.emailPlaceholder}
                className={emailError ? "input-error" : ""}
                required
              />
              {emailError && <p className="error-message">{emailError}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.contact.messageLabel}</label>
              <textarea
                id="message"
                onChange={handleMessage}
                value={message}
                placeholder={t.contact.messagePlaceholder}
                className={messageError ? "input-error" : ""}
                rows={5}
                required
              />
              {messageError && <p className="error-message">{messageError}</p>}
            </div>

            <div className="send-btn">
              <button type="submit" disabled={bool}>
                {bool ? (
                  <>
                    <span>{t.contact.sending}</span>
                    <b className="load">
                      <img src={load1} alt="Loading spinner" />
                    </b>
                  </>
                ) : (
                  <>
                    <span>{t.contact.sendButton}</span>
                    <i className="fa fa-paper-plane" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
