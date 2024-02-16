import { useEffect, useState } from "react";

export const useIsActiveTab = () => {
  const [isActiveTab, setIsActiveTab] = useState(
    document.visibilityState === "visible"
  );

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setIsActiveTab(true);
      } else {
        setIsActiveTab(false);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return isActiveTab;
};
