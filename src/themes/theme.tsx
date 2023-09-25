import { createTheme } from "@mui/material";

const appTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#7634d3",
		},
		secondary: {
			main: "#323232",
		},
	},
	typography: {
		fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
		h1: {
			fontWeight: 800,
		},
		h2: {
			fontWeight: 700,
		},
		h3: {
			fontWeight: 700,
		},
		h4: {
			fontWeight: 600,
		},
		h5: {
			fontWeight: 600,
		},
		h6: {
			fontWeight: 500,
		},
		button: {
			fontSize: "1.5rem",
			fontWeight: 500,
			letterSpacing: "1.25px",
			lineHeight: "2.5rem",
		},
	},
});

export default appTheme;
