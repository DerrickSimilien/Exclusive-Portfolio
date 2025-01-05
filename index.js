// template_whckks8
// service_shu41ah
// yymNb5FJCpQNrIp8E

function contact() {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    success.classList += " modal__overlay--visible";

    emailjs
    .sendForm(
        'service_shu41ah',
        'template_whckks8',
        event.target,
         'yymNb5FJCpQNrIp8E'
    ).then(() => {
        // throw new Error("error");
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible"; 
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at email@email.com"
        );
    })

    // // const loading = document.querySelector('.modal__overlay--loading')
    // // const success = document.querySelector('.modal__overlay--sucess')
    // loading.classList += " modal__overlay--visible";
    // setTimeout(() => {
    //     // loading.classList.remove("modal__overlay--visible");
    //     // success.classList += " modal__overlay--visible";
    //     console.log('it worked 1')
    // }, 1000);

}