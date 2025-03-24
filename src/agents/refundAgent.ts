import { Agent } from '../types';
import { Receipt } from 'lucide-react';

const refundQuestions = [
  "IKEA's return policy",
  "Return policy for online",
  "Credit card return process",
  "Return without original Receipt",
  "Item not eligible for Return",
  "Received refund",
  "Refund never come through",
  "Exchange item",
  "Refund delivery charges",
  "As-Is section return policy"
].map(q => q.toLowerCase());

export const refundAgent: Agent = {
  type: 'refund',
  name: 'Returns & Refunds',
  avatar: Receipt,
  canHandle: (question: string) => {
    const q = question.toLowerCase();
    return refundQuestions.some(keyword => q.includes(keyword));
  },
  getResponse: (question: string) => {
    const q = question.toLowerCase();

    if (q.includes("ikea's return policy")) {
      return "You are now connected with the Refund Agent. IKEA offers a flexible return policy where you can return most new, unopened items within 365 days and opened items within 180 days with proof of purchase. Certain restrictions may apply. For more details, please refer to IKEA’s official return policy page.";
    }

    if (q.includes("return policy for online")) {
      return "You are now connected with the Refund Agent. For online purchases, IKEA allows returns by mail or in-store. Simply bring your order confirmation or receipt and the item in its original packaging if possible. Additional shipping fees may apply for mailed returns. Check the IKEA website for full details.";
    }

    if (q.includes("credit card return process")) {
      return "You are now connected with the Refund Agent. If you paid with a credit card, refunds are typically processed to the same card. Please allow up to 14 days for the refund to appear on your statement. For more assistance, contact IKEA’s customer service.";
    }

    if (q.includes("return without original receipt")) {
      return "You are now connected with the Refund Agent. If you don’t have the original receipt, IKEA may offer an exchange or store credit. It’s recommended to bring a valid photo ID and any proof of purchase, such as an order confirmation or bank statement. Contact IKEA support for more guidance.";
    }

    if (q.includes("item not eligible for return")) {
      return "You are now connected with the Refund Agent. Certain items are not eligible for return, such as customized products, cut fabric, and items from the As-Is section. Please review IKEA’s return policy to confirm if your item qualifies for a return.";
    }

    if (q.includes("received refund")) {
      return "You are now connected with the Refund Agent. If you’ve received a refund, it will be processed to your original payment method. For credit card refunds, it may take up to 14 days. Contact customer support if you have concerns about your refund.";
    }

    if (q.includes("refund never come through")) {
      return "You are now connected with the Refund Agent. If your refund hasn’t appeared within the expected timeframe, please check with your bank or payment provider. You can also contact IKEA customer support with your order details for further assistance.";
    }

    if (q.includes("exchange item")) {
      return "You are now connected with the Refund Agent. To exchange an item, bring it to your nearest IKEA store along with your receipt or proof of purchase. Exchanges are generally accepted for items within the eligible return period. Contact your local IKEA store for more information.";
    }

    if (q.includes("refund delivery charges")) {
      return "You are now connected with the Refund Agent. Delivery charges are generally non-refundable unless the item was damaged, defective, or incorrect. For eligible cases, IKEA will refund the delivery fee along with the item cost. Please check IKEA’s return policy for specific conditions.";
    }

    if (q.includes("as-is section return policy")) {
      return "You are now connected with the Refund Agent. Items purchased from the As-Is section are typically sold ‘as-is’ and are non-refundable. Returns or exchanges are generally not accepted. Please review IKEA’s policy or ask in-store for more details.";
    }

    return "You are now connected with the Refund Agent. I'm here to help with returns and refunds. Could you please provide more specific details about your inquiry?";
  }
};
