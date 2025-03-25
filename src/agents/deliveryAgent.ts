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
  "delivery available",
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
        return "You are now connected with the Delivery Agent. Your product will arrive in 3-4 business days.";
      }
      return "You are now connected with the Delivery Agent. To track your order, please provide your order number and I'll check its status immediately.";
    }

    // 2. Delivery address
    if (q.includes("delivery address")) {
      if (q.includes("order")) {
        return "You are now connected with the Delivery Agent. Unfortunately, modifications can only be made up until a certain order status. We would recommend that you confirm all delivery details before completing your order. If modification is required after payment has been taken, we kindly ask that you cancel and rebook your order with the correct information. For more information, please request a live agent here in the chat.";
      }
      return "You are now connected with the Delivery Agent. To help you I'll need your order number to check the delivery status. Could you please share it?";
    }

    // 3. Delivery arrives damaged
    if (q.includes("delivery arrives damaged")) {
      if (q.includes("order number")) {
        return " You are now connected with the Delivery Agent. We’re very sorry to hear you’ve encountered an issue with your purchase. If the order you received contained a damaged product, please follow the steps listed here. Alternatively, type ‘talk to an agent’ to be connected to a co-worker, or explore further ways to Contact us.";
      }
      return "You are now connected with the Delivery Agent. I'll need your order number to check the delivery status. Could you please share it?";
    }

    // 4. Delivery services
    if (q.includes("delivery services")) {
      return " You are now connected with the Delivery Agent. The delivery methods we offer depend on the products you want to buy and the stock availability in your selected postal code area for the allocated delivery time. You can find delivery options for your area and more information about IKEA deliveries here.";
    }

    // 5. Delivery time window
    if (q.includes("delivery time window")) {
      return "You are now connected with the Delivery Agent. Delivery lead times vary depending on the size of your order and the location. Please add the items to your cart and enter your postal code for an official delivery date.";
    }

    // 6. Status of my delivery
    if (q.includes("status of my delivery")) {
      return "You are now connected with the Delivery Agent. You can find your order number in your order confirmation email. It's normally a 9 or 10 digit number!";
    }

    // 7. Missed delivery appointment
    if (q.includes("missed delivery appointment")) {
      return "You are now connected with the Delivery Agent. Shipping fees are based on the delivery method, size, weight, and delivery destination. You can add the desired articles to your shopping cart and enter your postal code to calculate your shipping fee.";
    }

    // 8. Signature upon delivery
    if (q.includes("signature upon delivery")) {
      return "You are now connected with the Delivery Agent. Yes, many carriers offer signature delivery. Check with the retailer or shipping provider to request this service. Here's an article from our FAQs that might help you find the order number.";
    }

    // 9. Delivery region
    if (q.includes("delivery available")) {
      return "You are now connected with the Delivery Agent.Delivery availability depends on the retailer and carrier. Check their website or enter your location at checkout for details.";
    }

    // 10. Delivery charges
    if (q.includes("delivery charges")) {
      return "You are now connected with the Delivery Agent. Delivery charges vary by retailer, location, and shipping method. Check the seller’s website or contact customer support for details.";
    }

    // Fallback response
    return "You are now connected with the Delivery Agent. Sorry, I'm not sure I understand what you are looking for. Is there anything else I can help you with?";
  },
};
