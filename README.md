# YouTube Clone

## Features:

1. YouTube Home Feed
   - Displays a collection of videos on the homepage.
  
2. Watch Video Page
   - Videos play on this page.
   - Each video has the following details:
      - (a) Video title, description, views, and time of upload.
      - (b) Channel logo, name, and subscriber count.
      - (c) A comments section to display user comments.

3. Recommended Videos
   - Appears alongside the video that is currently playing.

4. Header Component
   - Contains the following elements:
      - (a) Menu icon: Clicking this toggles the Sidebar component.
      - (b) Search bar.
      - (c) User icon.

5. Search Bar Component
   - Integrates with a suggestion API (obtained from Stack Overflow) to provide search suggestions based on user input.
   - Implements API debouncing: API calls are made with a delay of 200ms between key presses.
   - The selected suggestion becomes the search query, and results based on the query are displayed in the Results Page component.

6. Responsive Web Design
   - The application is fully responsive, ensuring a seamless user experience across different screen sizes.
