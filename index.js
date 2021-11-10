async function getAllArticles(){
    const res =  await fetch('http://host.docker.internal:9090/?page=0&size=5&sort=id,desc');
    const articles = await res.json();
    articles.content.forEach(article => articleToHtml(article))
}

window.addEventListener('DOMContentLoaded', getAllArticles)

function articleToHtml({title, content}) {
    const articleList = document.getElementById("article")
    articleList.insertAdjacentHTML('beforeend',
        `<h3>${title}</h3>
            <div>${content}</div>`)
}

