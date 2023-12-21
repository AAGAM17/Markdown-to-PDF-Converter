const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it')();
const puppeteer = require('puppeteer');

async function convertMarkdownToPDF(markdownFilePath, pdfFilePath) {
  const markdownContent = fs.readFileSync(markdownFilePath, 'utf-8');

  // Convert Markdown to HTML
  const htmlContent = markdownIt.render(markdownContent);

  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.setContent(htmlContent);

  // Generate PDF from the HTML content
  await page.pdf({ path: pdfFilePath, format: 'A4' });

  await browser.close();

  console.log(`PDF created successfully at: ${pdfFilePath}`);
}

module.exports = convertMarkdownToPDF;
