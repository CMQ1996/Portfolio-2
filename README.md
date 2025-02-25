# The Great History Quiz 
![alt text](all-devices-black.png)


[View the project here: https://cmq1996.github.io/Portfolio-2/]

## Table of Contents

- [User Experience (UX)](#user-experience-ux)
  - [Target Audience](#target-audience)
  - [User Goals](#user-goals)
  - [Project Story](#project-story)
- [Design](#design)
   - [Design Choices](#design-choices)
   - [Wireframes](#wireframes)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Deployment and Local Development](#deployment-and-local-development)
- [Credits & Acknowledgments](#credits--acknowledgments)
- [Final Thoughts](#final-thoughts)

---

## User Experience (UX)

### Target Audience
The target audience for this history quiz includes students, educators, and history enthusiasts who enjoy testing their knowledge in a fun and engaging way. Designed with a historical theme, the quiz appeals to individuals who appreciate educational games with a classic aesthetic. It is suitable for ages 12 and up, making it ideal for middle school to college-level students, as well as adults who enjoy casual learning experiences. The quiz's mix of historical topics and timed challenges also caters to competitive players who enjoy improving their scores and sharing results with friends on social media.
### User Goals
The primary goals of users engaging with this history quiz are to test and expand their knowledge of historical events, figures, and milestones in an interactive and enjoyable way. Users aim to challenge themselves by answering questions accurately and quickly, striving to achieve high scores and improve their performance over multiple attempts. Additionally, users seek an engaging learning experience that blends education with entertainment, while the social sharing feature allows them to showcase their results and compete with friends. For students and educators, the quiz serves as a valuable tool for reinforcing historical knowledge in a fun, low-pressure environment.
### Project Story
The idea for this project came from my past experiences in using kahoot in work. Gamification is a method used by many employers and educators to make learning more fun and engaging. This project was designed to provide an easy to use and competitive game, that is accessable across multiple devices. 

## Design
## Quiz Design Overview

### Thematic Aesthetic
- **Historical-Themed Fonts:** Uses *Cormorant Garamond* and *Gotham Rounded* for an aged, classic feel.
- **Background Imagery:** Vintage textures and historical motifs immerse users in the theme.
- **Color Scheme:** Deep burgundy and neutral tones create a rustic, historical atmosphere.

### Layout & Structure
- **Centered Container:** Ensures consistent display across devices.
- **Clear Sections:** Includes instructions, question display, answer buttons, timer, and final score.
- **Grid Layout:** Answer buttons are arranged in a grid for easy interaction and readability.

### Interactive Elements
- **Navigation Buttons:** Start and Next buttons guide the quiz flow.
- **Timed Questions:** A 30-second countdown adds challenge and urgency.
- **Dynamic Score Tracking:** Real-time feedback on answers with correct/wrong highlighting.

### Visual Feedback
- **Color-Coded Responses:** Green for correct answers, red for incorrect.
- **Animations:** Button hover effects and scaling enhance interactivity.
- **Status Changes:** Elements like buttons show/hide to guide the quiz stages.

### Final Score & Social Sharing
- **Final Score Display:** Shows bold final score with personalized performance feedback.
- **Social Sharing:** A "Share" button enables users to post their results online.

### Responsive Design
- **Mobile-Friendly Layout:** Adjusts to smaller screens, like single-column answer buttons.
- **Scalable Elements:** Fonts and layout adapt for readability on all devices.

This design focuses on providing an engaging, educational, and visually appealing user experience.


### Wireframes

## 1. Instructions Section
- **Purpose**: To introduce the quiz and provide users with instructions before they begin.
- **Position**: At the top of the page.
- **Elements**:
  - A heading (`<h2>`) welcoming the user to the quiz.
  - A paragraph (`<p>`) providing instructions on how to play.
- **Design Choices**:
  - Centered text to provide a balanced view.
  - Soft background with border to match the historical theme.
  - Call-to-action button ("Start") to begin the quiz.

## 2. Question Section
- **Purpose**: Displays the current question and answer options during the quiz.
- **Position**: Visible after clicking the "Start" button, and it takes up the majority of the screen while answering questions.
- **Elements**:
  - The question text (`<article>`) is displayed prominently.
  - Multiple answer buttons (`<button>`) laid out in a grid.
  - A timer displaying the time left (`<div>`) before the user must answer.
- **Design Choices**:
  - The answer buttons are styled to match the theme, with a historical, elegant look.
  - The timer provides a countdown in seconds, which updates every second.
  - The question text is placed at the top to immediately draw attention.
  - Buttons are designed in a grid for responsive layout (two buttons per row).
  - Clear feedback when answering (correct or wrong answers).

## 3. Controls Section
- **Purpose**: Contains buttons to start the quiz and move to the next question.
- **Position**: Below the question and answers section.
- **Elements**:
  - A "Start" button to begin the quiz.
  - A "Next" button that appears after answering a question to move on to the next one.
- **Design Choices**:
  - The "Next" button is hidden initially and only appears after answering.
  - The buttons are placed below the question and answers section for easy access.

## 4. Final Score Section
- **Purpose**: Displays the user’s final score once all questions have been answered.
- **Position**: This section is shown at the end of the quiz, replacing the question section.
- **Elements**:
  - A paragraph showing the final score.
  - A "Share Your Results" button that allows users to share their quiz result via social media or other methods.
- **Design Choices**:
  - Display a message based on the user's performance (e.g., "Well done, noble scholar!" for high scores and "Back to the scrolls with you!" for lower scores).
  - The share button is included to encourage users to share their results, which adds a social element to the quiz.

## 5. Responsive Design
- **Purpose**: Ensure that the quiz works well on different screen sizes, including mobile and desktop.
- **Position**: The layout should adjust depending on the viewport size.
- **Elements**:
  - The `.container` class adapts to the screen width by setting a max-width of 90% for mobile and a fixed width of 800px for larger screens.
  - The grid layout for answer buttons adapts to show one column on smaller screens (`grid-template-columns: 1fr`).
  - Font sizes and padding are adjusted for smaller devices to ensure readability and easy interaction.

## 6. Visual and Thematic Design
- **Purpose**: To align with the historical theme of the quiz.
- **Design Choices**:
  - The background of the body and the container uses historical imagery (e.g., old parchment or vintage illustrations).
  - Fonts like "Cormorant Garamond" for the main text give an aged, classic feel, fitting the theme of history.
  - The buttons are styled with a deep burgundy color to evoke a historical, classic aesthetic.
  - Interaction buttons (like hover and focus) have smooth transitions to enhance the overall user experience.

## 7. Accessibility Considerations
- **Purpose**: Ensure that the quiz is accessible to all users.
- **Design Choices**:
  - `aria-live` and `aria-label` attributes are used for better accessibility with screen readers.
  - The timer and score section are announced to users via `aria-live="polite"` and `aria-live="assertive"` to notify them of important updates in real-time.
  - Clear button labeling and role attributes are used to ensure assistive technology can describe the elements correctly.

---

## Flow of User Interaction

1. **Start**: The user lands on the page and is greeted with an introduction and instructions. Clicking the "Start" button hides the instructions and presents the first question.
2. **Answering**: The user is presented with a question and four answer options. They can select one, and the timer will continue counting down. Feedback will be shown (correct/incorrect).
3. **Next Question**: After answering, the "Next" button appears, allowing the user to proceed to the next question.
4. **Final Score**: Once all questions have been answered, the user is shown their final score and encouraged to share their result.

---


![Welcome Page Wireframe]
![Quiz Page Wireframe]
![Results Page Wireframe]

---

## Features

---

## Technologies Used

---

## Testing

---

## Deployment and Local Development

---

## Credits & Acknowledgments

---

## Final Thoughts

