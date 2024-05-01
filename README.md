<div align="center">
  <br>
  <h1>Inked <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffc894" d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"/></svg> </h1>
</div>

## About
Dive into the world of ideas with this Medium-inspired blog. Create and share compelling content with ease using Inked. This portfolio project facilitated my transition from JavaScript to TypeScript. In addition, we migrated from MongoDB to a scalable SQL database and gained experience deploying on AWS.


## Table of Contents

- [About](#about)
- [Table of Contents](#table-of-contents)
- [Technologies](#technologies)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Status](#project-status)
- [Room For Improvement](#room-for-improvement)
- [Contributing](#contributing)

## Technologies
- React.js
- TypeScript
- Tailwind CSS
- Prisma
- Neon DB
- JWT
- AWS

## Features
- Frontend: Built a performant and user-friendly interface using React.js with TypeScript for strong typing and maintainability.
- Backend: Utilized Prisma to streamline database interactions with Neon SQL and ensure efficient data management.
- Authentication: Implemented secure user authentication with JSON Web Tokens (JWT) for a seamless user experience, eliminating the need for repetitive logins.
- Deployment: Deployed the application on AWS Cloudflare and EC2 for scalability and optimized performance to handle user growth.

## Getting Started
There are three folders in the project directory. Two of them are conventional - one is intended for setting up the backend server, while the other relates to the frontend portion of the project. The third folder is for verifying the data type. Both projects use this object, so we created a shared folder and deployed it on the NPM website. It is now accessible as a global npm package.
The project requires installing Node software and cloning repositories before following the steps below.

### Backend initialization

To start the backend server on your system, change the working directory to the backend folder.

```bash
cd backend
```
First, create a .env file and add an environment variable similar to the example file named .env.example. These variables are needed to connect to the Postgres SQL database.

```bash
code .env
```
Setting up the backend server is just a few steps away. After installing the dependencies, we'll connect to the SQL database using a package called Prisma. The backend server is ready to run after the schema is migrated to the database.

```bash
npm install

npx prisma migrate dev --name init
```
We need to run one last command to run the program that responds to API calls from the front end.
```
npm run dev
```
### Frontend initialization

Setting up the Frontend is pretty straightforward. Start by changing the working directory to the frontend folder.

```bash
cd frontend
```
UNlike the backend process, we add the URL of the backend server for API calls to the config.ts file in the folder.

```bash
export const Backend_URL = 'http://127.0.0.1:8787/api/v1';
```
After installing the necessary dependencies, we can successfully run the FLUX payment application on our local system. The MongoDB database will store the generated data using the provided credentials during the backend setup.

```bash
npm install

npm run dev
```

## Project Status
Inked is a constantly evolving portfolio project that will continue to improve. Version 2 will be released shortly, and some of the features and improvements listed below will be incorporated.

## Room For Improvement
### Improvements
- Redesign the UI.
- Enable adding images to blog posts.
### Features that can be added
- Add a watchlist and follow the buttons for the writer.
- Allow adding category tags to blog posts.

## Contributing

Pull requests are welcome, but for significant changes, please open an issue first to discuss it.

[⬆ Back to Top](#about)

<div align="center">
  <br>
  <hr/>
  <h3>Socials :</h3>
<p>
    <span style="margin-right: 30px;">
    </span>
    <a href="https://www.linkedin.com/in/ansumannayak03">
        <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#0072b1" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
    </a>
    <span style="margin-right: 30px;">
    </span>
    <a href="https://github.com/ansu0311">
       <svg xmlns="http://www.w3.org/2000/svg" height="32" width="31" viewBox="0 0 496 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#6e5494" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
    </a>
    <span style="margin-right: 30px;">
    </span>
    <a href="https://dribbble.com/Ansu0311">
       <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ea4c89" d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z"/></svg>
    </a>
    <span style="margin-right: 30px;">
    </span>
</p>
</div>