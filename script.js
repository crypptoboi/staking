 var web3;
 var timestamp;
 var interval;
 var myaddress;
 var contract;  

 //let mybalance = document.getElementById("mybalance");
 let lockedMoney = document.getElementById("locked-money");




 async function depositClick() {
     let value = document.getElementById("amount").value;

     if (!value) {
         alert("you must specify the amount");
         return;
     }

     console.log(value);

    
 }




 async function onPageLoad() {


     await loadweb3();

     if (addr == undefined) {
         alert("Not Connected");
     }

     let accounts = await web3.eth.getAccounts();
     myaddress = accounts[0];
     console.log(myaddress);
     document.getElementById("myacc").innerHTML = myaddress; 
     document.getElementById("con").innerHTML = 'CONNECTED';


   

    //updateBalances();
 }


 //async function updateBalances() {
    // let value = await web3.eth.getBalance(myaddress);
   


     //mybalance.innerText = web3.utils.fromWei(value, "ether");  

    // var max = document.getElementById("maxi").value;

    // document.getElementById("am").innerHTML = max;
//
    // var g = document.createElement("progress");

     // Set the value of progress element
    // g.setAttribute("value", amounts);

     // Set the maximum value of progress element
    // g.setAttribute("max", max);

     // Get the value of progress element
    // document.getElementById("GFG").appendChild(g);

 //}



 onPageLoad();