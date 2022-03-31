import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface NavbarContextData {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
}

interface NavbarProviderProps {
  children: ReactNode;
}

export const NavbarContext = createContext({} as NavbarContextData);
export const NavbarProvider = ({ children }: NavbarProviderProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => setIsOpened(!isOpened);

  return (
    <NavbarContext.Provider value={{ isOpened, toggle, setIsOpened }}>
      {children}
    </NavbarContext.Provider>
  );
};
export const useNavbar = () => useContext(NavbarContext);
