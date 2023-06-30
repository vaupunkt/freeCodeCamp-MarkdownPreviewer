import Head from "next/head";
import DrumMachine from "../../components/DrumMachine/index";

export default function Home() {
	return (
		<>
			<Head>
				<title>Drum Machine</title>
				<meta name="description" content="A Drum Machine for FreeCodeCamp" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<DrumMachine></DrumMachine>
		</>
	);
}
