fetch('./config.json')
  .then(response => response.json())
  .then(config => {
     // Set background colors
    const backgrounds = config.backgrounds;
   for (const key in backgrounds) {
     if (key === 'applications_background_color' || key === 'contact_background_color' || key === 'experience_background_color') {
       document.getElementById(`config_${key}`).style.background = backgrounds[key];
     } else if (key === 'about_me_skills_background_color') {
       document.getElementById(`config_${key}`).style.background = `linear-gradient(transparent, ${backgrounds[key]})`
     }
   }

    // Display text content such as names, headers, About Me, ect. 
    const text = config.text;
    for (const key in text) {
      document.getElementById(`config_${key}`).textContent = text[key];
    }

    // Hide or show the animated dividers between the three titles (found on the Intro page)
    const introTitles = [
      text.intro_title_1,
      text.intro_title_2,
      text.intro_title_3
    ].filter(title => title); // Filter out undefined or empty titles

    const numberOfTitles = introTitles.length;

    document.getElementById('divider-1').style.display = numberOfTitles >= 2 ? 'flex' : 'none'; // Show one divider if there are two titles
    document.getElementById('divider-2').style.display = numberOfTitles === 3 ? 'flex' : 'none'; // Show two dividers if there are three titles

    // Map out skills
    const skills = config.skills;
    document.getElementById('skill-blocks').innerHTML = skills.map((skill, id) => { // Display skill "block" elements for each skill
      return (
        `
          <div class="skills--skills-box">
          <div class="skills--skill-tab" style="background-color: ${skill.color};"></div>
          <div class="skills--skill-tab-2" style="background-color: ${skill.color};"></div>
          <div class="skills--skill-block">
            ${skill.title}
          </div>
          </div>
          `
      )
    }
    ).join('');

    // Map out experience and respective technologies used

    const experience = config.experience

      document.getElementById('experience-blocks').innerHTML = experience.map(((job, i) => {
        return `
          <div class="experience--workplace-container">
          <div style="background-image: url('../assets/images/workplace_${i + 1}_avatar_image_url.png')" class="experience--logo"></div>
          <h3 class="experience--title">
            ${job.workplace_position_title} - ${job.workplace_name}
          </h3>
          <div class="thin-white-bar"></div>
          <div class='experience--dates'>
            ${job.workplace_start_date} - ${job.workplace_end_date}
          </div>
          <div class="experience--bullet-list">
          ${job.workplace_duties.map(e => {
          return `
              <div class="experience--bullet">
              - ${e}
            </div>
              `
        }).join('')}
          </div>
          <div>Technologies used:</div>
          <div class="experience--thin-white-bar"></div>
          <div class="experience--technologies-container" id="job-${i}-technologies"></div>
        </div>
        `
      })).join('');

      for (var i = 0; i < experience.length; i++) {
        displayTechnologies(experience[i].technologies_used, `job-${i}-technologies`);
      }

      // Map out applications and respective URL buttons

      const applications = config.applications;

        document.getElementById('applications-blocks').innerHTML = applications.map(((app, i) => {
          return `
          <div class="row applications--box">
          <div class="applications--box col-12 nopadding">
            <div class="applications--inner-box" style="background-image: url('../assets/images/application_${i + 1}_background_image_url.png')">
              <div class="applications--logo" style="background-image: url('../assets/images/workplace_${i + 1}_avatar_image_url.png')">
              </div>
              <div>
                ${app.application_workplace_name}
              </div>
              <div class="applications--desc-container">
              <h2 class="horizontal-slide-left-animation" id="application-${i}-title-slide-left">
              ${app.application_title}
              </h2>
              <div class="thin-white-bar"></div>
              <div class="horizontal-slide-right-animation" id="application-${i}-desc-slide-right">
              ${app.application_desc}
              </div>
              </div>
              <div class="applications--button-container">
              ${app.application_button_1_title ? `
              <a href="${app.application_button_1_url}" target="_blank" class="applications--screenshots-button">
                  ${app.application_button_1_title}
            </a>           
              ` : ''}
              ${app.application_button_2_title ? `
              <a href="${app.application_button_2_url}" target="_blank" class="applications--demo-button" style="margin-left: ${app.application_button_1_title ? '15px' : ''}">
                  ${app.application_button_2_title}
            </a>           
              ` : ''}
              </div>
            </div>
          </div>
        </div>
        `
        })).join('');
  
        for (var i = 0; i < applications.length; i++) {
          animateSlideHorizontal(`#application-${i}-title-slide-left`, -300);
          animateSlideHorizontal(`#application-${i}-desc-slide-right`, -300);
        }

        // Display education and certification URL button

        const education = config.education;
        for (const key in education) {
          if (key === 'education_button_title' || key === 'education_button_url') {
            if (education['education_button_title'].length !== 0) {
              document.getElementById(`config_education_button_title`).textContent = education['education_button_title']
              document.getElementById(`config_education_button`).href = education['education_button_url']
            } else {
              document.getElementById(`config_education_button`).style = 'display: none'
            }
          } else {
            document.getElementById(`config_${key}`).textContent = education[key];
          }
        }
      
        // Map out contact links

        const contactLinks = config.contact;

        const contactLinksHTML = contactLinks.map(contactLink => `
        <a style="color: #0398fc !important;" target="_blank" rel="noopener noreferrer" href="${contactLink.url}" class="contact--contact-method">
          ${contactLink.label}
        </a>
      `).join('');
      document.getElementById('contact-links').innerHTML = contactLinksHTML;

  }).catch(error => {
    console.error('Error loading JSON file', error);
  });

  function displayTechnologies(technologies, job) { // Display technology "blocks" for each respective workplace
   document.getElementById(job).innerHTML = technologies.map(technology => {
     return (
       `
       <div id='${technology.label}-${job}' class="experience--technology" style="background-color: ${technology.color}; color: ${technology.labelColor}">
         ${technology.title}
       </div>
       `
     );
   }).join('');
 
   animateTechnologies(technologies, job);
 }
 
 function animateTechnologies(technologies, job) {
   let numberOfTechnologies = technologies.length;
   let animationOffset = -400;
   for (let i = 0; i < numberOfTechnologies; i++) {
     let bar = document.getElementById(technologies[i].label + "-" + job);
     let blockTween = new TweenMax.to(bar, 2, {
       opacity: 1,
       delay: i * .1,
       ease: Power4.easeOut,
     });
     runAnimation(bar, false, blockTween, animationOffset)
   }
 }
 
 function runAnimation(trigger, reverse, blockTween, offset) {
   let controller = new ScrollMagic.Controller();
   let containerScene = new ScrollMagic.Scene({
     offset,
     reverse,
     triggerElement: trigger
   })
     .setTween(blockTween)
     .addTo(controller);
 }

 function animateSlideHorizontal(bar, offset) {
  var blockTween = new TweenMax.to(bar, 1.5, {
    opacity: 1,
    x: 0,
    ease: Power4.easeOut,
  });
  runAnimation(bar, false, blockTween, offset)
}