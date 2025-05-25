const { addFood} = require('./organController');
const { consumedFoods } = require('./organController');


const foodEffects = {
    "idli": { oxygen: 5, serotonin: 3, glucose: 8 },
    "Upma": { oxygen: 4, serotonin: 2, glucose: 7 },
    "Bonda": { oxygen: -2, serotonin: 1, glucose: 18 },
    "Puri": { oxygen: -1, serotonin: 2, glucose: 16 },
    "Apple": { oxygen: 4, serotonin: 2, glucose: 10 },
    "Grapes": { oxygen: 3, serotonin: 3, glucose: 9 },
    "Beans": { oxygen: 6, serotonin: 5, glucose: 4 },
    "Fried Foods": { oxygen: -5, serotonin: -2, glucose: 16 },
    "Yogurt": { oxygen: 5, serotonin: 3, glucose: 4 },
    "Salmon": { oxygen: 7, serotonin: 3, glucose: 6 }
};


function assessOrganStatus(totalOxygen, totalSerotonin, totalGlucose) {
    if (totalOxygen > 5 && totalSerotonin > 5 && totalGlucose > 5) {
        return "Healthy";
    }
    const positiveLarge = (totalOxygen > 5 ? 1 : 0) + (totalSerotonin > 5 ? 1 : 0) + (totalGlucose > 5 ? 1 : 0);
    const positiveSmall = (totalOxygen >= 0 && totalOxygen <= 5 ? 1 : 0) + (totalSerotonin >= 0 && totalSerotonin <= 5 ? 1 : 0) + (totalGlucose >= 0 && totalGlucose <= 5 ? 1 : 0);

    if (positiveLarge === 2 || (positiveSmall === 3 && positiveLarge === 1)) {
        return "Slightly Healthy";
    }

    if ((totalOxygen > 0 || totalSerotonin > 0 || totalGlucose > 0) && !(totalOxygen < -5 || totalSerotonin < -5 || totalGlucose < -5)) {
        return "Neutral";
    }

    const negativeSmall = (totalOxygen < 0 && totalOxygen >= -5 ? 1 : 0) + (totalSerotonin < 0 && totalSerotonin >= -5 ? 1 : 0) + (totalGlucose < 0 && totalGlucose >= -5 ? 1 : 0);
    if (negativeSmall >= 2) {
        return "Slightly Unhealthy";
    }

    const negativeLarge = (totalOxygen < -5 ? 1 : 0) + (totalSerotonin < -5 ? 1 : 0) + (totalGlucose < -5 ? 1 : 0);
    if (negativeLarge >= 2) {
        return "Unhealthy";
    }

    return "Neutral";
}

function getAllOrganStatus(consumedFoods) {
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


    return {
        liver: {
            status: assessOrganStatus(totalOxygen, totalSerotonin, totalGlucose),
            oxygen: totalOxygen,
            serotonin: totalSerotonin,
            glucose: totalGlucose
        },
        heart: {
            status: assessOrganStatus(totalOxygen - 1, totalSerotonin - 2, totalGlucose - 3),
            oxygen: totalOxygen - 1,
            serotonin: totalSerotonin - 2,
            glucose: totalGlucose - 3
        },
        brain: {
            status: assessOrganStatus(totalOxygen + 2, totalSerotonin + 3, totalGlucose + 1),
            oxygen: totalOxygen + 2,
            serotonin: totalSerotonin + 3,
            glucose: totalGlucose + 1
        },
        intestine: {
            status: assessOrganStatus(totalOxygen + 1, totalSerotonin - 1, totalGlucose + 2),
            oxygen: totalOxygen + 1,
            serotonin: totalSerotonin - 1,
            glucose: totalGlucose + 2
        },
        stomach: {
            status: assessOrganStatus(totalOxygen - 2, totalSerotonin + 1, totalGlucose - 1),
            oxygen: totalOxygen - 2,
            serotonin: totalSerotonin + 1,
            glucose: totalGlucose - 1
        },
        lungs: {
            status: assessOrganStatus(totalOxygen, totalSerotonin + 1, totalGlucose + 1),
            oxygen: totalOxygen,
            serotonin: totalSerotonin + 1,
            glucose: totalGlucose + 1
        }
    };
}


const getOrganStatus = (req, res) => {
    const organStatuses = getAllOrganStatus(consumedFoods);
    res.json(organStatuses);
};


const getSpecificOrganStatus = (req, res) => {
    const organ = req.params.organ;
    const organStatuses = getAllOrganStatus(consumedFoods);
    
    if (organStatuses[organ]) {
        res.json(organStatuses[organ]);
    } else {
        res.status(404).json({ error: "Organ not found" });
    }
};

module.exports = { getOrganStatus, getSpecificOrganStatus };
