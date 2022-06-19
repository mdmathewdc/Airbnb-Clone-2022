import React, { useState, useEffect, useCallback } from "react";

const InputFocus = (ref: React.RefObject<HTMLInputElement>) => {
  const [focused, setFocused] = useState(false);

  const focusEvent = useCallback(() => {
    setFocused(true);
  }, []);
  const blurEvent = useCallback(() => {
    setFocused(false);
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("focus", focusEvent);
      ref.current.addEventListener("blur", blurEvent);

      return () => {
        ref.current?.removeEventListener("focus", focusEvent);
        ref.current?.removeEventListener("blur", blurEvent);
      };
    }
  }, []);
  return focused;
};

export default InputFocus;
