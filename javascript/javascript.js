// Dark Mode Toggler
function toggler() {
  $("body").toggleClass("dark-mode");
}

// Intersecting Slide-in(with Jquery)
const items = $(".grid-item");

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      $(entry.target).addClass('slide-in');
    }
  });
}, options);

items.each((index, item) => {
  observer.observe(item);
});

// Form Validation(Now with more Jquery!)
const form = $('form');
const thankYou = $('.thank-you');
const nameInput = $('input[name="name"]');
const emailInput = $('input[name="email"]');
const messageInput = $('textarea[name="message"]');

let isFormValid = false;
let isValidationOn = true;

const resetElm = (elm) => {
  $(elm).removeClass("invalid");
  $(elm).next().addClass("hidden");
}

const invalidateElm = (elm) => {
  $(elm).addClass("invalid");
  $(elm).next().removeClass("hidden");
}

const validateInputs = () => {
  if (!isValidationOn) return;

  isFormValid = true;
  resetElm(nameInput);
  resetElm(emailInput);
  resetElm(messageInput);

  if (!nameInput.val()) {
    isFormValid = false;
    invalidateElm(nameInput);
  }

  if (!emailInput.val()) {
    isFormValid = false;
    invalidateElm(emailInput);
  }

  if (!messageInput.val()) {
    isFormValid = false;
    invalidateElm(messageInput);
  }
}

form.on("submit", (e) => {
  e.preventDefault();
  isValidationOn = true;
  validateInputs();
  if (isFormValid) {
    form.remove();
    thankYou.removeClass("hidden");
  }
});

nameInput.on('input', () => {
  validateInputs();
});

emailInput.on('input', () => {
  validateInputs();
});

messageInput.on('input', () => {
  validateInputs();
});


//List Sorter
// Merge Sort implementation using tail recursion

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Output for List Sorter
const sortButton = document.getElementById("sortButton");
const inputList = document.getElementById("inputList");
const output = document.getElementById("outputBox");

sortButton.addEventListener("click", () => {
  const inputValues = inputList.value.split(",").map(value => parseFloat(value));
  const sortedList = mergeSort(inputValues);

  output.innerHTML = `<p>Sorted List: ${sortedList.join(", ")}</p>`;
  inputList.value = "";
});

// Playing with Google Maps API
var directionsService;
    var directionsRenderer
    var map;
    var geocoder;
    var infoWindow;

  // Map initialization
  function initMap() {
      directionsService = new google.maps.DirectionsService();
      directionsRenderer = new google.maps.DirectionsRenderer();
      geocoder = new google.maps.Geocoder();

      const coordinates = { lat: 35.221050, lng: -97.445938};

      map = new google.maps.Map(document.getElementById("map"), {
          zoom: 13,
          center: coordinates,
      });
      directionsRenderer.setMap(map);

      map.addListener("click", (e) => {
        alert("You clicked the map at " + JSON.stringify(e.latLng.toJSON(), null, 2));
        console.log(e.latLng);
        document.getElementById('circleLat').value = e.latLng.lat();
        document.getElementById('circleLong').value = e.latLng.lng();
      });
      }

  //Place Marker
  function placeMarker() {
      const address = document.getElementById('markerAddress').value;

    geocoder.geocode({ 'address': address }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        new google.maps.Marker({
          map: map,
          position: location,
        });
        map.setCenter(location);
      } else {
        alert('Error: ' + status);
      }
    });
  }

  // Route Calculator
  function calcRoute() {
      var start = document.getElementById('origin').value;
      var end = document.getElementById('destination').value;
      var request = {
          origin: start,
          destination: end,
          travelMode: 'DRIVING'
      };
      directionsService.route(request, function (result, status) {
          if (status == 'OK') {
              directionsRenderer.setDirections(result);
          } else { alert("An unexpected error occurred")}
      });
   }
    
  // Create Circle
      function createCircle() {
        const latitude = parseFloat(document.getElementById('circleLat').value);
        const longitude = parseFloat(document.getElementById('circleLong').value);
        const radius = parseFloat(document.getElementById('circleRad').value);
        const circleOptions = {
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: { lat: latitude, lng: longitude },
            radius: radius
        };
        new google.maps.Circle(circleOptions);
        
        map.setCenter({ lat: latitude, lng: longitude }); 
    }


  // Create Rectangle
      function createRectangle() {
        const North = parseFloat(document.getElementById('rectLat1').value);
        const South = parseFloat(document.getElementById('rectLat2').value);
        const East = parseFloat(document.getElementById('rectLong1').value);
        const West = parseFloat(document.getElementById('rectLong2').value);

        const rectangleOptions = {
            strokeColor: '#0000FF',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#0000FF',
            fillOpacity: 0.35,
            map: map,
            bounds: {
                north: North,
                south: South,
                east: East,
                west: West
            }
        };
        new google.maps.Rectangle(rectangleOptions);
      }


  