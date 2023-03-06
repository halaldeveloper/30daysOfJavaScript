const main = document.querySelector('.container');
const movingAxis = document.querySelector('.moving');
const form = document.querySelector('form')
const textBox = document.getElementById('input');
const playBtn = document.querySelector('.btn');
//Styling from JS
main.style.background = '#ffbf00';


//Click Event
form.addEventListener('submit', runEvent);

//onClick after play

//onClick Function
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);    

    console.log(textBox.value);

    setTimeout(function(){
        textBox.innerHTML = ""
    }, 5000)
    form.reset()

    if (playBtn) {

        //Mouse Event
        main.addEventListener('mousemove', runEvent);
        // movingAxis.textContent = `X-Axis: ${e.offsetX}, Y-Axis: ${e.offsetY}`;
        document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;

        // I tried writing an if statement that check when field is empty, if the field "what is your name" is empty, alert/pop-up "enter your name" will be display! I couldn't achieve that today being 6th March, 2023. But I believe I will, before the end of March. Thank you and I'll ...see you on the Tech Side💯😎
    }

    form.replaceChildren('TAKE A SCREENSHOT OF YOUR BEST BACKGROUND AND SEND TO reedamegacode@gmail.com');

    e.preventDefault();
}