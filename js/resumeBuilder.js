var bio = {
	"name" : "Johna N. Morris",
	"role" : "Front-End Developer",
	"contacts": {
		"mobile": "(702) 406-4349",
		"email" : "johna.n.morris@gmail.com",
		"twitter": "@ParolePerdute",
		"github" : "johnanmorris",
		"location" : "Kent, WA"
	},
	"welcomeMessage" : "Hello! ~ Bonjour! ~ Buongiorno!",
	"skills" : [
		"HTML/CSS",
		"Python",
		"JavaScript",
		"French",
		"Italian"],
	"biopic" : "images/me.jpg"
}

/*
Iterates through the bio.skills array to produce a new formattedSkill
variable to append to the #skills id
Note: for loop procedure adapted from
http://stackoverflow.com/questions/5349425/whats-the-fastest-way-to-loop-through-an-array-in-javascript
Formats helper.js HTML strings from data in bio variable, and prepends
them to the #header id.
Iterates through bio.contacts to produce a new formattedContact
and appends it to the #footerContacts id.
*/

bio.display = function ()
{
	$("#header").prepend(HTMLskillsStart);
	for (var i = 0, len = bio.skills.length; i < len; i++)
	{
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").prepend(formattedName + formattedRole + formattedWelcomeMsg + formattedbioPic);
	for (contact in bio.contacts)
	{
		if (bio.contacts.hasOwnProperty(contact))
		{
			var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
			formattedContact = formattedContact.replace("%contact%", contact);
			$("#footerContacts").append(formattedContact);
		}
	}
}

bio.display();

//var HTMLbioPic = '<img src="%data%" class="biopic">';

var work = {
	"jobs" : [
		{
			"employer": "iSoftstone",
			"title": "Search Engine Evaluator (Independent Contractor)",
			"location": "Kirkland, WA",
			"dates": "May 2013-Present",
			"description": "Evaluate Bing search results for relevance; Complete approx. 80&ndash;100 query judgments per hour"
		},
		{
			"employer": "Corsco, Inc. (Mrs. Clean)",
			"title": "Editor",
			"location": "Mill Creek, WA",
			"dates": "April 2014-July 2015",
			"description": "Edited the content of three websites for grammar, style, clarity, factual accuracy, &amp; HTML meta data; Rewrote articles and blog posts with significant grammar issues to increase readability; Reviewed 400+ articles for plagiarism and completed an assessment of plagiarism levels; Interacted with website users through forums, Facebook, and other social media"
		},
		{
			"employer": "Klamath National Forest (Student Conservation Association)",
			"title": "Archaeology Intern",
			"location": "Happy Camp, CA",
			"dates": "June 2012-August 2012",
			"description": "Recorded and re-recorded historic mining sites using State of California preservation forms, and contributed to survey reports at the completion of each project; Assessed archaeological sites accurately and with minimal supervision; Used digital cameras, GPS units, and other specialized tools to accurately record archaeological sites"
		},
		{
			"employer": "Ricoh USA (Amazon Campus)",
			"title": "Mailroom Services Representative",
			"location": "Seattle, WA",
			"dates": "March 2012-May 2012",
			"description": "Provided Amazon employees with excellent customer service regarding purchasing of shipping services and mail products; Prepared mail, UPS parcels, and DHL parcels for outbound delivery"
		},
		{
			"employer": "Las Vegas-Clark County Library District",
			"title": "Mailroom Clerk",
			"location": "Las Vegas, NV",
			"dates": "October 2011-November 2011",
			"description": "Received and distributed UPS, FedEx, and US postalmail, and prepared outgoing mail for delivery"
		},
		{
			"employer": "Vannah &amp; Vannah",
			"title": "Legal Assistant",
			"location": "Las Vegas, NV",
			"dates": "July 2009-June 2011",
			"description": "Maintained and updated medical records for around 30&ndash;50 clients; Organized medical records and calculated total medical costs for each client; Drafted professional correspondence to medical providers to request documents; Assembled documents for discovery"
		},
		{
			"employer": "University of Nevada Library: E-Reserves &amp; Document Delivery",
			"title": "Library Assistant",
			"location": "Reno, NV",
			"dates": "August 2006-May 2009",
			"description": "Scanned books and documents, then edited them in Adobe Acrobat (cropping, OCR); Entered bibliographic data for scanned articles and book excerpts into library&rsquo;s electronic reserves database"
		}
	]
}

/*
Iterates through work.jobs to create a new string from helper.js, and
appends each to a new div of the work-entry class
*/

work.display = function()
{
	for (job in work.jobs)
	{
		if (work.jobs.hasOwnProperty(job))
		{
			$("#workExperience").append(HTMLworkStart);
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle + formattedWorkLocation +
				formattedWorkDates + formattedWorkDescription);
		}
	}
}

