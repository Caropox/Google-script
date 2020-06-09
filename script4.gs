function myFunction() {
  var spreadsheet = SpreadsheetApp.getActiveSheet ();
  
  var calendarId = spreadsheet.getRange('E4').getValue();
  var eventCal = CalendarApp.getCalendarById ('normandiewebschool.fr_classroomc7b2de52@group.calendar.google.com');
  
  
  var lr = spreadsheet.getLastRow();
  var count = spreadsheet.getRange("A8:F"+lr+"").getValues();
  
  for (x=0; x<count.length; x++) {
          var shift = count[x];
      
      var summary = shift[0];
      var startTime = shift[1];
      var endTime = shift[2];
      var guests = shift[3];
      var description = shift[4];
      var location = shift[5]; 
  
      var event = {
          'location': location,
          'description': description,
          'guests':guests +',',
          'sendInvites': 'True',
}
  eventCal.createEvent(summary, startTime, endTime, event)
   }
 
  }