import Tag from "@components/Home/Home-components/Tag";
import cl from "./Logo.module.scss";
import useLanguage from "@customHooks/useLanguage";

const Logo = () => {
  const { content } = useLanguage();

  const h1Content = content.Header.ownerName;

  return (
    <div>
      <Tag content="<A/>" />
      <h1 className={cl.title}>{h1Content}</h1>
    </div>
  );
};

export default Logo;
