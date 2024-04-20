 // the function should be in the right sequence
$(document).ready(function(){
    // Show or hide the dropdown menu when clicking on the trigger element
    $(".dropdown-trigger").click(function(event){
        event.stopPropagation(); // Prevents the event from bubbling up the DOM tree
        $(this).next(".dropdown-menu").toggle();
    });

    // Hide the dropdown menu when clicking anywhere else
    $(document).click(function(){
        $(".dropdown-menu").hide();
    });

    // Prevent the dropdown menu from hiding when clicking on it
    $(".dropdown-menu").click(function(event){
        event.stopPropagation();
    });
});

// collapse menu
(function() {
    function menuCollapse() {
      var x = document.getElementById("myTopnav");
      if (x.className === "navbar") {
        x.className += " responsive";
      } else {
        x.className = "navbar";
      }
    }
})();



// table search
(function() {
  function mySearch() {
    // Declare search string
    var filter = searchBox.value.toUpperCase();

    // Loop through first tbody's rows
    for (var rowI = 0; rowI < trs.length; rowI++) {

      // define the row's cells
      var tds = trs[rowI].getElementsByTagName("td");

      // hide the row
      trs[rowI].style.display = "none";

      // loop through row cells
      for (var cellI = 0; cellI < tds.length; cellI++) {

        // if there's a match
        if (tds[cellI].innerHTML.toUpperCase().indexOf(filter) > -1) {

          // show the row
          trs[rowI].style.display = "";

          // skip to the next row
          continue;
        }
      }
    }
  }

  // declare elements
  const searchBox = document.getElementById('myInput');
  const table = document.getElementById("plant_table");
  const trs = table.tBodies[0].getElementsByTagName("tr");

  // add event listener to search box
  searchBox.addEventListener('keyup', mySearch);
})();



// Location pop-up window
(function() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // After 10 seconds, open the modal if 24 hours have passed since the last display
    setTimeout(function() {
        var lastShown = localStorage.getItem('lastShown');
        if (!lastShown || new Date() - new Date(lastShown) > 24*60*60*1000) {
            modal.style.display = "block";
            localStorage.setItem('lastShown', new Date());
        }
    }, 10000); // 10000 milliseconds = 10 seconds
})();



// Citation copy
(function() {
    function copyCode() {
        const codeElement = document.getElementById('code');
        const code = codeElement.textContent || codeElement.innerText;
        navigator.clipboard.writeText(code).then(function() {
            alert('Citation copied successfully!');
        }, function(err) {
            console.error('Unable to copy code: ', err);
        });
    }
})();
