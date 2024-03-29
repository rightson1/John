
import {
    createContext,
    useState,
    useMemo,
    useReducer,
    useContext,
    useEffect,
} from "react";
import { reducer, actionTypes } from "./reducer";
import { tokens, themeSettings } from "./theme";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider as Theme } from "@mui/material/styles";
import { CssBaseline, useMediaQuery } from "@mui/material";
const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {

    const initialState = useMemo(() => {
        return {
            theme: 'light'
        }
    }, [])
    const [state, dispatch] = useReducer(reducer, initialState);
    const mode = useMemo(() => {
        return state.theme
    }, [state])
    const colors = tokens(mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(false);
    const isMobile = useMediaQuery("(max-width: 600px)")
    const isMobileSmall = useMediaQuery("(max-width: 600px)")
    const isLarge = useMediaQuery("(min-width: 900px)");
    const isMedium = useMediaQuery("(max-width: 900px)");
    const [section, setSection] = useState(null);

    return (
        <ThemeContext.Provider
            value={{
                ...state,
                dispatch,
                actionTypes,
                colors,
                mode,
                open,
                setOpen,
                isMobile,
                close,
                isLarge,
                setClose,
                isMobileSmall,
                isMedium,
                setSection,
                section,


            }}
        >


            <Theme theme={theme}>
                <CssBaseline />
                {children}
            </Theme>

        </ThemeContext.Provider>
    );
};
export const useGlobalProvider = () => useContext(ThemeContext);
