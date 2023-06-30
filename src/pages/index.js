import Head from "next/head";
import Editor from "../../components/Editor";
import Preview from "../../components/Preview";
import { styled } from "styled-components";
const Main = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
`;

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
			<Main>
				<h1 className="headline">Markdown Previewer</h1>
				<Editor defaultText={defaultText} handleChange={handleChange}></Editor>
				<Preview defaultText={defaultText}></Preview>
			</Main>
		</>
	);
}
