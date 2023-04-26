const content_body = document.getElementById('content_body')
function openTab1() {
    
    content_body.style.display = "block";
    fetch('tab1.html').then((response) => {
        return response.text()
    }).then((html) => content_body.innerHTML = html)
  }

function openProjects(){
    content_body.style.display = "block";
    fetch('projects.html').then((response) => {
        return response.text()
    }).then((html) => content_body.innerHTML = html)
}