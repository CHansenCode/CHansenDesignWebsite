import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Input from "@/components/Input/Input";
import Select from "@/components/Select/Select";
import Textarea from "@/components/Textarea/Textarea";
import Button from "@/components/Button/Button";

import css from "./ContactForm.module.scss";
import axios from "axios";

import { postContactForm } from "@/actions/contactForm.js";

const ContactForm = ({ Heading }) => {
  const [valid, setValid] = useState({
    name: false,
    contactInfo: false,
    message: false,
  });
  const [allValid, setAllValid] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    contactInfo: "",
    message: "",
  });

  const dispatch = useDispatch;

  //#region VALIDATION
  useEffect(() => {
    // all but '-' for double-names
    var forbidden = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/;

    formData.name.length > 1 && !forbidden.test(formData.name)
      ? setValid({ ...valid, name: true })
      : setValid({ ...valid, name: false });
  }, [formData.name]);

  useEffect(() => {
    // all but @ % . for emails
    var forbidden = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;

    formData.contactInfo.length > 5 && !forbidden.test(formData.contactInfo)
      ? setValid({ ...valid, contactInfo: true })
      : setValid({ ...valid, contactInfo: false });
  }, [formData.contactInfo]);

  useEffect(() => {
    // all but .,:) for messages
    var forbidden = /[!@#$%^&*(_+\-=\[\]{};'"\\|<>\/?]+/;

    formData.message.length > 5 && !forbidden.test(formData.message)
      ? setValid({ ...valid, message: true })
      : setValid({ ...valid, message: false });
  }, [formData.message]);

  useEffect(() => {
    valid.name == true && valid.contactInfo == true && valid.message == true ? setAllValid(true) : setAllValid(false);
  }, [valid]);

  //#endregion

  const onSubmit = (e, formData) => {
    dispatch(postContactForm(formData));
  };

  const clear = () => {
    setValid({
      name: false,
      contactInfo: false,
      message: false,
    });
    setFormData({
      name: "",
      category: "",
      contactInfo: "",
      message: "",
    });
  };

  return (
    <div className={css.outerDiv}>
      <form onSubmit={(e) => e.preventDefault()} className={css.form}>
        <h3>Form title</h3>
        <Input
          label="name"
          id="name"
          infoHover="min 2 chars"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
        />
        <Input
          label="Contact Information"
          placeholder="email etc.."
          id="contactInfo"
          value={formData.contactInfo}
          onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
        />

        <div className={css.select}>
          <h5>Select category</h5>
          <Select
            text="architecture"
            truthy={formData.category === "architecture"}
            onClick={(e) => setFormData({ ...formData, category: "architecture" })}
          />
          <Select
            text="webdesign"
            truthy={formData.category === "webdesign"}
            onClick={(e) => setFormData({ ...formData, category: "webdesign" })}
          />
          <Select
            text="graphics"
            truthy={formData.category === "graphics"}
            onClick={(e) => setFormData({ ...formData, category: "graphics" })}
          />
          <Select
            text="Other"
            truthy={formData.category === "other"}
            onClick={(e) => setFormData({ ...formData, category: "other" })}
          />
        </div>

        <Textarea
          label="Message"
          rows="5"
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
        />

        <div className={css.buttonsWrapper}>
          {allValid ? (
            <Button
              text={allValid ? "All good! Send!" : "Please fill in form"}
              onClick={(e) => onSubmit(e)}
              className={css.send}
            />
          ) : (
            "please fill out form"
          )}

          <Button text="Clear form" onClick={() => clear()} className={css.clear} />
        </div>
      </form>
      <IsValidToggle text="name: " truthy={valid.name} />
      <IsValidToggle text="contact: " truthy={valid.contactInfo} />
      <IsValidToggle text="message: " truthy={valid.message} />
      <br />
      <IsValidToggle text="allValid:" truthy={allValid} />
    </div>
  );
};

const IsValidToggle = ({ text, truthy }) => {
  return (
    <div style={{ display: "flex" }}>
      <h4>{text}</h4>
      <h4 className={truthy ? "success" : "error"}>{truthy ? "valid" : "invalid"}</h4>
    </div>
  );
};

export default ContactForm;
