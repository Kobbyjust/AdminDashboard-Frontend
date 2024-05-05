// Make a GET request to fetch property details
//// Make a GET request to fetch all properties
// const BASE_URL="http://localhost:4000"
const BASE_URL="https://kobby-admindashboard-backend.onrender.com"
fetch( BASE_URL + '/properties')
.then(response => response.json())
.then(properties => {
  // Update HTML with property details
  const propertyDetailsElement = document.getElementById('property-details');
  const propertyDElement = document.getElementById('property-1');
  const table = `
    <div class="list1">
      <div class="row">
        <h4>History</h4>
        <a href="#">See all</a>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Dates</th>
            <th>Name</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <!-- Populate with property details dynamically -->
          ${properties.map(property => `
            <tr>
              <td>${property.id}</td>
              <td>${property.date}</td>
              <td>${property.owner}</td>
              <td>${property.type}</td>
              <td>${property.amount}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
  const t2 = table;
  if (propertyDetailsElement) {
    propertyDetailsElement.innerHTML = table
  }
  if (propertyDElement) {
    propertyDElement.innerHTML = t2
  }
  
})
.catch(error => {
  console.error('Error fetching properties:', error);
});


  // frontend.js

// Function to fetch property details from the backend
async function fetchProperties() {
  try {
    const response = await fetch( BASE_URL + '/properties');
    const properties = await response.json();
    // Handle the fetched properties, e.g., display them in the UI
    console.log(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
  }
}

// Function to add a new property
async function addProperty(property) {
  try {
    const response = await fetch( BASE_URL + '/properties', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(property),
    });
    const newProperty = await response.json();
    // Handle the newly added property, e.g., update the UI
    console.log('New property added:', newProperty);
  } catch (error) {
    console.error('Error adding property:', error);
  }
}

// Function to update a property
async function updateProperty(id, updatedProperty) {
  try {
    const response = await fetch( BASE_URL + `/properties/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProperty),
    });
    const updatedPropertyResponse = await response.json();
    // Handle the updated property, e.g., update the UI
    console.log('Updated property:', updatedPropertyResponse);
  } catch (error) {
    console.error('Error updating property:', error);
  }
}

// Function to delete a property
async function deleteProperty(id) {
  try {
    const response = await fetch( BASE_URL + `/properties/${id}`, {
      method: 'DELETE',
    });
    const deletionResponse = await response.json();
    // Handle the deletion response, e.g., update the UI
    console.log('Property deletion response:', deletionResponse);
  } catch (error) {
    console.error('Error deleting property:', error);
  }
}

// Call the fetchProperties function when the page loads
window.addEventListener('DOMContentLoaded', fetchProperties);


// Get the modal
var modal = document.getElementById("popup-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to display property details in the popup modal
function displayPropertyDetails(property) {
  var propertyDetailsPopup = document.getElementById("property-details-popup");
  propertyDetailsPopup.innerHTML = `
    <p><strong>ID:</strong> ${property.id}</p>
    <p><strong>Name:</strong> ${property.name}</p>
    <p><strong>Type:</strong> ${property.type}</p>
    <p><strong>Amount:</strong> ${property.amount}</p>
    <p><strong>Owner:</strong> ${property.owner}</p>
    <p><strong>Date:</strong> ${property.date}</p>
  `;
  modal.style.display = "block"; // Display the modal
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none"; // Hide the modal
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Hide the modal
  }
}



// Function to render the list of properties on the page
function renderPropertyList(properties) {
  properties.forEach(property => {
    const propertyElement = document.createElement('div');
    propertyElement.innerHTML = `
      <div class="property-item" data-property-id="${property.id}">
        <h3>${property.name}</h3>
        <p>Type: ${property.type}</p>
        <p>Amount: ${property.amount}</p>
        <p>Owner: ${property.owner}</p>
        <p>Date: ${property.date}</p>
      </div>
    `;
    // Append the property element to the container in your HTML
    document.getElementById('property-list').appendChild(propertyElement);
  });
}

// Function to open the property details popup
function openPropertyDetailsPopup(property) {
  const modal = document.getElementById("popup-modal");
  const closButton = document.getElementById("close");
  const modalContent= document.getElementById("property-details-popup");

  modal.classList.add("show");
  modalContent.innerHTML=`<h1>Modal Content - ${property}</h1>`

  closButton.addEventListener("click", modal.classList.remove("show"));


  // const url = `/properties?propertyId=${propertyId}`;
  // window.location.href = url;
}



// Generate pop up from query params
let url = new URL(window.location.href);
let id = url.searchParams.get("id");
if (id !== null) {
  openPropertyDetailsPopup(id)
}


const modalButton = document.getElementById("show-modal");
if (modalButton)
  modalButton.addEventListener("click", ()=>openPropertyDetailsPopup(300));

// Assuming you have a function to fetch properties from the backend
async function fetchProperties() {
  try {
    const response = await fetch('/properties');
    const properties = await response.json();
    renderPropertyList(properties); // Render the list of properties when fetched
  } catch (error) {
    console.error('Error fetching properties:', error);
  }
}

// Call the fetchProperties function when the page loads
window.addEventListener('DOMContentLoaded', fetchProperties);

// Event listener for property item clicks
// document.addEventListener('click', event => {
//   const propertyItem = event.target.closest('.property-item');
//   if (propertyItem) {
//     const propertyId = propertyItem.dataset.propertyId;
//     openPropertyDetailsPopup(propertyId);
//   }
// });
