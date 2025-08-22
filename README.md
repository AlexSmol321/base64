# base64
# Base64 URL Fetcher

This repository contains a simple Node.js script `base64.js` that fetches a file from a public URL and outputs its Base64 representation. This script can be used in a Glide custom code column or any Node.js environment.

## Usage

```bash
node base64.js <url>
```

Example:

```bash
node base64.js https://example.com/image.png
```

The script prints the Base64 content to standard output.

## Dependencies

- Node.js 18+
- [undici](https://www.npmjs.com/package/undici) (for proxy support)

Install dependencies:

```bash
npm install
```

## Notes for Glide

When using this code in Glide's custom code column, remove the Node-specific parts and adapt the fetch call to Glide's environment. The core logic of fetching a URL and converting the result to Base64 remains the same.
