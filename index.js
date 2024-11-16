document.getElementById("submit-btn").addEventListener("click", function(e) {


  // Get form data
  let nm = document.getElementById("nm").value;
  let em = document.getElementById("em").value;
  let ph = document.getElementById("ph").value;
  let sko = document.getElementById("skill-one").value;
  let skt = document.getElementById("skill-two").value;
  let skth = document.getElementById("skill-three").value;
  let cerOne = document.getElementById("cerTwo").value;
  let cerTwo = document.getElementById("cerOne").value;
  let eduOne = document.getElementById("edu-one").value;
  let eduTwo = document.getElementById("edu-two").value;

  let formData = {
      name: nm,
      email: em,
      phone: ph,
      skillOne: sko,
      skillTwo: skt,
      skillThree: skth,
      certificateOne: cerOne,
      certificateTwo: cerTwo,
      educationOne: eduOne,
      educationTwo: eduTwo
  };

  localStorage.setItem("formData", JSON.stringify(formData));

  document.getElementById("myForm").reset();
});


  

// var profPic = document.getElementById("profile-img");
// var inputFile = document.getElementById("input-file");
// inputFile.addEventListener("change", function () {
//   if (inputFile) {
//     var file = inputFile.files[0];
//     var pattern = /image-*/;
//     if (!file.type.match(pattern)) {
//       alert("Invalid format, plz select image only");
//       return;
//     }
//     profPic.src = URL.createObjectURL(inputFile.files[0]);
//   }
// });
