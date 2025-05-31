BRIEF TESTING GUIDANCE--

1. Input Field Testing
Start by checking the input field. Before typing anything, it should display a placeholder text like “Enter your task here.” This lets users know what the field is meant for. As soon as the user starts typing, the placeholder should disappear and the typed text should appear inside the input box. If the user tries to click the “Save” button without entering any text, the app should ideally either show a validation message, an alert, or simply ignore the request to add a task.

2. Adding Tasks
To test the task-adding feature, type a valid task into the input field and click the “Save” or “Add” button. The task should immediately appear in the task list below the input. Repeat the process for multiple tasks (e.g., 2–3 tasks) and ensure they appear stacked one after another vertically, without overlapping. This confirms that the layout and spacing between task items are working correctly.

3. Deleting Tasks
For deleting tasks, each task item should have a "Delete" button. When clicked, the corresponding task should be removed from the task list. Try deleting individual tasks and observe the behavior. Once all tasks are deleted, the list should be empty and clean, without leaving any layout glitches or empty spaces.

4. Completing Tasks
To test the completion feature, click on the “Completed” button next to any task. The visual style of the task should change—for example, applying a strikethrough effect or changing the background color—to indicate that the task is completed. If your app allows toggling the completed state, try clicking the same button again to mark it as incomplete and ensure the style resets correctly.

5. UI Responsiveness
Lastly, test the layout’s responsiveness. Resize your browser window to simulate smaller screen sizes. The layout should adapt smoothly without breaking or causing elements to overlap. For a more accurate test, open the app on a mobile phone or use the mobile view in Chrome DevTools. Check that all UI elements—including the input field and buttons—are clearly visible, accessible, and easy to interact with on a small screen.








# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



