const otp = document.querySelectorAll('.otp')
const submit = document.querySelector('.submit')
otp.forEach((ele, i) => {
    ele.addEventListener('keyup', (e) => {
        i++
        if (i < otp.length) {
            otp[i].focus()

        }
        if (ele.value.length === 1 && otp[4].value.length === 1) {
            submit.style.display = 'block'
        }
        else {
            submit.style.display = 'none'

        }
    })



})
//error display
const error = document.querySelector('.error')
if (error.innerHTML.length === 9) {
    error.style.display = 'black'
}
else {
    error.style.display = 'none'

}


//otp resend timing


const  interval = setInterval(timout, 1000);
let i = 60
const resend = document.querySelector('.resend')
function timout() {
    i -= 1
    const time = `Resend  00:${i}`
    document.querySelector('.time').innerHTML=time;

if (i === 0) {
    clearInterval( interval)
    resend.innerHTML='Resend';
    resend.style.color='blue'
    resend.style.pointerEvents='visible'

}
}