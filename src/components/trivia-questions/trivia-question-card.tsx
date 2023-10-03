import { Card, CardActionArea, Chip, Grid, Typography } from "@mui/material";
import {
	decodeHtmlEntities,
	randomRGBColor,
	shuffleArray,
} from "../../utils/utils";
import { useState } from "react";
import TriviaModal from "../modal/trivia-modal";

type TriviaQuestionCardProps = {
	question: {
		category: string;
		type: string;
		difficulty: string;
		question: string;
		correct_answer: string;
		incorrect_answers: [];
	};
};

const TriviaQuestionCard: React.FC<TriviaQuestionCardProps> = ({
	question,
}) => {
	const allAnswers = shuffleArray([
		...question.incorrect_answers,
		question.correct_answer,
	]);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<Grid
				item
				sx={{
					maxWidth: "300px",
					minWidth: "300px",
				}}
			>
				<Card
					sx={{
						height: "100%",
						backgroundColor: randomRGBColor(),
					}}
				>
					<CardActionArea
						onClick={handleOpen}
						sx={{
							padding: "16px",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							justifyContent: "flex-start",
							gap: "8px",
						}}
					>
						<Chip
							label={question.category.toUpperCase()}
							size="small"
							variant="outlined"
							sx={{ backgroundColor: "rgba(255,255,255,0.5)" }}
						/>
						<Typography>{decodeHtmlEntities(question.question)}</Typography>
					</CardActionArea>
				</Card>
			</Grid>
			{open === false ? null : (
				<TriviaModal
					open={open}
					handleClose={handleClose}
					question={question.question}
					allAnswers={allAnswers}
					correctAnswer={question.correct_answer}
				/>
			)}
		</>
	);
};

export default TriviaQuestionCard;
