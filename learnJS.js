const buttonHelloWorld = document.getElementById('buttonHelloWorld')
const buttonWelcome = document.getElementById('buttonWelcome')
const buttonShowSeconds = document.getElementById('buttonShowSeconds')
const myInput = document.getElementById('entryField')


class  MyClass {
    constructor() {
        this.timeout = null
        this.interval = null
        this.isWorkingInterval = false
        this.isPressed = false
    }

    sayHelloWorld() {
        if (this.timeout !== null) {
            clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(() => {
            console.log('Hello world!!!')
            clearTimeout(this.timeout)
        }, 5000)
    }

    sayWelcome() {
        this.isWorkingInterval = !this.isWorkingInterval
        if (this.isWorkingInterval) {
            this.interval = setInterval(() => {
                console.log('You are welcome!')
                this.isWorkingInterval = !this.isWorkingInterval
                clearInterval()
            }, 3000)
        } else {
            clearInterval(this.interval)
        }
    }

    showSeconds() {

        const seconds = (Math.floor(Math.random() * 4)) + 1

        this.isPressed = !this.isPressed
        !this.isPressed && clearTimeout(this.timeout)
        if (this.isPressed) {
            if (this.timeout !== null) {
                clearTimeout(this.timeout)
            }
            this.timeout = setTimeout(() => {
                console.log('seconds', seconds)
                clearTimeout(this.timeout)
                this.isPressed = !this.isPressed
            }, seconds * 1000)
        }
    }

    setCurrentValue(value) {
        myInput.value = value
        console.log(myInput.value)
        return value
    }

    debounce(func, timeout = 500){
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }
     saveInput(newValue){
        console.log(newValue);
    }

}

const callMyClass = new MyClass(myInput.value)
const {sayHelloWorld, sayWelcome, showSeconds, setCurrentValue,debounce,saveInput} = callMyClass



buttonHelloWorld.onclick = sayHelloWorld
buttonWelcome.onclick = sayWelcome
buttonShowSeconds.onclick = showSeconds
myInput.onchange = () => setCurrentValue(myInput.value)
myInput.onkeyup = debounce(() => saveInput(myInput.value))

