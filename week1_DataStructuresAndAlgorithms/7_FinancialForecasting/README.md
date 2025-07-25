## Analysis

### Recursive Algorithm Overview
This program forecasts future investment value based on annual growth using recursion:
- `futureValue(n) = futureValue(n-1) * (1 + rate)`
- Each year depends on the value of the previous year.

---

### Time & Space Complexity

#### Recursive Approach
- **Time Complexity:** O(n)
- **Space Complexity:** O(n) due to the recursive call stack.

#### Iterative Optimization
- **Time Complexity:** O(n)
- **Space Complexity:** O(1) – no call stack used.
- This approach avoids issues such as stack overflow when handling large input values.

---

### Conclusion
- Recursion simplifies the logic and is useful for learning and small-scale use cases.
- However, in real-world forecasting tools, an **iterative method** is preferred for better performance and memory efficiency.
