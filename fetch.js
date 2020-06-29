/*

Sources:
https://www.youtube.com/watch?v=cuEtnrL9-H0
https://www.youtube.com/watch?v=DHvZLI7Db8E
https://www.youtube.com/watch?v=s6SH72uAn3Q
https://www.youtube.com/watch?v=QO4NXhWo_NM
https://www.youtube.com/watch?v=AwyoVjVXnLk&list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx&index=2
https://www.youtube.com/watch?v=xGBhmi4wwMI
https://scotch.io/@wesleylhandy/writing-your-own-javascript-promises
https://javascript.info/promise-basics
https://www.geeksforgeeks.org/javascript-promises/#:~:text=to%20React%20Hooks-,JavaScript%20%7C%20Promises,hell%20leading%20to%20unmanageable%20code.
https://www.youtube.com/watch?v=Oive66jrwBs&t=1521s
https://www.youtube.com/watch?v=MmmNGagRqcU
https://www.youtube.com/watch?v=23hrM4saaMk
https://www.youtube.com/watch?v=WmQ1hl7KSM4
https://www.youtube.com/watch?v=38uPRscJXfo
https://www.youtube.com/watch?v=38uPRscJXfo
https://www.youtube.com/watch?v=AyJq1RRaY_k&list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL&index=44&t=0s
https://www.youtube.com/watch?v=BcAYvnsbmMQ&list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL&index=45&t=0s
https://www.youtube.com/watch?v=BcAYvnsbmMQ&list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL&index=45&t=0s
https://www.youtube.com/watch?v=LRF8hKJdE4s


Note:
- learn promises before before learning fetch
- promises solves callback hell

*/

// promises

/*

*** retrieve local json

const loadJson = () => {
fetch("./people.json")
.then((res) => {
    return res.json();
})
.then((obj) => {
    let output = "";
   
    output += `
    <ul>
    <li> Date: ${obj.date} </li>
    <li> People1 Name: ${obj.people[0].name} </li>
    <li> People1 Occupation: ${obj.people[0].occupation} </li>
    <li> People1 Age: ${obj.people[0].age} </li>
    <li> People2 Name: ${obj.people[1].name} </li>
    <li> People2 Occupation: ${obj.people[1].occupation} </li>
    <li> People2 age: ${obj.people[1].age} </li>
    </ul>
    
    `
    document.getElementById("datas").innerHTML = output;
    

}).catch((err) => {
    console.error("Error");
    console.log(err);
})
}

document.getElementById("btn").addEventListener("click", loadJson);


*/

/*
-retrieve local file
const loadText = () => {
    const localApi = "./local.txt";
    fetch(localApi)
    .then((res) =>  res.text())
    .then((data) => {
        console.log(data);
        document.getElementById("datas").innerHTML = data;
        
    })
    .catch((err) => {
        console.log(err);
        
    })
}

document.getElementById("btn").addEventListener("click", loadText);


*/


/*

let cleanRooms = () => {
    return new Promise((resolve, reject) => {
        resolve("clean the rooms");
    })
}

let removeGarbage = (msg) => {
    return new Promise((resolve, reject) => {
        resolve(  msg +"removed the garbage");
    })
}

let won = (msg) => {
    return new Promise((resolve, reject) => {
        resolve( msg + "Hey I won" );
    })
}

cleanRooms().then((msg) => {
    return removeGarbage(msg);
}).then((msg) => {
    return won(msg);
}).then((msg) => {
    console.log("finished" + msg);
    
})

*** what if you want all promises done parallel
Promise.all([cleanRooms(), removeGarbage(), won()]).then(() => {
    console.log("finished");
    
})

***what if you want any of them finished then return back as soon as they completed means asynchronously
Promise.race([cleanRooms(), removeGarbage(), won()]).then(() => {
    console.log("One of them is finished");
    
})

*/


// let cleanTables = new Promise ((resolve, reject) => {
    
//     let isTableClean = true;

//     if(isTableClean) {
//         resolve("successful");
//     }

//     else {
//         reject("Failed");
//     }
// })

// cleanTables.then((message, msg) => {
//     console.log("the tables is" +  message)
// }).catch((message) => {
//     console.log("This is then the message is" + message);
    
// })




// let add = new Promise((resolve, reject) => {
//     let adding = 1+1;
//     if (adding===2) {
//         console.log("success", "scs"); // two parameters
        
//     }

//     else {
//         console.log("failed");
        
//     }
// })

// add.then((message, msg) => {
//     console.log("This is then the message is" + message + "scgkf"+ msg);
    
// }).catch((message) => {
//     console.log("This is catch the message is" + message);
    
// })