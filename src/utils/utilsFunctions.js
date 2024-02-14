"use server"
const fs = require('fs');
const path = require('path');
import * as ejs from 'ejs';

export const getFunction = async (state) => {
    const filePath = path.join(__dirname, '..', '..', '..', '..' , 'userData.json'); // Adjust the path based on your project structure

    console.log(state , 'state');

    // Check if the JSON file exists
    if (fs.existsSync(filePath)) {
        // If the file exists, read its content
        const rawData = fs.readFileSync(filePath);
        let userData = JSON.parse(rawData);

        // Update the existing data with state.username and state.password
        userData.username = state.username;
        userData.password = state.password;

        // Log the updated data
        await createFile('./src/utils/functionTemplate.ejs', userData, './src/utils/function.js')

        // Save the updated JSON file
        fs.writeFileSync(filePath, JSON.stringify(userData, null, 2));


        return 'success';
    } else {
        // If the file doesn't exist, create it with initial data
        const userData = {
            username: state.username,
            password: state.password,
            adminResponseURL: "https://jsonplaceholder.typicode.com/users",
            userResponseURL: "https://jsonplaceholder.typicode.com/posts"
        };
        await createFile('./src/utils/functionTemplate.ejs', userData,  './src/utils/function.js')


        // Save the JSON file
        fs.writeFileSync(filePath, JSON.stringify(userData, null, 2));

        return 'success';
    }
};


async function createFile(template, data, path) {
    try {

        let objtemplate = await ReadFile(template);
        let fn = ejs.compile(objtemplate);
        let str = fn({ data: data });
        if (str != '') {
            fs.writeFileSync(path, str)
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}


async function ReadFile(strReadPath) {
    try {
        return await fs.readFileSync(strReadPath, 'utf8');
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function executeDynamicFunction() {
    try {
        const {makeApiRequest} = require('./function');
        const res = await makeApiRequest();
        return res;
    } catch (err) {
        console.log(err, 'dhdhud');
        return []
    }

}