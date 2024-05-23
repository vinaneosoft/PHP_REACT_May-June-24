let salaries=[45000,56000,45000,67000,78000,89000,56000,98000,55000];
// forEach methods
salaries.forEach(value=>console.log(value));
console.log("----------");
salaries.forEach((value,index)=>console.log(value+" "+index));
console.log("----------");
salaries.forEach((value,index, ref)=>console.log(value+" "+index+ " "+ref));
// find method
// first salary > 70000
console.log("----------");
const matchingsalary=salaries.find(salary=>salary>70000)
console.log(matchingsalary);
// filter
salaries > 70000
console.log("----------");
const matchingsalaries=salaries.filter(salary=>salary>70000)
console.log(matchingsalaries);
// display salaries > 70000 using forEach
console.log("----------");
salaries.filter(salary=>salary>70000).forEach(sal=>console.log(sal));
// map
// increment each salary by 5000
console.log("----------");
let incrementedsalaries=salaries.map(salary=>salary+5000)
console.log(incrementedsalaries);
console.log(salaries);
console.log("----------");
salaries.map(salary=>salary+5000).forEach(salary=>console.log(salary))
// reduce