// script.js
document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const degree = document.getElementById('degree').value;
    const university = document.getElementById('university').value;
    const gradYear = document.getElementById('grad-year').value;
    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const jobDuration = document.getElementById('job-duration').value;

    // Create the resume content
    const resumeContent = `
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h3>Education</h3>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>University:</strong> ${university}</p>
        <p><strong>Graduation Year:</strong> ${gradYear}</p>

        <h3>Experience</h3>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Job Duration:</strong> ${jobDuration}</p>
    `;

    // Display the generated resume
    document.getElementById('resume').innerHTML = resumeContent;
});
