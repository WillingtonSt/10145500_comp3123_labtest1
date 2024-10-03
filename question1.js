const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']


const lowerCaseWords = (mixedArray) => {

    return new Promise((resolve, reject) => {

        if(!Array.isArray(mixedArray)) {
            reject(new Error("Not an Array!"))
        } else {
            const output = mixedArray.filter(item => typeof item === 'string').map(item => item.toLowerCase());
            resolve(output)
        }

    });

};



lowerCaseWords(mixedArray).then(result => console.log(result))