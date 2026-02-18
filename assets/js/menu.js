/**INDEX**/
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');
const menuIcon = document.getElementById('menu-icon'); // <-- new

let isOpen = false;

toggleBtn.addEventListener('click', () => {
  isOpen = !isOpen;

  if (isOpen) {
    // Change to close icon
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');

    // Show menu container
    mobileMenu.classList.remove('scale-y-0', 'opacity-0');
    mobileMenu.classList.add('scale-y-100', 'opacity-100');

    // Staggered menu item animation
    menuLinks.forEach((link, i) => {
      setTimeout(() => {
        link.classList.remove('opacity-0', '-translate-y-4');
        link.classList.add('opacity-100', 'translate-y-0');
      }, i * 20);
    });

  } else {
    // Change back to hamburger icon
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');

    // Hide items one by one
    [...menuLinks].reverse().forEach((link, i) => {
      setTimeout(() => {
        link.classList.add('opacity-0', '-translate-y-4');
        link.classList.remove('opacity-100', 'translate-y-0');
      }, i * 30);
    });


    // Hide menu after animations
    const totalDelay = menuLinks.length * 30 + 90;
    setTimeout(() => {
      mobileMenu.classList.add('scale-y-0', 'opacity-0');
      mobileMenu.classList.remove('scale-y-100', 'opacity-100');
    }, totalDelay);
  }
});

