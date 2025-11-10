Horizon Portfolio Website Template by Devhorizons

----------

Dear reader,

Thank you for purchasing the Horizon template and putting your trust in Devhorizons to showcase your career! A personal website makes a great addition to your resume and will allow
your hard-earned skills and accomplishments to shine. It can also serve as your professional homepage if you are a freelance developer searching for your next contract. Having your
own .com shows that you've gone the extra mile to stand out. 

As a software developer myself, I know firsthand how intense the hunt for a tech job can be. Once again, I thank you and wish you the best of luck in your career.

If you come across any bugs or have any concerns, please reach out to me at ljswebdev@gmail.com and I will work with you to ensure that you are satisfied.

And feel free to add me on LinkedIn - https://www.linkedin.com/in/logansmith91/

To your success,

Logan Smith
Creator of Devhorizons

----------

QUICK START

1. If you have not already. visit the Portfolio Builder at www.devhorizons.io/builder/horizon to design your own Horizon portfolio website, and once you're finished, download the
 config.json file and paste it into the root level of the Horizon Template folder (replacing the "John Doe" sample config.json).

2. Replace all of the images found in "asset/images" with the images you downloaded from the Portfolio Builder. Be sure that each of the images are in .png format.

3. That's all there is to it! Your portfolio website is ready to go.

----------

HOW THE HORIZON TEMPLATE WORKS

----------

The Horizon template is powered by the config.json file found at the root level of the Horizon Template. Without the config.json file, the Horizon template is simply a structure
of HTML and CSS waiting for your data to display. In the "js" folder found at the root level, there is Javascript code that populates each section of the template with the appropriate
data.

For example, the loadConfig.js file found in the "js" folder fetches and maps out all of the data into their respective HTML elements, such as the headers, subtitles, applications,
skills, work history and background colors. The animation.js file enables the fancy ScrollMagic CSS animations, while the header.js file handles the open and close functionality
of the mobile header.

All of the website images can be found in "assets/images" and are specifically named to match the "background-image" CSS properties found in "assets/css/images.css". When you 
downloaded your config.json and images from the Portfolio Builder, the images were downloaded from the URLs you provided and renamed specifically to line up with their respective
CSS classes. This is done to improve performance and speed up initial loading times.

----------

Horizon is split into seven sections -

1. Intro

A landing page that displays your name, avatar and job titles to visitors. Contains three alternating background images with Ken Burns style CSS animations.

2. About Me

Allows you to introduce yourself and expand on your career and achievements.

3. Skills

Lists your technical skills, fluency of programming languages and other proficiencies / certifications

4. Experience

A timeline of your professional work history, featuring specific technologies you used in reach role.

*** If you are looking for your first tech job and do not want to display the Experience Section, see the Tips And Tricks section for instructions on how to modify your template. ***

5. Applications

Showcases projects and applications you have built or been a part of. Contains buttons to view screenshots or give a live demo.

6. Education

Highlights your education or technical training. Contains a button to view your online certification.

7. Contact

Enables visiters to reach out or connect with you via phone, email, social media or other websites.

The config.json file is structured in a similar fashion - you'll find a property for each section along with the appropriate nested data.

----------

THE PORTFOLIO BUILDER

----------

You're welcome to edit and customize the Horizon template however you please. However, Devhorizons offers the feature-rich Portfolio Builder that makes it easy to edit and
add to your Horizon template. You can reupload your existing config.json to the Portfolio Builder, make your changes, redownload and replace the config.json file to update
your existing portfolio.

The Portfolio Builder can be found at www.devhorizons.io/builder/horizon

----------

Tips and Tricks

----------

1. Changing Font And Text color

You can change the font family by opening 'assets/css/main.css' and editing the font-family property around line 3. Horizon is by default set to Google Font's "Play" font family.
Be sure to import your desired Google Font in the header of the index.html file.

You can change the global text color by opening 'assets/css/main.css' and editing the color property around line 2. Horizon is by default set to have white text.

2. The skills--block-container height

In the Skills section, you'll find a <div> with the class of 'skills--block-container' somewhere around line 179. It has a height property set to 200px, but depending on the
number of skills you have selected in your config.json file, it will map out and display the "skill blocks" differently. I recommend changing the height property of the
'skills--block-container' class found in "assets/css/skills.css" file (around line 7) until you're happy with the way it looks.

3. Hide / remove a specific section

If you do not want to display a specific section of the template, you can simply delete the HTML elements in the index.html file. I've organized and labeled each section to
make it easy to identify where each section is.

For example, if you want to hide the Experience section of the template, delete or comment out the HTML code block labeled "Experience Section" in the index.html file.

You will also need to remove / comment out the associated Javascript in the loadConfig.js file, as well as the animations and Header code. Follow the steps below -

     1. Remove or comment out the entire "experience" array from the config.json file, as well as the following properties -

     - experience_background_color
     - experience_subtitle
     - header_experience_title
     - mobile_menu_experience_title
     - banner_experience_title

     2. Delete or comment out the block of code labeled // Map out experience and respective technologies used // found in the loadConfig.js file.

     3. Delete or comment out these two lines found in the animations.js file in the "js" folder -

     animateWhiteBar('#experience-white-bar', -300);
     animateSlideVertical('#experience-subtitle-slide-up', -300);

     4. Delete or comment out both <a> tags that contain the href="#experience" attribute. There is one in the Header section, and one in the Mobile Menu section.

Doing this will result in a modified portfolio with the Experience section removed. You can follow similar steps for each of the other sections as well, but just be aware that you
MUST remove the corresponding config.json, animation, Javascript and header code as I've outlined above. Failing to do so will result in errors that can be found in the browser
console - your portfolio may fail to run if it's trying to find an element that no longer exists.

***  Be sure to make a copy of your Horizon template before making sweeping changes **

4. Run locally in development mode 

From the root directory of the Horizon folder, run the following -

python -m http.server

----------

Again, thank you for your purchase and please reach out to me if you have any questions!

Regards,

Logan Smith
ljswebdev@gmail.com
https://www.linkedin.com/in/logansmith91/