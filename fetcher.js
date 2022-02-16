const fs = require('fs');
const [url, localPath] = process.argv.slice(2);

const request = require('request');
request(url, (error, response, body)=>{
  fs.writeFile(localPath, body, (err) => {
    if (!err) {
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
    }
  });
});