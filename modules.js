//jshint esversion:6
//const amount = 12;
//if(amount < 10)
//{
  //console.log('small number');
//}
//else
//{
  //console.log('large number');
//}
const func = require('./utils');
const names = require('./names');
func(names.john);
func(names.peter);
const path = require('path');
//console.log(path.sep);
const filepath = path.join('content', 'subfolder', 'test.js');
//console.log(filepath);
const base = path.basename(filepath);
//console.log(base);
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.js');
console.log(absolute);
const {readFileSync, writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
writeFileSync('./content/result-fs.txt', `Result : ${first} ${second}`);
const {readFile, writeFile} = require('fs');
readFile('./content/first.txt','utf8',(err, result)=>{
  if(err)
  {
    console.log('an error occured');
    return;
  }
  const first = result;
  readFile('./content/second.txt','utf8',(err, result)=>{
    if(err)
    {
      console.log('error');
    }
    const second = result;
    writeFile('./content/result-async.txt', `Result : ${first} ${second}`,(err, result)=>{
      if(err)
      {
        console.log(err);
        return;
      }
      console.log(result);
    });
  });
});
