const validate = require("validate.js");
const developerConstraints = {
  nombres_completos: {
    presence: true
  },
  link_github: {
    presence: true
  },
  tecnologias_conocidas: {
    presence: true
  }
}

const validateDeveloper = async (developer) => validate.async(developer, developerConstraints);

module.exports = {
  validateDeveloper
}
