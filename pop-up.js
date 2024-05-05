const BASE_URL = "https://kobby-admindashboard-backend.onrender.com";

document.addEventListener("DOMContentLoaded", function () {
  const showModalButton = document.getElementById("show-property-modal");
  const popupModal = document.getElementById("popup-modal");
  const propertyDetailsPopup = document.getElementById(
    "property-details-popup"
  );
  const propertyIdInput = document.getElementById("property-id-input");

  showModalButton.addEventListener("click", function () {
    const propertyId = propertyIdInput.value;

    // Fetch property details from backend API
    fetch(BASE_URL + `/properties/${propertyId}`)
      .then((response) => response.json())
      .then((property) => {
        // Populate property details in the pop-up modal
        propertyDetailsPopup.innerHTML = `
            <p>ID: ${property.id}</p>
            <p>Name: ${property.name}</p>
            <p>Description: ${property.description}</p>
            <!-- Add more details as needed -->
          `;

        // Show the pop-up modal
        popupModal.style.display = "block";
      })
      .catch((error) =>
        console.error("Error fetching property details:", error)
      );
  });

  // Close the pop-up modal when the close button is clicked
  document.querySelector(".close").addEventListener("click", function () {
    popupModal.style.display = "none";
  });
});
