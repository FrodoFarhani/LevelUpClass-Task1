const SIMPLE_DATA = `test string`;
const SIMPLE_DATA_SANITIZED = `test string`;
const MARKDOWN_DATA = "Some *emphasis*,! ^@ **importance**, and `code`.";
const MARKDOWN_DATA_SANITIZED = "Some emphasis importance and code";
const HTML_DATA = `<p>test string</p><h1>test !! * &&  dfd</h1>`;
const HTML_DATA_SANITIZED = "test stringtest dfd";

export {
	SIMPLE_DATA,
	SIMPLE_DATA_SANITIZED,
	MARKDOWN_DATA,
	MARKDOWN_DATA_SANITIZED,
	HTML_DATA,
	HTML_DATA_SANITIZED
};
