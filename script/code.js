let friends=[]
function addFriend() {
    let name= document.querySelector('[data-input]').value
    friends.push(name)
    localStorage.setItem('friendnames',JSON.stringify(friends))

    displayFriends()
}
document.querySelector('[data-output]').addEventListener('click',addFriend)


function displayFriends(){
    console.log(JSON.parse(localStorage.getItem("friendnames")));
    display.innerText= JSON.parse(localStorage.getItem("friendnames"))
}
