import { Box, Typography } from "@mui/material";
import appTheme from "./themes/theme";
import TriviaCard from "./components/card/trivia-card";

function App() {
	return (
		<Box
			component="main"
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				padding: "5rem",
				background: appTheme.palette.secondary.main,
				color: "#fff",
				minHeight: "100%",
				gap: "50px",
			}}
		>
			<Typography variant="h2">This is a trivia game</Typography>
			<TriviaCard />
		</Box>
	);
}

export default App;
