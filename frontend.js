// frontend.js
const BASE_URL="http://localhost:4000"
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
