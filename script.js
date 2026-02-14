let letterHolder = document.getElementById("letterContainer")


//targeting modal
const videoModal = document.getElementById('videoModal');

//where video in modal goes
const videoContainer = document.getElementById('videoContainer');


videoModal.addEventListener('show.bs.modal', function (event) {

    const button = event.relatedTarget;
    const videoSrc = button.getAttribute('data-video'); //gets what video
    const customTitle = button.getAttribute('data-title');

    const modalTitleElement = document.getElementById('modalDynamicTitle');
    if (customTitle) {
        modalTitleElement.innerText = customTitle;
    } else {
        modalTitleElement.innerText = "For You ❤️"; // Fallback
    }


    // We use 'ratio ratio-16x9' to lock the horizontal shape
    videoContainer.innerHTML = `
        <div  class="ratio ratio-16x9">
            <iframe width="560" height="315"
                src="${videoSrc}?autoplay=1&mute=1" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    `;
});



//when the modal is being hidden, it removes the video from it
videoModal.addEventListener('hide.bs.modal', function () {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = '';
});





const introModal = document.getElementById('introModal');

document.addEventListener('DOMContentLoaded', function () {
    // 1. Target your modal by its ID
    const myModalElement = document.getElementById('introModal');

    // 2. Initialize the Bootstrap modal object
    const modal = new bootstrap.Modal(myModalElement);

    // 3. Show the modal!
    setTimeout(function () {
        modal.show();

    }, 500);
})


function toggleNote(element) {
    element.classList.toggle('open');
}