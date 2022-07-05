/**
* title : 1672. Richest Customer Wealth
* Runtime : 60 ms
* Memory : 42.6 MB
* Description: 
    You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
    Return the wealth that the richest customer has.

    A customer's wealth is the amount of money they have in all their bank accounts.
    The richest customer is the customer that has the maximum wealth.

* Constraints: 
    m == accounts.length
    n == accounts[i].length
    1 <= m, n <= 50
    1 <= accounts[i][j] <= 100

* input
    accounts = [[1,2,3],[3,2,1]]
    accounts = [[1,5],[7,3],[3,5]]
    accounts = [[2,8,7],[7,1,3],[1,9,5]]

* expected
    6
    10
    17

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;

  accounts.map((val, i) => {
    const sum = val.reduce((arr, cur, i) => arr + cur);

    if (max < sum) max = sum;
  });

  return max;
};
