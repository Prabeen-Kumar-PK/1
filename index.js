// const getDetails = (userName, fn)=>{
//     setTimeout(function(){
//         console.log("Sending the request to the server")
//     }, 2000)
//     setTimeout(function(){
//         console.log("fetching the data from the server ...")
//     }, 3000)
//     setTimeout(function(){
//         fn()
//     },6000)

// }

// getDetails("PrabeenPait2",()=>{
//     console.log("\n Han main galat! Galt meri adaten , \ngalti se hi  duniya me aaya main .\n puri sahi koi nahin he, le le meri sari chain \nho ooh ho kyun ese jiye  ho oh ho mar kyun  na jaye \n ho ooh ho kyun ese jiye  ho oh ho mar kyun  na jaye \noh stage lagi hai , badi jagah hai , do it with a twist \n aji twist aji twist aji twist twist twist \naji twist aji twist aji twist twist twist ")
// })


// function stepOne(cb){
//     console.log("step-1")
//     cb();
// }

// function stepTwo(cb){
//     console.log("step-2")
//     cb()
// }   

// function stepThree(fn){
//     console.log("step-3")
//     fn()
// }


// // callback hell
// stepOne(()=>{
//     stepTwo(()=>{
//         stepThree(()=>{
//             console.log("All callbacks called .")
//         });
//     });
// })



// const pr = new Promise ((resolve, reject)=>{
// console.log("instagram Jao data lao")
// console.log("data collecting....")
// // console.log("data collection throws an error")
// // reject()
// console.log("data collected")
// resolve()
// })

// pr.then(
//     ()=>{
//         console.log("resolved data")
//     }
// ).catch(()=>{
//     console.log("rejected data")

// })


// function stepOne() {
//     return new Promise((res, rej) => {
//         console.log("step-1")
//         res()
//     })
// }

// function stepTwo() {
//     return new Promise((res, rej) => {
//         console.log("step-2")
//         res()
//     })
// }

// function stepThree() {
//     return new Promise((res, rej) => {
//         console.log("step-3")
//         res()
//     })
// }

// stepOne()
//     .then(stepTwo)
//     .then(stepThree)
//     .then(() => {
//         console.log("All steps done .")
//     })



// // simuulate a food delevery setup



// const orderFood = (food) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if (food === "Pizza") {
//                 console.log("Food is available.")
//                 res()
//             }
//             else {
//                 console.log("Food is not available. ")
//                 rej()
//             }

//         }, 2000)
//     })
// }

// orderFood("Pizza")
//     .then(() => {
//         setTimeout(() => {
//             console.log("Delivery successful")
//         }, 2000)
//     })
//     .catch(() => {
//         setTimeout(() => {
//             console.log("Delivery failed")
//         }, 2000)
//     })

// orderFood("Burger")
//     .then(()=>{
//        setTimeout(()=>{
//         console.log("Delivery successful")
//        },2000)
//     })
//     .catch(()=>{
//         setTimeout(()=>{
//         console.log("Delivery failed")
//        },2000)
//     })



// const orderFoodshery = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             let chance = Math.random() < 0.7
//             if (chance) res()
//             else rej()

//         }, 2000)
//     })
// }

// orderFoodshery()
//     .then(() => {
//         console.log("Pizza Delivered")
//     }).catch(() => {
//         console.log("Delivery failed")
//     })


// Chained Promises : user ->Posts -> comment
// create getUser ()-> resolve  with {id:1, name:"harsh"}
// const getUser = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res({ id: 1, name: "harnit" })

//         }, 2000)


//     })
// }

// getpost function -> resolve with list of posts
// const getPost = (userid) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(["My first post", "My second post", "My third post", "My fourth post"])
//         }, 3000)

//     })

// }

// getcomment function -> resolve with list of comments
// const getComment = (postid) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(["My first comment", "My second comment", "My third comment", "My fourth comment"])
//         }, 3000)

//     })

// }

// getUser()
//     .then((data) => {
//         console.log(`data :${data.name}`)
//         return getPost(data.id)
//     }).then(titles => {
//         titles.forEach(title => {
//             console.log(title)
//         });
//         return getComment(titles)
//     }).then((comments) => {
//         comments.forEach(comment => {
//             console.log(comment)
//         });

//     }).finally(() => {
//         console.log("All data fetched")
//     })


// fake API delay 
function fakeApiCall(endpoint) {
    const apiData = {
        user: ["Harsh", "Sambit", "Samay", "Salman"],
        post: ["Hey champ", "Herapherry", "Live your life", "You & Me"]
    }
    let delay = Math.random() * 2000 + 1000

    return new Promise((res, rej) => {
        setTimeout(() => {
            res(apiData[endpoint])
        }, delay)
    })
}

fakeApiCall("user").then(
    (data) => {
        console.log(data)
    }
)

fakeApiCall("post").then(
    (data) => {
        console.log(data)
    }
)