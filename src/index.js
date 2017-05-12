let http = require('http');
let fs = require('fs');
let pt = __dirname;
let dirName = pt.substr(0,pt.lastIndexOf('\\')).replace(/\\/g,'/');

http.createServer((req,res) => {
	let file = dirName + req.url;
	fs.readFile(file,(err,files) => {
		if(err){
			res.end(); 
		}else{
            var suffix = file.substr( file.lastIndexOf('.')+1, file.length);
            res.writeHead(200,{                     //响应客户端，将文件内容发回去
                'Content-type':"text/"+suffix});
			res.end(files);
		}
	})
}).listen(3000);

