export default function Editor({ defaultText }) {
	return (
		<section>
			<textarea
				type="text"
				id="editor"
				rows="14"
				defaultValue={defaultText}></textarea>
		</section>
	);
}
