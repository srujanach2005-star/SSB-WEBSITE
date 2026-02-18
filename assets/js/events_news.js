document.addEventListener("DOMContentLoaded", () => {
  const categories = [
    {
      id: 'events1',
      name: 'Virtual Events',
      events: [
        {
          title: "The AI Revolution Webinar",
          description: " ",
          images: [
            "assets/media/event_1.jpg"
          ]
        },
        {
          title: "Cyber Security and Ethical Hacking Webinar",
          description: " ",
          images: [
            "assets/media/event_2.jpg"
          ]
        },
        {
          title: "Security Operation Center",
          description: " ",
          images: [
            "assets/media/event_3.jpg"
          ]
        },
        {
          title: "Digital Forensics",
          description: " ",
          images: [
            "assets/media/event_4.jpg"
          ]
        }
      ]
    },
    {
      id: 'events2',
      name: 'CSR (Corporate Social Responsibility)',
      events: [
        {
          title: "Comming Soon",
          description: " ",
          images: [
            "assets/media/coming_soon.png"
          ]
        }
      ]
    },
    {
      id: 'events3',
      name: 'Celebration / Sport Events',
      events: [
        {
          title: "Comming Soon",
          description: " ",
          images: [
            "assets/media/coming_soon.png"
          ]
        }
      ]
    },
    {
      id: 'events4',
      name: 'Awards & Recognition Ceremonies',
      events: [
        {
          title: "Felicitated by Priyadarshini Institute of Technology and Science",
          description: " ",
          images: [
            "assets/media/felicitation_1.jpg"
          ]
        },
        {
          title: "Felicitated by SVRM Nagaram",
          description: " ",
          images: [
            "assets/media/felicitation_2.jpg"
          ]
        },
        {
          title: "Felicitated by VVIT University",
          description: " ",
          images: [
            "assets/media/felicitation_3.jpg"
          ]
        },
        {
          title: "Felicitated by Bhavana Degree College",
          description: " ",
          images: [
            "assets/media/felicitation_4.jpg"
          ]
        }
      ]
    }
  ];

  const categoryList = document.getElementById("categoryList");
  const eventContainer = document.getElementById("eventContainer");
  const modal = document.getElementById("modal");
  const swiperSlides = document.getElementById("swiperSlides");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeModalBtn = document.getElementById("closeModal");
  const toggleMenu = document.getElementById("toggleMenu");
  const sidebar = document.getElementById("sidebar");

  let swiper;
  let currentActiveLi = null;
  let isMenuOpen = false;

  toggleMenu?.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      sidebar.classList.add("show");
    } else {
      sidebar.classList.remove("show");
    }
  });


  function renderCategoryList() {
    categoryList.innerHTML = "";
    categories.forEach((cat, index) => {
      const li = document.createElement("li");
      li.className = "cursor-pointer p-3 rounded-xl  hover:bg-amber-200 text-black font-medium opacity-0 transition-all";
      li.textContent = cat.name;
      li.style.animation = `fadeUp 0.3s ease ${index * 0.1}s forwards`;

      li.onclick = () => {
        renderEvents(cat);
        setActiveCategory(li);
        if (window.innerWidth < 768) toggleMenu.click();
      };

      if (index === 0) {
        renderEvents(cat);
        setActiveCategory(li);
      }

      categoryList.appendChild(li);
    });
  }

  function setActiveCategory(clickedLi) {
    if (currentActiveLi) currentActiveLi.classList.remove("category-active");
    clickedLi.classList.add("category-active");
    currentActiveLi = clickedLi;
  }

  function renderEvents(category) {
    eventContainer.innerHTML = "";
    category.events.forEach((event, i) => {
      const card = document.createElement("div");
      card.className = `
            cursor-pointer bg-gray-100 p-4 rounded-xl shadow transition w-full sm:w-[48%] 
            h-[260px] flex flex-col justify-between hover:scale-105 opacity-0
          `;
      card.style.animation = `fadeUp 0.3s ease ${i * 0.1}s forwards`;

      card.innerHTML = `
            <div>
              <h3 class="text-lg font-semibold mb-1">${event.title}</h3>
              <p class="text-gray-800 text-sm line-clamp-3 text-justify mb-1">${event.description}</p>

            </div>
            <img src="${event.images[0]}" class="rounded-xl mt-1 w-full h-40 object-cover" />
          `;
      card.onclick = () => openModal(event);
      eventContainer.appendChild(card);
    });
  }

  function openModal(event) {
    modal.classList.remove("hidden");
    modalTitle.textContent = event.title;
    modalDescription.textContent = event.description;
    swiperSlides.innerHTML = event.images
      .map(img => `<div class="swiper-slide flex items-center justify-center">
      <img src="${img}" class="w-full max-h-[80vh] object-contain mx-auto" /></div>`)
      .join("");

    if (swiper) swiper.destroy();
    swiper = new Swiper(".mySwiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }

  // ✅ FIXED close modal functionality
  closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  renderCategoryList();
});


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeModalBtn = document.getElementById("closeModal");

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent bubbling issues
      modal.classList.add("hidden");
    });
  }
}); const closeSidebar = document.getElementById("closeSidebar");

