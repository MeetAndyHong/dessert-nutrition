export const addDessert = (data) => {
    return new Promise((res) => {
        setTimeout(() => {
            const response = {
                ...data,
                Dessert: data.name,
                nutritionInfo: {
                    calories: data.calories,
                    fat: data.fat,
                    carb: data.carb,
                    protein: data.protein
                }
            }
            response.id = Math.random();
            res(response);
        }, 100);
    })
}

export const deleteDessert = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res();
        }, 100);
    })
}