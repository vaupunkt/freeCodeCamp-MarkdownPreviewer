export default function Editor({ defaultText, handleChange }) {
	return (
		<section>
			<h2>Write your Code here:</h2>
			<textarea
				type="text"
				id="editor"
				rows="14"
				defaultValue={defaultText}
				onChange={handleChange}></textarea>
		</section>
	);
}