closeSidebar?.addEventListener("click", () => {
  sidebar.classList.remove("show");
  toggleMenu.textContent = "☰";
  isMenuOpen = false;
});

/* EVENTS & NEWS PAGE JS */
document.addEventListener("DOMContentLoaded", () => {
  const categories = [
    {
      id: 'events1',
      name: 'Virtual Events',
      events: [
        {
          title: "The AI Revolution Webinar",
          description: " ",
          images: [
            "assets/media/event_1.jpg"
          ]
        },
        {
          title: "Cyber Security and Ethical Hacking Webinar",
          description: " ",
          images: [
            "assets/media/event_2.jpg"
          ]
        },
        {
          title: "Security Operation Center",
          description: " ",
          images: [
            "assets/media/event_3.jpg"
          ]
        },
        {
          title: "Digital Forensics",
          description: " ",
          images: [
            "assets/media/event_4.jpg"
          ]
        }
      ]
    },
    {
      id: 'events2',
      name: 'CSR (Corporate Social Responsibility)',
      events: [
        {
          title: "Comming Soon",
          description: " ",
          images: [
            "assets/media/coming_soon.png"
          ]
        }
      ]
    },
    {
      id: 'events3',
      name: 'Celebration / Sport Events',
      events: [
        {
          title: "Comming Soon",
          description: " ",
          images: [
            "assets/media/coming_soon.png"
          ]
        }
      ]
    },
    {
      id: 'events4',
      name: 'Awards & Recognition Ceremonies',
      events: [
        {
          title: "Felicitated by Priyadarshini Institute of Technology and Science",
          description: " ",
          images: [
            "assets/media/felicitation_1.jpg"
          ]
        },
        {
          title: "Felicitated by SVRM Nagaram",
          description: " ",
          images: [
            "assets/media/felicitation_2.jpg"
          ]
        },
        {
          title: "Felicitated by VVIT University",
          description: " ",
          images: [
            "assets/media/felicitation_3.jpg"
          ]
        },
        {
          title: "Felicitated by Bhavana Degree College",
          description: " ",
          images: [
            "assets/media/felicitation_4.jpg"
          ]
        }
      ]
    }
  ];

  const categoryList = document.getElementById("categoryList");
  const eventContainer = document.getElementById("eventContainer");
  const modal = document.getElementById("modal");
  const swiperSlides = document.getElementById("swiperSlides");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeModalBtn = document.getElementById("closeModal");
  const toggleMenu = document.getElementById("toggleMenu");
  const sidebar = document.getElementById("sidebar");

  let swiper;
  let currentActiveLi = null;
  let isMenuOpen = false;

  toggleMenu?.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      sidebar.classList.add("show");
    } else {
      sidebar.classList.remove("show");
    }
  });


  function renderCategoryList() {
    categoryList.innerHTML = "";
    categories.forEach((cat, index) => {
      const li = document.createElement("li");
      li.className = "cursor-pointer p-3 rounded-xl  hover:bg-amber-200 text-black font-medium opacity-0 transition-all";
      li.textContent = cat.name;
      li.style.animation = `fadeUp 0.3s ease ${index * 0.1}s forwards`;

      li.onclick = () => {
        renderEvents(cat);
        setActiveCategory(li);
        if (window.innerWidth < 768) toggleMenu.click();
      };

      if (index === 0) {
        renderEvents(cat);
        setActiveCategory(li);
      }

      categoryList.appendChild(li);
    });
  }

  function setActiveCategory(clickedLi) {
    if (currentActiveLi) currentActiveLi.classList.remove("category-active");
    clickedLi.classList.add("category-active");
    currentActiveLi = clickedLi;
  }

  function renderEvents(category) {
    eventContainer.innerHTML = "";
    category.events.forEach((event, i) => {
      const card = document.createElement("div");
      card.className = `
            cursor-pointer bg-gray-100 p-4 rounded-xl shadow transition w-full sm:w-[48%] 
            h-[260px] flex flex-col justify-between hover:scale-105 opacity-0
          `;
      card.style.animation = `fadeUp 0.3s ease ${i * 0.1}s forwards`;

      card.innerHTML = `
            <div>
              <h3 class="text-lg font-semibold mb-1">${event.title}</h3>
              <p class="text-gray-800 text-sm line-clamp-3 text-justify mb-1">${event.description}</p>

            </div>
            <img src="${event.images[0]}" class="rounded-xl mt-1 w-full h-40 object-cover" />
          `;
      card.onclick = () => openModal(event);
      eventContainer.appendChild(card);
    });
  }

  function openModal(event) {
    modal.classList.remove("hidden");
    modalTitle.textContent = event.title;
    modalDescription.textContent = event.description;
    swiperSlides.innerHTML = event.images
      .map(img => `<div class="swiper-slide flex items-center justify-center">
      <img src="${img}" class="w-full max-h-[80vh] object-contain mx-auto" /></div>`)
      .join("");

    if (swiper) swiper.destroy();
    swiper = new Swiper(".mySwiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }

  // ✅ FIXED close modal functionality
  closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  renderCategoryList();
});


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeModalBtn = document.getElementById("closeModal");

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent bubbling issues
      modal.classList.add("hidden");
    });
  }
}); const closeSidebar = document.getElementById("closeSidebar");

