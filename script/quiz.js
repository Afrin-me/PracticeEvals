import { baseUrl } from "./baseUrl.js"

let form = document.getElementById('form')

form.addEventListener('submit',function(event){
    event.preventDefault()
    console.log("clicked")

    let question = form.question.value
    let optA = form.optA.value
    let optB = form.optB.value
    let optC = form.optC.value
    let optD = form.optD.value
    let correctopt = form.select.value

    let obj = {
        question,
        optA,
        optB,
        optC,
        optD,
        correctopt,
        reviewStatus : false
    }

console.log(obj)


//   try{
//    await fetch(`${baseUrl}/questions`, {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify(obj),
//    });
//    alert("question updated");
//    form.reset();
//  } catch (err) {
//    alert("question not updated");
//    console.log(err);
//  }

fetch(`${baseUrl}/questions`,{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(()=>{
    alert("question updated")
    form.reset()
}).catch((err)=>{
    alert("question not updated")
})

 
 
})

window.onload = ()=>{
     getdata()
}

// getdata()
function getdata(){
    fetch(`${baseUrl}/questions`)
    .then((res)=>res.json())
    .then((data)=>{
        // console.log(data,1)
        displaydata(data)
    })
    .catch((err)=>{
        alert("something wrong in getting data")
    })
}
 let container = document.getElementById("container");
//  container.innerHTML = "";
function displaydata(arr){

    
  arr.map((el,i)=>{
    // console.log(el)
    let card = document.createElement('div')
    
    let question = document.createElement("h3")
    question.textContent = `question:${el.question}`
    // console.log(el.question);

    let optA = document.createElement("h3");
    optA.textContent = `A: ${el.optA}`;

    let optB = document.createElement("h3");
    optB.textContent = `B: ${el.optB}`;

    let optC = document.createElement("h3");
    optC.textContent = `C: ${el.optC}`;

    let optD = document.createElement("h3");
    optD.textContent = `D: ${el.optD}`;

    let correctopt = document.createElement("h3");
    correctopt.textContent = `correct option:${el.optA}`;

    card.append(question, optA, optB, optC, optD, correctopt);
    
    
    container.append(card)

  })
}
