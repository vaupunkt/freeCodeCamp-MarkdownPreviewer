import { marked } from "marked";
import { mangle } from "marked-mangle";
import Prism from "prismjs";

export default function Preview({ defaultText }) {
	marked.use(mangle());

	marked.use({
		breaks: true,
		gfm: true,
		highlight: function (code) {
			return Prism.highlight(code, Prism.languages.javascript, "javascript");
		},
	});

	const markdownText = marked.parse(defaultText);
	return (
		<section>
			<h2>Preview</h2>
			<div
				id="preview"
				dangerouslySetInnerHTML={{ __html: markdownText }}></div>
		</section>
	);
}
