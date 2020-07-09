<p><h1>Milestone 3 for Code Institute - A database web application.</h1><p>
<p><strong>MiDev Glossary</strong> app offers users such as professionals like Project Managers or Product Owners the possibility to understand their development teams better.</p>
<p>You can find links to the application and github repository below:
<p>The application <a href="https://tmfmdb.herokuapp.com/">live here.</a></p>
<p>The Github link <a href="https://github.com/VictoriaBC/miniprojectpy/">here.</a></p>

<h2>UX</h2>
Very often abbreviations are used within development teams and this app helps Managers to gather what they hear and also use this app as an internal dictionary. Developers, Designers, Marketing specialists also have a chance to help the team and create a better way of working. Users can add/edit words, also add/edit categories, they can search words and navigate according to the alphabet.

<h2>User Stories</h2>
As a new User I would like to:
<li>be able to understand how to navigate in the application.</li>
<li>be able to find/search meaning of words and abbreviations.</li>
<li>be able to sort fast words with alphabet.</li>
<li>be able to create and edit words.</li>
<li>be able to create and edir categories.</li>

<h2>Wireframes</h2>
<p>Wireframes are attached in my github repository as <a href="https://github.com/VictoriaBC/miniprojectpy/blob/master/MiDev_Glossary_Victoria.pdf">MiDev_Glossary_Victoria.pdf</a></p> 
<p>The document contains the app structure, mobile and desktop wireframes.</p>

<h2>Features</h2>
<h3>Layout</h3>
<p>This is a multi-page layout designed as minimalistic and functional as possible, also responsive and pleasing for the user. The home page displays short information about this app, search input, alphabetical navigation and accordions containing words in the clossary with their description. Each accordion can be deleted and edited.</p>

<h3>Colors</h3>
<p>Colors are taken from <a href="https://materializecss.com/color.html">Sass in materialize</a> to make the it easier to change without risking to have multiple colors of the same tone.</p>
<li>Background color: #f5f5f5 grey lighten-4</li>
<li>Primary button color: #004d40 teal darken-4</li>
<li>Secondary button color: #26a69a teal lighten-1</li>
<li>Header and Footer color: #004d40 teal darken-4</li>

<h3>Buttons</h3>
<p>Buttons in this application are from component library <a href="https://materializecss.com/">Materialize</a>.</p>

<h3>Font</h3>
<p>One font set is used from google fonts, called "Roboto". It gives a modern appeal, simplicity and most important easy to read.</p>

<h3>Existing Features</h3>
<p>Header and footer - The header contains a linked to home logo, menus: Home, New Word, Manage Catergory. The footer below repeats the name of the app and the author. Both the Header and Footer are components from <a href="https://materializecss.com/">Materialize</a>.</p>
<p>Button "Edit" - This button is found in the accordion with hex color: #004d40 teal darken-4.</p>
<p>Button "Delete/Del" - This button is found in the accordion with hex color: #26a69a teal lighten-1.</p>
<p>Buttons Add Category and Add Word - These buttons are found Add Word and Manage Category pages. Button colors: #004d40 teal darken-4.</p>
<p>Form - The forms are taken from materialize and contain input fields and category dropdown. Forms are found at Add Word page and Manage Category page.</p>

Features Left to Implement
Authentication would be a nice feature to implement, as it would ensure data that is added is more authentic and less inclined to be spam.
Add additional fields to the river_names database, such a location, additonal info regarding purchase of permits, and links to accomidations / fishing tackle shops, etc.
A "fish caught" record, to display anglers achievements on particular rivers.
A graphical representation of the most popular rivers, as voted by visitors to the application.
A .sort() applied to the route functions in app.py, so that displayed results show the most recently added at the top of the table (rivers & reviews)
Main Technologies Used
This project uses Python, HTML, CSS and Javascript programming languages.
Tools used
Visual Studio Code by Microsoft - This was used as the IDE for building the application. This was my first time using a local IDE.
GitHub to store the project code remotely.
PIP for installation of tools needed in this project.
Git to handle version control.
Other technologies / libraries used:
Jinja to simplify displaying data from the backend of this project smoothly and effectively in html.
PyMongo - A Python distribution containing tools for working with MongoDB.
Bootstrap 4.3.1 - The project uses Bootstrap 4 to simplify the structure of the website and make the website responsive easily. https://getbootstrap.com/
Fontawesome - Used to provide icons from FontAwesome throughtout the site. https://fontawesome.com/
Google Fonts - The project uses Google fonts to style the website fonts. https://fonts.google.com/
AutoPrefixer - This project used AutoPrefixer to make sure the css code is valid for all browsers. https://autoprefixer.github.io/
Testing
User Testing
Manual User testing:
This was the primary method of testing the application. People were asked to visit the website on a variety of devices, and to enter information to the database. This feedback was very uselful to determine any bugs that may have been present. I also tested the app manually myself on a varietly of browsers.

