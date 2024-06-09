# BlogMeUpScotty

## Description

BlogMeUpScotty is a two-page website where users will input and view blog posts. It includes a content form, dynamically rendered blog posts, and a light/dark mode toggle.

## Original User Story and Acceptace Criteria

## User Story

```
AS A marketing student,
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences.
```

## Acceptance Criteria

```
GIVEN a personal blog
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
WHEN I submit the form,
THEN blog post data is stored to localStorage.
WHEN the form submits,
THEN I am redirected to the posts page.
WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form.
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries.
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post.
WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio.
```

### Mock-up

The following image shows the web application's intended appearance and functionality:
![Original Blog Mock-up](../BlogMeUpScotty/assets/images/100-web-apis-challenge-demo.gif)

The following image shows the web application's actual appearance and functionality:

## Link to Deployed application

* https://bldambtn.github.io/BlogMeUpScotty/

## Credits

### Collaborator(s):

* Travis Haynie, https://github.com/TravisHaynie, helped with code-reivew and introducting the DomContentLoaded event listener type.
* Jacqlyn McQuade, https://github.com/, helped with code-reivew, introducting the DomContentLoaded event listener type, and assisting with toggle debug.

### Research Sources:

* Geeks for Geeks. (accessed June 8, 2024) How To Create a Fixed Footer. Retrieved from https://www.geeksforgeeks.org/how-to-create-footer-to-stay-at-the-bottom-of-a-web-page/ 
* Mozilla. (accessed June 8, 2024). CSS Cursor. Mozilla Developer Network. https://developer.mozilla.org/en-US/docs/Web/CSS/cursor 
* Mozilla. (accessed June 8, 2024). CSS Width. Mozilla Developer Network. https://developer.mozilla.org/en-US/docs/Web/CSS/width
* Mozilla. (accessed June 8, 2024). Document: DOMContentLoaded Event. Mozilla Developer Network. https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event 
* Mozilla. (accessed June 8, 2024). Font Family. Mozilla Developer Network. https://developer.mozilla.org/en-US/docs/Web/CSS/font-family 
* Mozilla. (accessed June 8, 2024). Font Styles. Mozilla Developer Network. https://developer.mozilla.org/en-US/docs/Web/CSS/font-style 
* Mozilla. (accessed June 8, 2024).  localStorage. Mozilla Developer Network. https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage 
* She Codes. (accessed June 8, 2024) Flex-Basis. Retrieved From https://www.shecodes.io/athena/3168-creating-equal-sized-text-blocks-with-flexbox#:~:text=This%20is%20possible%20to%20do,contain%20different%20amounts%20of%20text
* W3Schools. (accessed June 8, 2024). Background Image. Retrieved from https://www.w3schools.com/cssref/pr_background-image.php 
* W3Schools. (accessed June 8, 2024).  How To – CSS Switch. Retrieved from https://www.w3schools.com/howto/howto_css_switch.asp 
* W3Schools. (accessed June 8, 2024). How To – JS Redirect. Retrieved from https://www.w3schools.com/howto/howto_js_redirect_webpage.asp 
* W3Schools. (accessed June 8, 2024). HTML DOM Document addEventListener(). Retreived from https://www.w3schools.com/jsref/met_document_addeventlistener.asp 

### Course Citation:

* Course Name: Full Stack Application Development, Modals 3 and 4
Platform: EdX
Year: 2027
edX Boot Camps LLC. (Year). Full Stack Application Development [Course]. EdX. https://www.edx.org

### Image Source:

* Ch., Andreea (2018). Green Potted Plant on White Ceramic Vase. Retrieved from https://www.pexels.com/photo/green-potted-plant-on-white-ceramic-vase-1166644/  

## License

MIT License

Copyright (c) 2024 bldambtn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.