// frist we did creat the function with async method
async function fetchUserData() {
    //then we did put try erorr handler
    try {
        //then we did create a constant response and put the await(the await will wait the function for fetching data)
        const resoponse = await fetch('https://jsonplaceholder.typicode.com/users');
        //then we did create the contant userName put the await( this will waiting for get the response in json)
        const userName = await resoponse.json();
        // create  the constatant userData put the map method on users names use sort method that will conver the arry into string
        const userData = userName.map(users => users.name).sort();
       // after getting the return of userdata
        return userData;
/// add the catch erorr for catching erorr
    } catch(error) {
        console.error('Oh that is Erorr:', error.massege)
    }
    
}

// put the then using arrow funcation for cconsoling data userData
fetchUserData()
.then(userData => {

    console.log("fecth users data:", userData)

} )// catch the erorr via catch(erorr) use the arow function on userdata for consoling erorr messege 
 .catch(userData => {
    console.error('erorr fetched:', error)
});


// Create a function named calculateAverage that takes an array of numbers as a parameter and uses the reduce method to calculate the average of the numbers. The function should return the average rounded to four decimal points.


async function calculateAverage(numbers) {
    if(numbers.lenth === 0) {
        return 0;
    }

    const sum = await numbers.reduce((acc, num) => acc + num, 0);
    const averageSum = await sum / numbers.length;
    const roundSum =  Math.round(averageSum * 10000) / 10000;
}

const numbers = [1, 2, 3, 5, 6, 4];
const resultFunction = calculateAverage(numbers);
console.log(resultFunction);
