import { Card, CardContent, Modal, Typography } from "@mui/material";
import { decodeHtmlEntities } from "../../utils/utils";
import TriviaAnswerCard from "../card/trivia-answer-card";
import { useState } from "react";

type TriviaModalProps = {
	open: boolean;
	handleClose: () => void;
	question: string;
	allAnswers: string[];
	correctAnswer: string;
};

const TriviaModal: React.FC<TriviaModalProps> = ({
	open,
	handleClose,
	question,
	allAnswers,
	correctAnswer,
}) => {
	const [answered, setAnswered] = useState(false);
	const [userChoice, setUserChoice] = useState<string | null>(null);

	return (
		<Modal
			open={open}
			onClose={handleClose}
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Card sx={{ width: "600px", padding: "16px" }}>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "24px",
					}}
				>
					<Typography variant="h5">{decodeHtmlEntities(question)}</Typography>
					{allAnswers.map((answer) => (
						<TriviaAnswerCard
							key={answer}
							answer={answer}
							answered={answered}
							isCorrect={answer === correctAnswer}
							setAnswered={setAnswered}
							setUserChoice={setUserChoice}
						/>
					))}
				</CardContent>
			</Card>
		</Modal>
	);
};

export default TriviaModal;
