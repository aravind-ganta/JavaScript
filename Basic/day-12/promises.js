/**This file contains code related to Promises in JS */

//create promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Got the user');

        // resolve({ user: 'Aravind' });

        reject('Error');
    }, 2000);
});

// get the data from the promise
promise.then((user) => {
    console.log(user);
}).catch((error) => {
    console.log(error);
});

// solve callback hell
const fetchUser = (username) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Now we have the user');
            resolve(username);
        }, 2000);
    });
};

const fetchUserPhotos = (username) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Now we have the photos');
            resolve(['photo1', 'photo2']);
        }, 2000);
    });
};

const fetchPhotoDetails = (photo) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('We have the photo details');
            resolve('details...');
        }, 2000);
    });
};

// // Using Promises correctly
// fetchUser('Aravind')
//     .then(fetchUserPhotos) // directly pass the function
//     .then((photos) => fetchPhotoDetails(photos[0]))
//     .then((detail) => console.log(detail))
//     .catch((error) => console.error('Error:', error));

// console.log('Hi'); // This will execute first before any async operation

// using async/await
const displayData = async()=>{
    const user = await fetchUser('Aravind');
    const photos = await fetchUserPhotos(user);
    const detail = await fetchPhotoDetails(photos[0]);

    console.log(detail);
}

displayData();
