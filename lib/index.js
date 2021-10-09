var translate = require('node-google-translate-skidz')
var fs = require('fs')

var sourceTxt = fs.readFile('source.txt','utf8',(err,data) => {
    if (err) console.log("error")
    translate({
        text: data,
        source: 'en',
        target: 'id',
    }, function(result){
        fs.writeFile('target.txt',result.translation,(err) => {
            if (err) console.log("error")
            console.log("Success");
        })
    })
})


// translate({
//     text: 'Gone',
//     source: 'en',
//     target: 'id'
// }, function(result){
//     console.log(result);
// })
