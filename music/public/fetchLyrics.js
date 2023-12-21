
import axios from 'axios';
import cheerio from 'cheerio';

const fetchLyrics = async (req, res) => {
  const { song, artist } = req.body;
  const response = await axios.get(`https://www.bing.com/search?q=${song}+${artist}+lyrics`);
  const $ = cheerio.load(response.data);
  const lyrics = $('#TransControl_SERP5650 > div.tc_content > div').text();
  res.json({ lyrics });
};

export default fetchLyrics;
