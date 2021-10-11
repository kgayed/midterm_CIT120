var ele=document.body.querySelector(".box");

var list = [
    {
        name: "Harry",
        age: 25
    },
    {
        name: "Larry",
        age: 15
    },
    {
        name: "Bert",
        age: 45
    },
    {
        name: "Jerry",
        age: 35
    },
    {
        name: "Berry",
        age: 5
    },
    {
        name: "Bart",
        age: 55
    }
];
for(var i=0; i<list.length; i++) {
    var namelist = document.createElement("h2");
    var agelist = document.createElement("h2");

    namelist.innerHTML = "Name:" + list[i].name;
    agelist.innerHTML = "Age:" + list[i].age;
    ele.appendChild(namelist);
    ele.appendChild(agelist);

    if (list[i].age>25){
        agelist.style.color = "green";
    }
}
var counts=4;

function counter(){
   counts++;
    ele.innerHTML=counts;

}
document.body.querySelector(".count").addEventListener("click", function(){
    counter();
});


