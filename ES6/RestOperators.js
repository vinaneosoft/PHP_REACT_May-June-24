function add(...nums){
    return nums.reduce((acc,num)=>acc+num)
}

console.log(add(56,78));
add(56);
add(56,78,34);
add(2,7,2,4,6);
add(67,45,34);