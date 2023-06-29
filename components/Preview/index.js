import { marked } from "marked";
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";

export default function Preview({ defaultText }) {
	marked.use(mangle());

	const options = {
		prefix: "my-prefix-",
	};
	marked.use(gfmHeadingId(options));

	marked.use({
		async: false,
		baseUrl: null,
		breaks: false,
		extensions: null,
		gfm: true,
		headerIds: false,
		headerPrefix: "",
		highlight: null,
		hooks: null,
		langPrefix: "language-",
		mangle: false,
		pedantic: false,
		sanitize: false,
		sanitizer: null,
		silent: false,
		smartypants: false,
		tokenizer: null,
		walkTokens: null,
		xhtml: false,
	});

	const markdownText = marked.parse(defaultText);
	return (
		<section id="preview">
			<div dangerouslySetInnerHTML={{ __html: markdownText }}></div>
		</section>
	);
}
