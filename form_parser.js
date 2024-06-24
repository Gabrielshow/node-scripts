var http = require('http');
var fp = require('./upload_parser');
var filesaver = require('./file_saver');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  fp.uploadParser;
  filesaver.fileSaver;
  return res.end();
  
}).listen(8080); 