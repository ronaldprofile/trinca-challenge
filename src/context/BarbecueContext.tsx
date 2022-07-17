import { createContext, useContext, useEffect, useRef, useState } from "react";
import { IBarbecue } from "../types";
import { getLocalStorage, setLocalStorage } from "../utils";

interface BarbecueContextData {
  barbecues: IBarbecue[];
  handleCreateNewBarbecue: (newBarbecue: IBarbecue) => Promise<void>;
}

const BarbecueContext = createContext({} as BarbecueContextData);

export function BarbecueContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [barbecues, setBarbecues] = useState<IBarbecue[]>(() => {
    
    const storageBarbecues = getLocalStorage<IBarbecue[]>("trinca-barbecues");
    if (storageBarbecues) {
      return storageBarbecues;
    }

    return [];
  });

  const prevBarbecueRef = useRef<IBarbecue[]>();

  useEffect(() => {
    prevBarbecueRef.current = barbecues;
  });

  const barbecuesPreviousValue = prevBarbecueRef.current ?? barbecues;

  useEffect(() => {
    if (barbecuesPreviousValue !== barbecues) {
      setLocalStorage("trinca-barbecues", barbecues);
    }
  }, [barbecues, barbecuesPreviousValue]);

  async function handleCreateNewBarbecue(newBarbecue: IBarbecue) {
    setBarbecues((previousState) => [...previousState, newBarbecue]);
  }

  return (
    <BarbecueContext.Provider
      value={{
        barbecues,
        handleCreateNewBarbecue,
      }}
    >
      {children}
    </BarbecueContext.Provider>
  );
}

export const useBarbecues = () => useContext(BarbecueContext);
