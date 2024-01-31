import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const useStyles = (styles: Function) => {
  const { themeStyles } = useContext(AppContext);

  return styles(themeStyles);
};

export default useStyles;
