import sounds from "../../utils/sounds";
import { StyledButton } from "./DrumPad.style";

export default function DrumPad({ keyButton, children, handleAudio }) {
	const sound = sounds.find((sound) => sound.triggerKey === keyButton);

	return (
		<>
			<StyledButton
				type="button"
				className="drum-pad"
				id={keyButton}
				onClick={() => handleAudio(keyButton)}>
				{children}
				<audio
					src={sound.src}
					name={sound.name}
					className="clip"
					id={keyButton}></audio>
			</StyledButton>
		</>
	);
}
