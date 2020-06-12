# Questionly

A social game question random generator.


## About The Project

This project idea is a solution to my past drinking sessions with my friends where we ran out of topics and questions to talk about. This can also happen during parties, college orientation, or any typical social gathering with your friends. Therefore, with this app, you can generate questions randomly, play with one another, and have something to chat about!

Question Types:
1. Would You Rather
2. Burning Bridges Style
3. Who Is Most Likely
4. Have You Ever
5. This Or That
6. Personal, Funny, Raunchy
7. Others 

### Built With

* [React](https://reactjs.org/) - Front-end web framework used
* [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) - Command used to create development environment for React project



## Getting Started

### Prerequisites

* [node.js and npm](https://nodejs.org/en/)



### Installation

1. Install dependencies on your local machine:

```
git clone https://github.com/sebbycake/questionly.git
npm install
```

2. Create or edit a new JS file `questionsList.js`  and write your own questions in JSON format. Park it under `./src/util` directory.

Copy the code below and add your own question name.

```
const questionsData = [
    {id: 1, name: "Question 1"},
    {id: 2, name: "Question 2"},
    .
    .
    .
]

export default questionsData
```



### Usage

Run the code on node server:
```
npm start
```

## Deployment

Follow the steps below to deploy React app:

1. Heroku

```
cd <react_project_directory>
git init .
heroku create <your_project_name> --buildpack https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "Deploy to Heroku"
git push heroku master
```

2. Netlify


```
npm install -g netlify-cli
cd <react_project_name>
npm run build
```



If you've used React Router in your project,
do the following:
```
touch build/_redirects
```
Add the following code to `_redirects` file:
```
/*    /index.html  200
```

Finally, to deploy, run:
```
netlify deploy
```
You will be prompted to provide a publish directory. Enter `build`, which is a production build of your React project.


After viewing the draft URL given to you and everything is running smoothly, run:
```
netlify deploy --prod
```



## License

This project is licensed under the MIT License.