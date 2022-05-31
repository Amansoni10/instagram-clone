
function onEmailChange(event) {

    const string = event.target;
    const userName = string.value;

    let passWord = document.getElementsByTagName('input')[1].value;

    if (userName.length > 0) {
        if (passWord.length > 0) {
            document.getElementsByClassName('btn')[0].disabled = false;
        }
    }
    else {
        document.getElementsByClassName('btn')[0].disabled = true;
    }

}
function validateForm(event) {
    let form = event.target;
    console.log(form.value);    
    let name = document.getElementsByTagName('input')[0].value;
    let AtDRate = name.indexOf("@");
    let Dot = name.indexOf(".");
    let pwd = document.getElementsByTagName('input')[1].value;
    let pass = pwd.length

    if (AtDRate < 3) {
        let error = document.getElementById('validationError');
        error.innerHTML = `The username that you've entered doesn't <br> belong to an account. <br> Please check your username and try again.`
        return false;
        
    }
    if (Dot < (AtDRate + 3)) {
        let error = document.getElementById('validationError');
        error.innerHTML = `The username that you've entered doesn't <br> belong to an account. <br> Please check your username and try again.`
        return false;
    }
    if (pass < 6) {
        let error = document.getElementById('validationError');
        error.innerHTML = `Sorry, your password was incorrect. <br> Please double-check your password.`
        return false;
    }
    else {
        return true;
    }
}



function onPasswordChange(event) {
    const passString = event.target;
    const passWord = passString.value;

    let userName = document.getElementsByTagName('input')[0].value
    if (passWord.length > 0) {
        if (userName.length > 0) {
            document.getElementsByClassName('btn')[0].disabled = false;
        }
    }
    else {
        document.getElementsByClassName("btn")[0].disabled = true;

    }

}

/*// const emailElement = document.getElementsByTagName('input')[0];
// // document.getElementsByClassName("btn")[0].disabled = true;

// function onEmailChange(myevent){
//     // target -> target on event means the element on which given even is executed
//     // text1 == event.target;
//     // const liveText1 = document.getElementsByTagName("input")[0];
//     const liveText1 = myevent.target;
//     const liveValue = liveText1.value;

//     if(liveValue.length > 0){
//         document.getElementsByClassName("btn")[0].disabled = false;
//     }else{
//         document.getElementsByClassName("btn")[0].disabled = true;
//     }
//     /// get value from event
// }

// function onPasswordChange(myevent){
//     // target -> target on event means the element on which given even is executed
//     // text1 == event.target;
//     // const liveText1 = document.getElementsByTagName("input")[0];
//     const liveText2 = myevent.target;
//     const liveValue = liveText2.value;

//     if(liveValue.length > 0){
//         document.getElementsByClassName("btn")[0].disabled = false;
//     }else{
//         document.getElementsByClassName("btn")[0].disabled = true;
//     }


// } --------------------------------------------------------------------------------------------------------------------------------*/


// let email = document.getElementsByTagName('input')[0]
// email.addEventListener('oninput', changeInText);

// function changeInText(e) {

//     const liveText1 = myevent.target;
//     const liveValue = liveText1.value;
// }
// if (liveValue.length > 0) {
//     document.getElementsByClassName("btn")[0].disabled = false;
// }
// else {
//     document.getElementsByClassName("btn")[0].disabled = true;
// }

// let password = document.getElementsByTagName('input')[1]
// email.addEventListener('oninput', changeInPass);

// function changeInPass(e) {

//     const liveText2 = myevent.target;
//     const Value = liveText2.value;
// }
// if (liveValue.length > 0) {
//     document.getElementsByClassName("btn")[0].disabled = false;
// }
// else {
//     document.getElementsByClassName("btn")[0].disabled = true;
// }