closeSidebar?.addEventListener("click", () => {
  sidebar.classList.remove("show");
  toggleMenu.textContent = "☰";
  isMenuOpen = false;
});

/**EVENTS AND NEWS**/
document.addEventListener("DOMContentLoaded", () => {
  const categories = [
    {
      id: 'events1',
      name: 'Virtual Events',
      events: [
        {
          title: "The AI Revolution Webinar",
          description: " ",
          images: [
            "assets/media/event_1.jpg"
          ]
        },
        {
          title: "Cyber Security and Ethical Hacking Webinar",
          description: " ",
          images: [
            "assets/media/event_2.jpg"
          ]
        },
        {
          title: "Security Operation Center",
          description: " ",
          images: [
            "assets/media/event_3.jpg"
          ]
        },
        {
          title: "Digital Forensics",
          description: " ",
          images: [
            "assets/media/event_4.jpg"
          ]
        }
      ]
    },
    {
      id: 'events2',
      name: 'CSR (Corporate Social Responsibility)',
      events: [
        {
          title: "Comming Soon",
          description: " ",
          images: [
            "assets/media/coming_soon.png"
          ]
        }
      ]
    },
    {
      id: 'events3',
      name: 'Celebration / Sport Events',
      events: [
        {
          title: "Comming Soon",
          description: " ",
          images: [
            "assets/media/coming_soon.png"
          ]
        }
      ]
    },
    {
      id: 'events4',
      name: 'Awards & Recognition Ceremonies',
      events: [
        {
          title: "Felicitated by Priyadarshini Institute of Technology and Science",
          description: " ",
          images: [
            "assets/media/felicitation_1.jpg"
          ]
        },
        {
          title: "Felicitated by SVRM Nagaram",
          description: " ",
          images: [
            "assets/media/felicitation_2.jpg"
          ]
        },
        {
          title: "Felicitated by VVIT University",
          description: " ",
          images: [
            "assets/media/felicitation_3.jpg"
          ]
        },
        {
          title: "Felicitated by Bhavana Degree College",
          description: " ",
          images: [
            "assets/media/felicitation_4.jpg"
          ]
        }
      ]
    }
  ];

  const categoryList = document.getElementById("categoryList");
  const eventContainer = document.getElementById("eventContainer");
  const modal = document.getElementById("modal");
  const swiperSlides = document.getElementById("swiperSlides");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeModalBtn = document.getElementById("closeModal");
  const toggleMenu = document.getElementById("toggleMenu");
  const sidebar = document.getElementById("sidebar");

  let swiper;
  let currentActiveLi = null;
  let isMenuOpen = false;

  toggleMenu?.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      sidebar.classList.add("show");
    } else {
      sidebar.classList.remove("show");
    }
  });


  function renderCategoryList() {
    categoryList.innerHTML = "";
    categories.forEach((cat, index) => {
      const li = document.createElement("li");
      li.className = "cursor-pointer p-3 rounded-xl  hover:bg-amber-200 text-black font-medium opacity-0 transition-all";
      li.textContent = cat.name;
      li.style.animation = `fadeUp 0.3s ease ${index * 0.1}s forwards`;

      li.onclick = () => {
        renderEvents(cat);
        setActiveCategory(li);
        if (window.innerWidth < 768) toggleMenu.click();
      };

      if (index === 0) {
        renderEvents(cat);
        setActiveCategory(li);
      }

      categoryList.appendChild(li);
    });
  }

  function setActiveCategory(clickedLi) {
    if (currentActiveLi) currentActiveLi.classList.remove("category-active");
    clickedLi.classList.add("category-active");
    currentActiveLi = clickedLi;
  }

  function renderEvents(category) {
    eventContainer.innerHTML = "";
    category.events.forEach((event, i) => {
      const card = document.createElement("div");
      card.className = `
            cursor-pointer bg-gray-100 p-4 rounded-xl shadow transition w-full sm:w-[48%] 
            h-[260px] flex flex-col justify-between hover:scale-105 opacity-0
          `;
      card.style.animation = `fadeUp 0.3s ease ${i * 0.1}s forwards`;

      card.innerHTML = `
            <div>
              <h3 class="text-lg font-semibold mb-1">${event.title}</h3>
              <p class="text-gray-800 text-sm line-clamp-3 text-justify mb-1">${event.description}</p>

            </div>
            <img src="${event.images[0]}" class="rounded-xl mt-1 w-full h-40 object-cover" />
          `;
      card.onclick = () => openModal(event);
      eventContainer.appendChild(card);
    });
  }

  function openModal(event) {
    modal.classList.remove("hidden");
    modalTitle.textContent = event.title;
    modalDescription.textContent = event.description;
    swiperSlides.innerHTML = event.images
      .map(img => `<div class="swiper-slide flex items-center justify-center">
      <img src="${img}" class="w-full max-h-[80vh] object-contain mx-auto" /></div>`)
      .join("");

    if (swiper) swiper.destroy();
    swiper = new Swiper(".mySwiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }

  // ✅ FIXED close modal functionality
  closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  renderCategoryList();
});


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeModalBtn = document.getElementById("closeModal");

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent bubbling issues
      modal.classList.add("hidden");
    });
  }
}); const closeSidebar = document.getElementById("closeSidebar");

closeSidebar?.addEventListener("click", () => {
  sidebar.classList.remove("show");
  toggleMenu.textContent = "☰";
  isMenuOpen = false;
});