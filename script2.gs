// Période Cible
let debut = new Date('01/01/2020'); //Format de date US : MM/DD/YYYY
let fin = new Date('01/31/2020');


// Script A3 Dev
function myFunctionDev() {
  var classeur = SpreadsheetApp.getActiveSpreadsheet();
  //ID de l'agenda
  var calendrier = CalendarApp.getCalendarById(
    'normandiewebschool.fr_classroomc8b7ce0f@group.calendar.google.com',);
  Logger.log('The calendar is named "%s".', calendrier.getName());
  

  
  var evenements = calendrier.getEvents(debut, fin);
  Logger.log(evenements.length);
  var nombre = evenements.length;
  
  
  classeur.insertSheet(0);
  
  var feuille = classeur.getSheets()[0];
  var listArray = [];
  feuille.setName('toto');
   
  for(var i=0; i<nombre; i++){
    feuille.getRange(1, 1).setValue('Date');
    feuille.getRange(1, 2).setValue('Classe');
    feuille.getRange(1, 3).setValue('Session');
    feuille.getRange(1, 4).setValue('Intervenant');
    feuille.getRange(1, 5).setValue('Absent');
    feuille.getRange(1, 6).setValue('Déroulé');
    feuille.getRange(1, 7).setValue('Évaluation');
    feuille.getRange(i+2, 1).setValue(evenements[i].getStartTime());
    feuille.getRange(i+2, 3).setValue(evenements[i].getTitle());
    feuille.getRange(i+2, 10).setValue(evenements[i].getDescription());
  }
}


// Lancement des scripts
function go(){
  myFunctionDev();
}

function onOpen(e)  {
  if (e && e.authMode == ScriptApp.AuthMode.LIMITED) {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Générer')
    .addItem('Parcourir Agenda', 'go')
    .addToUi();
  }
}
function onInstall(e) {
  onOpen(e);
}