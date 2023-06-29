export default function Editor({ defaultText, handleChange }) {
	return (
		<section>
			<textarea
				type="text"
				id="editor"
				rows="14"
				defaultValue={defaultText}
				onChange={handleChange}></textarea>
		</section>
	);
}
