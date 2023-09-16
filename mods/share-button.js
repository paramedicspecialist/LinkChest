// Share Button from LinkStack - https://github.com/LinkStackOrg/LinkStack/blob/ccf5e7ad13560882d2de3654b7cebdefa5be6e86/resources/views/littlelink.blade.php#L227C1-L227C2

document.addEventListener('DOMContentLoaded', function () {
  // Get the current URL
  var currentUrl = window.location.href;

  const shareButtons = document.querySelectorAll('.share-button');
  shareButtons.forEach(button => {
    // Update the data-share attribute with the current URL
    button.setAttribute('data-share', currentUrl);

    button.addEventListener('click', () => {
      const valueToShare = button.dataset.share;
      if (navigator.share) {
        navigator.share({
          title: "Share this page",
          url: valueToShare
        })
          .catch(err => console.error('Error:', err));
      } else {
        navigator.clipboard.writeText(valueToShare)
          .then(() => {
            alert("URL has been copied to your clipboard!");
          })
          .catch(err => {
            alert('Error', err);
          });
      }
    });
  });
});
