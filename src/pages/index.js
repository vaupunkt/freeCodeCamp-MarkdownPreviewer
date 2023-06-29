import Head from "next/head";
import Editor from "../../components/Editor";
import Preview from "../../components/Preview";

export default function Home({ defaultText, handleChange }) {
	return (
		<>
			<Head>
				<title>Markdown Previewer</title>
				<meta
					name="description"
					content="Write in the Textarea and get a Preview in Markdown"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<h1>Markdown Previewer</h1>
			<p>Write in the Textarea and get a Preview in Markdown</p>
			<Editor defaultText={defaultText} handleChange={handleChange}></Editor>
			<Preview defaultText={defaultText}></Preview>
		</>
	);
}
