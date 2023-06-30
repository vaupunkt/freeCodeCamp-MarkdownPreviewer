import { StyledDisplay } from "./Display.style";

export default function Display({ displayText }) {
	return (
		<StyledDisplay id="display">
			<p>{displayText}</p>
		</StyledDisplay>
	);
}
