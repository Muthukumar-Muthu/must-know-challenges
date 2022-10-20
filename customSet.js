// Implement a simple store class (hashSet) in JavaScript with set(key, value), get(key), & has(key) methods.

//https://learnersbucket.com/examples/interview/implement-store-class-hashset-in-javascript/

function Store() {
  this.list = {};
  this.has = function (key) {
    return Boolean(this.list[key]);
  };
  this.set = function (key, value) {
    this.list[key] = value;
  };
  this.get = function (key) {
    return this.list[key];
  };
}

const store = new Store();
store.set("a", 10);
store.set("b", 20);
store.set("c", 30);
console.log(store.get("b"));
console.log(store.has("c"));
console.log(store.get("d"));
console.log(store.has("e"));
