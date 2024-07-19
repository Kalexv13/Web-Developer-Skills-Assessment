# Task 6: Create a Modal Popup

## Objective

Create a modal popup using HTML, CSS, and JavaScript that can be opened and closed with a button.

## Requirements

- Create an HTML file named `modal.html`.
- Create a CSS file named `modal-styles.css`.
- Create a JavaScript file named `modal-script.js`.
- Implement a button that opens the modal.
- Implement a close button inside the modal.
- Implement a backdrop that closes the modal when clicked.
- Style the modal and backdrop with CSS.

## Instructions

1. Create a new file named `modal.html` in the root directory of your project.
2. Create a CSS file named `modal-styles.css` and link it to `modal.html`.
3. Create a JavaScript file named `modal-script.js` and link it to `modal.html`.
4. Implement the HTML structure for the modal and the button to open it.
5. Style the modal and backdrop using CSS.
6. Use JavaScript to open and close the modal.

## Detailed Explanation

### Step-by-Step Guide

1. **Creating the HTML Structure**:
   - Create a file named `modal.html`.
   - Add a button to open the modal.
   - Add the modal structure with a close button and a backdrop.

2. **Styling the Modal and Backdrop**:
   - Create a file named `modal-styles.css`.
   - Link the CSS file to `modal.html` using a `<link>` element inside the `<head>`.
   - Add CSS rules to style the modal, close button, and backdrop.

3. **Implementing JavaScript Functionality**:
   - Create a file named `modal-script.js`.
   - Link the JavaScript file to `modal.html` using a `<script>` element before the closing `</body>` tag.
   - Implement functions to open and close the modal when the buttons are clicked.
   - Implement functionality to close the modal when the backdrop is clicked.

## FAQs

### 1. How do I create a modal popup in HTML?

You can create a modal popup in HTML by adding a `div` for the modal content, a `div` for the backdrop, and buttons to open and close the modal.

### 2. How do I style a modal popup with CSS?

You can style a modal popup with CSS by setting the `position` to `fixed`, centering it using `top`, `left`, and `transform`, and adding styles for `width`, `padding`, `background-color`, and `box-shadow`.

### 3. How do I open and close a modal with JavaScript?

You can open and close a modal with JavaScript by adding event listeners to the buttons and backdrop. Use `display: block` to show the modal and `display: none` to hide it.

### 4. How do I add a backdrop for the modal?

You can add a backdrop for the modal by creating a `div` with a semi-transparent background that covers the entire screen. Use `position: fixed`, `top: 0`, `left: 0`, `width: 100%`, and `height: 100%` to cover the screen.

## Submission

Once you have completed Task 6, commit the `modal.html`, `modal-styles.css`, and `modal-script.js` files to your forked repository. Include a note in your README file explaining how to view and test the modal popup.

Good luck and happy coding!
