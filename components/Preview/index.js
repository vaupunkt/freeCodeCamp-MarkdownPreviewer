import { marked } from "marked";
import { mangle } from "marked-mangle";

export default function Preview({ defaultText }) {
	marked.use(mangle());

	marked.use({
		breaks: true,
		gfm: true,
		headerIds: false,
	});
	const markdownText = marked.parse(defaultText);
	return (
		<section className="previewSection">
			<div
				className="previewSection__div"
				id="preview"
				dangerouslySetInnerHTML={{ __html: markdownText }}></div>
		</section>
	);
}
