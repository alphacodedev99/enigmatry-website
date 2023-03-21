const openDialogBtn = document.getElementById('open-dialog-btn');
const contactDialog = document.getElementById('contact-dialog');
const closeDialogBtn = document.getElementById('close-dialog-btn');
const xDialogBtn = document.getElementById('x-dialog-btn');
const lightbox = document.getElementById('lightbox');

const body = document.querySelector('body');

// on-load opening dialog
body.onload = () => {
        contactDialog.style.display = 'block';
        lightbox.style.display = 'block';
}

// on-click opening dialog
openDialogBtn.addEventListener('click', () => {
        contactDialog.style.display = 'block';
        lightbox.style.display = 'block';
})

closeDialogBtn.addEventListener('click', () => {
  contactDialog.style.display = 'none';
  lightbox.style.display = 'none';
});

xDialogBtn.addEventListener('click', () => {
  contactDialog.style.display = 'none';
  lightbox.style.display = 'none';
});