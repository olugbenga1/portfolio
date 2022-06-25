// Selecting nav-link ids
const homeLinkId = document.getElementById("heroLinkId");
const projectsLinkId = document.getElementById("projectsLinkId");
const skillsLinkId = document.getElementById("skillsLinkId");
const blogLinkId = document.getElementById("blogLinkId");
const contactLinkId = document.getElementById("contactLinkId");

// Selecting section ids
const hero = document.getElementById("hero");
const projects = document.getElementById("projects");
const skills = document.getElementById("skills");
const blog = document.getElementById("blog");
const contact = document.getElementById("contact");

// Select all links
const navLinks = document.querySelectorAll(".nav-links ul li");

// Select all sections
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});

// navLinks.forEach(function (link) {
//   link.addEventListener("click", function () {
//     link.classList.remove("active");
//     if (link.classList.contains(current)) {
//       link.classList.add("active");
//     }
//   });
// });

// // Add scroll function
// function addScroll(linkId, sectionId) {
//   linkId.addEventListener("click", () => {
//     sectionId.scrollIntoView({ behavior: "smooth", block: "start" });
//   });
// }

// // add scroll to projects section
// addScroll(homeLinkId, hero);

// // add scroll to projects section
// addScroll(projectsLinkId, projects);

// // add scroll to the skills section
// addScroll(skillsLinkId, skills);

// // add scroll to the blog section
// addScroll(blogLinkId, blog);

// // add scroll to the contact section
// addScroll(contactLinkId, contact);
