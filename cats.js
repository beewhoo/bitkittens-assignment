document.addEventListener('DOMContentLoaded', function() {

var buttonCat = document.querySelector('.summon-cats');
var catBox = document.querySelector('.cat-box');
var dogBox = document.querySelector('.dog-box');
var buttonDog = document.querySelector('.summon-dogs');

buttonCat.addEventListener('click', function(){

  //ajax
  $.ajax({
    url:'http://bitkittens.herokuapp.com/cats.json',
    method:'GET',
    data:{number:13}
  }).done(function(dataResponse){
    cats = dataResponse.cats;
    for (var i = 0; i < cats.length; i++) {
    var imageTag = document.createElement('img');
    imageTag.src=cats[i].photo;
    imageTag.alt=cats[i].name;
    catBox.append(imageTag);
    }
  })

})


buttonDog.addEventListener('click', function(){

  //ajax
  $.ajax({
    url:'https://dog.ceo/api/breeds/image/random/13',
    method:'GET',
  }).done(function(dataResponse){
    var dogs = dataResponse.message
    for (var i = 0; i < dogs.length; i++) {
    var imageTag = document.createElement('img');
    imageTag.src=dogs[i]
    dogBox.append(imageTag);
    }
  })

})




})
