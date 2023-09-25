import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SxProps,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

type TriviaSelectProps = {
	id: string;
	label: string;
	options: {
		name: string;
	}[];
	style?: SxProps;
};

const TriviaSelect: React.FC<TriviaSelectProps> = ({
	id,
	label,
	options,
	style,
}) => {
	const [selectedValue, setSelectedValue] = useState<string>("");

	const handleChange = (event: SelectChangeEvent) => {
		setSelectedValue(event.target.value);
	};

	return (
		<FormControl fullWidth sx={{ ...style }}>
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
				{options?.map(({ name }) => (
					<MenuItem key={name} value={name}>
						{name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default TriviaSelect;
