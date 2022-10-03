const arr = [
  { name: 'Amir', id: '1' },
  { name: 'Samlan', id: '2' },
  { name: 'Shahrukh', id: '0' },
];

const filterObject = (arr, filterValue) => {
  return arr.filter((element, index) => {
    if (index === filterValue) return true;
    for (let key in element) {
      if (element[key] === filterValue) {
        return true;
      }
    }
  })[0];
};
console.log(filterObject(arr, 0)); // { name: "Amir", id: "1" }
console.log(filterObject(arr, 'Amir')); // { name: "Amir", id: "1" }
console.log(filterObject(arr, '0')); // { name: "Shahrukh", id: "0" }

//link : https://learnersbucket.com/examples/interview/filter-array-of-objects-on-value-or-index/
