(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');        
      }, false);
    });
  }, false);
})();
function validateForm(pag){
    //document.getElementById("myForm").submit();
    //console.log("getAPI");
    var encodedURL = "https://api.github.com/users/mburbage";
    $.get(encodedURL, function(data, status){
        //console.log(data);
    });
    return false;//return form.classList.add('was-validated');
    
}
function getGithubBio(){

  var profileName = document.getElementById("userName").value;
  document.getElementById("bioForm").style.display = "none";
  var encodedURL = "https://api.github.com/users/" + profileName;
  $.get(encodedURL, function(data, status){
      //console.log(status);
      buildBioView(data);
  });
  return false;
}
function buildBioView(data){
  //document.getElementById("bioSpin").style.display = "none";
  var bioHTML = '';
  
  bioHTML += '<div id=\"gitAvatar\"><img class=\"avatarImg\" src=\"' + data.avatar_url + '\" alt="Open GitHub Profile" /></div>';
  bioHTML += '<div id=\"gitName\" class=\"gitValue\">' + data.login + '</div>';
  bioHTML += '<div id=\"gitLink\"><a class=\"avatarLink\" href=\"' + data.html_url + '\" title="Open GitHub Profile" target="_blank"><i class="fas fa-external-link-alt" size="2x"></i></a></div>';
  bioHTML += '<div id=\"gitRepo\" class=\"gitValueSml\"><strong>Public Repos:</strong> ' + data.public_repos + ' <br/><strong>Date Created:</strong> ' + jsdate(data.created_at) + '</div>';
  document.getElementById("bioData").innerHTML = bioHTML;
  document.getElementById("bioData").style.display = "block";

  console.log(data);
}
function jsdate(cdate){
  return $.format.date(cdate, "dd/MM/yyyy");
}
