import {
  createContext,
  useContext,
  useState,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
} from 'react';

type ContextProps = {
  lang: string | undefined;
  setLang: Dispatch<SetStateAction<string | undefined>>;
  ingredients: string[];
  setIngredients: Dispatch<SetStateAction<string[]>>;
  directions: string[];
  setDirections: Dispatch<SetStateAction<string[]>>;
  tips: string[];
  setTips: Dispatch<SetStateAction<string[]>>;
};

type Props = {
  children: ReactNode;
};

const MdxComponentsContext = createContext({} as ContextProps);

export function MdxComponentsProvider({ children }: Props): ReactElement {
  const [lang, setLang] = useState<string | undefined>(undefined);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [directions, setDirections] = useState<string[]>([]);
  const [tips, setTips] = useState<string[]>([]);

  return (
    <MdxComponentsContext.Provider
      value={{
        lang,
        setLang,
        ingredients,
        setIngredients,
        directions,
        setDirections,
        tips,
        setTips,
      }}
    >
      {children}
    </MdxComponentsContext.Provider>
  );
}

export function useMdxComponentsContext(): ContextProps {
  return useContext(MdxComponentsContext);
}
