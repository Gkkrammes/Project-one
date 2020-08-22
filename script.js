var sundayObj = {
    heading:$('#sunday'),
    nine:$('#sunday-9'),
    ten:$('#sunday-10'),
    eleven:$('#sunday-11'),
    twelve:$('#sunday-12'),
    one:$('#sunday-1'),
    two:$('#sunday-2'),
    three:$('#sunday-3'),
    four:$('#sunday-5'),
    five:$('#sunday-6'),
    quote:$('#sunday-quote'),
    cat:$('#sunday-cat'),
}

var mondayObj = {
    heading:$('#monday'),
    nine:$('#monday-9'),
    ten:$('#monday-10'),
    eleven:$('#monday-11'),
    twelve:$('#monday-12'),
    one:$('#monday-1'),
    two:$('#monday-2'),
    three:$('#monday-3'),
    four:$('#monday-5'),
    five:$('#monday-6'),
    quote:$('#monday-quote'),
    cat:$('#monday-cat'),
}

var tuesdayObj = {
    heading:$('#tuesday'),
    nine:$('#tuesday-9'),
    ten:$('#tuesday-10'),
    eleven:$('#tuesday-11'),
    twelve:$('#tuesday-12'),
    one:$('#tuesday-1'),
    two:$('#tuesday-2'),
    three:$('#tuesday-3'),
    four:$('#tuesday-5'),
    five:$('#tuesday-6'),
    quote:$('#tuesday-quote'),
    cat:$('#tuesday-cat'),
}

var wednesdayObj = {
    heading:$('#wednesday'),
    nine:$('#wednesday-9'),
    ten:$('#wednesday-10'),
    eleven:$('#wednesday-11'),
    twelve:$('#wednesday-12'),
    one:$('#wednesday-1'),
    two:$('#wednesday-2'),
    three:$('#wednesday-3'),
    four:$('#wednesday-5'),
    five:$('#wednesday-6'),
    quote:$('#wednesday-quote'),
    cat:$('#wednesday-cat'),
}

var thursdayObj = {
    heading:$('#thursday'),
    nine:$('#thursday-9'),
    ten:$('#thursday-10'),
    eleven:$('#thursday-11'),
    twelve:$('#thursday-12'),
    one:$('#thursday-1'),
    two:$('#thursday-2'),
    three:$('#thursday-3'),
    four:$('#thursday-5'),
    five:$('#thursday-6'),
    quote:$('#thursday-quote'),
    cat:$('#thursday-cat'),
}

var fridayObj = {
    heading:$('#friday'),
    nine:$('#friday-9'),
    ten:$('#friday-10'),
    eleven:$('#friday-11'),
    twelve:$('#friday-12'),
    one:$('#friday-1'),
    two:$('#friday-2'),
    three:$('#friday-3'),
    four:$('#friday-5'),
    five:$('#friday-6'),
    quote:$('#friday-quote'),
    cat:$('#friday-cat'),
}

var saturdayObj = {
    heading:$('#saturday'),
    nine:$('#saturday-9'),
    ten:$('#saturday-10'),
    eleven:$('#saturday-11'),
    twelve:$('#saturday-12'),
    one:$('#saturday-1'),
    two:$('#saturday-2'),
    three:$('#saturday-3'),
    four:$('#saturday-5'),
    five:$('#saturday-6'),
    quote:$('#saturday-quote'),
    cat:$('#saturday-cat'),
}

var currentDate = new Date().toLocaleDateString('en-US', {timeZoneName: 'short'})

var weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var currentDay = weekdays[new Date().getDay()];
var currentDayString = JSON.stringify(currentDay);

$('.active').removeClass('active');
$('[data-day="' + currentDay + '"]').addClass('active');


