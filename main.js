//Carousel
$(document).ready(function () {
	const testCarousel = $('#carousel');
	testCarousel.owlCarousel({
        autoWidth: false,
		items: 1,
        loop: true,
        dots: false,
        nav: true,
    navText: [
          '<svg width="23" height="50" viewBox="0 0 23 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.8958 1.89998L2.87914 20.9166C0.633304 23.1625 0.633304 26.8375 2.87914 29.0833L21.8958 48.1" stroke="#D3B47F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          '<svg width="23" height="50" viewBox="0 0 23 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.10418 1.89998L20.1209 20.9166C22.3667 23.1625 22.3667 26.8375 20.1209 29.0833L1.10419 48.1" stroke="#D3B47F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        ],
        responsive: {
          0:{
            dots: true,
            nav: false
          },
          600:{
            dots: false,
            nav: true
        }}
	});

});


let modalButton = document.querySelector('.reserve__button');
let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.modal__window-close');
let overlay = document.querySelector('.modal__overlay');

modalButton.addEventListener('click', function(ev) {
    ev.preventDefault();
    modal.classList.add('modal--active');
});

closeButton.addEventListener('click', function(ev) {
    ev.preventDefault();
    modal.classList.remove('modal--active');
});

overlay.addEventListener('click', function(ev) {
    ev.preventDefault();
    modal.classList.remove('modal--active');
});


$(document).ready(function() { 
    $("#feedback").submit(function(){ 
      var form = $(this); 
      var error = false; 
      form.find('input, textarea').each( function(){ 
        if ($(this).val() == '') { 
          alert('Зaпoлнитe пoлe "'+$(this).attr('placeholder')+'"!');
          error = true; 
        }
      });
      if (!error) { 
        var data = form.serialize(); 
        $.ajax({ 
          type: 'POST', 
          url: 'mail.php', 
          dataType: 'json', 
          data: data,
          beforeSend: function(data) { 
            form.find('input[type="submit"]').attr('disabled', 'disabled'); 
          },
          success: function(data){ 
            if (data['error']) { 
              alert(data['error']);
            } else { 
              alert('Письмo было отправлено, проверьте почту.');
            }
          },
          error: function (xhr, ajaxOptions, thrownError) { 
            alert(xhr.status); 
            alert(thrownError);
          },
          complete: function(data) {
            form.find('input[type="submit"]').prop('disabled', false); 
          }
                        
             });
      }
      return false; // вырубaeм стaндaртную oтпрaвку фoрмы
    });
  });



  //Mobile navigation
  const navIcon = document.querySelector('.nav-icon');
  const nav = document.querySelector('.nav__menu');
  
  navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon--active');
    nav.classList.toggle('nav__menu--active');
  });

  // Находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll('.nav__link');

// Обходим ссылки методом forEach
navLinks.forEach(function (item) {
	// Для каждой ссылки добавляем прослушку по событию "Клик"
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
		nav.classList.remove('nav__menu--active'); // Убираем активный класс у блока моб. навигации
	})
});

//Backtop Button
const backTopBtn = document.querySelector('#backtop');

backTopBtn.style.opacity = 0;

document.addEventListener('scroll', function(){
	if(window.pageYOffset > 899) {
		backTopBtn.style.opacity = 1;
	}
	else
	{
		backTopBtn.style.opacity = 0;
	}
});