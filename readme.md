# Next.js boilerplate

Create React apps with next.js but without pain.

<p>
	<img src="https://readmeimgs-dbetwjhldo.now.sh/next_js.png" alt="Next.js starter pack">
</p>

Use ready made solutions and build your application on top of it eeeeeasyly.

## Installation

0) Clone the branch you need

1) cd to Next.js-starter folder.

2) Install all dependencies via npm `npm i` or yarn `yarn install`.

3) Start your web server `yarn start` || `npm run start`.

## File location and stuff

    .
    ├── actions             # Redux actions used api/ functions
    ├── api                 # Axios requests logic
    ├── components/         # All components used in the project
    ├── constants/          # Redux constants used in actions/
    ├── layout/             # Laout the entire app is stored in one place
    ├── lib/                # HOC for redux store, to check if current status is the server or client
    ├── pages/              # Pages that use components/ + next logic
    ├── reducers/           # Redux reducers
    ├── store/              # Redux store with initial state
    ├── static/             # Used to store fonts, icons, images, css
    └── ...

## Build production

To build a production version of your app you need to type

`npm run build` || `yarn build`

This will create dist folder where everything will be compressed and minified.

## The idea behind the example

This example shows how to integrate Redux, styled-components, linter in Next.js.

Also remind me stuff :D