// Reset menu and icon on resize above 825px
window.addEventListener('resize', () => {
  if (window.innerWidth > 825) {
    mobileMenu.classList.add('scale-y-0', 'opacity-0');
    mobileMenu.classList.remove('scale-y-100', 'opacity-100');
    menuLinks.forEach(link => {
      link.classList.add('opacity-0', '-translate-y-4');
      link.classList.remove('opacity-100', 'translate-y-0');
    });
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
    isOpen = false;
  }
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

/**ABOUT**/
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');
const menuIcon = document.getElementById('menu-icon'); // <-- new

let isOpen = false;

toggleBtn.addEventListener('click', () => {
  isOpen = !isOpen;

  if (isOpen) {
    // Change to close icon
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');

    // Show menu container
    mobileMenu.classList.remove('scale-y-0', 'opacity-0');
    mobileMenu.classList.add('scale-y-100', 'opacity-100');

    // Staggered menu item animation
    menuLinks.forEach((link, i) => {
      setTimeout(() => {
        link.classList.remove('opacity-0', '-translate-y-4');
        link.classList.add('opacity-100', 'translate-y-0');
      }, i * 20);
    });

  } else {
    // Change back to hamburger icon
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');

    // Hide items one by one
    [...menuLinks].reverse().forEach((link, i) => {
      setTimeout(() => {
        link.classList.add('opacity-0', '-translate-y-4');
        link.classList.remove('opacity-100', 'translate-y-0');
      }, i * 30);
    });


    // Hide menu after animations
    const totalDelay = menuLinks.length * 30 + 90;
    setTimeout(() => {
      mobileMenu.classList.add('scale-y-0', 'opacity-0');
      mobileMenu.classList.remove('scale-y-100', 'opacity-100');
    }, totalDelay);
  }
});

// Reset menu and icon on resize above 825px
window.addEventListener('resize', () => {
  if (window.innerWidth > 825) {
    mobileMenu.classList.add('scale-y-0', 'opacity-0');
    mobileMenu.classList.remove('scale-y-100', 'opacity-100');
    menuLinks.forEach(link => {
      link.classList.add('opacity-0', '-translate-y-4');
      link.classList.remove('opacity-100', 'translate-y-0');
    });
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
    isOpen = false;
  }
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

/**SERVICES**/
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');
const menuIcon = document.getElementById('menu-icon'); // <-- new

let isOpen = false;

toggleBtn.addEventListener('click', () => {
  isOpen = !isOpen;

  if (isOpen) {
    // Change to close icon
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');

    // Show menu container
    mobileMenu.classList.remove('scale-y-0', 'opacity-0');
    mobileMenu.classList.add('scale-y-100', 'opacity-100');

    // Staggered menu item animation
    menuLinks.forEach((link, i) => {
      setTimeout(() => {
        link.classList.remove('opacity-0', '-translate-y-4');
        link.classList.add('opacity-100', 'translate-y-0');
      }, i * 20);
    });

  } else {
    // Change back to hamburger icon
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');

    // Hide items one by one
    [...menuLinks].reverse().forEach((link, i) => {
      setTimeout(() => {
        link.classList.add('opacity-0', '-translate-y-4');
        link.classList.remove('opacity-100', 'translate-y-0');
      }, i * 30);
    });


    // Hide menu after animations
    const totalDelay = menuLinks.length * 30 + 90;
    setTimeout(() => {
      mobileMenu.classList.add('scale-y-0', 'opacity-0');
      mobileMenu.classList.remove('scale-y-100', 'opacity-100');
    }, totalDelay);
  }
});

// Reset menu and icon on resize above 825px
window.addEventListener('resize', () => {
  if (window.innerWidth > 825) {
    mobileMenu.classList.add('scale-y-0', 'opacity-0');
    mobileMenu.classList.remove('scale-y-100', 'opacity-100');
    menuLinks.forEach(link => {
      link.classList.add('opacity-0', '-translate-y-4');
      link.classList.remove('opacity-100', 'translate-y-0');
    });
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
    isOpen = false;
  }
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

/**EVENT_NEWS */
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');
const menuIcon = document.getElementById('menu-icon'); // <-- new

let isOpen = false;

toggleBtn.addEventListener('click', () => {
  isOpen = !isOpen;

  if (isOpen) {
    // Change to close icon
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');

    // Show menu container
    mobileMenu.classList.remove('scale-y-0', 'opacity-0');
    mobileMenu.classList.add('scale-y-100', 'opacity-100');

    // Staggered menu item animation
    menuLinks.forEach((link, i) => {
      setTimeout(() => {
        link.classList.remove('opacity-0', '-translate-y-4');
        link.classList.add('opacity-100', 'translate-y-0');
      }, i * 20);
    });

  } else {
    // Change back to hamburger icon
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');

    // Hide items one by one
    [...menuLinks].reverse().forEach((link, i) => {
      setTimeout(() => {
        link.classList.add('opacity-0', '-translate-y-4');
        link.classList.remove('opacity-100', 'translate-y-0');
      }, i * 30);
    });


    // Hide menu after animations
    const totalDelay = menuLinks.length * 30 + 90;
    setTimeout(() => {
      mobileMenu.classList.add('scale-y-0', 'opacity-0');
      mobileMenu.classList.remove('scale-y-100', 'opacity-100');
    }, totalDelay);
  }
});

// Reset menu and icon on resize above 825px
window.addEventListener('resize', () => {
  if (window.innerWidth > 825) {
    mobileMenu.classList.add('scale-y-0', 'opacity-0');
    mobileMenu.classList.remove('scale-y-100', 'opacity-100');
    menuLinks.forEach(link => {
      link.classList.add('opacity-0', '-translate-y-4');
      link.classList.remove('opacity-100', 'translate-y-0');
    });
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
    isOpen = false;
  }
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

/**APPLY_NOW */
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');
const menuIcon = document.getElementById('menu-icon'); // <-- new

let isOpen = false;

toggleBtn.addEventListener('click', () => {
  isOpen = !isOpen;

  if (isOpen) {
    // Change to close icon
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');

    // Show menu container
    mobileMenu.classList.remove('scale-y-0', 'opacity-0');
    mobileMenu.classList.add('scale-y-100', 'opacity-100');

    // Staggered menu item animation
    menuLinks.forEach((link, i) => {
      setTimeout(() => {
        link.classList.remove('opacity-0', '-translate-y-4');
        link.classList.add('opacity-100', 'translate-y-0');
      }, i * 20);
    });

  } else {
    // Change back to hamburger icon
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');

    // Hide items one by one
    [...menuLinks].reverse().forEach((link, i) => {
      setTimeout(() => {
        link.classList.add('opacity-0', '-translate-y-4');
        link.classList.remove('opacity-100', 'translate-y-0');
      }, i * 30);
    });


    // Hide menu after animations
    const totalDelay = menuLinks.length * 30 + 90;
    setTimeout(() => {
      mobileMenu.classList.add('scale-y-0', 'opacity-0');
      mobileMenu.classList.remove('scale-y-100', 'opacity-100');
    }, totalDelay);
  }
});

// Reset menu and icon on resize above 825px
window.addEventListener('resize', () => {
  if (window.innerWidth > 825) {
    mobileMenu.classList.add('scale-y-0', 'opacity-0');
    mobileMenu.classList.remove('scale-y-100', 'opacity-100');
    menuLinks.forEach(link => {
      link.classList.add('opacity-0', '-translate-y-4');
      link.classList.remove('opacity-100', 'translate-y-0');
    });
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
    isOpen = false;
  }
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});


/**BLOG**/
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');
const menuIcon = document.getElementById('menu-icon'); // <-- new

let isOpen = false;

toggleBtn.addEventListener('click', () => {
  isOpen = !isOpen;

  if (isOpen) {
    // Change to close icon
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');

    // Show menu container
    mobileMenu.classList.remove('scale-y-0', 'opacity-0');
    mobileMenu.classList.add('scale-y-100', 'opacity-100');

    // Staggered menu item animation
    menuLinks.forEach((link, i) => {
      setTimeout(() => {
        link.classList.remove('opacity-0', '-translate-y-4');
        link.classList.add('opacity-100', 'translate-y-0');
      }, i * 20);
    });

  } else {
    // Change back to hamburger icon
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');

    // Hide items one by one
    [...menuLinks].reverse().forEach((link, i) => {
      setTimeout(() => {
        link.classList.add('opacity-0', '-translate-y-4');
        link.classList.remove('opacity-100', 'translate-y-0');
      }, i * 30);
    });


    // Hide menu after animations
    const totalDelay = menuLinks.length * 30 + 90;
    setTimeout(() => {
      mobileMenu.classList.add('scale-y-0', 'opacity-0');
      mobileMenu.classList.remove('scale-y-100', 'opacity-100');
    }, totalDelay);
  }
});

// Reset menu and icon on resize above 825px
window.addEventListener('resize', () => {
  if (window.innerWidth > 825) {
    mobileMenu.classList.add('scale-y-0', 'opacity-0');
    mobileMenu.classList.remove('scale-y-100', 'opacity-100');
    menuLinks.forEach(link => {
      link.classList.add('opacity-0', '-translate-y-4');
      link.classList.remove('opacity-100', 'translate-y-0');
    });
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
    isOpen = false;
  }
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

/**COURSES**/
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');
const menuIcon = document.getElementById('menu-icon'); // <-- new

let isOpen = false;

toggleBtn.addEventListener('click', () => {
  isOpen = !isOpen;

  if (isOpen) {
    // Change to close icon
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');

    // Show menu container
    mobileMenu.classList.remove('scale-y-0', 'opacity-0');
    mobileMenu.classList.add('scale-y-100', 'opacity-100');

    // Staggered menu item animation
    menuLinks.forEach((link, i) => {
      setTimeout(() => {
        link.classList.remove('opacity-0', '-translate-y-4');
        link.classList.add('opacity-100', 'translate-y-0');
      }, i * 20);
    });

  } else {
    // Change back to hamburger icon
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');

    // Hide items one by one
    [...menuLinks].reverse().forEach((link, i) => {
      setTimeout(() => {
        link.classList.add('opacity-0', '-translate-y-4');
        link.classList.remove('opacity-100', 'translate-y-0');
      }, i * 30);
    });


    // Hide menu after animations
    const totalDelay = menuLinks.length * 30 + 90;
    setTimeout(() => {
      mobileMenu.classList.add('scale-y-0', 'opacity-0');
      mobileMenu.classList.remove('scale-y-100', 'opacity-100');
    }, totalDelay);
  }
});

// Reset menu and icon on resize above 825px
window.addEventListener('resize', () => {
  if (window.innerWidth > 825) {
    mobileMenu.classList.add('scale-y-0', 'opacity-0');
    mobileMenu.classList.remove('scale-y-100', 'opacity-100');
    menuLinks.forEach(link => {
      link.classList.add('opacity-0', '-translate-y-4');
      link.classList.remove('opacity-100', 'translate-y-0');
    });
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
    isOpen = false;
  }
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

/**CONTACT**/
const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');
const menuIcon = document.getElementById('menu-icon'); // <-- new

let isOpen = false;

toggleBtn.addEventListener('click', () => {
  isOpen = !isOpen;

  if (isOpen) {
    // Change to close icon
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');

    // Show menu container
    mobileMenu.classList.remove('scale-y-0', 'opacity-0');
    mobileMenu.classList.add('scale-y-100', 'opacity-100');

    // Staggered menu item animation
    menuLinks.forEach((link, i) => {
      setTimeout(() => {
        link.classList.remove('opacity-0', '-translate-y-4');
        link.classList.add('opacity-100', 'translate-y-0');
      }, i * 20);
    });

  } else {
    // Change back to hamburger icon
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');

    // Hide items one by one
    [...menuLinks].reverse().forEach((link, i) => {
      setTimeout(() => {
        link.classList.add('opacity-0', '-translate-y-4');
        link.classList.remove('opacity-100', 'translate-y-0');
      }, i * 30);
    });


    // Hide menu after animations
    const totalDelay = menuLinks.length * 30 + 90;
    setTimeout(() => {
      mobileMenu.classList.add('scale-y-0', 'opacity-0');
      mobileMenu.classList.remove('scale-y-100', 'opacity-100');
    }, totalDelay);
  }
});

// Reset menu and icon on resize above 825px
window.addEventListener('resize', () => {
  if (window.innerWidth > 825) {
    mobileMenu.classList.add('scale-y-0', 'opacity-0');
    mobileMenu.classList.remove('scale-y-100', 'opacity-100');
    menuLinks.forEach(link => {
      link.classList.add('opacity-0', '-translate-y-4');
      link.classList.remove('opacity-100', 'translate-y-0');
    });
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
    isOpen = false;
  }
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

