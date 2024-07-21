window.addEventListener("DOMContentLoaded", function() {
    var loader = document.querySelector(".maincontainer");
  
    // Set delay time in milliseconds (adjust as needed)
    const delayTime = 1000; // Example: 2 seconds

    function hideLoader() {
      loader.classList.add("hidden"); 
    }
  
   
    setTimeout(hideLoader, delayTime);
  });