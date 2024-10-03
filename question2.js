
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            let success = {'message': 'delayed success'};
            console.log(success);
            resolve(success);
        }, 500);
    });
};


const delayedException = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            try {
                throw new Error('error: delayed exception!')
            } catch(e) {
                reject(e);
            }
        }, 500)


    })
}



resolvedPromise();
delayedException();