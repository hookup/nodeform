import * as http from 'http'
import * as fs from 'fs'

/*
http.createServer(function (req, res) {
  fs.readFile('form.html', 'utf8', function(err, data) {
    if (err) {
      console.error(err);
      return;
    }else{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
    }
    return res.end();
  });
}).listen(8080); 
*/

const hostname = '127.2.3.4';
const port = 3000;
 
const server = http.createServer((req, res) => {
  showdata = "";
  fs.readFile('form.html', 'utf8', (err, data) => {
    if (err) {
      showdata = err;
    }else{
      showdata = data;
    }
    
  });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(showdata)
  res.end();
});
 
server.listen(port);