// const { addFood} = require('../controllers/organController');
// const { consumedFoods } = require('./addFood');

// const { addFood, resetConsumedFoods } = require('./organController');

const { addFood, resetConsumedFoods,consumedFoods } = require('./organController');


const foodEffects = {
    "idli": { oxygen: 0.5, serotonin: 3, glucose: 8 },
    "Upma": { oxygen: 0.4, serotonin: 2, glucose: 7 },
    "Bonda": { oxygen: -0.2, serotonin: 1, glucose: 18 },
    "Puri": { oxygen: -0.1, serotonin: 2, glucose: 16 },
    "Apple": { oxygen: 0.4, serotonin: 2, glucose: 10 },
    "Grapes": { oxygen: 0.3, serotonin: 3, glucose: 9 },
    "Beans": { oxygen: 0.6, serotonin: 5, glucose: 4 },
    "Fried Foods": { oxygen: -0.5, serotonin: -2, glucose: 16 },
    "Yogurt": { oxygen: 0.5, serotonin: 3, glucose: 4 },
    "Salmon": { oxygen: 0.7, serotonin: 3, glucose: 6 }
};


function assessOrganStatus(totalOxygen, totalSerotonin, totalGlucose) {
    let color;

    if (totalOxygen > 5 && totalSerotonin > 5 && totalGlucose > 5) {
        color = "#008000"; // Healthy
    } else {
        const positiveLarge = (totalOxygen > 5 ? 1 : 0) + (totalSerotonin > 5 ? 1 : 0) + (totalGlucose > 5 ? 1 : 0);
        const positiveSmall = (totalOxygen >= 0 && totalOxygen <= 5 ? 1 : 0) + (totalSerotonin >= 0 && totalSerotonin <= 5 ? 1 : 0) + (totalGlucose >= 0 && totalGlucose <= 5 ? 1 : 0);

        if (positiveLarge === 2 || (positiveSmall === 3 && positiveLarge === 1)) {
            color = "#90EE90"; // Slightly Healthy
        } else if ((totalOxygen > 0 || totalSerotonin > 0 || totalGlucose > 0) && !(totalOxygen < -5 || totalSerotonin < -5 || totalGlucose < -5)) {
            color = "#FFFF00"; // Neutral
        } else {
            const negativeSmall = (totalOxygen < 0 && totalOxygen >= -5 ? 1 : 0) + (totalSerotonin < 0 && totalSerotonin >= -5 ? 1 : 0) + (totalGlucose < 0 && totalGlucose >= -5 ? 1 : 0);
            if (negativeSmall >= 2) {
                color = "#FFA500"; // Slightly Unhealthy
            }

            const negativeLarge = (totalOxygen < -5 ? 1 : 0) + (totalSerotonin < -5 ? 1 : 0) + (totalGlucose < -5 ? 1 : 0);
            if (negativeLarge >= 2) {
                color = "#FF0000"; // Unhealthy
            } else {
                color = "#FFFF00"; // Neutral
            }
        }
    }

    return color;
}

function getAllOrganStatusColors(consumedFoods) {
    let totalOxygen = 0;
    let totalSerotonin = 0;
    let totalGlucose = 0;

    consumedFoods.forEach(item => {
        const { foodItem, quantity } = item;
        const effects = foodEffects[foodItem];
        if (effects) {
            totalOxygen += effects.oxygen * quantity;
            totalSerotonin += effects.serotonin * quantity;
            totalGlucose += effects.glucose * quantity;
        }
    });


    const liverColor = assessOrganStatus(totalOxygen, totalSerotonin, totalGlucose);
    const heartColor = assessOrganStatus(totalOxygen - 1, totalSerotonin - 2, totalGlucose - 3);
    const brainColor = assessOrganStatus(totalOxygen + 2, totalSerotonin + 3, totalGlucose + 1);
    const intestineColor = assessOrganStatus(totalOxygen + 1, totalSerotonin - 1, totalGlucose + 2);
    const stomachColor = assessOrganStatus(totalOxygen - 2, totalSerotonin + 1, totalGlucose - 1);
    const lungsColor = assessOrganStatus(totalOxygen, totalSerotonin + 1, totalGlucose + 1);


    return {
        liver: liverColor,
        heart: heartColor,
        brain: brainColor,
        intestine: intestineColor,
        stomach: stomachColor,
        lungs: stomachColor
    };
}

const foods="dosa idly vada";
const getOrganStatus = (req, res) => {
    const organColors = getAllOrganStatusColors(consumedFoods);
    res.json(organColors);
};

module.exports = { getOrganStatus };
