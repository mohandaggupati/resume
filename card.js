(function(){
  function loadJson(file,callback){
    var rawFile =new XMLHttpRequest();
rawFile.overrideMimeType("application/json");
rawFile.open("GET",file,true);
rawFile.onreadystatechange =function(){
if(rawFile.readyState ===4 & rawFile.status == "200"){
        callback(rawFile.responseText)
}
  }
rawFile.send(null);
}
loadJson("data.json",function (text){
var data =JSON.parse(text);
console.log(data);
pro(data.profile)
});
function pro(Pro){
var mainDiv=document.querySelector(".mainDiv");
for (var i in Pro) {
var card=document.createElement("div");
card.classList.add("card");

mainDiv.appendChild(card)
var image=document.createElement("img");
image.src="images/logo2.jpg";
card.appendChild(image);
var h1=document.createElement("h1");
h1.textContent=Pro[i].name;
card.appendChild(h1);
var h3=document.createElement("h3");
card.appendChild(h3);
h3.textContent=Pro[i].role;
var h5=document.createElement("h5");
card.appendChild(h5);
h5.textContent=Pro[i].phoneno;
var h2=document.createElement("h2");
card.appendChild(h2);
h2.textContent=Pro[i].gmail;
var a=document.createElement("a");
card.appendChild(a);
a.href="mohan.html";
a.textContent="view resume";
}
}
})();
