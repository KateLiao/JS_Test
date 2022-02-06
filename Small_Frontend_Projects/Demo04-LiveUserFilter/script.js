const result=document.getElementById("result")
const searchBar=document.getElementById("search-bar")
const allRandomUserList=[]

getData()

searchBar.addEventListener("input",(e)=>filterData(e.target.value))

//TODO:
//async=>
async function getData(){
    //TODO:
    //await=>
    const res=await fetch("https://randomuser.me/api?results=50")
    //TODO:
    //{ var }=>
    const { results } =await res.json()
    result.innerHTML=""
    results.forEach(user => {
        const li=document.createElement("li")
        allRandomUserList.push(li)
        li.innerHTML=`
            <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
            <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        result.appendChild(li)
    });
}

function filterData(searchTerm){
    allRandomUserList.forEach(user=>{
        if(user.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            user.classList.remove("hide")
        }else{
            user.classList.add("hide")
        }
    })
}