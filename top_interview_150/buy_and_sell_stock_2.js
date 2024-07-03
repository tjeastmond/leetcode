/**
 * @url https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profits = 0;

  for (let i = 1; i < prices.length; i++) {
    // console.log("buy:", prices[i - 1], "sell:", prices[i], "earned:", earned);
    if (prices[i] > prices[i - 1]) {
      profits += prices[i] - prices[i - 1];
    }
  }

  return profits;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]) === 7);
console.log(maxProfit([7, 6, 4, 3, 1]) === 0);
console.log(maxProfit([1, 2, 3, 4, 5]) === 4);
