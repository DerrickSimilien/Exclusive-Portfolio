// template_whckks8
// service_shu41ah
// yymNb5FJCpQNrIp8E

function contact() {
    event.preventDefault();
    // emailjs
    // .sendForm(
    //     'service_shu41ah',
    //     'template_whckks8',
    //     event.target,
    //      'yymNb5FJCpQNrIp8E'
    // ).then(() => {
    //   console.log('this worked1')  
    // })
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--sucess')
    loading.classList += " modal__overlay--visible";
    setTimeout(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        console.log('it worked 1')
    }, 1000);

}