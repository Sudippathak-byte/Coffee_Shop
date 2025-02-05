document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar');
    const searchForm = document.querySelector('.search-form');
    const cartItem = document.querySelector('.cart-items-container');

    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active'); 
        cartItem.classList.remove('active'); 
    });

    // Other event listeners for search and cart buttons
    document.querySelector('#search-btn').onclick = () => {
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        cartItem.classList.remove('active');
    }

    document.querySelector('#cart-btn').onclick = () => {
        cartItem.classList.toggle('active');
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
    }

    // Hide navbar on scroll
    window.onscroll = () => {
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
    }
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

  // Show popup when the window loads
  window.onload = function() {
    document.getElementById('popup').style.visibility = 'visible';
};

// Close popup function
function closePopup() {
    document.getElementById('popup').style.visibility = 'hidden';
}

// Sign up function (you can add your own functionality here)
function signUp() {
    alert("Sign up button clicked!");
    closePopup();
}




let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("card");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Auto-play functionality
setInterval(function() {
    changeSlide(1);
}, 3000); // Change every 3 seconds



    document.addEventListener('DOMContentLoaded', function() {
        // Simple Calendar Implementation
        const calendar = document.getElementById('calendar');
        const currentDate = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
      
        function createCalendar(year, month) {
          const firstDay = new Date(year, month, 1);
          const lastDay = new Date(year, month + 1, 0);
          let html = `<h3>${monthNames[month]} ${year}</h3>`;
          html += '<table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>';
      
          for (let i = 0; i < firstDay.getDay(); i++) {
            html += '<td></td>';
          }
      
          for (let day = 1; day <= lastDay.getDate(); day++) {
            if ((day + firstDay.getDay() - 1) % 7 === 0) {
              html += '</tr><tr>';
            }
            html += `<td>${day}</td>`;
          }
      
          html += '</tr></table>';
          calendar.innerHTML = html;
        }
      
        createCalendar(currentDate.getFullYear(), currentDate.getMonth());
      
        // Form Submission
        const form = document.getElementById('eventRegistrationForm');
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          const formData = new FormData(form);
          const data = Object.fromEntries(formData);
          
          // Here you would typically send the data to a server for processing
          // using AJAX or fetch API
          console.log('Form Data:', data); 
          alert('Thank you for registering!');
        });
      });




   


    // coffee selection
    // Filter Coffee Items
function filterCoffee() {
    const searchInput = document.getElementById("coffeeSearch").value.toLowerCase();
    const coffeeItems = document.querySelectorAll(".coffee-item");

    coffeeItems.forEach(item => {
        const coffeeName = item.dataset.coffee.toLowerCase();
        if (coffeeName.includes(searchInput)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}


function showSubscribeModal() {
    alert("Button clicked! The subscription modal will now open.");
    document.getElementById("subscribe-modal").style.display = "block"; // Show the modal
}

function closeSubscribeModal() {
    document.getElementById("subscribe-modal").style.display = "none"; // Hide the modal
}



                                                                                                                                           