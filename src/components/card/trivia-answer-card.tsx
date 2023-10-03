import { Card, CardActionArea, Typography } from "@mui/material";
import { decodeHtmlEntities } from "../../utils/utils";
import { green, grey } from "@mui/material/colors";
import { Dispatch, SetStateAction } from "react";

type TriviaAnswerCardProps = {
	answer: string;
	answered: boolean;
	isCorrect: boolean;
	setAnswered: Dispatch<SetStateAction<boolean>>;
};

const TriviaAnswerCard: React.FC<TriviaAnswerCardProps> = ({
	answer,
	answered,
	isCorrect,
	setAnswered,
}) => {
	return (
		<Card
			variant="outlined"
			sx={{
				width: "100%",
				backgroundColor: answered && isCorrect ? green[500] : grey[50],
				boxShadow: 0,
				opacity: answered && !isCorrect ? 0.5 : 1,
			}}
		>
			<CardActionArea
				onClick={() => {
					setAnswered(true);
				}}
				sx={{
					padding: "16px",
				}}
			>
				<Typography variant="body1">{decodeHtmlEntities(answer)}</Typography>
			</CardActionArea>
		</Card>
	);
};

export default TriviaAnswerCard;
