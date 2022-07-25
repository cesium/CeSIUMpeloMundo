import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';

type Theme = 'earth' | 'light' | 'dark';

const ThemeContext = createContext({});

interface Props {
  children: React.ReactNode;
  initialState: Theme;
}

export const ThemeProvider = ({ children, initialState = 'earth' }: Props) => {
  const [theme, setTheme] = useState(initialState);

  useEffect(() => {
    setTheme((localStorage.getItem('theme') as Theme) || 'earth');
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const changeTheme = useCallback(
    (mode: Theme) => {
      setTheme(mode);
    },
    [setTheme]
  );

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default () => useContext(ThemeContext);
