/**This file contains code related to Asynchronous JS in JS */

// logs 'Hello' every 1000ms
const myInterval = setInterval(() => {
    console.log("Hello");
}, 1000);

clearInterval(myInterval);

// logs 'Aravind' after 1000ms
const myTimeout = setTimeout(() => {
    console.log("Aravind")
}, 1000)

clearTimeout(myTimeout);

// Syncronous JS
const functionOne = () => {
    console.log('Before');
    functionTwo();
    console.log('After');

}

const functionTwo = () => {
    setTimeout(() => { console.log("Function 2") }, 1000);
}

functionOne();


const fetchUser = (username, callback) => {
    setTimeout(() => {
        console.log('Now we have the user');
        callback(username);
    }, 2000)
};

const fetchUserPhotos = (username, callback) => {
    setTimeout(() => {
        console.log('Now we have the photos');
        callback(['photo1', 'photo2']);
    }, 2000);
};

const fetchPhotoDetails = (photo, callback) => {
    setTimeout(() => {
        console.log('We have the photo details');

        callback('details...');
    }, 2000)
};

// callback hell
const user = fetchUser('test', (username) => {
    console.log(username);
    fetchUserPhotos(username, (userPhotos) => {
        console.log(userPhotos);
        fetchPhotoDetails(userPhotos[0], (details) => {
            console.log(details);
        });
    });
});