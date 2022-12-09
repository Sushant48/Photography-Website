function changeToFlowers(event){
    hideAll();
    event.target.classList.add('active');
    const container = document.getElementById('flowers');
    container.style.display = 'flex';
}
function changeToWildlife(event){

    hideAll();
    event.target.classList.add('active');
    const container = document.getElementById('wildlife');
    container.style.display = 'flex';
}
function changeToLandscape(event){
    hideAll();
    event.target.classList.add('active');
    const container = document.getElementById('landscape');
    container.style.display = 'flex';
}
function changeToMonuments(event){
    hideAll();
    event.target.classList.add('active');
    const container = document.getElementById('monuments');
    container.style.display = 'flex';
}

function hideAll(){
    let container = document.getElementById('wildlife');
    container.style.display = 'none';

    container = document.getElementById('landscape');
    container.style.display = 'none';

    container = document.getElementById('flowers');
    container.style.display = 'none';

    container = document.getElementById('monuments');
    container.style.display = 'none';


    const containers = document.getElementsByClassName('categorySelectButton');
    for(let i=0; i<containers.length; i++){
        containers[i].classList.remove('active');
    }
}

function addComment(){
    const textArea = document.getElementById('commentTextarea');
    const value= textArea.value;
    if(value.length === 0) return;

    const commentItemsContainer = document.querySelector('.commentItems');
    commentItemsContainer.innerHTML += `
    <div class="singleComment">
        <div class="persona">${value[0]}</div>
        <div class="commentText">${value}</div>
    </div>
          `;
    textArea.value = '';
}
