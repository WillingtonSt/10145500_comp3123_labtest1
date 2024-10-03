const fs = require('fs');
const path = require('path');

const logDir = path.join(process.cwd(), 'Logs');

const removeLogs = () => {

    return new Promise((resolve, reject) => {

    if(fs.existsSync(logDir)) {

        const files = fs.readdirSync(logDir);
        files.forEach(file => {
            const filePath = path.join(logDir, file);
            console.log(`Deleting files ...${file}` )
            fs.unlinkSync(filePath);
        });

        console.log(`Removing directory: ${logDir}`);
        fs.rmdirSync(logDir);
        resolve();
    } else {
        console.log('Logs directory does not exist')
        resolve();
    }
})
};


const createLogs = () => {

   
    if(!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
        console.log(`Directory created: ${logDir}`)
    }

    process.chdir(logDir);
    
    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        const filePath = path.join(process.cwd(), fileName);
        fs.writeFileSync(filePath, `Filler content for ${fileName}`);
        console.log(`File created: ${fileName}`)
    }
};



removeLogs();