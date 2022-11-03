import { posts } from  './data.js'

const cards = document.getElementById('cards-container')


function render() {

let cardsHtml = ``

cardsHtml +=  posts.map(post =>{
    return `
            <section class="post">
                    <div class="col content">
                        <img class="avatar" src=${post.avatar}>
                    <div>
                        <div ><span class="name bold">${post.name}</span></div>
                        <span class="location">${post.location}</span>
                    </div>
                    </div>
                    
                    <div >
                        <img id ="image" src=${post.post}>
                    </div>

                    <div class="control-bar content">
                        <img class="logo" src="images/icon-heart.png">
                        <img class="logo" src="images/icon-comment.png">
                        <img class="logo" src="images/icon-dm.png">                    
                    </div>
                                    
                    <div class="content">          
                        <span class="likes bold">${post.likes} likes </span>
                    </div>

                    <div class="content">
                        <p><span class="username bold">${post.username}</span>  ${post.comment}</p>
                    </div>  
            </section> `
    
}).join('')

cards.innerHTML = cardsHtml

}

render()









 



 