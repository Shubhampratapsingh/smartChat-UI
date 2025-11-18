import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import {
  BASE_URL,
  AI_AGENT,
  MEETING_BOT,
  USER,
  SUBSCRIPTION,
  CREDIT,
  ASK_AI,
  ORG,
  INTEGRATIONS,
  WORKFLOWS,
} from "../constants/api-constants";

export function useAPIService() {
  const { getToken } = useAuth();

  async function getAPI() {
    const token = await getToken();
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  function handleError(error) {
    return {
      success: false,
      error: axios.isAxiosError(error)
        ? error.response?.data?.error || error.message
        : "Unknown error occurred",
    };
  }

  // AI Agent APIs
  async function createAIAgent(data) {
    try {
      const api = await getAPI();
      const res = await api.post(AI_AGENT.CREATE, data);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function updateAIAgent(data) {
    try {
      const api = await getAPI();
      const res = await api.put(`${AI_AGENT.UPDATE}/${data.id}`, data);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function deleteAIAgent(id) {
    try {
      const api = await getAPI();
      const res = await api.delete(`${AI_AGENT.DELETE}${id}`);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function getAllAIAgents() {
    try {
      const api = await getAPI();
      const res = await api.get(AI_AGENT.GET_ALL);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function getAIAgentById(id) {
    try {
      const api = await getAPI();
      const res = await api.get(`${AI_AGENT.GET_BY_ID}/${id}`);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function getAgentsTemplate() {
    try {
      const api = await getAPI();
      const res = await api.get(AI_AGENT.GET_TEMPLATES);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  // Meeting Bot APIs
  async function createMeetingBot(data) {
    try {
      const api = await getAPI();
      const res = await api.post(MEETING_BOT.CREATE, data);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function updateMeetingBot(data) {
    try {
      const api = await getAPI();
      const res = await api.put(`${MEETING_BOT.UPDATE}/${data.id}`, data);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function deleteMeetingBot(id) {
    try {
      const api = await getAPI();
      const res = await api.delete(`${MEETING_BOT.DELETE}${id}`);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function getAllMeetingBots() {
    try {
      const api = await getAPI();
      const res = await api.get(MEETING_BOT.GET_ALL);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function getMeetingBotById(id) {
    try {
      const api = await getAPI();
      const res = await api.get(`${MEETING_BOT.GET_BY_ID}/${id}`);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function getBotDetails(botId) {
    try {
      const api = await getAPI();
      const res = await api.get(`/meeting-bot/${botId}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  // Users

  async function getUserDetails() {
    try {
      const api = await getAPI();
      const res = await api.get(USER.GET_DETAILS);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async function saveApiKeys(data) {
    try {
      const api = await getAPI();
      const res = await api.post(USER.SAVE_KEYS, data);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  // Subscription

  async function createSubscription(data) {
    try {
      const api = await getAPI();
      const res = await api.post(SUBSCRIPTION.CREATE, data);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function checkPaymentStatus(data) {
    try {
      const api = await getAPI();
      const res = await api.post(SUBSCRIPTION.STATUS, data);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function saveSubscriptionDetails(data) {
    try {
      const api = await getAPI();
      const res = await api.post(SUBSCRIPTION.SAVE_SUB_ID, data);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function cancelSubscription() {
    try {
      const api = await getAPI();
      const res = await api.get(`${SUBSCRIPTION.CANCEL}`);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function updateSubscription() {
    try {
      const api = await getAPI();
      const res = await api.get(SUBSCRIPTION.UPDATE);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  // CREDIT

  async function updateCreditAfterPayment(orderId) {
    try {
      const api = await getAPI();
      const res = await api.get(`${CREDIT.UPDATE}?paymentId=${orderId}`);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function refillFreeCredit() {
    try {
      const api = await getAPI();
      const res = await api.get(CREDIT.REFILL);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function buyWorkflowCredits(creditAmount) {
    try {
      const api = await getAPI();
      const res = await api.post(CREDIT.BUY_WORKFLOW, { creditAmount });
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  // ASK AI
  async function askAiChat(query, botId, agentId) {
    try {
      const api = await getAPI();
      const res = await api.post(ASK_AI.CHAT, {
        userQuery: query,
        botId,
        agentId,
      });
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function improvePrompt(prompt) {
    try {
      const api = await getAPI();
      const res = await api.post(ASK_AI.IMPROVE_PROMPT, { prompt });
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  // ORG

  async function getOrgById(orgId) {
    try {
      if (!orgId) {
        throw new Error("orgId is required");
      }
      const api = await getAPI();
      const res = await api.get(`${ORG.GET}/${orgId}`);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  //INTEGRATIONS

  async function getConnectionsList() {
    try {
      const api = await getAPI();
      const res = await api.get(INTEGRATIONS.LIST_CONNECTION);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async function connectWithProvider(id) {
    try {
      const api = await getAPI();
      const res = await api.post(INTEGRATIONS.CREATE_TOKEN, { providerId: id });
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function getProvidersList() {
    try {
      const api = await getAPI();
      const res = await api.get(INTEGRATIONS.LIST_PROVIDERS);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async function getProvidersListForHomepage() {
    try {
      const api = await getAPI();
      const res = await api.get(INTEGRATIONS.PUBLIC_LIST_INTEGRATIONS);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async function deleteUserConnection(id) {
    try {
      const api = await getAPI();
      const res = await api.delete(`${INTEGRATIONS.DELETE_CONNECTION}/${id}`);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  // WORKFLOWS
  async function createWorkflow(data) {
    try {
      const api = await getAPI();
      const res = await api.post(WORKFLOWS.CREATE, data);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function updateWorkflow(id, payload) {
    try {
      const api = await getAPI();
      const res = await api.put(`${WORKFLOWS.UPDATE}/${id}`, payload);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function getAllWorkflows() {
    try {
      const api = await getAPI();
      const res = await api.get(WORKFLOWS.LIST);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function getWorkflowById(id) {
    try {
      const api = await getAPI();
      const res = await api.get(`${WORKFLOWS.GET_BY_ID}/${id}`);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function deleteWorkflow(id) {
    try {
      const api = await getAPI();
      const res = await api.delete(`${WORKFLOWS.DELETE}/${id}`);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function runWorkflow(id, userId) {
    try {
      const api = await getAPI();
      const res = await api.post(`${WORKFLOWS.RUN}?id=${id}&userId=${userId}`);
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  async function deleteWorkflowStep(workflowId, stepId) {
    try {
      const api = await getAPI();
      const res = await api.delete(
        `${WORKFLOWS.DELETE}/${workflowId}/step/${stepId}`
      );
      return res.data;
    } catch (error) {
      return handleError(error);
    }
  }

  return {
    // AI Agents
    createAIAgent,
    updateAIAgent,
    deleteAIAgent,
    getAllAIAgents,
    getAIAgentById,
    getAgentsTemplate,

    // Meeting Bots
    createMeetingBot,
    updateMeetingBot,
    deleteMeetingBot,
    getAllMeetingBots,
    getMeetingBotById,

    // Bot Details
    getBotDetails,

    // User Details
    getUserDetails,
    saveApiKeys,

    // Subscription
    createSubscription,
    saveSubscriptionDetails,
    checkPaymentStatus,
    cancelSubscription,
    updateSubscription,

    //Credit

    updateCreditAfterPayment,
    refillFreeCredit,
    buyWorkflowCredits,

    // Ask AI
    askAiChat,
    improvePrompt,

    //ORG
    getOrgById,

    //INTEGRATIONS
    getConnectionsList,
    getProvidersList,
    connectWithProvider,
    deleteUserConnection,
    getProvidersListForHomepage,

    // WORKFLOWS
    createWorkflow,
    getAllWorkflows,
    getWorkflowById,
    deleteWorkflow,
    runWorkflow,
    updateWorkflow,
    deleteWorkflowStep,
  };
}
