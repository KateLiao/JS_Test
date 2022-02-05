//JS要实现的功能点
//1. 将textarea置为focus状态
//2. 监听textarea中发生的所有键盘keyup事件
//3. 每次keyup事件后，调用生成Tag的函数
//4. 监听Enter键，按下Enter后，执行RandomPick函数

const choicesEl=document.getElementById("choices")
const textarea=document.getElementById("textarea")
textarea.focus()

textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)

    if(e.key==="Enter"){
        setTimeout(()=>{
            e.target.value=""
            randomPicker()
        },10)
    }
})
//createTag函数的功能：
//1. 获取textarea中的string，并进行以下处理：
//2. 以,为分割符，将string切开为一个个tag
//3. 利用trim()函数删除每一个tag无用的空格，如果tag为空格，则舍弃
//4. 为每一个tag值，生成一个class为tag的span，写入html中

function createTags(input){
    const tags=input.split(",").filter(tag=>tag.trim()!="").map(tag=>tag.trim())
    choicesEl.innerHTML=""
    tags.forEach(tag=>{
        const tagEl=document.createElement("span")
        tagEl.className="tag"
        tagEl.innerHTML=tag
        choicesEl.appendChild(tagEl)
    })
}

//randomPicker函数的功能：
//1. 在随机过程中，每隔若干时间随机选择一个tag
//2. 被随机到的tag高亮，并在一定时间后将随机到的tag样式还原
//3. 重复随机过程直至制定次数，保持最后一个随机到的choice tag高亮
function randomPicker(){
    const times=20
    //interval 用于实现每隔若干时间随机选择一个tag
    const interval=setInterval(() => {
        const randomTag=pickRandomTag()
        if(randomTag!=undefined){
            highlightTag(randomTag)
            //setTimeout用于实现高亮被随机的tag若干时间后还原
            setTimeout(() => {
                unhighlightTag(randomTag)
            }, 100);
        }
    },100);
    //timeout用于实现在循环次数结束后，清除定时器，并执行最后一次randomPicker
    setTimeout(() => {
        clearInterval(interval)
        const finalTag=pickRandomTag()
        //console.log(finalTag.innerHTML)
        highlightTag(finalTag)
    }, times*100);
}

function pickRandomTag(){
    const allTags=document.querySelectorAll(".tag")
    return allTags[Math.floor(Math.random() * allTags.length)]
}

function highlightTag(tag){
    tag.classList.add("highlight")
}

function unhighlightTag(tag){
    tag.classList.remove("highlight")
}