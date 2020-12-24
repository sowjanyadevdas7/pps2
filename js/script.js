var typed = new Typed(".typing", {
    strings: ["Educationist", "Social Worker","Advocate", "Blogger"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
}) 


function all_show(){
    var a = document.getElementById('type11');
    var b = document.getElementById('type12');
    var c = document.getElementById('type13');
  
      a.style.display = 'block';
      b.style.display = 'block';
      c.style.display = 'block';
}

function type1_blog(){
    var a = document.getElementById('type11');
    var b = document.getElementById('type12');
    var c = document.getElementById('type13');
  
      a.style.display = 'block';
      b.style.display = 'none';
      c.style.display = 'none';
}

function type2_blog(){
    var a = document.getElementById('type11');
    var b = document.getElementById('type12');
    var c = document.getElementById('type13');
  
      a.style.display = 'none';
      b.style.display = 'block';
      c.style.display = 'none';
}

function type3_blog(){
    var a = document.getElementById('type11');
    var b = document.getElementById('type12');
    var c = document.getElementById('type13');
  
      a.style.display = 'none';
      b.style.display = 'none';
      c.style.display = 'block';
}