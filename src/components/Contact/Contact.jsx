import React from "react";
import Input from "../../ui-component/Input/Input";
import "./Contact.scss";
import CheckboxComponent from "../../ui-component/Checkbox/Checkbox";
export default function Contact() {
  return (
    <div className="contact__container">
      <h3 className="contact__title">Контакты</h3>
      <div className="contact__input-block">
        <Input
          className={"input1"}
          title="Номер"
          name={"phone"}
          placeholder={"+7 (928) 321 22 22"}
        />
        <Input
          className={"input1"}
          title="Почта"
          name={"email"}
          placeholder={"ya@mail.ru"}
        />
        <Input
          className={"input1"}
          title="Whatsapp"
          name={"whatsapp"}
          placeholder={"+7 (928) 321 22 22"}
        />
      </div>
      <div className="contact-checkbox">
        <CheckboxComponent text="Совпадает с основным номером"></CheckboxComponent>
      </div>
    </div>
  );
}
