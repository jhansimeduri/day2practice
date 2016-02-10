var module = require('module');
var object={};
var obj={};
function csv(data,object){
  module.readFileSync(data).toString().split('/n').forEach(function(lineContent)){
    var line=lineContent.split(',');
    console.log(line);
  }
}
csv(includes/js/India2011.csv,obj);
csv(includes/js/IndiaSC2011.csv,obj);
csv(IndiaST2011,obj);
