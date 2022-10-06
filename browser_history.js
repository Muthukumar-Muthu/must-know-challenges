/*
Input:
const bh = new BrowserHistory();
bh.visit('A');
console.log(bh.current());
bh.visit('B');
console.log(bh.current());
bh.visit('C');
console.log(bh.current());
bh.goBack();
console.log(bh.current());
bh.visit('D');
console.log(bh.current());

Output:
"A"
"B"
"C"
"B"
"D"
*/

class BrowserHistory {
  constructor() {
    const stack = [];
    let index = -1;
    this.visit = (link) => {
      stack[++index] = link;
    };
    this.current = () => stack[index];
    this.backward = () => {
      index = Math.max(0, index - 1);
    };
    this.forward = () => {
      index = Math.min(stack.length, index - 1);
    };
  }
}
const bh = new BrowserHistory();
bh.visit("A");
console.log(bh.current());
bh.visit("B");
console.log(bh.current());
bh.visit("C");
console.log(bh.current());
bh.backward();
console.log(bh.current());
bh.visit("D");
console.log(bh.current());
