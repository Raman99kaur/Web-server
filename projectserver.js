const http = require('http');
function handler (req,res){
    res.writehead(200),{'contenttype':'text/plan'});
    res.write("yeah Go Webserver!!!");
}