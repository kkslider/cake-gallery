## Project description

This is a React app built using `create-react-app`. The content is a photo gallery filled with images of cake, featuring lightbox functionality with photo click/swipe navigation.

![screenshot](https://i.imgur.com/9pjaTSC.png)

## Getting started

1.  You will first want to pull down this repository and run `npm install` in your Terminal to download the needed dependencies
2.  Run `npm run start` in Terminal to have webpack spin up a local development server and compile .scss files to .css
3.  Visit [http://localhost:3000](http://localhost:3000) to view the app

## Key features
- [x] Mobile responsiveness (try resizing the window or changing the user-agent to a mobile device in Chrome DevTools)
- [x] Swiping (click and drag with a mouse) on a mobile device user-agent will be recognized as a gesture to navigate between photos while viewing in the lightbox
- [x] Show separate thumbnail images on initial load, while larger version images are shown on demand to minimize bandwidth and load time

## Room for improvement
* Show a loading spinner while an image is being downloaded
* Set the lightbox image `src` attribute to an empty string to clear the view between navigation events (there is currently a delay between image transitions while the new image is being downloaded)
* Steps towards production deployment including bundling source files with unique hashes
