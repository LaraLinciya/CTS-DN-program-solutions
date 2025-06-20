import java.util.Arrays;
import java.util.Comparator;

public class SearchDemo {

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "T-shirt", "Clothing"),
            new Product(102, "Book", "Education"),
            new Product(103, "Mobile", "Electronics"),
            new Product(104, "Laptop", "Electronics")
        };

        // 🔍 Linear Search
        String searchItemLinear = "Laptop";
        System.out.println("Searching for '" + searchItemLinear + "' using Linear Search...");
        boolean foundLinear = false;
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(searchItemLinear)) {
                System.out.println("Product found: " + p.productName + ", Category: " + p.category);
                foundLinear = true;
                break;
            }
        }
        if (!foundLinear) {
            System.out.println("Product not found.");
        }

        System.out.println();

        // 🔍 Binary Search
        String searchItemBinary = "Mobile";
        System.out.println("Searching for '" + searchItemBinary + "' using Binary Search...");

        // Sort by productName before binary search
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        int low = 0, high = products.length - 1;
        boolean foundBinary = false;
        while (low <= high) {
            int mid = (low + high) / 2;
            int comparison = products[mid].productName.compareToIgnoreCase(searchItemBinary);

            if (comparison == 0) {
                System.out.println("Product found: " + products[mid].productName + ", Category: " + products[mid].category);
                foundBinary = true;
                break;
            } else if (comparison < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        if (!foundBinary) {
            System.out.println("Product not found.");
        }
    }
}
