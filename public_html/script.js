
$("document").ready(function(){
    $("h1").css("color", "yellow");
    $("h2").css ("color", "red");
  //$("list-group").bind('mouseover', mouseOverMe).bond('mouseout',mouseOutme);
   $("#headingTwo .panel-title").bind('mouseover', mouseOverMe);
   $("#headingTwo .panel-title").bind('mouseout', mouseOutMe);
   
   $('#ReplaceWText').bind('click',replaceWText);

    $('#ID').bind('click',addAPara);

    $('#hobbies').bind('click', removePara);
    
    $('#tech').bind('click', hideThePage);
    
    $('#Css').bind('click', showThePage);
    
    $('.jumbotron').bind('mouseover',mouseOverMe).bind('mouseout',mouseOutMe);
   //all of the code here allows for the specific ID's to be called and used in specfic coding//
}); 

function showThePage() {
    
}

function hideThePage () {
    
} 
//---text add/remove---//

function replaceWText(){
}

function removePara() {
  
    $('#replaceWText p:last').remove();
}

function addAPara() {
    $('#replaceWText').append('<p>ADDED</P>');
    }
 
 //--mouse over animations--//
 function mouseOverMe(){
     $(".jumbotron").css("background-color", "red");
 }

function mouseOutMe(){
    console.log("jumbotron")
    $("#headingTwo .panel-title").css("background-color", "white");
    
    $('.jumbotron').css("background-color", "purple");
} 



