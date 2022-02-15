import Parser from 'rss-parser';

export const feeds = {
  xkcd: 'https://xkcd.com/rss.xml',
  morbid: 'https://audioboom.com/channels/4997220.rss',
  apology: 'https://rss.art19.com/apology-line',
  wineAndCrime: 'https://audioboom.com/channels/4903845.rss'
};

const requestRss = async url => {
  const parser = new Parser();
  return await parser.parseURL(url);
};

export async function requestFeed(name) {
  if (!(name in feeds)) {
    throw new Error(`Unsupported feed ${name}`);
  }

  const url = feeds[name];
  return await requestRss(`${process.env.VUE_APP_RSS_PROXY}/${url}`);
}
