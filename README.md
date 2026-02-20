# AI & Data Science Portfolio ⚡️  

[![License](https://img.shields.io/github/license/abdallahNabilRagab/Data-Science-Portfolio-built-with-React?color=blue)](https://github.com/abdallahNabilRagab/Data-Science-Portfolio-built-with-React/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/abdallahNabilRagab/Data-Science-Portfolio-built-with-React)](https://github.com/abdallahNabilRagab/Data-Science-Portfolio-built-with-React/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/abdallahNabilRagab/Data-Science-Portfolio-built-with-React)](https://github.com/abdallahNabilRagab/Data-Science-Portfolio-built-with-React/network)

## Personal AI & Data Science Portfolio  

A modern, clean, and fully responsive portfolio built with **React.js** to showcase:

- Artificial Intelligence Projects  
- Machine Learning Models  
- Deep Learning Applications  
- Data Science & Analytics Work  
- Research & Technical Achievements  



## Customization Guide

To personalize this portfolio:

- Edit content inside:   


- Modify global color theme from:  


You can fully customize sections, projects, skills, social links, and achievements to match your professional profile.

---

## Contributing

If you would like to suggest improvements or enhancements, feel free to:

- Open an issue:  
https://github.com/abdallahNabilRagab/Data-Science-Portfolio-built-with-React/issues

- Submit a pull request:  
https://github.com/abdallahNabilRagab/Data-Science-Portfolio-built-with-React/pulls

---
 
## Portfolio Owner

**Abdullah Nabil**  
Artificial Intelligence Engineer | Data Scientist | Machine Learning Specialist  

### Connect With Me

- GitHub: https://github.com/abdallahNabilRagab  
- LinkedIn: https://www.linkedin.com/in/abdullah-nabil-51a6a727a  
- Email: abdallah.nabil.ragab94@gmail.com  
- Kaggle: https://www.kaggle.com/abdallahnabil94  
- YouTube: https://www.youtube.com/@DrAbdullahNabil  
- TikTok: https://www.tiktok.com/@abdallah.nabil5  

---

## Table of Contents
- [Sections](#sections)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Linking portfolio to GitHub](#linking-portfolio-to-github)
- [Linking blogs section to Medium](#linking-blogs-section-to-medium)
- [Change and Customize](#change-and-customize-every-section-according-to-your-need)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Illustrations](#illustrations)
- [For the Future](#for-the-future)
- [Contributors](#project-maintainers)

---

## Portfolio Sections
✔️ Summary and About me\
✔️ Skills (AI, Machine Learning, Deep Learning, Data Science)\
✔️ Education\
✔️ Work Experience\
✔️ Open Source Projects Connected with GitHub\
✔️ Big AI & Data Projects\
✔️ Achievements And Certifications 🏆\
✔️ Blogs\
✔️ Talks\
✔️ Podcast\
✔️ Contact me\
✔️ GitHub Profile

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need Git and Node.js (which comes with npm) installed on your computer or use Docker.

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

### Docker Commands

```
1) BUILD IMAGE : docker build -t developerfolio:latest .
2) RUN IMAGE: docker run -t -p 3000:3000 developerfolio:latest
```

---

## How To Use 

From your command line, clone and run developerFolio:

```bash
# Clone this repository
git clone https://github.com/saadpasta/developerFolio.git

# Go into the repository
cd developerFolio

# Setup default environment variables

# For Linux
cp env.example .env
# For Windows
copy env.example .env

# Install dependencies
npm install

# Start a local dev server
npm start
```

---

## Change and customize every section according to your need.

#### Personalize page content in `/src/portfolio.js`

```javascript
/* Personal AI & Data Science Portfolio */

const greeting = {
  title: "Hi, I'm Abdullah Nabil",
  subTitle: "Artificial Intelligence Engineer | Data Scientist | Machine Learning Specialist 🚀 Passionate about building intelligent systems, recommendation engines, predictive models and data-driven solutions.",
  resumeLink: ""
};

const socialMediaLinks = {
  github: "https://github.com/abdallahNabilRagab",
  linkedin: "https://www.linkedin.com/in/abdullah-nabil-51a6a727a",
  gmail: "abdallah.nabil.ragab94@gmail.com",
  kaggle: "https://www.kaggle.com/abdallahnabil94",
  youtube: "https://www.youtube.com/@DrAbdullahNabil",
  tiktok: "https://www.tiktok.com/@abdallah.nabil5",
  display: true
};

const skillsSection = { .... }
const techStack = { .... }
const workExperience = { .... }
const openSource = { .... }
const bigProjects = { .... }
const achievementSection = { .... }
const blogSection = { .... }
const contactInfo = { .... }
const twitterDetails = { ... }
```

---

## Deployment

When you are done with the setup, you should host your website online.  
We highly recommend to read through the official React deployment documentation.

#### Deploying to GitHub Pages

- Navigate to `package.json` and enter your domain name in the `homepage` variable.
- Optionally configure a custom domain using a `CNAME` file.
- Follow official Create React App deployment documentation.

#### Deploying to Netlify

You could also host directly with Netlify by linking your own repository.

For more information, read hosting documentation on Netlify.

---

## Technologies Used

- React.js  
- JavaScript (ES6+)  
- SCSS  
- GitHub API  
- Node.js  
- Docker  

---

## About This Portfolio

This portfolio showcases AI, Machine Learning, and Data Science projects including:

- Recommender Systems  
- Predictive Modeling  
- Deep Learning Applications  
- Data Analysis & Visualization  
- Model Deployment & MLOps  

Built and customized by **Abdullah Nabil**.



## Technologies Used 

- [React](https://reactjs.org/)
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [SCSS](https://sass-lang.com/)
- [Node.js](https://nodejs.org/)
- [GitHub API](https://docs.github.com/en/rest)
- [Docker](https://www.docker.com/)
- [Python](https://www.python.org/)
- [NumPy](https://numpy.org/)
- [Pandas](https://pandas.pydata.org/)
- [Scikit-Learn](https://scikit-learn.org/)
- [TensorFlow](https://www.tensorflow.org/)
- [PyTorch](https://pytorch.org/)
- [Matplotlib](https://matplotlib.org/)
- [Seaborn](https://seaborn.pydata.org/)

---

## Illustrations

- [UnDraw](https://undraw.co/illustrations)
- [Lottie by LottieFiles](https://lottiefiles.com/)

---

## For the Future

If you'd like to contribute or suggest improvements to this AI & Data Science portfolio, feel free to open an issue or submit a pull request.

Planned future improvements:

- Integrate live AI model demos
- Add interactive data visualization dashboards
- Connect Kaggle API for automatic competition updates
- Add research publications section
- Add AI blog integration
- Add model deployment showcase (MLOps section)

---

## Project Maintainer 

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/abdallahNabilRagab">
        <img src="https://avatars.githubusercontent.com/u/00000000?v=4" width="100px;" alt="Abdullah Nabil"/>
        <br />
        <sub><b>Abdullah Nabil</b></sub>
      </a>
      <br />
      Artificial Intelligence Engineer  
      <br />
      Data Scientist | Machine Learning Specialist
    </td>
  </tr>
</table>

---

## Contributors 

This portfolio is fully designed, customized, and maintained by **Abdullah Nabil**.

If you would like to collaborate on AI projects, research, or open-source contributions, feel free to connect via:

- GitHub: https://github.com/abdallahNabilRagab  
- LinkedIn: https://www.linkedin.com/in/abdullah-nabil-51a6a727a  
- Email: abdallah.nabil.ragab94@gmail.com  

---