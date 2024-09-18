 // Get the modal and the navigation login link
 var modal = document.getElementById('loginModal');
 var loginLink = document.getElementById('loginLink');
 var closeBtn = document.getElementById('closeBtn');
 var resizer = document.getElementById('resizer');
 var modalContent = document.getElementById('modalContent');

 // When the user clicks the Login/Signup link in the nav, open the modal
 loginLink.onclick = function(event) {
     event.preventDefault(); // Prevent default anchor behavior
     modal.style.display = 'block'; // Show the modal
 }

 // When the user clicks the close button (x), hide the modal
 closeBtn.onclick = function() {
     modal.style.display = 'none'; // Hide the modal
 }

 // Resizable functionalitya
 var startX, startY, startWidth, startHeight;

 resizer.addEventListener('mousedown', function(e) {
     e.preventDefault();
     startX = e.clientX;
     startY = e.clientY;
     startWidth = parseFloat(getComputedStyle(modalContent, null).width.replace('px', ''));
     startHeight = parseFloat(getComputedStyle(modalContent, null).height.replace('px', ''));

     document.addEventListener('mousemove', resize);
     document.addEventListener('mouseup', stopResize);
 });

 function resize(e) {
     modalContent.style.width = startWidth + (e.clientX - startX) + 'px';
     modalContent.style.height = startHeight + (e.clientY - startY) + 'px';
 }

 function stopResize() {
     document.removeEventListener('mousemove', resize);
     document.removeEventListener('mouseup', stopResize);
 }

 // When the user clicks anywhere outside the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = 'none'; // Hide the modal
     }
 }