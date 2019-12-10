const fs = require("fs");

fs.copyFile(
  "./README.md",
  "./@pauliescanlon/gatsby-remark-grid-system/README.md",
  err => {
    if (err) {
      throw err;
    }
    console.log("README copied to theme ok!");
  }
);
