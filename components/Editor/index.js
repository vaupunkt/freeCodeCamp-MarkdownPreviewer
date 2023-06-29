export default function Editor({ defaultText, handleChange }) {
	return (
		<section>
			<h2>Write your Code here:</h2>
			<textarea
				id="editor"
				type="text"
				rows="14"
				defaultValue={defaultText}
				onChange={handleChange}></textarea>
		</section>
	);
}