work.display();

var projects = {
	"projects": [
		{
			"title": "Udacity Stage 1: Make a Web Page",
			"dates": "May 2015",
			"description": "Basic HTML/CSS website for keeping Udacity Class Notes.",
			"images": ["images/project01.png"]
		},
		{
			"title": "Udacity Stage 2: Code Your Own Quiz",
			"dates": "October 2015",
			"description": "A Python program to run a fill-in-the-blanks quiz.",
			"images": ["images/project02.png"]
		},
		{
			"title": "Udacity Stage 3: Create a Movie Website",
			"dates": "November 2015",
			"description": "A movies website generated by Python, using classes.",
			"images": ["images/project03.png"]
		}
	]
}

/*
Iterates through projects.projects to create a new string from helper.js,
and appends each to a new div of the project-entry class
Additionally, if the projects.projects.images array is not empy, formats
the information into an <img> tag and appends it to the project-entry class
*/

projects.display = function()
	{
		for (project in projects.projects)
		{
			if (projects.projects.hasOwnProperty(project))
			{
				$("#projects").append(HTMLprojectStart);
				var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				$(".project-entry:last").append(formattedProjectTitle);
				var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry:last").append(formattedProjectDates);
				var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-entry:last").append(formattedProjectDescription);
				if (projects.projects[project].images.length > 0)
				{
					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
					$(".project-entry:last").append(formattedProjectImage);
				}
			}
		}
	}

projects.display()

var education = {
	"schools": [
		{
			"name": "University of Nevada",
			"location": "Reno, NV",
			"degree": "Bachelor of Arts",
			"majors": "Anthropology, Linguistics (minor)",
			"dates": "2006-2009",
			"url" : "https://www.unr.edu"
		},
		{
			"name": "Community College of Southern Nevada",
			"location": "Las Vegas, NV",
			"degree": "Transfer",
			"majors": "Anthropology",
			"dates": "2004-2006",
			"url" : "https://www.csn.edu"
		},
		{
			"name" : "California State University, San Luis Obispo",
			"location" : "Santa Barbara, CA",
			"degree" : "Presidio de Santa Barbara",
			"majors" : "Archaeological Field School",
			"dates" : "June 2011-July 2011",
			"url" : "http://www.sbthp.org/#!field-school/cu4k"
		}
	],

	"onlineCourses" : [
		{
			"title" : "Intro to Programming Nanodegree",
			"school" : "Udacity",
			"dates" : "May 2015-April 2016",
			"url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		}
	]
}

/*
For education.schools, education.onlineCourses, and education.otherCourses,
formats data from each object to its respective helper.js string and appends
to the education-entry class
*/

education.display = function()
{
	for (school in education.schools)
	{
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolURL = HTMLschoolURL.replace(/%data%/g, education.schools[school].url);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajors + formattedSchoolURL);
	}

	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses)
	{
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedOnlineURL = HTMLonlineURL.replace(/%data%/g, education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineSchool + formattedOnlineDates + formattedOnlineTitle + formattedOnlineURL);
	}
}

education.display();

$("#mapDiv").append(googleMap);