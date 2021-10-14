// // JavaScript Document

// function test() {
//     console.log('hello world from me')
// }

// // test()


// floor = (diameter) => {
//     let radius = diameter/2
//     let floorArea = Math.PI * Math.pow(radius, 2)
//     return floorArea

// };

// walls = (diameter, height) => {
//     let radius = diameter/2
//     let circumfrence = 2 * Math.PI * radius
//     let wallArea = circumfrence * height
//     return wallArea
// }

// materialsNeeded = () => {


//     let d = document.getElementById("across").value
//     let h = document.getElementById("height").value

//     let carpetNeeded = Math.ceil(floor(d))
//     let paintNeeded = Math.ceil(walls(d, h))

//     console.log(`Carpet Needed: ${carpetNeeded} sqft`)
//     console.log(`Paint Needed: ${paintNeeded} sqft`)
// }



// floor(8)
// walls(8, 10)

// let i = 1
// while (i <= 100) {
//     i = i + 2
//     console.log(i)
//     i = i - 1
//     console.log(i)
// }

// for (i = 100; i >= 1; i = i - 5){
//     console.log(i)
// }


// console.log(elementID)

// console.log(elementID.length)




// showStuff = (element) => {
//     let elementID = document.getElementById(element)
//     for (i = 0; i < elementID.length; i++){
//         if (elementID[i].selected === true){
//             let x = elementID[i].text
//         }
//     }
//     return x
// }

// showMore = () => {
//     let elementID = document.getElementsByName('bulb')
//     // console.log(elementID.length)
//     let mycheck = ""
//     for (i = 0; i < elementID.length; i++){
//         // console.log(elementID[0].checked)
//         // console.log(elementID[0].value)
//         if (elementID[i.checked === true]) {
//             mycheck = mycheck + elementID[i].value
//         }
//     }
//     console.log(mycheck)
// }


// evaluatePage = () => {
//     let feedbackState = showStuff("state")
//     let feedbackHome = showStuff("home")
//     let feedbackLight = showMore('bulb')
//     document.getElementById("output").innerHTML = feedbackState +'<br>'+ feedbackHome +'<br>' + feedbackLight
// }

// myFunction = () => {
//     let elem = document.getElementById("chooseMe")
//     let fortuneNum = elem.options[elem.selectedIndex].value
//     let fortuneMessage;
//     console.log(fortuneNum)

//     switch (Number(fortuneNum)) {
//         case 1:
//         case 6:
//             fortuneMessage = "You will get a fortune"
//             break;
//         case 2:
//         case 7:
//             fortuneMessage = "JS Ninja"
//             break;
//         case 3:
//             fortuneMessage = "You will win a new car"
//             break;
//         case 4:
//         case 8:
//             fortuneMessage = "Comp"
//             break;
        
//         default:
//             fortuneMessage = "you done f'd up"
//     }

//     document.getElementById("feedback").innerHTML = fortuneMessage;
// }

