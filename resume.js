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
loadJson("resume.json",function (text){
var data =JSON.parse(text);
console.log(data);
console.log(data.profile);
leftdata(data.profile);
console.log(data.EDUCATION);
education(data.EDUCATION);
console.log(data.SKILLS);
SKILLS(data.SKILLS);
});
var left=document.querySelector(".leftdiv")
var right=document.querySelector(".rightdiv")
function leftdata(leftdetails){

  var images=document.createElement("img");
  images.src=leftdetails.image;
  left.appendChild(images);

  var name=document.createElement("h2");
  name.textContent=leftdetails.name;
  left.appendChild(name);

  var role=document.createElement("h2");
  role.textContent=leftdetails.role;
  left.appendChild(role);

  left.appendChild(document.createElement("hr"));

  var name=document.createElement("h2");
  name.textContent=leftdetails.phoneno;
  left.appendChild(name);


    var name=document.createElement("h2");
    name.textContent=leftdetails.gmail;
    left.appendChild(name);

//right DATA
var co=document.createElement("h1");
co.textContent="CARRER OBJECTIVES";
right.appendChild(co);
right.appendChild(document.createElement("hr"));
let p=document.createElement("p");
p.textContent=leftdetails.carrer;
right.appendChild(p);
}
//right mainDiv

//EDUCATION leftdetails

function education(edu) {
  var ed=document.createElement("h1");
  ed.textContent="EDUCATION DETAILS";
  right.appendChild(ed);
  right.appendChild(document.createElement("hr"));
for (var i in edu)
 {
  let h3=document.createElement("h3");
  h3.textContent=edu[i].degree;
right.appendChild(h3);
let ul=document.createElement("ul");
right.appendChild(ul);

//create lists li 1 li 2 li 3
let li1=document.createElement("li");
li1.textContent="college : "+edu[i].COLLEGE;
ul.appendChild(li1);

let li2=document.createElement("li");
li2.textContent="branch : "+edu[i].branch;
ul.appendChild(li2);

let li3=document.createElement("li");
li3.textContent="marks: "+edu[i].marks;
ul.appendChild(li3);

let li4=document.createElement("li");
li4.textContent="enddate : "+edu[i].enddate;
ul.appendChild(li4);
}


}
function SKILLS(skills) {

  var ed=document.createElement("h1");
  ed.textContent="TECH SKILLS";
  right.appendChild(ed);
  right.appendChild(document.createElement("hr"));

  var os=document.createElement("li");
  os.textContent="os : "+skills.os;
  right.appendChild(os);

  var os=document.createElement("li");
  os.textContent="Programming : "+skills.programmingskills;
  right.appendChild(os);


}
})()
