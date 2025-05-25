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
    systemInstruction: "Analyze the impact of the provided food item on the specified organ and return its status as a rating from 0 to 4, along with 8 specific, actionable guides for improving the condition of the organ. Ratings are defined as:\n\n0 = Very Severe Damage\n1 = Healthy\n2 = Very Healthy\n3 = Unhealthy\n4 = Very Unhealthy\n\ninput: status brain bonda\noutput:\n{\n  \"rating\": 1,\n  \"guide1\": \"Eat more leafy greens to boost overall brain function.\",\n  \"guide2\": \"Incorporate foods rich in omega-3 fatty acids like fish.\",\n  \"guide3\": \"Reduce intake of processed and deep-fried foods.\",\n  \"guide4\": \"Stay hydrated to enhance cognitive performance.\",\n  \"guide5\": \"Exercise regularly to improve blood flow to the brain.\",\n  \"guide6\": \"Ensure adequate sleep to support brain health.\",\n  \"guide7\": \"Practice mindfulness or meditation for mental clarity.\",\n  \"guide8\": \"Limit caffeine and sugar intake to avoid spikes in brain activity.\"\n}\n",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  async function organGuide(Organ,Foods_eaten) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "status heart pizza\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"rating\": 3,\n  \"guide1\": \"Limit saturated and trans fats found in many pizzas to lower cholesterol.\",\n  \"guide2\": \"Choose whole-wheat crust options for added fiber and improved heart health.\",\n  \"guide3\": \"Load up on vegetables as toppings for essential vitamins and minerals.\",\n  \"guide4\": \"Control portion sizes to manage calorie intake and maintain a healthy weight.\",\n  \"guide5\": \"Engage in regular aerobic exercise to strengthen the heart muscle.\",\n  \"guide6\": \"Reduce sodium intake by choosing low-sodium options or making pizza at home.\",\n  \"guide7\": \"Manage stress through relaxation techniques to support cardiovascular health.\",\n  \"guide8\": \"Monitor blood pressure and cholesterol levels regularly for early detection of potential issues.\"\n}\n```\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status liver burger"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"rating\": 3,\n  \"guide1\": \"Limit saturated fat intake from burgers by choosing leaner meat options or plant-based alternatives.\",\n  \"guide2\": \"Reduce portion sizes to avoid overloading the liver with processing excess fat.\",\n  \"guide3\": \"Increase fiber intake through fruits, vegetables, and whole grains to aid in detoxification.\",\n  \"guide4\": \"Maintain a healthy weight to reduce strain on the liver and improve overall function.\",\n  \"guide5\": \"Avoid alcohol or consume it in moderation, as excessive alcohol consumption can severely damage the liver.\",\n  \"guide6\": \"Stay hydrated by drinking plenty of water to support liver function and waste removal.\",\n  \"guide7\": \"Be cautious with over-the-counter medications and supplements, as some can stress the liver.\",\n  \"guide8\": \"Consult a doctor for regular check-ups and liver function tests, especially if you have risk factors for liver disease.\"\n}\n```\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status lungs idly"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"rating\": 1,\n  \"guide1\": \"Maintain a healthy weight to improve lung capacity and function.\",\n  \"guide2\": \"Engage in regular aerobic exercise, like brisk walking or cycling, to strengthen lung muscles.\",\n  \"guide3\": \"Avoid exposure to pollutants such as smoke and dust to minimize lung irritation.\",\n  \"guide4\": \"Practice deep breathing exercises to expand lung capacity and improve oxygen intake.\",\n  \"guide5\": \"Stay hydrated by drinking plenty of water to maintain optimal lung function.\",\n  \"guide6\": \"Get vaccinated against respiratory infections like the flu and pneumonia to protect lung health.\",\n  \"guide7\": \"Manage stress through relaxation techniques, as stress can exacerbate respiratory issues.\",\n  \"guide8\": \"Consult a doctor for regular check-ups and lung function tests, especially if you have any respiratory symptoms.\"\n}\n```\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status stomach chicken"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"rating\": 1,\n  \"guide1\": \"Choose lean chicken breast over fattier cuts to reduce the risk of indigestion.\",\n  \"guide2\": \"Bake, grill, or poach chicken instead of frying to minimize added fats and promote healthy digestion.\",\n  \"guide3\": \"Eat chicken in moderate portions to avoid overloading the stomach and causing discomfort.\",\n  \"guide4\": \"Chew chicken thoroughly to aid in proper digestion and nutrient absorption.\",\n  \"guide5\": \"Pair chicken with fiber-rich foods like vegetables and whole grains to promote healthy bowel movements.\",\n  \"guide6\": \"Stay hydrated by drinking plenty of water to aid in digestion and prevent constipation.\",\n  \"guide7\": \"Avoid eating chicken too close to bedtime to allow for proper digestion and prevent acid reflux.\",\n  \"guide8\": \"If you experience frequent stomach upset after eating chicken, consult a doctor to rule out any underlying conditions like food allergies or intolerances.\"\n}\n```\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status mutton intestines"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"rating\": 3,\n  \"guide1\": \"Consume mutton intestines in moderation due to their high fat and cholesterol content.\",\n  \"guide2\": \"Choose leaner cuts of mutton and trim visible fat before cooking to reduce saturated fat intake.\",\n  \"guide3\": \"Prepare mutton intestines using healthy cooking methods like grilling, baking, or stewing instead of frying.\",\n  \"guide4\": \"Increase your fiber intake by consuming plenty of fruits, vegetables, and whole grains to promote healthy digestion and bowel movements.\",\n  \"guide5\": \"Stay hydrated by drinking plenty of water to support digestive health and prevent constipation.\",\n  \"guide6\": \"Probiotics, found in yogurt or supplements, can help maintain a healthy gut microbiome and improve digestion.\",\n  \"guide7\": \"Limit consumption of processed foods, sugary drinks, and excessive alcohol, which can negatively impact gut health.\",\n  \"guide8\": \"If you experience digestive discomfort after consuming mutton intestines, consult a healthcare professional to rule out any underlying conditions.\"\n}\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status choclate kidneys"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"rating\": 4,\n  \"guide1\": \"Limit chocolate consumption due to its high sugar content, which can contribute to weight gain and indirectly affect kidney health.\",\n  \"guide2\": \"Reduce intake of dark chocolate, even though it offers some health benefits, as it contains high levels of potassium and oxalates, which can be harmful to individuals with kidney problems.\",\n  \"guide3\": \"Maintain a healthy weight through regular exercise and a balanced diet to reduce the risk of kidney disease.\",\n  \"guide4\": \"Control blood pressure and blood sugar levels as they are crucial factors in maintaining kidney health.\",\n  \"guide5\": \"Stay hydrated by drinking plenty of water, which helps the kidneys flush out waste products.\",\n  \"guide6\": \"Avoid excessive salt intake, as high sodium can increase blood pressure and strain the kidneys.\",\n  \"guide7\": \"Be mindful of over-the-counter pain relievers like ibuprofen and naproxen, as chronic use can damage the kidneys.\",\n  \"guide8\": \"Consult a doctor for regular kidney function tests, especially if you have risk factors for kidney disease such as diabetes, high blood pressure, or a family history of kidney problems.\"\n}\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status brain bonda"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"rating\": 3,\n  \"guide1\": \"Reduce consumption of bondas due to their high content of refined carbohydrates, unhealthy fats, and sodium, which can negatively impact brain health.\",\n  \"guide2\": \"Choose healthier snack alternatives like fruits, vegetables, nuts, or yogurt to provide essential nutrients for brain function.\",\n  \"guide3\": \"Incorporate foods rich in omega-3 fatty acids, such as fish, flaxseeds, and walnuts, to support cognitive function and brain health.\",\n  \"guide4\": \"Maintain a healthy weight through regular exercise and a balanced diet, as obesity can increase the risk of cognitive decline.\",\n  \"guide5\": \"Stay hydrated by drinking plenty of water to ensure optimal brain function and prevent dehydration.\",\n  \"guide6\": \"Engage in regular physical activity to improve blood flow to the brain and boost cognitive performance.\",\n  \"guide7\": \"Manage stress through relaxation techniques like meditation or yoga, as chronic stress can negatively impact brain health.\",\n  \"guide8\": \"Ensure adequate sleep to support brain regeneration and cognitive function.\"\n}\n```\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status heart idly"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"rating\": 1,\n  \"guide1\": \"Choose brown rice idlis over white rice idlis for increased fiber intake, promoting heart health.\",\n  \"guide2\": \"Limit the use of coconut chutney, as it can be high in saturated fat, and opt for healthier alternatives like sambar or tomato chutney.\",\n  \"guide3\": \"Control portion sizes to manage overall calorie intake and maintain a healthy weight.\",\n  \"guide4\": \"Incorporate regular physical activity into your routine to strengthen the heart muscle and improve cardiovascular health.\",\n  \"guide5\": \"Reduce sodium intake by limiting the addition of salt and choosing low-sodium accompaniments.\",\n  \"guide6\": \"Manage stress through relaxation techniques like meditation or yoga, as stress can contribute to heart problems.\",\n  \"guide7\": \"Maintain a balanced diet rich in fruits, vegetables, and whole grains for optimal heart health.\",\n  \"guide8\": \"Monitor blood pressure and cholesterol levels regularly to ensure they are within a healthy range.\"\n}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status stomach bonda idly vada"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"rating\": 3,\n  \"guide1\": \"Limit consumption of fried foods like bonda and vada as they are high in unhealthy fats and can lead to indigestion and stomach upset.\",\n  \"guide2\": \"Choose healthier alternatives like idli, dosa, or uttapam, which are steamed or cooked with minimal oil.\",\n  \"guide3\": \"Consume foods in moderation to avoid overloading the stomach and ensure proper digestion.\",\n  \"guide4\": \"Eat meals at regular intervals to maintain a healthy digestive rhythm and avoid overeating.\",\n  \"guide5\": \"Chew food thoroughly to aid digestion and prevent stomach discomfort.\",\n  \"guide6\": \"Stay hydrated by drinking plenty of water to support digestive processes and prevent constipation.\",\n  \"guide7\": \"Include fiber-rich foods in your diet, such as fruits, vegetables, and whole grains, to promote healthy bowel movements.\",\n  \"guide8\": \"Manage stress through relaxation techniques, as stress can negatively impact digestion.\"\n}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status heart 100 burgers"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"rating\": 0,\n  \"guide1\": \"Significantly reduce burger intake due to extremely high levels of saturated and trans fats, drastically increasing the risk of heart disease.\",\n  \"guide2\": \"Replace burgers with heart-healthy options like fish, lean poultry, beans, or lentils.\",\n  \"guide3\": \"Increase consumption of fruits, vegetables, and whole grains to provide essential nutrients and fiber for heart health.\",\n  \"guide4\": \"Exercise regularly to improve cardiovascular function, lower cholesterol, and manage weight.\",\n  \"guide5\": \"Strictly limit saturated and trans fats from all sources, including red meat, processed foods, and fried foods.\",\n  \"guide6\": \"Reduce sodium intake by avoiding processed foods and excessive salt, which can contribute to high blood pressure.\",\n  \"guide7\": \"Maintain a healthy weight to minimize strain on the heart and improve overall health.\",\n  \"guide8\": \"Consult a healthcare professional immediately to assess heart health and discuss necessary lifestyle changes.\"\n}\n\n```"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "status lungs 100 cigrattes"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"rating\": 0,\n  \"guide1\": \"Immediately stop smoking to prevent further damage to lung tissue and reduce the risk of lung cancer and other respiratory diseases.\",\n  \"guide2\": \"Consult a healthcare professional for support and resources to aid in quitting smoking.\",\n  \"guide3\": \"Avoid exposure to secondhand smoke, which also poses significant health risks.\",\n  \"guide4\": \"Improve air quality in your home by using air purifiers and ensuring proper ventilation.\",\n  \"guide5\": \"Engage in regular physical activity to strengthen lung capacity and improve overall respiratory function.\",\n  \"guide6\": \"Practice deep breathing exercises to enhance lung function and oxygen intake.\",\n  \"guide7\": \"Maintain a healthy diet rich in antioxidants and nutrients to support lung health.\",\n  \"guide8\": \"Get vaccinated against respiratory infections like influenza and pneumonia to protect lung health.\"\n}\n\n```"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage(`status ${Organ}  ${Foods_eaten}`);
    console.log(result.response.text());
    return result.response.text();
  }
  
  module.exports={organGuide};