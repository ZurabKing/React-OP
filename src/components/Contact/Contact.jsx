import React, { useState } from "react";
import Input from "../../ui-component/Input/Input";
import "./Contact.scss";
import CheckboxComponent from "../../ui-component/Checkbox/Checkbox";
import InputMask from "react-input-mask";

export const Contact = () => {
  const [value, setValue] = React.useState("");
  const [valueWats, setValueWats] = React.useState(value);
  const [matches, setMatches] = React.useState(false);

  const handleMatchesClick = () => {
    setMatches(!matches);
  };

  React.useEffect(() => {
    if (matches) {
      setValueWats(value);
    } else {
      setValueWats("");
    }
  }, [matches]);

  return (
    <div className="contact__container">
      <h3 className="contact__title">Контакты</h3>
      <div className="contact__input-block">
        <div style={{ display: "flex", gap: "12px" }}>
          <div className="input-container">
            <div style={{ display: "flex", gap: "5px" }}>
              <label className="input-text">Номер</label>
              <span title="Это поле обязательно" style={{ color: "red" }}>
                *
              </span>
            </div>

            <InputMask
              required
              className={"input1"}
              style={{ border: "none" }}
              mask="+7 (999) 999-99-99"
              name={"phone"}
              onChange={(e) => setValue(e.target.value)}
              maskChar=""
              placeholder="+7 (928) 321 22 22"
            />
          </div>
          <Input
            required
            className={"input1"}
            title="Почта"
            name={"email"}
            placeholder={"ya@mail.ru"}
          >
            <span title="Это поле обязательно" style={{ color: "red" }}>
              *
            </span>
          </Input>
        </div>

        <div className="input-container">
          <div style={{ display: "flex", gap: "5px" }}>
            <label className="input-text">Whatsapp</label>
            <span title="Это поле обязательно" style={{ color: "red" }}>
              *
            </span>
          </div>

          <InputMask
            className={"input1"}
            style={{ border: "none" }}
            value={valueWats}
            mask="+7 (999) 999-99-99"
            name={"whatsapp"}
            disabled={matches}
            onChange={(e) => setValueWats(e.target.value)}
            maskChar=""
            placeholder="+7 (928) 321 22 22"
          />
        </div>
        {/* <InputMask
          required
          className="input1"
          value={valueWats}
          onChange={(e) => setValueWats(e.target.value)}
          title="Whatsapp"
          disabled={matches}
          name={"whatsapp"}
          placeholder={"+7 (928) 321 22 22"}
        /> */}
      </div>
      <div className="contact-checkbox">
        <CheckboxComponent
          text="Совпадает с основным номером"
          handleClick={handleMatchesClick}
        />
      </div>
    </div>
  );
};
