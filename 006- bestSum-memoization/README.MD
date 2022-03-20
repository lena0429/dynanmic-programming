# Best Sum
Write a function that takes in a targetSum and array of numbers as arguments. The function should return an array containing the shortest combination of numbers that add up ti exactly the targetSum.

## Big O

### Brute Force
* m = target sum
* n = numbers
* Time Complexity: O(n^m * m) => n to the m * m
* Space Complexity: O(m*m)
* Note that the maximum height of the tree here can be considered as m (the worst case is -1 on each node from root to the leaf)

### Memoizition
* m = target sum
* n = numbers
* Time Complexity: O(m * n * m) => O(m² * n) 
* Space Complexity: O(m * m)
