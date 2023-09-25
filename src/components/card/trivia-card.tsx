import {
	Box,
	Button,
	Card,
	CardContent,
	TextField,
	Typography,
} from "@mui/material";
import TriviaSelect from "../common/select";

const TriviaCard: React.FC = () => {
	return (
		<Card sx={{ width: "600px" }}>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "24px",
				}}
			>
				<Typography>Pick out a combination to generate trivia cards</Typography>
				<Box
					component="form"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "24px",
					}}
				>
					<TextField
						id="number-of-questions"
						label="Number"
						type="number"
						fullWidth
					/>
					<TriviaSelect
						id="category"
						label="Category"
						options={["Option #1", "Option #2", "Option #3"]}
					/>
					<TriviaSelect
						id="difficulty"
						label="Difficulty"
						options={["Option #1", "Option #2", "Option #3"]}
					/>
					<TriviaSelect
						id="type"
						label="Type"
						options={["Option #1", "Option #2", "Option #3"]}
					/>
					<Button
						variant="contained"
						fullWidth
						size="large"
						sx={{ fontSize: "1rem" }}
					>
						Generate trivia cards
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
};

export default TriviaCard;
