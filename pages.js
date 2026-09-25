const ghpages = require("gh-pages");
const pathname = `${__dirname}/docs`;
const repoURL = "https://github.com/aninostephen/portfolio.git";

ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
