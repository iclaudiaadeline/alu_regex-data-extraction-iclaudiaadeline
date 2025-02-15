import text from "./getData.js";

const emailRegex = /(?<= )[^ ]+@.+?(?= )/g
const emails = text.match(emailRegex)
console.log({emails})

const urlRegex = /http.+?(?= )/g
const urls = text.match(urlRegex)
console.log({urls})

const phoneRegex = /\(?\d{3}\)?[\.\- ]\d{3}[\.\- ]\d{4}/g
const phones = text.match(phoneRegex)
console.log({"Phone numbers": phones})

const cardRegex = /\d{4}([\- ])\d{4}\1\d{4}\1\d{4}/g
const cards = text.match(cardRegex)
console.log({"Credit card numbers": cards})

const timeRegex = /\d{1,2}\:\d{1,2}( [AP]M)?/g
const times = text.match(timeRegex)
console.log({Time: times})

const htmlRegex = /<.+?>/g
const htmls = text.match(htmlRegex)
console.log({"HTML tags": htmls})

const hashRegex = /#.+?(?= )/g
const hashes = text.match(hashRegex)
console.log({Hashtags: hashes})

const currRegex = /\$[1-9\.\,]+/g
const currs = text.match(currRegex)
console.log({"Currency amounts": currs})
