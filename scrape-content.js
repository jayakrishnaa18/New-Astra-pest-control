const https = require('https');
const fs = require('fs');

const fetchPage = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
};

(async () => {
  try {
    const html = await fetchPage('https://www.best1cleaning.com/');
    fs.writeFileSync('scraped-content.html', html);
    console.log('Content saved to scraped-content.html');
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
