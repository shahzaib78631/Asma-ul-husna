import { useContext, useMemo } from "react";
import { AppContext } from "@/context/AppContext";

/**
 * A custom hook for applying themed styles.
 *
 * @param {Function} createStyles - A function that takes a theme object and returns a stylesheet.
 * @returns A themed stylesheet object.
 */
const useStyles = (createStyles: Function) => {
  const { themeStyles } = useContext(AppContext);

  // Use useMemo to recompute the styles only when themeStyles change.
  // This is more efficient as it prevents unnecessary recalculations of styles.
  const styles = useMemo(() => {
    return createStyles(themeStyles);
  }, [themeStyles]);

  return styles;
};

export default useStyles;
