import { Agent } from "../types";
import { ShoppingCart } from "lucide-react";

const salesQuestions = [
  "KALLAX shelving unit",
  "STRANDMON wing chair available",
  "weight capacity",
  "discount for bulk",
  "current promotions or sales",
  "assembly instructions",
  "financing options",
  "find customer reviews",
  "IKEA Family card and the IKEA Business card",
  "match competitor prices",
].map((q) => q.toLowerCase());

export const salesAgent: Agent = {
  type: "sales",
  name: "Sales Support",
  avatar: ShoppingCart,
  canHandle: (question: string) => {
    const q = question.toLowerCase();
    return salesQuestions.some((keyword) => q.includes(keyword));
  },
  getResponse: (question: string) => {
    const q = question.toLowerCase();

    if (q.includes("kallax shelving unit")) {
      return "The KALLAX shelving unit is a versatile and stylish storage solution from IKEA, available in various sizes and colors to suit your space. It’s known for its sleek, modern design and practical functionality.";
    }

    if (q.includes("strandmon wing chair available")) {
      return "The STRANDMON wing chair is a classic, cozy armchair available in various colors and fabrics. To check availability at your local IKEA store, you can visit the IKEA website or contact the store directly.";
    }

    if (q.includes("weight capacity")) {
      return "Weight capacity varies by product. You can find specific weight limits listed in the product description on the IKEA website or the assembly instructions included with the product.";
    }

    if (q.includes("discount for bulk")) {
      return "IKEA generally doesn’t offer bulk discounts to individual customers. However, businesses and organizations can benefit from IKEA Business offers and services. Contact IKEA’s customer service for more details.";
    }

    if (
      q.includes("current promotions") ||
      q.includes("current promotions or sales") ||
      q.includes("sales")
    ) {
      return "IKEA frequently offers sales and promotions, which can be found on their official website under the “Offers” or “Deals” section. IKEA Family members often receive special discounts and offers.";
    }

    if (q.includes("assembly instructions")) {
      return "Assembly instructions for IKEA products are included in the packaging and are also available for download on the IKEA website by searching the product name or code.";
    }

    if (q.includes("financing options")) {
      return "IKEA offers financing options through the IKEA Projekt credit card, allowing customers to make purchases and pay over time. Visit IKEA’s website or contact customer service for the most up-to-date information.";
    }

    if (q.includes("find customer reviews")) {
      return "Customer reviews can be found on the IKEA website under each product’s page. They provide insights into quality, ease of assembly, durability, and overall satisfaction.";
    }

    if (q.includes("ikea family card and the ikea business card")) {
      return "The IKEA Family Card offers benefits like special discounts, exclusive offers, and free coffee or tea in-store. The IKEA Business Card provides tailored services for businesses, including bulk purchasing options.";
    }

    if (q.includes("match competitor prices")) {
      return "IKEA typically does not offer price matching with competitors. Their focus is on providing high-quality, affordable products directly.";
    }

    return "I can help with product information, availability, and store details. What specific information are you looking for?";
  },
};
