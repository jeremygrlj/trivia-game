export class Globals {
	public static readonly difficulties = [
		{ id: "easy", name: "Easy" },
		{ id: "medium", name: "Medium" },
		{ id: "hard", name: "Hard" },
	];
	public static readonly types = [
		{ id: "multiple", name: "Multiple choice" },
		{ id: "boolean", name: "True / False" },
	];
}

export const decodeHtmlEntities = (input:string) => {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

export const randomRGBColor = (min: number = 200, max: number = 255) => {

  const red = Math.floor(Math.random() * (max - min + 1)) + min;
  const green = Math.floor(Math.random() * (max - min + 1)) + min;
  const blue = Math.floor(Math.random() * (max - min + 1)) + min;

  return `rgb(${red},${green},${blue})`;
}

export const shuffleArray = (array: string[]) => {
  const shuffledArray = [...array]; // Create a copy of the original array

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }

  return shuffledArray; // Return the shuffled array
}
