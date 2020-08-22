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

<<<<<<< HEAD

=======
var storedTasks = localStorage.getItem('storedTasks');

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
>>>>>>> 798939267ed39db79dde873cd582e755947fd1e8
