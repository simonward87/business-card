# My Digital Business Card

I was trying to come up with a solution that would allow personal details to be shared online without a need for password access etc. but also to protect them from abuse and getting into the wrong hands.

The solution I came up with, was to encode the private data within URL query parameters—and then to use that data to build the page. This makes for a fairly large and unreadable URL, but access is shared via a QR code, so this is irrelevant to the end user.

The data is Base64 encoded, providing both basic obfuscation and consistent plain-text characters. The query parameters are fetched, decoded, and then composed into styled HTML elements. As the site is only a single page, the CSS and JavaScript have been manually copied into `index.html` so that everything loads rapidly within a single request. Finally, I minified this file using the excellent [minify](https://github.com/tdewolff/minify/tree/master/cmd/minify) CLI tool, putting the output into `dist/` for deployment.
