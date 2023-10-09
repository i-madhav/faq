const button = document.querySelectorAll(".btn");
const answer = document.querySelectorAll(".answer")

button.forEach((btn)=>{
    btn.addEventListener('click' , (e)=>{
        var currentButton = e.target.getAttribute('dataValue');
        console.log(currentButton)
        answer.forEach((ans)=>{
            const currentAnswer = ans.getAttribute('dataValue')
            if(!ans.classList.contains("hide")){
                ans.classList.add("hide")
            }else{
                if(currentAnswer == currentButton){
                    ans.classList.remove("hide");
                }
            }
        })
    })
})