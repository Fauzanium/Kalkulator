document.querySelectorAll('.input').forEach((e, k) => {
    e.addEventListener("click", () => {
        if (document.querySelector('.result').innerHTML.length == 1 && document.querySelector('.result').innerHTML == "0") {
            document.querySelector('.result').innerHTML = ""
        }
        document.querySelector('.result').innerHTML += e.innerHTML
    })
})

document.querySelector('.clear').addEventListener("click", () => {
    document.querySelector('.result').innerHTML = "0"
    document.body.className = ""
})

document.querySelector('.equals').addEventListener("click", () => {
    let value = document.querySelector('.result').innerHTML
    document.querySelector('.result').innerHTML = eval(value)

    if (document.querySelector('.result').innerHTML == 4736251) {
        document.body.className = "transition"
        document.querySelector('.result').innerHTML = thenumber
        setTimeout(() => {
            document.body.className = "test"
        }, 1500);

        setTimeout(() => {
            document.querySelector('.numbers').innerHTML = `<div class="numbers">
                        <span class="number text" style="animation-delay: 0s">to</span>
                        <span class="number text" style="animation-delay: 0.4s"> put</span>
                        <span class="number text " style="animation-delay: 1.0s"> my</span>
                        <span class="number text" style="animation-delay: 1.3s"> mind</span>
                        <span class="number text" style="animation-delay: 1.85s"> at</span>
                        <span class="number text" style="animation-delay: 2.1s"> ease</span>
                    </div>`
        }, 3100);
        // document.querySelector('.result').className += ", dropdown"
    }
})




let thenumber = `<div class="numbers">
                        <span class="number" style="animation-delay: 0s">4</span>
                        <span class="number" style="animation-delay: 0.75s">7</span>
                        <span class="number" style="animation-delay: 1.15s">3</span>
                        <span class="number" style="animation-delay: 1.5s">6</span>
                        <span class="number" style="animation-delay: 1.85s">2</span>
                        <span class="number" style="animation-delay: 2.4s">5</span>
                        <span class="number" style="animation-delay: 2.75s">1</span>
                    </div>   
                    `