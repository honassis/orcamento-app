
  var PreviewIMG = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output');

      output.src = reader.result;
      document.getElementById("output").style.display="block";
    };
    reader.readAsDataURL(event.target.files[0]);
  };
function CallFile(){
    document.getElementById('capa').click();

}