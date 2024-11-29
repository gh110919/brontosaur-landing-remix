import { useEffect, useState } from "react";

export const useExpectedWidth = (
  width: number,
  window: Window | undefined
): boolean => {
  const [stateWidth, setWidthState] = useState<boolean>(
    window?.innerWidth! > width
  );

  useEffect(() => {
    const handleResize = () => {
      setWidthState(window?.innerWidth! <= width);
    };

    handleResize();

    window?.addEventListener("resize", handleResize);
    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, [width, window]);

  return stateWidth;
};
