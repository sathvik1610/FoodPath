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
    systemInstruction: "Given a food item, analyze its impact on the health of the brain, heart, liver, lungs, stomach, kidneys, and intestines, rating each organ from 0 to 4 (0 = very severe damage, 1 = healthy, 2 = very healthy, 3 = unhealthy, 4 = very unhealthy). Also, provide the post-consumption values for oxygen levels, blood glucose, calorie levels, neurotransmitter levels, amino acids, vitamins, and other nutrients as follows:\ninput:status burger\noutput:\n{\n  \"health_status\": {\n    \"brain\": {\n      \"rating\": 2\n    },\n    \"heart\": {\n      \"rating\": 2\n    },\n    \"liver\": {\n      \"rating\": 2\n    },\n    \"lungs\": {\n      \"rating\": 1\n    },\n    \"stomach\": {\n      \"rating\": 2\n    },\n    \"kidneys\": {\n      \"rating\": 2\n    },\n    \"intestines\": {\n      \"rating\": 2\n    }\n  },\n  \"post_consumption_values\": {\n    \"oxygen_levels\": \"Minimal change\",\n    \"blood_glucose_levels\": \"Temporary increase followed by a decrease\",\n    \"calorie_levels\": \"Minimal change\",\n    \"Neurotransmitter_Levels\": \"no significant change\",\n    \"Amino_Acids\": \"moderate\",\n    \"Vitamin_C\": \"low\",\n    \"Carotenoids\": \"low\",\n    \"Potassium\": \"moderate\",\n    \"Phosphorus\": \"moderate\",\n    \"Fats\": \"moderate\",\n    \"Choline\": \"low\",\n    \"Polyphenols\": \"low\",\n    \"Zinc\": \"moderate\",\n    \"Prebiotics\": \"not present\",\n    \"Magnesium\": \"moderate\",\n    \"Plant_Sterols\": \"low\"\n  }\n}\n",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  async function run(Foods_eaten) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "status pizza"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\"health_status\": {\"brain\": {\"rating\": 2}, \"heart\": {\"rating\": 2}, \"liver\": {\"rating\": 2}, \"lungs\": {\"rating\": 1}, \"stomach\": {\"rating\": 2}, \"kidneys\": {\"rating\": 2}, \"intestines\": {\"rating\": 2}}, \"post_consumption_values\": {\"oxygen_levels\": \"Minimal change\", \"blood_glucose_levels\": \"Temporary increase followed by a decrease\", \"calorie_levels\": \"Significant increase\", \"Neurotransmitter_Levels\": \"no significant change\", \"Amino_Acids\": \"moderate\", \"Vitamin_C\": \"low\", \"Carotenoids\": \"low\", \"Potassium\": \"moderate\", \"Phosphorus\": \"moderate\", \"Fats\": \"high\", \"Choline\": \"low\", \"Polyphenols\": \"low\", \"Zinc\": \"moderate\", \"Prebiotics\": \"low\", \"Magnesium\": \"moderate\", \"Plant_Sterols\": \"low\"}}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status pork"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"health_status\": {\n    \"brain\": {\"rating\": 2},\n    \"heart\": {\"rating\": 2},\n    \"liver\": {\"rating\": 3},\n    \"lungs\": {\"rating\": 1},\n    \"stomach\": {\"rating\": 2},\n    \"kidneys\": {\"rating\": 2},\n    \"intestines\": {\"rating\": 2}\n  },\n  \"post_consumption_values\": {\n    \"oxygen_levels\": \"Minimal change\",\n    \"blood_glucose_levels\": \"Minimal change\",\n    \"calorie_levels\": \"Significant increase\",\n    \"Neurotransmitter_Levels\": \"no significant change\",\n    \"Amino_Acids\": \"high\",\n    \"Vitamin_C\": \"low\",\n    \"Carotenoids\": \"low\",\n    \"Potassium\": \"moderate\",\n    \"Phosphorus\": \"high\",\n    \"Fats\": \"high\", \n    \"Choline\": \"moderate\",\n    \"Polyphenols\": \"low\",\n    \"Zinc\": \"high\",\n    \"Prebiotics\": \"low\",\n    \"Magnesium\": \"moderate\",\n    \"Plant_Sterols\": \"low\"\n  }\n}\n```\n"},
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
            {text: "```json\n{\n  \"health_status\": {\n    \"brain\": {\"rating\": 2},\n    \"heart\": {\"rating\": 2},\n    \"liver\": {\"rating\": 2},\n    \"lungs\": {\"rating\": 1},\n    \"stomach\": {\"rating\": 2},\n    \"kidneys\": {\"rating\": 2},\n    \"intestines\": {\"rating\": 2}\n  },\n  \"post_consumption_values\": {\n    \"oxygen_levels\": \"Minimal change\",\n    \"blood_glucose_levels\": \"Moderate increase\",\n    \"calorie_levels\": \"Moderate increase\",\n    \"Neurotransmitter_Levels\": \"no significant change\",\n    \"Amino_Acids\": \"moderate\",\n    \"Vitamin_C\": \"low to moderate (depending on additions)\",\n    \"Carotenoids\": \"low to moderate (depending on additions)\",\n    \"Potassium\": \"moderate\",\n    \"Phosphorus\": \"moderate\",\n    \"Fats\": \"low to moderate (depending on cooking method and additions)\",\n    \"Choline\": \"low to moderate\",\n    \"Polyphenols\": \"low to moderate (depending on additions)\",\n    \"Zinc\": \"low to moderate\",\n    \"Prebiotics\": \"low\",\n    \"Magnesium\": \"moderate\",\n    \"Plant_Sterols\": \"low\"\n  }\n}\n```\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status idly vada"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"health_status\": {\n    \"brain\": {\"rating\": 2},\n    \"heart\": {\"rating\": 2},\n    \"liver\": {\"rating\": 2},\n    \"lungs\": {\"rating\": 1},\n    \"stomach\": {\"rating\": 2},\n    \"kidneys\": {\"rating\": 2},\n    \"intestines\": {\"rating\": 2}\n  },\n  \"post_consumption_values\": {\n    \"oxygen_levels\": \"Minimal change\",\n    \"blood_glucose_levels\": \"Moderate increase\",\n    \"calorie_levels\": \"Moderate increase\",\n    \"Neurotransmitter_Levels\": \"no significant change\",\n    \"Amino_Acids\": \"moderate\",\n    \"Vitamin_C\": \"low\",\n    \"Carotenoids\": \"low\",\n    \"Potassium\": \"moderate\",\n    \"Phosphorus\": \"moderate\",\n    \"Fats\": \"moderate to high (depending on vada preparation)\",\n    \"Choline\": \"low to moderate\",\n    \"Polyphenols\": \"low\",\n    \"Zinc\": \"low to moderate\",\n    \"Prebiotics\": \"low\",\n    \"Magnesium\": \"moderate\",\n    \"Plant_Sterols\": \"low\"\n  }\n}\n```\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status 1000 pizzas"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"health_status\": {\n    \"brain\": {\"rating\": 0},\n    \"heart\": {\"rating\": 0},\n    \"liver\": {\"rating\": 0},\n    \"lungs\": {\"rating\": 0},\n    \"stomach\": {\"rating\": 0},\n    \"kidneys\": {\"rating\": 0},\n    \"intestines\": {\"rating\": 0}\n  },\n  \"post_consumption_values\": {\n    \"oxygen_levels\": \"Potentially severely impacted\",\n    \"blood_glucose_levels\": \"Extremely high, potentially leading to diabetic coma\",\n    \"calorie_levels\": \"Extremely high, potentially leading to severe health complications\",\n    \"Neurotransmitter_Levels\": \"Severely disrupted\",\n    \"Amino_Acids\": \"high but imbalanced\",\n    \"Vitamin_C\": \"extremely low\",\n    \"Carotenoids\": \"extremely low\",\n    \"Potassium\": \"low\",\n    \"Phosphorus\": \"high, but imbalanced\",\n    \"Fats\": \"extremely high, leading to potential heart failure and other complications\",\n    \"Choline\": \"low\",\n    \"Polyphenols\": \"extremely low\",\n    \"Zinc\": \"low\",\n    \"Prebiotics\": \"extremely low\",\n    \"Magnesium\": \"low\",\n    \"Plant_Sterols\": \"extremely low\"\n  }\n}\n```\nThis is a hypothetical and extreme scenario.  Consuming 1000 pizzas would be incredibly dangerous and likely fatal.  The values reflect the potential catastrophic consequences.  This response is for illustrative purposes and should not be taken as medical advice.\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status 1000 burgers"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"health_status\": {\n    \"brain\": {\n      \"rating\": 0\n    },\n    \"heart\": {\n      \"rating\": 0\n    },\n    \"liver\": {\n      \"rating\": 0\n    },\n    \"lungs\": {\n      \"rating\": 0\n    },\n    \"stomach\": {\n      \"rating\": 0\n    },\n    \"kidneys\": {\n      \"rating\": 0\n    },\n    \"intestines\": {\n      \"rating\": 0\n    }\n  },\n  \"post_consumption_values\": {\n    \"oxygen_levels\": \"Severely impacted\",\n    \"blood_glucose_levels\": \"Critically high, potentially fatal\",\n    \"calorie_levels\": \"dangerously high, likely resulting in severe health crisis\",\n    \"Neurotransmitter_Levels\": \"severely imbalanced, potentially causing seizures or coma\",\n    \"Amino_Acids\": \"high but severely imbalanced\",\n    \"Vitamin_C\": \"extremely low\",\n    \"Carotenoids\": \"extremely low\",\n    \"Potassium\": \"dangerously low\",\n    \"Phosphorus\": \"high, but imbalanced\",\n    \"Fats\": \"extremely high, likely leading to multiple organ failure\",\n    \"Choline\": \"low\",\n    \"Polyphenols\": \"extremely low\",\n    \"Zinc\": \"low\",\n    \"Prebiotics\": \"extremely low\",\n    \"Magnesium\": \"low\",\n    \"Plant_Sterols\": \"extremely low\"\n  }\n}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status pizza burger idly vada bonda dosa "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"health_status\": {\n    \"brain\": {\n      \"rating\": 2\n    },\n    \"heart\": {\n      \"rating\": 2\n    },\n    \"liver\": {\n      \"rating\": 2\n    },\n    \"lungs\": {\n      \"rating\": 1\n    },\n    \"stomach\": {\n      \"rating\": 2\n    },\n    \"kidneys\": {\n      \"rating\": 2\n    },\n    \"intestines\": {\n      \"rating\": 2\n    }\n  },\n  \"post_consumption_values\": {\n    \"oxygen_levels\": \"Minimal change\",\n    \"blood_glucose_levels\": \"Significant increase\",\n    \"calorie_levels\": \"Significant increase\",\n    \"Neurotransmitter_Levels\": \"No significant change\",\n    \"Amino_Acids\": \"Moderate\",\n    \"Vitamin_C\": \"Low\",\n    \"Carotenoids\": \"Low\",\n    \"Potassium\": \"Moderate\",\n    \"Phosphorus\": \"Moderate\",\n    \"Fats\": \"High\",\n    \"Choline\": \"Low to moderate\",\n    \"Polyphenols\": \"Low\",\n    \"Zinc\": \"Moderate\",\n    \"Prebiotics\": \"Low\",\n    \"Magnesium\": \"Moderate\",\n    \"Plant_Sterols\": \"Low\"\n  }\n}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status 100 bonda"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"health_status\": {\n    \"brain\": {\n      \"rating\": 0\n    },\n    \"heart\": {\n      \"rating\": 0\n    },\n    \"liver\": {\n      \"rating\": 0\n    },\n    \"lungs\": {\n      \"rating\": 0\n    },\n    \"stomach\": {\n      \"rating\": 0\n    },\n    \"kidneys\": {\n      \"rating\": 0\n    },\n    \"intestines\": {\n      \"rating\": 0\n    }\n  },\n  \"post_consumption_values\": {\n    \"oxygen_levels\": \"Severely impacted\",\n    \"blood_glucose_levels\": \"Critically high, potentially fatal\",\n    \"calorie_levels\": \"dangerously high, likely resulting in severe health crisis\",\n    \"Neurotransmitter_Levels\": \"severely imbalanced, potentially causing seizures or coma\",\n    \"Amino_Acids\": \"high but severely imbalanced\",\n    \"Vitamin_C\": \"extremely low\",\n    \"Carotenoids\": \"extremely low\",\n    \"Potassium\": \"dangerously low\",\n    \"Phosphorus\": \"high, but imbalanced\",\n    \"Fats\": \"extremely high, likely leading to multiple organ failure\",\n    \"Choline\": \"low\",\n    \"Polyphenols\": \"extremely low\",\n    \"Zinc\": \"low\",\n    \"Prebiotics\": \"extremely low\",\n    \"Magnesium\": \"low\",\n    \"Plant_Sterols\": \"extremely low\"\n  }\n}\n\n```"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage(`status ${Foods_eaten}`);
    console.log(result.response.text());
    return result.response.text();
  }
  
  module.exports={run};