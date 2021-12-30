import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
const Cursor = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState<string>("220,223,241");

  useEffect(() => {
    switch (theme) {
      case "dark":
        setColor("255,255,255");
        break;
      case "system":
        setColor("245,95,95");
        break;
      case "light":
        setColor("0,0,0");
        break;
    }
  }, [theme]);
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color={color}
      outerAlpha={0.15}
      innerScale={1}
      outerScale={5}
    />
  );
};
export default Cursor;
