import { createContext, ReactNode, useEffect, useRef, useState } from "react";

export interface ILoadContext {
  objectsToLoad: number;
  objectsLoaded: {
    number: number;
    porcent: number;
  };
  addObject: () => void;
  removeObject: () => void;
}

export const LoadContext = createContext<ILoadContext>({
  objectsToLoad: 0,
  objectsLoaded: { number: 0, porcent: 0 },
  addObject: (): void => {},
  removeObject: (): void => {},
});

interface Props {
  children: ReactNode;
}

export const ContextWrapper = ({ children }: Props) => {
  const pepe = useRef(0);
  const [objectsToLoad, setObjectsToLoad] = useState(0);
  const [objectsLoaded, setObjectsLoaded] = useState({
    number: 0,
    porcent: 0,
  });

  const addObject = (): void => {
    pepe.current += 1;
  };

  const removeObject = (): void => {
    let newNumber = objectsLoaded.number + 1;
    const createPorcent = (number: number, maxNumber: number) => {
      return (number / maxNumber) * 100;
    };

    if (objectsToLoad !== 0) {
      setObjectsLoaded({
        number: newNumber,
        porcent: createPorcent(newNumber, objectsToLoad),
      });
    }
  };

  useEffect(() => {
    setObjectsToLoad( pepe.current );
  }, [pepe])

  return (
    <LoadContext.Provider value={{ objectsToLoad, objectsLoaded, addObject, removeObject }}>
      {children}
    </LoadContext.Provider>
  );
};
