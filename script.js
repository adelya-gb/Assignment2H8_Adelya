document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let main = document.querySelector("#gone")

    let newName = document.getElementById("nameInput").value;
    let newRole = document.getElementById("roleInput").value;
    let newAvailability = document.getElementById("availabilityInput").value;
    let newAge = document.getElementById("ageInput").value;
    let newLocation = document.getElementById("locationInput").value;
    let newExperience = document.getElementById("experienceInput").value;
    let newEmail = document.getElementById("emailInput").value;

    //update
    let headerName = document.querySelector("#currentName");
    let headerRole = document.querySelector("#currentRole");
    let headerAvailability = document.querySelector("#currentAvailability");
    let headerAge = document.querySelector("#currentAge");
    let headerLocation = document.querySelector("#currentLocation");
    let headerExperience = document.querySelector("#currentExperience");
    let headerEmail = document.querySelector("#currentEmail");

    headerName.textContent = newName;
    headerRole.textContent = newRole;
    headerAvailability.textContent = newAvailability;
    headerAge.textContent = newAge;
    headerLocation.textContent = newLocation;
    headerExperience.textContent = newExperience;
    headerEmail.textContent = newEmail;

    main.style.display = 'none';
});
