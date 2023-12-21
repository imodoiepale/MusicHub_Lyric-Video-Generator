"use server"

const { chromium } = require('playwright');

const scrapeLyrics = async (song, artist) => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  try {
    const page = await context.newPage();
    const searchQuery = `${song} ${artist} lyrics`;
    await page.goto(`https://www.bing.com/search?q=${searchQuery}`);

    // Check if the #lyric_body element is present on the page
    const lyricBodyExists = await page.waitForSelector('#lyric_body', { state: 'attached' }).catch(() => false);

    if (!lyricBodyExists) {
      // If #lyric_body is not found, return lyrics not found
      console.log('Lyrics not found');
      return 'Lyrics not found';
    }

    // Extract lyrics from the search results page
    const lyrics = await page.$eval('#lyric_body', (element) => {
      // Replace <br> tags with line breaks
      const withLineBreaks = element.innerHTML.replace(/<br\s*[/]?>/gi, '\n');

      // Add line breaks before each <div class="verse">
      const withVerseLineBreaks = withLineBreaks.replace(/<div class="verse ">/g, '\n<div class="verse ">');

      // Create a temporary div to decode HTML entities
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = withVerseLineBreaks;

      // Return the text content with preserved line breaks
      return tempDiv.textContent || tempDiv.innerText;
    });
    return lyrics;
  } finally {
    await browser.close();
  }
};

export default scrapeLyrics;

