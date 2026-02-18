  // Show popup after page load
  window.addEventListener('load', function () {
    const popup = document.getElementById('popupOverlay');
    popup.style.display = 'flex';
  });

  // Close popup
  document.getElementById('closePopup').addEventListener('click', function () {
    const popup = document.getElementById('popupOverlay');
    popup.style.display = 'none';
  });

   document.addEventListener('DOMContentLoaded', function () {
    const imageCard = document.getElementById('popupImageCard');
    const popup = document.getElementById('imagePopupOverlay');
    const closeBtn = document.getElementById('imagePopupClose');

    imageCard.addEventListener('click', function () {
      popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function () {
      popup.style.display = 'none';
    });
  });