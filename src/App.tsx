import { useState } from "react";
import { Box, Typography } from "@mui/material";
import appTheme from "./themes/theme";
import TriviaCard from "./components/card/trivia-card";
import TriviaQuestions from "./components/trivia-questions/trivia-questions";

function App() {
	const [triviaQuestions, setTriviaQuestions] = useState<[]>([]);

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
			{triviaQuestions.length === 0 ? (
				// Render TriviaCard component when triviaQuestions is empty
				<TriviaCard setTriviaQuestions={setTriviaQuestions} />
			) : (
				// Render TriviaQuestions component when triviaQuestions is not empty
				<TriviaQuestions
					setTriviaQuestions={setTriviaQuestions}
					questions={triviaQuestions}
				/>
			)}
		</Box>
	);
}

export default App;
