window.addEventListener("load", tableaualeatoire);
var gens = [] 
let nb_personne = prompt("Combien de personnes voulez-vous initialiser ?")

function tableaualeatoire(event){
  document.write("<table type = width:100%>");
  document.write("<tr>");
  document.write("<th>Last Name</th><th>Name</th><th>Age</th><th>Job</th><th>Tel</th><th>Adress</th><th>City</th>");
  document.write("</tr>");
  for(var i=0; i<=nb_personne; i++){
    var table = document.createElement("table");
    var line = document.createElement("tr");
    var cell = document.createElement("td");
    cell.innterHTML= "  ";

    var Last_Name = faker.name.lastName();
    var First_Name = faker.name.firstName();
    var Age = randRange(18,100);
    var Job = faker.lorem.words();
    var Tel = faker.phone.phoneNumber();
    var Adress = faker.address.streetAddress();
    var City = faker.address.city();

    document.write("<tr>");
    document.write("<td>" + Last_Name + "</td>");
    document.write("<td>" + First_Name + "</td>");
    document.write("<td>" + Age + "</td>");
    document.write("<td>" + Job + "</td>");
    document.write("<td>" + Tel + "</td>");
    document.write("<td>" + Adress + "</td>");
    document.write("<td>" + City + "</td>")
    document.write("</tr>");
  }
  document.write("</table>");
}

function randRange(min, max){
  return Math.floor(Math.random() * (max-min+1)) +min;
}