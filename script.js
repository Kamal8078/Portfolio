// JavaScript for About Section
var aboutSection = document.getElementById("about");

document
	.getElementById("contact-link")
	.addEventListener("click", function (event) {
		event.preventDefault();
		document
			.querySelectorAll("section")
			.forEach((section) => section.classList.add("hidden"));
		document.getElementById("contact").classList.remove("hidden");
	});
// Example: Toggle visibility of additional info on About link click
document
	.querySelector('nav ul li a[href="#about"]')
	.addEventListener("click", function (e) {
		e.preventDefault();

		// Example: Toggle visibility of some additional content
		if (
			aboutSection.style.display === "none" ||
			aboutSection.style.display === ""
		) {
			aboutSection.style.display = "block";
		} else {
			aboutSection.style.display = "none";
		}

		// You can add more specific actions here based on your requirements
	});


document.addEventListener("DOMContentLoaded", function () {
	const contactLink = document.getElementById("contact-link")    ;
	const modal = document.getElementById("contact-modal");
	const closeModal = document.getElementById("close-modal");
	const body = document.body;

	contactLink.addEventListener("click", function (event) {
		event.preventDefault();
		modal.style.display = "block";
		body.classList.add("modal-open");
	});

	closeModal.addEventListener("click", function () {
		modal.style.display = "none";
		body.classList.remove("modal-open");
	});

	window.addEventListener("click", function (event) {
		if (event.target === modal) {
			modal.style.display = "none";
			body.classList.remove("modal-open");
		}
	});
});

document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('#project-link, #project-link-footer');
    const projectModal = document.getElementById('project-modal');
    const closeModalButtons = document.querySelectorAll('.close');
    const body = document.body;

    function openModal(modal) {
        modal.style.display = 'block';
        body.classList.add('modal-open');
    }

    function closeModal(modal) {
        modal.style.display = 'none';
        body.classList.remove('modal-open');
    }


    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            openModal(projectModal);
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            closeModal(contactModal);
            closeModal(projectModal);
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === projectModal) {
            closeModal(projectModal);
        }
    });
});