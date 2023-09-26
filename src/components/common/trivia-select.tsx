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
		id: string;
		name: string;
	}[];
	style?: SxProps;
	onChange: (event: SelectChangeEvent) => void;
};

const TriviaSelect: React.FC<TriviaSelectProps> = ({
	id,
	label,
	options,
	style,
	onChange,
}) => {
	const [selectedValue, setSelectedValue] = useState<string>("");

	const handleChange = (event: SelectChangeEvent) => {
		onChange(event);
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
				{options?.map(({ id, name }) => (
					<MenuItem key={name} value={id}>
						{name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default TriviaSelect;
