const btnHam = document.querySelector('.ham-btn');
const btnTimes = document.querySelector('.times-btn');
const navBar = document.getElementById('nav-bar');

btnHam.addEventListener('click', function(){
    if(btnHam.className !== ""){
        btnHam.style.display = "none";
        btnTimes.style.display = "block";
        navBar.classList.add("show-nav");
    }
})

btnTimes.addEventListener('click', function(){
    if(btnHam.className !== ""){
        this.style.display = "none";
        btnHam.style.display = "block";
        navBar.classList.remove("show-nav");
    }
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