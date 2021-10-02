import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Input from "./Input/Input";
import Select, { Option } from "./Select/Select";
import Textarea from "./Textarea/Textarea";
import Button from "../Button/Button";

import css from "./ContactForm.module.scss";

import { postContactForm } from "@/actions/contactForm";
import { POST_CONTACT_FORM } from "@/actions/actionTypes";

const ContactForm = ({ width }) => {
  const dispatch = useDispatch();

  let sendingStatus = useSelector((state) => state.errorHandler.contactForm);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    contactInfo: "",
    message: "",
  });
  //
  const [valid, setValid] = useState({
    name: false,
    contactInfo: false,
    message: false,
  });
  const [allValid, setAllValid] = useState(false);

  //#region ****************************************************** VALIDATION
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

    formData.contactInfo.length > 4 && !forbidden.test(formData.contactInfo)
      ? setValid({ ...valid, contactInfo: true })
      : setValid({ ...valid, contactInfo: false });
  }, [formData.contactInfo]);

  useEffect(() => {
    // all but .,:)?! for messages
    var forbidden = /[@#$%^&*(_+\-=\[\]{};'"\\|<>\/]+/;

    formData.message.length > 9 && !forbidden.test(formData.message)
      ? setValid({ ...valid, message: true })
      : setValid({ ...valid, message: false });
  }, [formData.message]);

  useEffect(() => {
    valid.name == true && valid.contactInfo == true && valid.message == true ? setAllValid(true) : setAllValid(false);
  }, [valid]);
  //#endregion ********************************************************************

  //region **** errorHandling
  useEffect(() => {
    if (sendingStatus == "success") {
    } else if (sendingStatus == "failed") {
    }
  }, [sendingStatus]);
  //#endregion

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postContactForm(formData));
  };

  function clear(e) {
    e.preventDefault();

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

    //reset errorHandler to empty
    dispatch({ type: POST_CONTACT_FORM, value: "" });
  }

  return (
    <div className={css.div} style={width && { width: width }}>
      <form onSubmit={(e) => e.preventDefault()} className={css.form}>
        <>
          <h3>Contact Form</h3>
          <Input
            label="name"
            required
            infoOnHover="min. 2 characters"
            valid={valid.name}
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
          />

          <Input
            label="Contact Information"
            required
            infoOnHover="min. 5 characters and only - & @ allowed"
            valid={valid.contactInfo}
            id="contactInfo"
            value={formData.contactInfo}
            onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
          />

          <Select>
            <Option
              text="architecture"
              active={formData.category === "architecture" ? true : false}
              onClick={(e) => setFormData({ ...formData, category: "architecture" })}
            />
            <Option
              text="web dev"
              active={formData.category === "webdev" ? true : false}
              onClick={(e) => setFormData({ ...formData, category: "webdev" })}
            />
            <Option
              text="Project proposal"
              active={formData.category === "project" ? true : false}
              onClick={(e) => setFormData({ ...formData, category: "project" })}
            />
            <Option
              text="other"
              active={formData.category === "other" ? true : false}
              onClick={(e) => setFormData({ ...formData, category: "other" })}
            />
          </Select>

          <Textarea
            label="Message"
            required
            infoOnHover="min. 10 characters and only . , : ) ? ! allowed"
            valid={valid.message}
            rows="5"
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, [e.target.id]: e.target.value })}
          />
        </>

        <div className={css.wrapper_btns}>
          {sendingStatus === "success" ? (
            <div>
              <h4 className="success">Success! </h4>
              <p className="success">Your message has been delivered.</p>
            </div>
          ) : (
            <Button
              text={allValid ? "Send!" : "Please fill out the form"}
              className={`${!allValid && css.send_btn_invalid} ${allValid && "success-bg success"}`}
              onClick={(e) => handleSubmit(e)}
            />
          )}

          {sendingStatus === "failed" && <div>failed</div>}
          {sendingStatus === "sending" && <div>Sending</div>}

          <Button text="Clear form" onClick={(e) => clear(e)} className={css.clear} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
