/*
    6. BONUS: Jede Karte soll eine andere / zufällige Farbe haben
*/

import { Box, Button, Grid, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import TriviaQuestionCard from "./trivia-question-card";

type TriviaQuestionProps = {
	setTriviaQuestions: Dispatch<SetStateAction<[]>>;
	questions: {
		category: string;
		type: string;
		difficulty: string;
		question: string;
		correct_answer: string;
		incorrect_answers: [];
	}[];
};

const TriviaQuestions: React.FC<TriviaQuestionProps> = ({
	setTriviaQuestions,
	questions,
}) => {
	const handleClick = () => {
		setTriviaQuestions([]);
	};

	return (
		<>
			<Typography variant="h6">Choose a trivia question:</Typography>
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="stretch"
				rowSpacing={{ xs: 1, sm: 2, md: 3 }}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{questions.map((question) => {
					return (
						<TriviaQuestionCard key={question.question} question={question} />
					);
				})}
			</Grid>
			<Box
				component="div"
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "24px",
				}}
			>
				<Button
					variant="contained"
					fullWidth
					size="large"
					sx={{ fontSize: "1rem" }}
					type="submit"
					onClick={handleClick}
				>
					Reset trivia questions
				</Button>
			</Box>
		</>
	);
};

export default TriviaQuestions;
