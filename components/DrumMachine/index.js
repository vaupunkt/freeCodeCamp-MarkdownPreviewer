import DrumPad from "../DrumPad/index";
import triggerButtons from "../../utils/triggerButtons";
import Display from "../Display";
import { useEffect, useState } from "react";
import { StyledDrumMachine } from "./DrumMachine.style";

export default function DrumMachine() {
	const [displayText, setDisplayText] = useState("Drum-Machine");
	function handleAudio(button) {
		const audios = document.querySelectorAll("audio");
		const audio = audios.item(
			triggerButtons.findIndex((triggerButton) => triggerButton === button)
		);
		setDisplayText(audio.getAttribute("name"));
		audio.play();
	}
	useEffect(() => {
		window.addEventListener("keydown", (event) => {
			if (
				triggerButtons.some(
					(triggerButton) => triggerButton === event.key.toUpperCase()
				)
			) {
				const audios = document.querySelectorAll("audio");
				const audio = audios.item(
					triggerButtons.findIndex(
						(triggerButton) => triggerButton === event.key.toUpperCase()
					)
				);
				setDisplayText(audio.getAttribute("name"));

				audio.play();
			}
		});
	}, []);
	return (
		<>
			<StyledDrumMachine id="drum-machine">
				<Display displayText={displayText}></Display>
				{triggerButtons.map((triggerButton) => {
					return (
						<DrumPad
							key={triggerButton}
							keyButton={triggerButton}
							handleAudio={handleAudio}>
							{triggerButton}
						</DrumPad>
					);
				})}
			</StyledDrumMachine>
			<p>
				FreeCodeCamp-Project by{" "}
				<a href="https://github.com/vaupunkt/">vaupunkt</a>
			</p>
		</>
	);
}
