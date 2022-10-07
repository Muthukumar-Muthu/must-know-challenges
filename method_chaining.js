/*
Input:
computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();

Output:
143545000
*/

const ComputeAmount = function () {
  return {
    amount: 0,
    lacs: function (value) {
      this.amount = this.amount + value * 1_00_000;
      return this;
    },
    crore: function (value) {
      this.amount = this.amount + value * 1_00_00_000;
      return this;
    },
    thousand: function (value) {
      this.amount = this.amount + value * 1_000;
      return this;
    },
    value: function () {
      return this.amount;
    },
  };
};

console.log(
  ComputeAmount()
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(20)
    .thousand(45)
    .crore(7)
    .value() === 143545000
);
