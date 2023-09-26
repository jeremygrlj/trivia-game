import { Card, CardActionArea, Grid, Typography } from "@mui/material";
import { decodeHtmlEntities, randomRGBColor } from "../../utils/utils";

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
	return (
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
					sx={{
						padding: "16px",
						height: "100%",
					}}
				>
					<Typography>{decodeHtmlEntities(question.question)}</Typography>
				</CardActionArea>
			</Card>
		</Grid>
	);
};

export default TriviaQuestionCard;
