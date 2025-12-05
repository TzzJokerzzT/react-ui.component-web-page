import { useState } from "react";

export const useShowCode = () => {
  const [showCode, setShowCode] = useState(false);

  const toggleCodeVisibility = () => {
    setShowCode((prev) => !prev);
  };

  return { showCode, toggleCodeVisibility };
};
