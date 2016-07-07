// bio object
var bio = {
    "name": "Josh Fontecha",
    "role": "front-end developer",
    "contacts": {
        "email": "jfontechaATgmailDOTcom",
        "github": "jfonte",
        "twitter": "jfontecha",
        "location": "Halle, Germany"
    },
    "skills": ["html5", "css3", "linux", "git", "javascript", "bootstrap", "jquery", "sketch", "python"],
    "welcomeMessage": "Provehito in Altum",
    "biopic": "https://avatars0.githubusercontent.com/jfonte",
    "display": function() {
        $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#header").prepend(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("#header").prepend(HTMLheaderRole.replace("%data%", "front-end developer"));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
        $("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
        $("#tags").append(HTMLskillsStart);
        for (var skill in bio.skills) {
            if (bio.skills.hasOwnProperty(skill)){
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
            }
        }
        $("#displays").append('<li class="flex-item"><span class="white-text"><button id="worky">Work</button></span></li>');
        // $("#displays").append('<li class="flex-item"><span class="white-text"><button id="progeny">Projects</button></span></li>');
        $("#displays").append('<li class="flex-item"><span class="white-text"><button id="eddie">Education</button></span></li>');
        $("#displays").append('<li class="flex-item"><span class="white-text"><button id="mappy">Places</button></span></li>');
    }
};

// education object

var education = {
    "schools": [{
        "name": "UNICAH",
        "location": "Tegucigalpa, Honduras",
        "degree": "Bachelor's",
        "majors": ["Computer Engineering"],
        "dates": "2002-2007",
        "url": "nothing to see here folks"
    }],
    "onlineCourses": [{
        "title": "Front-end nanodegree",
        "school": "Udacity",
        "date": "2016 (in progress)",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
        "urlname":"Udacity.com"
    }],
    "display": function() {
        education.onlineCourses.forEach(function(course){
                $("#education").append(HTMLschoolStart);
                // $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url)+HTMLonlineURLname.replace("%data%", course.urlname));
                $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.date)+'<br>');
                $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url)+HTMLonlineURLname.replace("%data%",HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school)));
        });
        education.schools.forEach(function(school){
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append('<br>'+HTMLschoolDates.replace("%data%", school.dates));
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
            for (var i=0; i<school.majors.length;i++){
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors[i]));
            }
        });
    }
};

// work object

var work = {
    "jobs": [{
        "employer": "IADB",
        "title": "IT consultant",
        "location": "Paris, France",
        "dates": "2009-2012",
        "description": "Managed IT systems for office. Tasks included systems and network administration, database administration, web development and tech support."
    }, {
        "employer": "IADB",
        "title": "Research Fellow",
        "location": "Washington D.C., USA",
        "dates": "2007-2009",
        "description": "Identified, researched, diagnosed, documented and designed solutions for the bank’s internal/external applications & platforms"
    }, {
        "employer": "Lido Pozuelo",
        "title": "Systems administrator",
        "location": "Tegucigalpa, Honduras",
        "dates": "2006-2007",
        "description": "Established and developed contingency & security policies. Defined software & hardware requirements based on needs & budget. Maintained ERP , IT & network infrastructure. Planned, coordinated, & installed first data center. Lead usability tests & helped improve vehicle fleet management with a GPS system. Performed research on automation of certain quality assurance tests in the factory."
    }],
    "display": function() {
        work.jobs.forEach(function(item) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", item.employer) + HTMLworkTitle.replace("%data%", item.title));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", item.dates));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", item.location));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", item.description));
        });
    }
};

// projects object

var projects = {
    "display": function() {
        // iterates over projects array property
        projects.projects.forEach(function(project){
            $('#projects').append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
            for(var i = 0; i<project.images.length;i++){
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%",project.images[i]));
            }
        });
    },
    "projects": [{
        "title": "space",
        "dates": "1979",
        "description": "Space mission",
        "images": ["./images/project.png","./images/project.png"]
    }, {
        "title": "time travel",
        "dates": "1955-2015",
        "description": "Built time machine",
        "images": ["./images/project.png","./images/project.png"]
    }]
};


// call display functions, add map & initialize everything hidden
// (TODO:figure out how to do this better! )

bio.display();
education.display();
// projects.display();
work.display();
$("#mapDiv").append(googleMap);

// hide work, edu, proj so button toggles have purpose
// PURPOSE! -> https://www.youtube.com/watch?v=X7HmltUWXgs

$("#workExperience").hide();
// $("#projects").hide();
$("#education").hide();
$("#mapDiv").hide();

// code to make site more minimalistic and hide/show elements only
// when desired

$(document).ready(function() {
    $("#worky").click(function() {
        $("#workExperience").toggle();
    });
    $("#eddie").click(function() {
        $("#education").toggle();
    });
    $("#progeny").click(function() {
        $("#projects").toggle();
    });
    $("#mappy").click(function() {
        $("#mapDiv").toggle();
        initializeMap();
    });

});