import { existsSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = 'https://platchemgroup.com';

// Check if URL is accessible
const checkUrl = (url) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode === 200);
    }).on('error', () => resolve(false));
  });
};

// Main SEO check
const checkSEO = async () => {
  console.log('🚀 Starting SEO audit...\n');
  
  // Check sitemap
  const sitemapExists = await checkUrl(`${SITE_URL}/sitemap.xml`);
  console.log(`🔍 Sitemap: ${sitemapExists ? '✅ Found' : '❌ Not found'}`);
  
  // Check robots.txt
  const robotsTxtExists = await checkUrl(`${SITE_URL}/robots.txt`);
  console.log(`🤖 robots.txt: ${robotsTxtExists ? '✅ Found' : '❌ Not found'}`);
  
  // Check HTTPS
  console.log(`🔒 HTTPS: ${SITE_URL.startsWith('https') ? '✅ Enabled' : '❌ Not enabled'}`);
  
  // Check viewport meta tag
  const indexHtml = readFileSync(join(process.cwd(), 'public', 'index.html'), 'utf8');
  console.log(`📱 Mobile: ${indexHtml.includes('viewport') ? '✅ Responsive' : '❌ Not responsive'}`);
  
  console.log('\n✅ SEO check completed!');
};

checkSEO();
