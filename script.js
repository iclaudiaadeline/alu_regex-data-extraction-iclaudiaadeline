import text from "./01_data-extraction.js";

const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const emails = text.match(emailRegex);
console.log({emails});

const urlRegex = /https?:\/\/[^\s]+/g;
const urls = text.match(urlRegex);
console.log({urls});

const phoneRegex = /\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;
const phones = text.match(phoneRegex);
console.log({"Phone numbers": phones});

const cardRegex = /\b\d{4}([\- ])\d{4}\1\d{4}\1\d{4}\b/g;
const cards = text.match(cardRegex);
console.log({"Credit card numbers": cards});

const timeRegex = /\b(?:[01]?\d|2[0-3]):[0-5]\d(?: [APap][Mm])?\b/g;
const times = text.match(timeRegex);
console.log({Time: times});

const htmlRegex = /<[^>]+>/g;
const htmls = text.match(htmlRegex);
console.log({"HTML tags": htmls});

const hashRegex = /#[a-zA-Z0-9_]+/g;
const hashes = text.match(hashRegex);
console.log({Hashtags: hashes});

const currRegex = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g;
const currs = text.match(currRegex);
console.log({"Currency amounts": currs});

