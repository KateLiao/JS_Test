const loadText = document.querySelector('.loading-text')
const bg=document.querySelector('.bg')

let load=0
//每10ms执行一次blurring函数
let interval= setInterval(blurring,10)

function blurring(){
    load++

    if(load>99){
        clearInterval(interval)
    }
    loadText.innerHTML=`${load}%`
    loadText.style.opacity=scale(load, 0,100,1,0)
    bg.style.filter=`blur(${scale(load,0,100,30,0)}px)`
}

//scale函数，用于将一个区间映射到另一个区间上
const scale=(num, in_start,in_end, out_start, out_end)=>{
    return ((num-in_start)*(out_end-out_start))/(in_end-in_start) + out_start
}

function reloadBlurring(){
    location.reload()
}