
/* =========================
   JOSEPH EDEH PORTFOLIO
   Interactive features
========================= */

// Mobile navigation
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Close the menu after selecting a section
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });
}

// Filter professional focus areas
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        // Update active filter
        filterButtons.forEach((item) => {
            const isActive = item === button;

            item.classList.toggle("active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });

        // Show matching cards
        projectCards.forEach((card) => {
            const matches =
                selectedFilter === "all" ||
                card.dataset.category === selectedFilter;

            card.hidden = !matches;
        });
    });
});

// Contact form: prepare a message in WhatsApp
const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!contactForm.reportValidity()) {
            return;
        }

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            formNote.textContent = "Please complete all fields.";
            return;
        }

        const whatsappMessage = [
            "Hello Joseph Edeh,",
            "",
            "I would like to contact you about your facility management portfolio.",
            "",
            `Name: ${name}`,
            `Email: ${email}`,
            `Subject: ${subject}`,
            "",
            `Message: ${message}`
        ].join("\n");

        const whatsappURL =
            "https://wa.me/2348061505179?text=" +
            encodeURIComponent(whatsappMessage);

        formNote.textContent =
            "WhatsApp is opening. Review your message and press Send.";

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
}

// Automatically update the footer year
const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Back-to-top button
const backToTop = document.getElementById("back-to-top");

if (backToTop) {
    const updateBackToTop = () => {
        backToTop.classList.toggle("visible", window.scrollY > 400);
    };

    window.addEventListener("scroll", updateBackToTop, {
        passive: true
    });

    updateBackToTop();
}
