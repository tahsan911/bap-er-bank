// const email = document.getElementById('user-email');
// const password = document.getElementById('user-password');
// const button = document.getElementById('btn-submit');

// button.addEventListener('click', (target) =>{
//     const emailValue = email.value;
//     const passwordValue = password.value;

//     if(emailValue == 'abc@def.com' && passwordValue == 'abcde'){
//         window.location.href = 'bank.html';
//     }
//     else{
//         alert('Check Your Password');
//     }
// })


const depositNum = document.getElementById('deposit-total').innerText;
const withdrawNum = document.getElementById('withdraw-total').innerText;

const deposit = parseInt(depositNum);
const withdraw = parseInt(withdrawNum);



const depositBtn = document.getElementById('btn-deposit');
const withdrawBtn = document.getElementById('btn-withdraw')

depositBtn.addEventListener('click', ()=> {
    
    const depositField = document.getElementById('deposit-field');
    const depositFieldNumber = depositField.value;
    let depositNum = parseInt(depositFieldNumber);


    const depositTotal = document.getElementById('deposit-total');
    let depositTotalValue = depositTotal.value;

    depositTotalValue = depositNum + depositTotalValue;
    
})
