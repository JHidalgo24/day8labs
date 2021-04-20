$(document).ready(function () {
    $("form").on("change",based)
});

function based(event) {
    let dayPicked = $('input[name=weekday]:checked').val();
    switch (dayPicked){
        case "monday":
            $("#eventWorkOutput").text("Doctor App.");
            $("#eventWorkTimeOutput").text("10:30am - 12:00pm");
            $("#eventExerciseOutput").text("Movie");
            $("#evenExerciseTimeOutput").text("8:00pm - 10:00pm");
            break;
        case "tuesday":
            $("#eventWorkOutput").text("Meeting");
            $("#eventWorkTimeOutput").text("11:30am - 3:00pm");
            $("#eventExerciseOutput").text("Library Date");
            $("#evenExerciseTimeOutput").text("3:30pm - 7:00pm");
            break;
        case "wednesday":
            $("#eventWorkOutput").text("Gym");
            $("#eventWorkTimeOutput").text("10:30am - 11:30am");
            $("#eventExerciseOutput").text("Meeting");
            $("#evenExerciseTimeOutput").text("6:30pm - 9:00pm");
            break;
        case "thursday":
            $("#eventWorkOutput").text("Dinner with Dad");
            $("#eventWorkTimeOutput").text("10:00am - 12:00pm");
            $("#eventExerciseOutput").text("Funeral");
            $("#evenExerciseTimeOutput").text("5:30pm - 9:00pm");
            break;
        case "friday":
            $("#eventWorkOutput").text("Trip to Cancun");
            $("#eventWorkTimeOutput").text("10:30am - 12:00pm");
            $("#eventExerciseOutput").text("Dinner in Cancun");
            $("#evenExerciseTimeOutput").text("7:30pm - 12:00am");
            break;
        case "saturday":
            $("#eventWorkOutput").text("Pizza Night");
            $("#eventWorkTimeOutput").text("5:30pm - 7:00pm");
            $("#eventExerciseOutput").text("Ice skating");
            $("#evenExerciseTimeOutput").text("7:30pm - 9:00pm");
            break;
        case "sunday":
            $("#eventWorkOutput").text("Hamilton");
            $("#eventWorkTimeOutput").text("10:30am - 12:00pm");
            $("#eventExerciseOutput").text("Grocery Shopping");
            $("#evenExerciseTimeOutput").text("11:30am - 2:00pm");
            break;
    }
}