import { ReactNode } from "react";
import { PropsIcons } from "../../components/SVGs/Icons";

export type ChildrenType = {
  children: ReactNode;
}

export type SkillType = {
  name: string;
  logo: React.FC<PropsIcons>;
  logoColor: string;
  descreption: string;
}

export type contextThemeType = {
  theme: string;
  toggleTheme: () => void;
  colorLight: string;
  colorDark: string;
  colorDarkPlus: string;
  colorBrand: string;
}