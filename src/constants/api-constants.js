// export const BASE_URL = "https://api.heymeetai.com/";
// export const CONVERSATION_AGENT_URL = "https://agent.heymeetai.com/";

export const BASE_URL = "http://localhost:9000/";
export const CONVERSATION_AGENT_URL = "http://localhost:3001/";

export const AI_AGENT = {
  CREATE: "ai-agent/create",
  UPDATE: "ai-agent/update",
  GET_ALL: "ai-agent/list",
  GET_BY_ID: "ai-agent/get",
  DELETE: "ai-agent/delete/", //append agentId
  GET_TEMPLATES: "shared-agent/templates",
};

export const MEETING_BOT = {
  CREATE: "meeting-bot/create",
  UPDATE: "meeting-bot/update",
  DELETE: "meeting-bot/delete/", //append botId
  GET_ALL: "meeting-bot/list",
  GET_BY_ID: "meeting-bot/get",
};

export const KNOWLEDGE_BASE = {
  CREATE: "knowledge-base/create",
  UPDATE: "knowledge-base/update",
  DELETE: "knowledge-base/delete",
  GET_ALL: "knowledge-base/list",
  GET_BY_ID: "knowledge-base/get",
};

export const USER = {
  GET_DETAILS: "user",
  SAVE_KEYS: "user/save-keys",
};

export const SUBSCRIPTION = {
  CREATE: "subscription/create",
  STATUS: "subscription/verify-subscription",
  SAVE_SUB_ID: "subscription/save-subscription-details",
  CANCEL: "subscription/cancel",
  UPDATE: "subscription/update",
};

export const CREDIT = {
  UPDATE: "credits/update-credit",
  REFILL: "credits/refillFreeCredit",
  BUY_WORKFLOW: "credits/buy-workflow",
};

export const ASK_AI = {
  CHAT: "ask-ai/",
  IMPROVE_PROMPT: "ask-ai/improve-prompt",
};

export const ORG = {
  GET: "/org",
};

export const INTEGRATIONS = {
  LIST_PROVIDERS: "integrations/providers",
  CREATE_TOKEN: "integrations/connect",
  LIST_CONNECTION: "integrations/connections",
  DELETE_CONNECTION: "integrations/delete-connection",
  SUPERCHAT: "integrations/superchat",
  PUBLIC_LIST_INTEGRATIONS: "integrations/integrations-list",
};

export const WORKFLOWS = {
  LIST: "workflows/list",
  CREATE: "workflows/create",
  UPDATE: "workflows/update", //append id
  GET_BY_ID: "workflows/get", //append id
  DELETE: "workflows/delete", //append id
  RUN: "workflows/run", //append id
};
