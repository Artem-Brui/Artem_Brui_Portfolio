import classNames from "classnames";
import styles from "./Form.module.scss";
import { content } from "../../../../content/mainContent_EN";
import useTheme from "../../../../customHooks/useTheme";
import { useRef } from "react";

const Form = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const textareaHeight = useRef(17);

  const { theme } = useTheme();

  const formThemeClass = theme === "dark" ? styles.dark : styles.light;

  const formData = content.ContactSection.form;

  const handleChangeMessage: React.FormEventHandler<
    HTMLTextAreaElement
  > = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      if (textarea.scrollHeight !== textareaHeight.current) {
        textarea.style.height = `${textarea.scrollHeight}px`;

        textareaHeight.current = textarea.scrollHeight;
        console.log();
      }
    }
    };
  
  const handleSubmitForm: React.FormEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
  }

  return (
    <form action="" className={classNames(styles.form, formThemeClass)}>
      <h3 className={styles.form__header}>
        {content.ContactSection.formHeader}
      </h3>

      <label className={styles.form__name}>
        {formData.formLabels.name}
        <input
          type="name"
          placeholder={formData.formPlaceholders.name}
          required
        />
      </label>

      <label className={styles.form__email}>
        {formData.formLabels.email}
        <input
          type="email"
          placeholder={formData.formPlaceholders.email}
          required
        />
      </label>

      <label className={styles.form__message}>
        {formData.formLabels.message}
        <textarea
          placeholder={formData.formPlaceholders.message}
          required
          ref={textareaRef}
          onInput={handleChangeMessage}
        />
      </label>

      <label className={styles.form__button}>
        <input
          type="submit"
          value={formData.formLabels.button}
          onSubmit={handleSubmitForm}/>
      </label>
    </form>
  );
};

export default Form;
