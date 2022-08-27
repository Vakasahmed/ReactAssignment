const rows = Array.from(document.getElementsByTagName("tr"))
console.log(rows)
const changeColor = rows.map((e,i)=>{
    if(i%2==0){
        e.style.backgroundColor="red"
    }
    else{
        e.style.backgroundColor="yellow"
    }
})
const check = document.getElementById("check")
function change(){
    if(check.checked==true){
            document.querySelector("body").style.backgroundColor = "black";

    }
    else{
    document.querySelector("body").style.backgroundColor = "white";

}
}