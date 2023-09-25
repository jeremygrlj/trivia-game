import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

type TriviaSelectProps = {
	id: string;
	label: string;
	options: string[];
};

const TriviaSelect: React.FC<TriviaSelectProps> = ({ id, label, options }) => {
	const [selectedValue, setSelectedValue] = useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setSelectedValue(event.target.value as string);
	};

	return (
		<FormControl fullWidth>
			<InputLabel id={id}>{label}</InputLabel>
			<Select
				labelId={id}
				label={label}
				value={selectedValue}
				onChange={handleChange}
			>
				<MenuItem disabled value="">
					{label}
				</MenuItem>
				{options.map((option) => (
					<MenuItem key={option} value={option}>
						{option}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default TriviaSelect;
