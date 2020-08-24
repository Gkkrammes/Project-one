var sundayObj = {
    quote: $('#sunday-quote'),
    cat: $('#sunday-cat'),
}

var mondayObj = {
    quote: $('#monday-quote'),
    cat: $('#monday-cat'),
}

var tuesdayObj = {
    quote: $('#tuesday-quote'),
    cat: $('#tuesday-cat'),
}

var wednesdayObj = {
    quote: $('#wednesday-quote'),
    cat: $('#wednesday-cat'),
}

var thursdayObj = {
    quote: $('#thursday-quote'),
    cat: $('#thursday-cat'),
}

var fridayObj = {
    quote: $('#friday-quote'),
    cat: $('#friday-cat'),
}

var saturdayObj = {
    quote: $('#saturday-quote'),
    cat: $('#saturday-cat'),
}

var currentDate = new Date().toLocaleDateString('en-US', {timeZoneName: 'short'})

var weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var currentDay = weekdays[new Date().getDay()];
var currentDayString = JSON.stringify(currentDay);

$('.active').removeClass('active');
$('[data-day="' + currentDay + '"]').addClass('active');

$('textarea').on('keyup', function() {
    var hourBlocks = JSON.parse(localStorage.getItem('hourBlocks'));

    if (hourBlocks == null) {
        hourBlocks = {};
    }

    var parentID = $(this).parent().attr('id')

    hourBlocks[parentID] = $(this).val();

    localStorage.setItem('hourBlocks', JSON.stringify(hourBlocks));
})

$('textarea').each(function() {
    var hourBlocks = JSON.parse(localStorage.getItem('hourBlocks'));

    $(this).val(hourBlocks[$(this).parent().attr('id')]);
})


// Imperfect way to clear images/quotes every Sunday. Only works if site is loaded on Sunday at 8.
if (currentDay == 'Sunday') {
    setInterval(function() {
        if (new Date().getHours() === 8 && new Date().getMinutes() === 0) {
            for (var i = 0; i < weekdays.length; i++){
                $('#' + weekdays[i] + '-cat').attr("src", '')
            }
        }
    }, 500);
}

var queryURL = "https://api.thecatapi.com/v1/images/search?limit=7&api_key=7c97bb69-813a-4c25-9242-4abf20df2336"

$.ajax({
  url: queryURL,
  method: "GET"
})
  
  .then(function(response) {
    console.log(response)

    for (var i = 0; i < response.length; i++) {
        var imageUrl = response[i].url;
        console.log(imageUrl)
    
        $('#' + weekdays[i] + '-cat').attr("src", imageUrl);
    }
});

var queryURL = 'https://cat-fact.herokuapp.com/facts';

$.ajax({
    url: queryURL,
    method:'GET'
})
    .then(function(response) {
        console.log(response);
    })