Below are the list of Internet Browsers that were used to test the display of the website:
Google Chrome (Version 77.0)
Chrome Lighthouse was used to audit the website.
Mozilla Firefox (Version 69.0)
Microsoft Edge (Version 44.1)
Internet Explorer 11 (Version 11.8)
Manual testing was carried out using the above browsers. No bugs or desplay issues could be identified.

Below are the list of websites I used to test the HTML, CSS and JS code:
W3C HTML Validator This is a HTML online validitor.
W3C CSS Validator This is a CSS online validitor.
CSS Lint CSS Lint is an open source CSS code quality tool I used.
Meeting the needs of the user stories (as described in the UX section of this README file)
As a new User to the web application, I want to be able to understand how to navigate around the web application.
Upon landing on the home page, the user is greeted with a jumbotron welcome text, imediately followed below by the subject of the application: The Data Table. The user doesn't have to go searching for it, as it's right there. Navigation comes from the Navigation Bar at the top of the page. The Logo, when clicked, will redirect the user back to the home page. The rest of the Nav Bar items are positioned on the right hand side. They visually tell the user exactly what they can do. Each item, when clicked, redirects the user to a seperate page where the desired action can occur.

As a new User to the web application, I want to be able to add additional information to the river database...
Under "Add a new River" on the Nav Bar, the user will be redirected to a new page where the user can add a new document to the collection in the database.

As a new User to the web application, I want to be able to update a particular river's information if I believe it to be inaccurate, incorrect or outdated.
On the data-table displayed on the home page, there is a blue button in the first row. As explained on the welcome message on the top of the home page, when this button is clicked for that particular river, the user is redirected to a new page, where a pre-polulated form is, and the user can edit and make changes to this river record. At this point, there is also an option to delete the document entirely from the collection, in the form of a red button at the bottom of the form.

As a new User to the web application, I want to leave a review about a particular river, which is both informative and allows me to broadcast my own opinion.
"Review a River" is an item on the Nav Bar. Once clicked, the user is brought to a new page, where, via a form, they can leave a review about a particular river in the database. Once the review is submitted, the user can view what they have posted to the database on the "Read Reviews" page. Other users can also view this page, providing insight and knowledge from other users.

Deployment
Local Deployment
This project was developed using the Visual Studio Code IDE, committed to git and pushed to GitHub using the built in function within Visual Studio Code.

The GitHub Repository is here: https://github.com/haydal810/Milestone-Project-3 The application is live here: https://kerry-rivers-ms3.herokuapp.com/

To deploy this project on your own IDE, folow the steps below:

Firstly, ensure of the following: - You have an IDE, such as VS Code - The following must be installed locally on your computer: - git - PIP - Python 3 - Flask - A MongoDB Atlas account

Instructions for Installation:

Make your own folder and navigate to it on the terminal. Then enter the following in the terminal:
$ git clone https://github.com/haydal810/Milestone-Project-3.git
$ pip install --upgrade pip
$ pip install -r requirements.txt
To run the app locally:
$ python -m flask run
Heroku Deployment
The code was also pushed from git to heroku for live deployment: https://www.heroku.com/

To Deploy using Heroku Git, use git in the command line:

Install the Heroku CLI. If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.
$ heroku login
Clone the repository. Use Git to clone the projects source code to your local machine.
$ heroku git:clone -a kerry-rivers-ms3
$ cd kerry-rivers-ms3
create your requirements.txt file
$ pip freeze --local > requirements.txt

create your procfile file
$ echo web: python app.py > Procfile

Deploy your changes. Make some changes to the code you just cloned and deploy them to Heroku using Git.
$ git add .
$ git commit -am "commit message"
$ git push heroku master
In the heroku dashboard for the application, click on "Settings" > "Reveal Config Vars".

Set the following config vars:

IP : 0.0.0.0
PORT: 5000
MONGO_URI: mongodb+srv://<username>:<password>@<cluster_name>-qtxun.mongodb.net/<database_name>?retryWrites=true&w=majority
To get your MONGO_URI read the MongoDB Atlas documentation: HERE

In the heroku dashboard, click on the button "Open App".
The app should open in a new tab.

Credits
Content
All text in this project was written by the developer.

Media
The background image was sourced from https://www.pexels.com/
Acknowledgements
I'd like to thank my mentor, Antonija Šimić, for her useful and constructive feedback throughout the Milestone Project
The content of this website is for educational purposes only.
Thank you.
