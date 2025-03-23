export type AgentType = 'delivery' | 'refund' | 'sales' | 'user';

export interface Agent {
  type: AgentType;
  name: string;
  avatar: string;
  canHandle: (question: string) => boolean;
  getResponse: (question: string) => string;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  agentType: AgentType;
  timestamp: Date;
}