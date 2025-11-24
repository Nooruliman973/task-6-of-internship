/* ============================
   LOAD SERVICES FROM JSON FILE
============================ */

function loadServicesFromJSON() {
    const container = document.getElementById("services");

    // If page does not have services section, stop
    if (!container) return;

    fetch("assets/data/services.json")
        .then(response => response.json())
        .then(services => {
            container.innerHTML = services
                .map(service => `
                    <div class="service-card" data-aos="fade-up">
                        <h3>${service.title}</h3>
                        <p>${service.desc}</p>
                    </div>
                `)
                .join("");
        })
        .catch(err => console.error("Error loading JSON:", err));
}

// Call this when page loads
loadServicesFromJSON();



/* ============================
         API QUOTE SECTION
============================ */

function loadQuote() {
    const quoteBox = document.getElementById("quoteBox");

    // If this page does not contain quote area, stop
    if (!quoteBox) return;

    fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => {
            quoteBox.innerHTML = `
                <p>"${data.content}"</p>
                <small>- ${data.author}</small>
            `;
        });
}

// Load a quote when page opens
loadQuote();



/* ============================
        CONTACT FORM VALIDATION
============================ */

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let valid = true;

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        // Name Validation
        if (name.length < 3) {
            document.getElementById("nameError").textContent = "Name is too short";
            valid = false;
        } else {
            document.getElementById("nameError").textContent = "";
        }

        // Email Validation
        if (!email.includes("@")) {
            document.getElementById("emailError").textContent = "Invalid email format";
            valid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        // If everything correct
        if (valid) {
            alert("Form submitted successfully!");
        }
    });
}
