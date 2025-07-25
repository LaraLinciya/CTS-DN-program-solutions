public class FinancialForecast {

    // Recursive method to calculate future value
    public static double futureValueRecursive(double principal, double rate, int years) {
        if (years == 0) {
            return principal;
        }
        return futureValueRecursive(principal, rate, years - 1) * (1 + rate);
    }

    // Optimized iterative method to calculate future value
    public static double futureValueIterative(double principal, double rate, int years) {
        double amount = principal;
        for (int i = 0; i < years; i++) {
            amount *= (1 + rate);
        }
        return amount;
    }

    public static void main(String[] args) {
        double principal = 10000.0; // Initial investment
        double rate = 0.10;         // 10% annual growth
        int years = 5;

        double recursiveResult = futureValueRecursive(principal, rate, years);
        double iterativeResult = futureValueIterative(principal, rate, years);

        System.out.printf("Future Value (Recursive): INR %.2f\n", recursiveResult);
        System.out.printf("Future Value (Iterative): INR %.2f\n", iterativeResult);
    }
}
