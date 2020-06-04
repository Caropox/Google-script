function maFonction() {
  var classeur = SpreadsheetApp.getActiveSpreadsheet();
  
  var calendrier = CalendarApp.getDefaultCalendar();
  var calendrier = CalendarApp.getCalendarById(
    'normandiewebschool.fr_classroomc8b7ce0f@group.calendar.google.com',);
  Logger.log('The calendar is named "%s".', calendrier.getName());
  
  var debut = new Date('03/06/2020');
  var fin = new Date('10/08/2020');
  
  var evenements = calendrier.getEvents(debut, fin);
  Logger.log(evenements.length);
  var nombre = evenements.length;
  
  classeur.insertSheet(0);
  
  var feuille = classeur.getSheets()[0];
  
  for(var i=0; i<nombre; i++){
    feuille.getRange(i+1, 4).setValue(evenements[i].getStartTime());
    feuille.getRange(i+1, 1).setValue(evenements[i].getTitle());
    
    feuille.getRange(i+1, 3).setValue(evenements[i].getLocation());
    feuille.getRange(i+1, 2).setValue(evenements[i].getDescription());
    feuille.getRange(i+1, 5).setValue(evenements[i].getEndTime());
    feuille.getRange(i+1, 6).setValue(evenements[i].getColor());
    feuille.getRange(i+1, 7).setValue(calendrier.getName());
  }
}