import React from 'react';
import { Message } from '../types';
import { User } from 'lucide-react';
import { deliveryAgent } from '../agents/deliveryAgent';
import { refundAgent } from '../agents/refundAgent';
import { salesAgent } from '../agents/salesAgent';
import { userAgent } from '../agents/userAgent';

const agents = {
  delivery: deliveryAgent,
  refund: refundAgent,
  sales: salesAgent,
  user: userAgent,
};

export const ChatMessage: React.FC<{ message: Message }> = ({ message }) => {
  const agent = agents[message.agentType];
  const Icon = message.sender === 'user' ? User : agent.avatar;

  return (
    <div className={`flex gap-4 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
      <div className="flex-shrink-0">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          message.sender === 'user' ? 'bg-blue-500' : 'bg-gray-200'
        }`}>
          <Icon className={`w-6 h-6 ${message.sender === 'user' ? 'text-white' : 'text-gray-600'}`} />
        </div>
      </div>
      <div className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
        <div className="text-sm text-gray-500">
          {message.sender === 'user' ? 'You' : agent.name}
        </div>
        <div className={`mt-1 px-4 py-2 rounded-lg ${
          message.sender === 'user' 
            ? 'bg-blue-500 text-white rounded-br-none' 
            : 'bg-gray-100 text-gray-800 rounded-bl-none'
        }`}>
          {message.text}
        </div>
        <div className="text-xs text-gray-400 mt-1">
          {message.timestamp.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};