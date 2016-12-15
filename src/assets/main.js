$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/srcrustaceo.json',
    dataType: 'jsonp',
    success: function(response) {
      response.courses.completed.forEach(function (courseCompleted) {
        var courseContent = $('<div class="course">')
        .append('<h3>'+courseCompleted.title+'</h3>')
        .append('<img src="'+courseCompleted.badge+'">')
        .append('<a href="'+courseCompleted.url+'" target="_blank" class="btn btn-primary">See Course</a>');

        $('#badges')
        .append(courseContent);

      });
    }
  });


});
