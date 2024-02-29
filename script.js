$(document).ready(function() {
    // Set the initial left position of #sideIcon to 0
    $('#svg-accessiblity').css('left', '0');
    $('#svg-accessiblity').click(function() {
      $('#hiddenSidebar').toggle();
    });
  
    $('#crossIcon').click(function() {
        // Hide the sidebar when clicking the crossIcon
        $('#hiddenSidebar').hide();
        // Reset the left position of #sideIcon to 0
        $('#svg-accessiblity').css('left', '0');
      });
  
      var clickCount = 0;
    
      $('#zoomButton').click(function() {
        clickCount++;
    
        if (clickCount === 1) {
          // First click, scale 1
          $('#section1').css('transform', 'scale(1.1)');
          $('#section2').css('transform', 'scale(1.1)');
          $('#section3').css('transform', 'scale(1.1)');
        } else if (clickCount === 2) {
          // Fourth click, set scale back to normal (1)
          $('#section1').css('transform', 'scale(1)');
          $('#section2').css('transform', 'scale(1)');
          $('#section3').css('transform', 'scale(1)');
          // Reset clickCount to restart the sequence
          clickCount = 0;
        }
      });
  
      $('.animate_opacity').addClass('show');
    });
  
  
    $(document).ready(function() {
      var clickCount = 0;
    
      $('#fontButton').click(function() {
        clickCount++;
    
        if (clickCount === 1) {
          // First click, scale 1
          $('#section1').css('transform', 'scale(0.8)');
          $('#section2').css('transform', 'scale(0.8)');
          $('#section3').css('transform', 'scale(0.9)');
        }  else if (clickCount === 2) {
          // Fourth click, set scale back to normal (1)
          $('#section1').css('transform', 'scale(1)');
          $('#section2').css('transform', 'scale(1)');
          $('#section3').css('transform', 'scale(1)');
          // Reset clickCount to restart the sequence
          clickCount = 0;
        }
      });
  
  
      $("#bwButton").click(function() {
          $("body").toggleClass("grayscale");
      });
  
  var colorButton = document.getElementById("changeColorBtn");
      var changLinkBg = document.getElementById("changeBg");
  
      // Add a click event listener to the button
      colorButton.addEventListener("click", function() {
        // Toggle background color between yellow and default
        if (changLinkBg.style.backgroundColor === "gray") {
          changLinkBg.style.backgroundColor = "transparent"; // Set it back to default
        } else {
          changLinkBg.style.backgroundColor = "gray";
        }
      });
  
  
      $('#backColorChange').click(function() {
          $('#section1, #midRight, #section3').toggleClass('bg-color');
          $('#midLeft, #section3').toggleClass('bg-color2');
        });
      });
  
  let isShowError = false;
  const input_1 = document.getElementById("input_1");
  const input_2 = document.getElementById("input_2");
  const input_3 = document.getElementById("input_3");
  const tooltip_1 = document.getElementById("tooltip_1");
  const tooltip_2 = document.getElementById("tooltip_2");
  const tooltip_3 = document.getElementById("tooltip_3");
  
  const numberValidataion = () => {};
  const handleSubmit = (event) => {
    event.preventDefault();
    tooltip_1.style.visibility =
      input_1.value.trim() === "" ? "visible" : "hidden";
    tooltip_1.style.visibility == "hidden" ? tooltip_2.style.visibility = input_2.value.match(/^05\d{8}$/)
      ? "hidden" : "visible" : "";
    (tooltip_1.style.visibility == "hidden" && tooltip_2.style.visibility == "hidden") ?
    tooltip_3.style.visibility = input_3.value == "" ? "visible" : "hidden" : "hidden";
    isShowError = true;
  
    if (
      input_1.value &&
      input_2.value.match(/^05\d{8}$/) &&
      input_3.value
    ) {
        $('.btn').prop('disabled', true);
        $('.btn').css('background-color', 'grey');
  
        var dataLeadArray = {
        'access_key': '',
        'name': input_1.value,
        'phone': input_2.value,
        'email': '',
        'contact[unit_id]': input_3.value,
        'contact[text_3]': 'דף נחיתה 2024',
        'contact[lead_status_cat_id]': '1696'
      };
  
  var formData = new URLSearchParams();
  for (var key in dataLeadArray) {
    formData.append(key, dataLeadArray[key]);
  }
  
  fetch('URL', {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })
    .then(()=>window.location.href = 'thanks.html')
    .catch(error => {
      // Handle errors here
      console.log(error)
      window.location.href = 'thanks.html';
    });
  
    }
  };
  
  const handleChange = () => {
    // console.log(input_3.value)
    tooltip_2.style.visibility =
      input_2.value.trim() === "" ? "visible" : "hidden";
    if (!input_2.value.match(/^05\d{8}$/) && input_2.value != "") {
      tooltip_2.innerText = "מספר הטלפון אינו תקין";
    }
  
    if (isShowError) {
      tooltip_1.style.visibility =
        input_1.value.trim() === "" ? "visible" : "hidden";
      tooltip_2.style.visibility = input_2.value.match(/^05\d{8}$/)
        ? "hidden"
        : "visible";
    }
  };
  
  // for select2 jquery
  $(document).ready(function () {
    $("#input_3").select2({
      placeholder: "בחירת מרכז",
      // allowClear: true,
    });
  $("#openDropdownButton").click(function () {
    var $select2 = $("#input_3").data('select2');
    if ($select2.isOpen()) {
        $select2.close();
    } else {
        $select2.open();
    }
});
    $("#input_3").on("change", function () {
      handleChange();
    });
  });