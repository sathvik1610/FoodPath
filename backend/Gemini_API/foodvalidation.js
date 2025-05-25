require('dotenv').config({ path: '../frontend/.env' });
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.API_KEY1;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-8b",
    systemInstruction: "Analyze whether the given item text can be classified as 'consumable.' An item is considered consumable if it is designed to be ingested, inhaled, absorbed, or otherwise used by humans in a way that affects the body. Provide a binary classification in JSON format:\n\n0 for 'Not Consumable' (e.g., non-edible objects, tools, or items not intended for consumption).\n1 for 'Consumable' (e.g., food, drinks, medicines, or products meant for consumption like cigarettes or chewing gum).\n\nInput: status cigarette\nOutput:\n{  \n  \"consumable\": 1  \n}",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  async function validatefood(Foods_eaten) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "status tomato"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"consumable\": 1}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status burger"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"consumable\": 1}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status stone"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"consumable\": 0}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status poision"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"consumable\": 1}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status poison"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"consumable\": 1}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status hair"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"consumable\": 0}\n\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status lanja"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"consumable\": 0}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status akakaka"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"consumable\": 0}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status bitch"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"consumable\": 0}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status sperm"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"consumable\": 0}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status semen"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"consumable\": 0}\n\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status silicom"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"consumable\": 0}\n\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status dosa"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"consumable\": 1}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status soap shampoo"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"consumable\": 1}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status soap"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"consumable\": 1}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status stone hair"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"consumable\": 0}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status burger stone"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"consumable\": 0}\n\n\n```"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage(`status ${Foods_eaten}`);
    console.log(result.response.text());
    return result.response.text();
  }
  
  module.exports={validatefood};