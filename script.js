//Jeg starter med å hente reiseinfo 


const reiseType = document.getElementById('reisetype'); 
const fra = document.getElementById('fra'); 
const til = document.getElementById('til'); 
const utreise = document.getElementById('utreise'); 
const antallVoksne = document.getElementById('antallVoksne'); 
const antallBarn = document.getElementById('antallBarn'); 
const next = document.getElementById('btnNeste');
const btnSubmit = document.getElementById('submitBtn'); 


class Reiseinfo{
     name = "aname";
     reiseType = reiseType.options[reiseType.selectedIndex].value; // Med jquery can man bruke:   $('#reisetype').val()
     fraSted =  fra.options[fra.selectedIndex].value;
     tilSted = til.options[til.selectedIndex].value; 
     utreiseDato = utreise.value;
     antallVoksne = antallVoksne.value;
     antallBarn = antallBarn.value; 
}


btnSubmit.addEventListener('click', () => {
  
})

const test = new Reiseinfo(); 
console.log(test.name); 
 













/*Gjør slik at man ikke kan velge samme by på fra og til feltene*/
$("#fra").change(function () {
    $("#til").find("option").each(function () {
        $(this).removeAttr("disabled");
    });
    $("#til [value=" + $(this).val() + "]").attr("disabled", "disabled");
})

$("#til").change(function () {
    $("#fra").find("option").each(function () {
        $(this).removeAttr("disabled");
    });
    $("#fra [value=" + $(this).val() + "]").attr("disabled", "disabled");
})
/*Gjør at bare et skjema viser om gangen. Dersom man trykker neste eller tilbake så endrer man skjema*/

$('#regform2').hide();
$("#regform3").hide();
$("#regform33").hide();



$("#btnNeste").click(function () {
    $("#regform").hide();
    $("#regform2").show();
});
$("#btnTilbake1").click(function () {
    $("#regform2").hide();
    $("#regform").show();
});
$("#btnTilbake2").click(function () {
    $("#personForm").hide();
    $("#regform2").show();
});
$("#btnNeste2").click(function () {
    $("#regform2").hide();
    $("#regform3").show();
});

$("#submitBtn").click(function () {
    $("#regform3").hide();
    $("#Billett").show();
});
$("#btnTilbake2").click(function () {
    $("#regform3").hide();
    $("#Billett").show();
});



/*  console.log('button was clicked');
    console.log('hello2');
    console.log($('#reisetype').val()); 
    console.log($('#fra').val()); 
    let reiseTypen = reiseType.options[select.selectedIndex].value;
    console.log(reiseTypen+"22222"); 
    console.log(reiseType.options[select.selectedIndex].value+"3333333");
    
    const info = new Reiseinfo(); 
    console.log("fra sted er: " + info.name);
    console.log("fra sted er: " + info.name);*/


    /*const info = new Reiseinfo(); 
console.log("fra sted er: " + info.name);
console.log("fra sted er: " + info.name);


var select = document.getElementById('reisetype');
var value = select.options[select.selectedIndex].value;
console.log(value); 

const reiseTypenn = reiseType.options[select.selectedIndex].value;
console.log(reiseTypenn);*/

/*
//JQuery code
$('#submitBtn').click(function(){
    console.log("button is now clicked");
    $('#console').html( $('#console').html() + '#foo is now visible'+ '<br>'  ) ;
}); */