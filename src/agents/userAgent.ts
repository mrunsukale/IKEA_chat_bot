import { Agent } from '../types';
import { deliveryAgent } from './deliveryAgent';
import { refundAgent } from './refundAgent';
import { salesAgent } from './salesAgent';
import { User } from 'lucide-react';

const agents = [deliveryAgent, refundAgent, salesAgent];

export const userAgent: Agent = {
  type: 'user',
  name: 'IKEA Assistant',
  avatar: User,
  canHandle: () => true,
  getResponse: (question: string) => {
    const relevantAgent = agents.find(agent => agent.canHandle(question));
    
    if (relevantAgent) {
      return relevantAgent.getResponse(question);
    }
    
    return "I understand you have a question. Could you please rephrase it or specify if it's about delivery, returns/refunds, or product information?";
  }
};