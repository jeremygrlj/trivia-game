import {
	Box,
	Button,
	Card,
	CardContent,
	TextField,
	Typography,
} from "@mui/material";
import TriviaSelect from "../common/trivia-select";
import { useEffect, useState } from "react";
import { apiClient } from "../../constants/api-client";
import { Globals } from "../../utils/utils";

const TriviaCard: React.FC = () => {
	const [categories, setCategories] = useState<[]>([]);

	console.log(console.log(import.meta.env.API_BASE_URL));

	useEffect(() => {
		const getCategories = async () => {
			try {
				const response = await apiClient.get("/api_category.php");
				if (response.status === 200) {
					setCategories(response.data.trivia_categories);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getCategories();
	}, []);

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
					<TriviaSelect id="category" label="Category" options={categories} />
					<TriviaSelect
						id="difficulty"
						label="Difficulty"
						options={Globals.difficulties}
					/>
					<TriviaSelect id="type" label="Type" options={Globals.types} />
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
