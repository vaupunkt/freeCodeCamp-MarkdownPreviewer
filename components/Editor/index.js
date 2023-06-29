export default function Editor({ defaultText, handleChange }) {
	return (
		<section className="editorSection">
			<h2>Write your Code here:</h2>
			<textarea
				className="editorSection__textarea"
				id="editor"
				type="text"
				rows="14"
				defaultValue={defaultText}
				onChange={handleChange}></textarea>
		</section>
	);
}
