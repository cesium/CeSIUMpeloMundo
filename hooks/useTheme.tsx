import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';

export type Theme = 'earth' | 'light' | 'dark';

export type GlobalTheme = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<GlobalTheme>({
  theme: 'earth',
  changeTheme: () => undefined
});

interface Props {
  children: React.ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider = ({ children, initialTheme = 'earth' }: Props) => {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    setTheme((localStorage.getItem('theme') as Theme) || initialTheme);
  }, [initialTheme]);

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
