#!/usr/bin/env node
// Fetch a file from a public URL and print its Base64 representation.
// Usage: node base64.js <url>

const { ProxyAgent, fetch } = require('undici');

const [,, url] = process.argv;

if (!url) {
  console.error('Usage: node base64.js <url>');
  process.exit(1);
}

(async () => {
  try {
    const proxy = process.env.HTTPS_PROXY || process.env.HTTP_PROXY;
    const dispatcher = proxy ? new ProxyAgent(proxy) : undefined;
    const response = await fetch(url, { dispatcher });
    if (!response.ok) {
      console.error(`Failed to fetch: ${response.status} ${response.statusText}`);
      process.exit(1);
    }
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    process.stdout.write(buffer.toString('base64'));
  } catch (err) {
    console.error('Error fetching file:', err);
    process.exit(1);
  }
})();
