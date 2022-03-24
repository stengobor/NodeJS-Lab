const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

rp("https://www.reddit.com/r/popular.json")
  .then((data) => JSON.parse(data))
  .then((articles) => {
    articles.forEach((article) => {
      if (
        path.extname(article.data.url) == ".jpg" ||
        path.extname(article.data.url) == ".png" ||
        path.extname(article.data.url) == ".gif"
      ) {
        rp(article.data.url, { encoding: "binary" })
          .then((img) => {
            const imgPath = `./downloads/${article.data.id}${path.extname(
              article.data.url
            )}`;
            fs.writeFileSync(imgPath, img, { encoding: "binary" });
          })
          .catch((err) => console.log(err));
      }
    });
  });
