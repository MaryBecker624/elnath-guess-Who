console.log('js');
peopleArray =['Joe', 'Nasir', 'Guillermo', 'Mary'];
$( document ).ready(onReady);

var randomName = "";

function onReady(){
    console.log('JQ');
    randomName = randomNameGenerator();
    console.log(randomName);
    $('#intro').append('Which person is ' + randomName);
    $('.person').on("click", comparePeople); //FIX THIS

}

function randomNameGenerator(){
    thePerson = peopleArray[randomNumber(0,3)];
    return thePerson;
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function comparePeople(e, complete){
    console.log("in comparePeople");
    var personClicked = $(this).data('name');
    if (personClicked === randomName) {
        alert ('Good Job!');
        // alert is coming up when you click correctly, but the header at the top is not repopulating and the variable name won't switch
        // randomName = randomNameGenerator();
        // console.log("New random name" + randomName);
        // $('#intro').replaceWith('Which person is ' + randomName);
        $( '#intro' ).empty();
        console.log('JQ');
        randomName = randomNameGenerator();
        console.log(randomName);
        $('#intro').append('Which person is ' + randomName);
        // onReady();
    }
    else {
        alert ('Try again.');
    }
}

// console.log($('div:first').data('name'))