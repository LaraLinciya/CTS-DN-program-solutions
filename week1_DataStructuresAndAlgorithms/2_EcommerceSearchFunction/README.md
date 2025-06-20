## Exercise 2: E-commerce Platform Search Function – Analysis

### Asymptotic Notation Recap
Big O Notation describes the upper bound of an algorithm’s time complexity as the input size grows.

- **Best Case**: Fastest execution time
- **Worst Case**: Slowest possible execution
- **Average Case**: Expected behavior in typical scenarios

---

### Linear Search

**How it works**:  
Traverses each element in the array sequentially until the target is found.

- **Use Case**: Works on unsorted arrays
- **Time Complexity**:
  - Best Case: O(1) – item found at the beginning
  - Worst Case: O(n) – item at the end or not present
- **Space Complexity**: O(1)

---

### Binary Search

**How it works**:  
Repeatedly divides the sorted array in half to locate the target.

- **Use Case**: Requires the array to be sorted
- **Time Complexity**:
  - Best Case: O(1) – item is at mid
  - Average/Worst Case: O(log n)
- **Space Complexity**: O(1)

---

### Comparison Table

| Feature             | Linear Search | Binary Search     |
|---------------------|---------------|-------------------|
| Requires Sorting    | No            | Yes               |
| Time Complexity     | O(n)          | O(log n)          |
| Works on Unsorted   | Yes           | No                |
| Performance         | Slower        | Faster (on sorted)|

---

### Conclusion

- **Use Linear Search** for small or unsorted datasets where simplicity is preferred.
- **Use Binary Search** for large, sorted datasets such as product listings in an e-commerce platform, where performance is critical.
