const shareButton = document.getElementById('share');
const shareIcon = document.getElementById('shareImg')
const shareButtonShareC = document.getElementById('share-r')
const shareContainer = document.querySelector('.share-container');

function showShareContainer() {
    shareContainer.classList.toggle('share-container--active');
    shareButton.classList.toggle('share-icon--active');
    shareIcon.classList.toggle('share-img--active')
}

shareButton.addEventListener('click', showShareContainer);
shareButtonShareC.addEventListener('click', showShareContainer);