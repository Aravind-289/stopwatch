// let display=document.getElementById("display")
// let start=document.getElementById("start")
// let stop=document.getElementById("stop")
// let reset=document.getElementById("reset")


// let hrs=0
// let min=0
// let sec=0
// is_running=false

// display.textContent="00:00:00"

// function updatedisplay(){

//     let h=hrs<10 ? "0"+hrs :hrs
//     let m=min<10 ? "0"+min :min
//     let s=sec<10 ? "0"+sec :sec

//     display.textContent=`${h}:${m}:${s}`

// }

// start.addEventListener("click",()=>{

//     if(is_running==true) return ;
    
//     is_running=true

//     interval=setInterval(()=>{
//         sec++
//            if(sec==60){
//             sec=0
//             min++
//         }
//         if(min==60){
//             min=0
//             hrs++
//         }

//         updatedisplay()
            
//     },100)
// })

// stop1.addEventListener("click",()=>{
//     clearInterval(interval)
//     is_running=false
// })

// reset.addEventListener("click",()=>{
//     clearInterval(interval)
//     display.textContent="00:00:00"
//     is_running=false
//     hrs=0
//     min=0
//     sec=0

// })

let display = document.getElementById("display")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")

let hrs = 0
let min = 0
let sec = 0
let is_running = false
let interval

display.textContent = "00:00:00"

function updatedisplay() {

    let h = hrs < 10 ? "0" + hrs : hrs
    let m = min < 10 ? "0" + min : min
    let s = sec < 10 ? "0" + sec : sec

    display.textContent = `${h}:${m}:${s}`
}

start.addEventListener("click", () => {

    if (is_running) return

    is_running = true

    interval = setInterval(() => {
        sec++

        if (sec == 60) {
            sec = 0
            min++
        }

        if (min == 60) {
            min = 0
            hrs++
        }

        updatedisplay()

    }, 1000)
})

stop.addEventListener("click", () => {
    clearInterval(interval)
    is_running = false
})

reset.addEventListener("click", () => {
    clearInterval(interval)
    hrs = 0
    min = 0
    sec = 0
    is_running = false
    display.textContent = "00:00:00"
})