# **The Great History Quiz**  
![Quiz Preview](/readme.images/all-devices-black.png)  

[**View the project here:**](https://cmq1996.github.io/Portfolio-2/)  

---

## **Table of Contents**
- [User Experience (UX)](#user-experience-ux)
  - [Target Audience](#target-audience)
  - [User Goals](#user-goals)
  - [Project Story](#project-story)
- [Design](#design)
  - [Thematic Aesthetic](#thematic-aesthetic)
  - [Wireframes](#wireframes)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Testing & Bugs](#testing--bugs)
- [Deployment and Local Development](#deployment-and-local-development)
- [Credits & Acknowledgments](#credits--acknowledgments)
- [Final Thoughts](#final-thoughts)

---

## **User Experience (UX)**  

### **Target Audience**  
- Students, educators, and history enthusiasts.  
- Ages 12+ (middle school, high school, and casual learners).  
- Competitive players looking to challenge their knowledge.  

### **User Goals**  
- Test and improve history knowledge in a fun way.  
- Compete for high scores and improve with multiple attempts.  
- Engage with an educational yet entertaining quiz experience.  
- Share results with friends and on social media.  

### **Project Story**  
Inspired by the success of *Kahoot!* and gamification in learning, this project aims to make history quizzes more engaging and accessible across devices. Designed with simplicity and competition in mind, *The Great History Quiz* provides an interactive experience while maintaining a historical aesthetic.  

---

## **Design**  

### **Thematic Aesthetic**  
- **Fonts:** *Cormorant Garamond* (classic, aged feel) & *Gotham Rounded* (modern touch).  
- **Backgrounds:** Vintage textures and historical images.  
- **Colors:** Deep burgundy, neutral tones, and parchment-like backgrounds.  
- **Layout:** Grid-based answer buttons for easy selection and readability.  
- **Animations:** Hover effects and dynamic feedback on answers.  

### **Wireframes**  
**Instructions Page:**  
![Instructions Page](/readme.images/image.png)

**Quiz Page:**  
![Quiz Page](/readme.images/image-1.png)

**Final Score Page:**  
![Final Score Page](/readme.images/image-2.png)  

---

## **Features**  

### **Core Features**
- **Start Screen:** Instructions with a "Start" button.  
- **Timed Questions:** 30-second countdown per question.  
- **Answer Feedback:** Correct answers turn green, incorrect turn red.  
- **Final Score Display:** Summarizes performance at the end.  
- **Social Sharing:** Option to share results online.  
- **Responsive Design:** Mobile and desktop-friendly layout.  

### **Interactive Features**
- **Button Effects:** Smooth transitions and hover effects.  
- **Dynamic Quiz Flow:** Hides/show elements based on progress.  
- **Keyboard Accessibility:** Fully navigable via keyboard.  

---

## **Technologies Used**  

- **HTML5** – Structure of the quiz.  
- **CSS3** – Styling and responsive design.  
- **JavaScript** – Quiz functionality and interactivity.  
- **Google Fonts** – *Cormorant Garamond* and *Gotham Rounded*.  
- **GitHub Pages** – Deployment of the live quiz.  

---

## **Testing & Bugs**  

### **Manual Testing**
✅ Checked responsiveness on mobile, tablet, and desktop.  
✅ Verified correct/wrong answers display correctly.  
✅ Timer functionality tested for accuracy.  
✅ Social sharing buttons tested on different platforms.  
✅ Tested for keyboard navigation and screen reader compatibility.  

### **Bugs Found & Fixes**  
❌ **Button hover effect inconsistent on mobile** – *Fixed by adjusting CSS for touch devices.*  
❌ **Timer not resetting on new questions** – *Resolved by resetting the timer in JavaScript after each question.*  
❌ **Final score sometimes displayed incorrectly** – *Fixed by ensuring score updates properly after each question.*  
❌ **Layout shifting on smaller screens** – *Adjusted media queries for better responsiveness.*  
❌ **Buttons incrementing score at the end of the quiz** - *As part of my testing phase, I sent the game to a few friends of mine to try. One of my friends, Sandra tested the game and found that the score was greater than 10 thus displaying innacurrate results. ![Bug 1](/readme.images/IMG-20250223-WA0028.jpg)*
*I solved this bug, by adding two extra snippets of code to stop the double event*
![bug 1 solved](/readme.images/image-4.png)
❌ **End of quiz message double event** *While testing the quiz with my friends, as well as my mentor Rory I discovered that a double event was occuring as a result of one of my functions.*
![double event](/readme.images/for%20readme-1.PNG)

*To solve this error, I replaced the createnewelement in the const message function with a new getelementbyID one therefore preventing the double event.*
![double event solved](/readme.images/forreadme333.PNG)
❌**End of quiz ammendment removed score out of ten** *The previous ammendement to the JavaScript removed the score out of ten display at the end of the quiz. I ammended this by adding a normalised score calculated with Math.round((score / shuffledQuestions.length) * 10) to show a scoring out of ten*
![double event extra issue](/readme.images/image-5.png)

---
### **Testing**  
- **HTML**: Validated using the [W3C Markup Validator](https://validator.w3.org/).
- **CSS**: Validated using the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
- **JavaScript**: Validated using the [Jshint validator](https://jshint.com/).
- **Site Functionality**: Tested funtionality on desktop and mobile using [Lighthouse](https://pagespeed.web.dev/).
<details>
<summary>index.html
</summary>

![HTML validation result](/assets/images/wc3.htmlvalidator.PNG)
</details>
<details>
<summary>style.css
</summary>

![CSS validation result](/assets/images/wc3.cssvalidator.PNG)
</details>
<details>
<summary>script.js
</summary>

![JavaScript validation result](/assets/images/jshint.test.PNG)
</details>
<details>
<summary>Desktop report
</summary>

![Desktop lighthouse report](/assets/images/lighthouse%20score%20for%20desktop.PNG)
</details>
<details>
<summary>Mobile report
</summary>

![Mobile lighthouse report](/assets/images/lighthouse%20score%20for%20mobile.PNG)
</details>




## **Deployment and Local Development**  

### **Deploying via GitHub Pages**
1. Push the latest version to GitHub.  
2. Go to **Settings > Pages** in your repository.  
3. Select the branch (e.g., `main`) and click **Save**.  
4. The live site will be available at:  
   👉 `https://cmq1996.github.io/Portfolio-2/`  



## **Credits & Acknowledgments**  
**The Code Institute:** The Code Institute provided me with the knowledge and skills to write this project, of which I am particualrly proud of. 

- **Tutor Support:** A huge thank you to *Rory Patrick* for providing guidance, feedback, and support throughout the project. Pariticularly with some of my debugging steps, aswell as for providing me with a good format for my readme.  
- **Images:** *Pexels, Unsplash* (Royalty-free historical images).  
- **Fonts:** *Google Fonts* (*Cormorant Garamond*, *Gotham Rounded*).  
- **Inspiration:** *Kahoot!* for gamified quiz concepts.  
- **Testing Assistance:** Thanks to friends and beta testers for their feedback!  
- **Learning Resources:** *W3Schools* for HTML, CSS, and JavaScript references.  
- **Free stock image resources:** *https://www.pexels.com/* as a resource for stock images to use on my quiz to provide a more historical theme.