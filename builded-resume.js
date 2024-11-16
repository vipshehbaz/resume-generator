window.addEventListener("load", function() {
   
    const storedData = JSON.parse(localStorage.getItem('formData'));

    if (storedData) {
        document.getElementById("resume-name").textContent = storedData.name;
        document.getElementById("resume-email").textContent = storedData.email;
        document.getElementById("resume-phone").textContent = storedData.phone;
        document.getElementById("resume-skill-one").textContent = storedData.skillOne;
        document.getElementById("resume-skill-two").textContent = storedData.skillTwo;
        document.getElementById("resume-skill-three").textContent = storedData.skillThree;
        document.getElementById("resume-cert-one").textContent = storedData.certificateOne;
        document.getElementById("resume-cert-two").textContent = storedData.certificateTwo;
        document.getElementById("resume-edu-one").textContent = storedData.educationOne;
        document.getElementById("resume-edu-two").textContent = storedData.educationTwo;
    } else {
        console.log("No data found in localStorage");
    }
});
