let obj = {name: "Ravi"};
function modify(o){
    o.name = "Arun";
    console.log("Inside function: ", o.name);

}
modify(obj);
console.log("Outside Function: ", obj.name);
