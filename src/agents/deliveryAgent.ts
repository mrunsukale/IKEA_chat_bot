import { Agent } from "../types";
import { Package2 } from "lucide-react";

const deliveryQuestions = [
  "delivery date",
  "delivery address",
  "delivery arrives damaged",
  "delivery services",
  "delivery time window",
  "status of my delivery",
  "missed delivery appointment",
  "signature upon delivery",
  "delivery region",
  "delivery charges",
].map((q) => q.toLowerCase());

export const deliveryAgent: Agent = {
  type: "delivery",
  name: "Delivery Support",
  avatar: Package2,
  canHandle: (question: string) => {
    const q = question.toLowerCase();
    return deliveryQuestions.some((keyword) => q.includes(keyword));
  },
  getResponse: (question: string) => {
    const q = question.toLowerCase().trim();

    // 1. Delivery date
    if (q.includes("delivery date")) {
      if (q.includes("order number")) {
        return "It will arrive in 3-4 business days. Or else you can track your order by providing your order number.";
      }
      return "To track your order, please provide your order number and I'll check its status immediately.";
    }

    // 2. Delivery address
    if (q.includes("delivery address")) {
      if (q.includes("order number")) {
        return "Unfortunately, modifications can only be made up until a certain order status. We would recommend that you confirm all delivery details before completing your order. If modification is required after payment has been taken, we kindly ask that you cancel and rebook your order with the correct information. For more information, please request a live agent here in the chat.";
      }
      return "I'll need your order number to check the delivery status. Could you please share it?";
    }

    // 3. Delivery arrives damaged
    if (q.includes("delivery arrives damaged")) {
      if (q.includes("order number")) {
        return "We’re very sorry to hear you’ve encountered an issue with your purchase. If the order you received contained a damaged product, please follow the steps listed here. Alternatively, type ‘talk to an agent’ to be connected to a co-worker, or explore further ways to Contact us.";
      }
      return "I'll need your order number to check the delivery status. Could you please share it?";
    }

    // 4. Delivery services
    if (q.includes("delivery services")) {
      return "The delivery methods we offer depend on the products you want to buy and the stock availability in your selected postal code area for the allocated delivery time. You can find delivery options for your area and more information about IKEA deliveries here.";
    }

    // 5. Delivery time window
    if (q.includes("delivery time window")) {
      return "Delivery lead times vary depending on the size of your order and the location. Please add the items to your cart and enter your postal code for an official delivery date.";
    }

    // 6. Status of my delivery
    if (q.includes("status of my delivery")) {
      return "You can find your order number in your order confirmation email. It's normally a 9 or 10 digit number!";
    }

    // 7. Missed delivery appointment
    if (q.includes("missed delivery appointment")) {
      return "Shipping fees are based on the delivery method, size, weight, and delivery destination. You can add the desired articles to your shopping cart and enter your postal code to calculate your shipping fee.";
    }

    // 8. Signature upon delivery
    if (q.includes("signature upon delivery")) {
      return "Here's an article from our FAQs that might help you find the order number.";
    }

    // 9. Delivery region
    if (q.includes("delivery region")) {
      return "Sorry, that order number doesn't exist. Perhaps you could check your order status from your purchase history page?";
    }

    // 10. Delivery charges
    if (q.includes("delivery charges")) {
      return "How can I help you today?";
    }

    // Fallback response
    return "I'm not sure how to help with that. Can you please rephrase or ask about your delivery?";
  },
};
