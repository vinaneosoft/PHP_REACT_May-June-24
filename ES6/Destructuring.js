let array=[456,"Neosoft", true, 67000];
let num=array[0];

let [no, cname, status, budget]=array; // array destructring
console.log(cname);
console.log(budget);

let num2, companyName;

[num2, companyName]=array;
console.log(num2);

let studObj={
    id:56,
    sname:"kirti",
    perc:90
}
//let id=studObj.id;
//normal variable=key
console.log("__________");
let {id, sname, perc}=studObj; //let id=studObj.id;
console.log(id);
console.log(sname);
console.log(perc);