function add(...nums){
    return nums.reduce((acc,num)=>acc+num)
}

console.log(add(56,78));
add(56);
add(56,78,34);
add(2,7,2,4,6);
add(67,45,34);

let arr1=["pooja","shanti"]
let arr2=["krupa","kiran","pooja"]
let arr3=[...arr1,...arr2,"pritam","somya"]

let arr4=[...arr1]; // difft array
let arr5=arr1; // same array

let studObj={
    id:56,
    sname:"kirti",
    perc:90
}

const newObj={...studObj}
console.log(newObj);
const newObj2={...studObj, perc:89, standard:"1st"}
console.log(newObj2);

const {id, sname, perc}=studObj; // Object destructring

const newObj3={
    sid:id,
    studName:sname,
    studPerc:perc
}
console.log(newObj3);