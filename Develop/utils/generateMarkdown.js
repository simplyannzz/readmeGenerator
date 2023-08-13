// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badge = " ";
  if (license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";

  }
  return badge;
}


// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch (license) {
    case "IBM":
      licenseLink = "https://opensource.org/licenses/IPL-1.0"
      break;
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = " ";

  if (license != "None") {
    licenseSect += "## License\n"
    licenseSect += "Please see" + " " + renderLicenseLink(license) + "to get more information for this license\n";
  }
  return licenseSect;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const sections = [" Description", "Installation", "Usage", " Contribution", "Test", "License", "Questions"];

  // Title
  let markdown = "#" + " " + data.title + "\n";

  //Licenes badge
  markdown += renderLicenseBadge(data.license) + "\n";

  //Table of Content
  markdown += "## Table of Contents\n";
  for (let i = 0; i < sections.length; i++) {
    if (!(sections[i] === "License" && data.license === "None")) {
      markdown += i + 1 + ". [" + sections[i] + "](#" + sections[i][0].toLowerCase() + sections[i].substring(1) + ")\n";
    }
  }
  markdown += "\n";

  //Description
  markdown += "##" + sections[0] + "\n";
  markdown += data.description + "\n";

  //installation
  markdown += "##" + " " + sections[1] + "\n";
  markdown += data.installation + "\n";

  //usage
  markdown += "##" + " " + sections[2] + "\n";
  markdown += data.usage + "\n";

  //contribution
  markdown += "##" + sections[3] + "\n";
  markdown += data.contribution + "\n";

  //testing
  markdown += "##" + " " + sections[4] + "\n";
  markdown += data.test + "\n";

  //license
  markdown += renderLicenseSection(data.license) + "\n";

  //Questions
  markdown += "## " + sections[6] + "\n";
  markdown += "This is my github: " + data.github + "\n";
  markdown += "This is my email:" + data.email + "\n";

  return markdown

}


module.exports = generateMarkdown;
