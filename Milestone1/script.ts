const toggleButton =document.getElementById('toggle-skills')as HTMLUListElement
const skills=document.getElementById('skills')as HTMLUListElement

toggleButton.addEventListener('click',()=> {
    if(skills.style.display ==='none'){
        skills.style.display ='block'
    }else{
        skills.style.display ='none'
    }
});