import classNames from "classnames";
import cl from "./Form.module.scss";
import { content } from "../../../../content/mainContent_EN";
import useTheme from "../../../../customHooks/useTheme";
import { useRef } from "react";

const Form = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { theme } = useTheme();

  const formData = content.ContactSection.form;

  let textareaHeight = 16;

  if (window.innerWidth > 767) {
    textareaHeight = 18;
  }
  if (window.innerWidth > 1279) {
    textareaHeight = 20;
  }

  const handleChangeMessage: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = `${textareaHeight + 5}px`;
      textarea.style.lineHeight = `${textareaHeight + 8}px`;

      if (textarea.scrollHeight > textareaHeight + 8) {
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }
  };

  const handleSubmitForm: React.FormEventHandler<HTMLInputElement> = (
    event
  ) => {
    event.preventDefault();
  };

  return (
    <form action="" className={classNames(cl.form, cl[theme])}>
      <h3 className={cl.form__header}>
        {content.ContactSection.formHeader}
      </h3>

      <label className={classNames(cl.fields_labels, cl.label_name)}>
        {formData.formLabels.name}
        <input
          className={cl.name}
          type="name"
          placeholder={formData.formPlaceholders.name}
          required
        />
      </label>

      <label className={classNames(cl.fields_labels, cl.label_email)}>
        {formData.formLabels.email}
        <input
          className={cl.email}
          type="email"
          placeholder={formData.formPlaceholders.email}
          required
        />
      </label>

      <label className={classNames(cl.fields_labels, cl.label_message)}>
        {formData.formLabels.message}
        <textarea
          className={cl.message}
          placeholder={formData.formPlaceholders.message}
          required
          ref={textareaRef}
          onChange={handleChangeMessage}
        />
      </label>

      <label className={cl.label_button}>
        <input
          className={cl.input_button}
          type="submit"
          value={formData.formLabels.button}
          onSubmit={handleSubmitForm}
        />
      </label>
    </form>
  );
};

export default Form;
