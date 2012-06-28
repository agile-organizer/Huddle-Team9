if (!window.console) console = {log: function() {}};

function getRandomImageId(startNum, endNum) {
  return Math.floor(startNum+(Math.random()*(endNum-startNum)));
}

function getImagePath(imageNum) {
  return "images/"+imageNum+".jpg";  
}

function allKeys(object) {
  var key; 
  keys = [];

  for (key in object) {
    if (object.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

function diffArrays(firstArr, secondArr) {
  console.log(firstArr);
  console.log(secondArr);
  var strA = ":" + firstArr.join("::") + ":";
  var strB = ":" +  secondArr.join(":|:") + ":";

  var reg = new RegExp("(" + strB + ")","gi");
  var strDiff = strA.replace(reg,"").replace(/^:/,"").replace(/:$/,"");
  var arrDiff = strDiff.split("::");

  return arrDiff;
}

function getURLParameter(name) {
  return decodeURI(
    (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
  );
}