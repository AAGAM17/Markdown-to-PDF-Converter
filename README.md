# Markdown-to-PDF-Converter
This is a simple Node.js module that converts Markdown files to PDF. It uses `markdown-it` for Markdown to HTML conversion and `puppeteer` for HTML to PDF conversion.

## Installation

You can install this package using npm:

```bash
npm install --save markdown-to-pdf-converter
```
https://www.npmjs.com/package/markdown-to-pdf-converter

Or By Yarn:

```bash
yarn add markdown-to-pdf-converter
```

This package has the following dependencies:

- `fs` and `path` (built-in Node.js modules)
- `markdown-it`
- `puppeteer`

## Usage

Here's a simple example of how to use this module:

```javascript
const convertMarkdownToPDF = require('markdown-to-pdf-converter');

const markdownFilePath = './path/to/your/markdown.md';
const pdfFilePath = './path/to/output.pdf';

convertMarkdownToPDF(markdownFilePath, pdfFilePath);
```

Replace `'./path/to/your/markdown.md'` and `'./path/to/output.pdf'` with the actual paths to your Markdown file and where you want the PDF to be saved, respectively.

## API

### `convertMarkdownToPDF(markdownFilePath, pdfFilePath)`

This function converts a Markdown file to a PDF file.

#### Parameters

- `markdownFilePath` (string): The path to the Markdown file to convert.
- `pdfFilePath` (string): The path where the generated PDF file should be saved.

#### Returns

This function returns a Promise that resolves when the PDF file has been created successfully.

## License

This package is licensed under the MIT license.
