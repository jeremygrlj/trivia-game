import {
	Box,
	Button,
	Card,
	CardContent,
	SelectChangeEvent,
	TextField,
	Typography,
} from "@mui/material";
import TriviaSelect from "../common/trivia-select";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { apiClient } from "../../constants/api-client";
import { Globals } from "../../utils/utils";

type formData = {
	amount: number;
	category: string;
	difficulty: string;
	type: string;
};

type TriviaCardProps = {
	setTriviaQuestions: Dispatch<SetStateAction<[]>>;
};

const TriviaCard: React.FC<TriviaCardProps> = ({ setTriviaQuestions }) => {
	const [categories, setCategories] = useState<[]>([]);
	const [formData, setFormData] = useState<formData>({
		amount: 10,
		category: "",
		difficulty: "",
		type: "",
	});

	console.count("rendered");

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

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		const getTriviaQuestions = async () => {
			const amount = formData.amount;
			const category = formData.category || "";
			const difficulty = formData.difficulty || "";
			const type = formData.type || "";
			try {
				const response = await apiClient.get(
					`/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
				);
				if (response.status === 200) {
					setTriviaQuestions(response.data.results);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getTriviaQuestions();
	};

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
					onSubmit={handleSubmit}
					component="form"
					noValidate
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "24px",
					}}
				>
					<TextField
						id="number"
						label="Number"
						type="number"
						fullWidth
						value={formData.amount}
						inputProps={{ inputMode: "numeric", pattern: "[1-20]" }}
						onChange={(event) => {
							setFormData({
								...formData,
								amount: Number(event.target.value) as number,
							});
						}}
					/>
					<TriviaSelect
						id="category"
						label="Category"
						options={categories}
						onChange={(event) => {
							setFormData({ ...formData, category: event.target.value });
						}}
					/>
					<TriviaSelect
						id="difficulty"
						label="Difficulty"
						options={Globals.difficulties}
						onChange={(event: SelectChangeEvent) => {
							setFormData({ ...formData, difficulty: event.target.value });
						}}
					/>
					<TriviaSelect
						id="type"
						label="Type"
						options={Globals.types}
						onChange={(event: SelectChangeEvent) => {
							setFormData({ ...formData, type: event.target.value });
						}}
					/>
					<Button
						variant="contained"
						fullWidth
						size="large"
						sx={{ fontSize: "1rem" }}
						type="submit"
					>
						Generate trivia cards
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
};

export default TriviaCard;
