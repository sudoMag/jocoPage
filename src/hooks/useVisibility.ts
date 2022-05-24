import { useState } from "react";

const useVisibility = (defaultValue: boolean) => {
  const [show, setShow] = useState(defaultValue || false);

  const toggleVisibility = (): void => {
    setShow(show ? false : true);
  };

  return {show, toggleVisibility};
};
export default useVisibility;
