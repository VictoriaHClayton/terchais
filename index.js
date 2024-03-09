// 提取网页内容中的所有图片 URL
function extractImageURLs(htmlContent) {
  const $ = cheerio.load(htmlContent);
  const imageURLs = [];
  $('img').each((index, element) => {
      imageURLs.push($(element).attr('src'));
  });
  return imageURLs;
}

// 提取网页内容中的所有文本
function extractText(htmlContent) {
  const $ = cheerio.load(htmlContent);
  return $('body').text();
}
