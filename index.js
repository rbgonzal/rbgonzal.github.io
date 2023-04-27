const content_body = document.getElementById('content_body')
const slatepayment = 'slatepayment.html'
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

function openModal(proj){

    const modal_container = document.getElementById('modal_container')
    const modal_content = document.getElementById('modal_content')
    modal_container.style.display="block"
    fetch(proj).then((response) => {
        return response.text()
    }).then((html) => modal_content.innerHTML = html)
}

function closeModal(){
    document.getElementById("modal_container").style.display="none"
}
