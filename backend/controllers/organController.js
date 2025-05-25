const express = require('express');
const app = express();
app.use(express.json());

const ConsumedFoods = require('../models/consumedFoodSchema'); // Ensure this path is correct
//const { run } = require('../Gemini_API/modelStatusAPI'); // If you're using the AI function
const { run } = require('../Gemini_API/APImodelstatus');
// const { runseparate } = require('../Gemini_API/separate_model_factors');
const { validatefood } = require('../Gemini_API/foodvalidation');
const {organGuide}= require('../Gemini_API/organGuidesAPI');
// Route handler for adding food items


const validfood = async (req, res) => {
    const {  foodItems } = req.body;

    console.log('Received body:', req.body);

    if (!foodItems) {
        return res.status(400).json({ error: 'Food items string is required.' });
    }

       try {
            let aiResponse = await validatefood(foodItems);

            //console.log(aiResponse);
            aiResponse = JSON.parse(aiResponse);

            res.json({
                aiResponse: aiResponse
            });
        } catch (aiError) {
            res.status(500).json({ error: 'Error validatng food in AI', details: aiError.message });
        }


};


const addFood = async (req, res) => {
    const { email, foodItems } = req.body;

    console.log('Received body:', req.body);

    if (!email) {
        return res.status(400).json({ error: 'Email is required.' });
    }

    if (!foodItems) {
        return res.status(400).json({ error: 'Food items string is required.' });
    }

    const foodItemsArray = foodItems.split(',').filter(item => item.trim() !== '');

    try {
        let user = await ConsumedFoods.findOne({ email });

        if (!user) {
            user = new ConsumedFoods({ email, consumedFoods: [] });
        }

        const newFoods = foodItemsArray.map(item => ({ foodItem: item }));

        user.consumedFoods.push(...newFoods);

        await user.save();

        const foodItemsString = user.consumedFoods.map(item => item.foodItem).join(' ');

        try {
            let aiResponse = await run(foodItemsString);


            aiResponse = JSON.parse(aiResponse);
            

            res.json({
                
                message: 'Foods added successfully',
                consumedFoods: user.consumedFoods, 
                aiResponse: aiResponse
            });
        } catch (aiError) {
            res.status(500).json({ error: 'Error processing food data in AImodelstatus', details: aiError.message });
        }

    } catch (error) {
        res.status(500).json({ error: 'Error adding food to the user account', details: error.message });
    }
};


const resetConsumedFoods= async(req,res)=>
{
    const { email }=req.body;

    if(!email)
    {
        return res.status(400).json({error:"Email required"});
    }
    try
    {
        let user=await ConsumedFoods.findOne({email});

        if(!user)
        {
            return res.status(400).json({error:"No user found"});
        }

        user.consumedFoods=[];

        await user.save();

        res.json
        (
            {
                message:'Reset foods successful',
                consumedFoods:user.consumedFoods
            }
        );

    } 
    catch(error)
    {
        res.status(500).json({error:'Error in resetting the consumed foods of the user',details:error.message});
    }
};






const validateOrganGuide = async (req, res) => {
    const { email, organName } = req.body;

    console.log('Received body:', req.body);

    if (!email) {
        return res.status(400).json({ error: 'Email is required.' });
    }

    if (!organName) {
        return res.status(400).json({ error: 'Organ name is required.' });
    }

    try {
        const user = await ConsumedFoods.findOne({ email });

        if (!user || !user.consumedFoods || user.consumedFoods.length === 0) {
            return res.status(404).json({ error: 'User not found or no consumed foods available.' });
        }

        const foodItemsArray = user.consumedFoods.map(item => item.foodItem).filter(item => item.trim() !== '');
        const foodItemsString = foodItemsArray.join(','); 

        try {
            const organGuideResponse = await organGuide(organName, foodItemsString);

            const parsedResponse = JSON.parse(organGuideResponse);

            res.json({
                message: 'Organ guide data retrieved successfully',
                AIorganGuideRes: parsedResponse,
                consumedFoods: foodItemsString
            });
        } catch (apiError) {
            res.status(500).json({
                error: 'Error processing organ guide data in AI',
                details: apiError.message,
            });
        }
    } catch (dbError) {
        res.status(500).json({
            error: 'Error fetching user data from the database',
            details: dbError.message,
        });
    }
};

const history = async (req, res) => {
    const { email } = req.body;

    console.log('Received body:', req.body);

    if (!email) {
        return res.status(400).json({ error: 'Email is required.' });
    }



    try {
        let user = await ConsumedFoods.findOne({ email });

        if (!user) {
            user = new ConsumedFoods({ email, consumedFoods: [] });
        }

        const foodItemsString = user.consumedFoods.map(item => item.foodItem).join(' ');

        try {
            let aiResponse = await run(foodItemsString);


            aiResponse = JSON.parse(aiResponse);
            

            res.json({
                
                message: 'history added successfully',
                consumedFoods: user.consumedFoods, 
                aiResponse: aiResponse
            });
        } catch (aiError) {
            res.status(500).json({ error: 'Error processing food data in AI', details: aiError.message });
        }

    } catch (error) {
        res.status(500).json({ error: 'Error adding food to the user account', details: error.message });
    }
};



module.exports = { addFood , resetConsumedFoods,validfood,validateOrganGuide ,history};
