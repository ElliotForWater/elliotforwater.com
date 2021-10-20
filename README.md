# Elliot For Water - Frontend

Elliot for Water is the search engine that donates water with your searches: https://elliotforwater.com

Elliot for Water is a social enterprise, with the mission of providing millions of people with access to safe drinking water. In practice, Elliot for Water is like any other search engine but with the extra characteristic that we donate 60% of our profit to realize clean water projects.

We are a very small team, incessantly working on ElliotForWater to make it become a reality which can help millions of people. To do so we need to develop more functionalities which allow the project to move faster and to deliver a product that our users will love to use. If you are considering contributing, there is a lot you could gain from this project: you could work on a project that actually helps people in need and makes a difference in the world. You will work with modern technologies and will have space to work on medium size tasks, which will actually make the difference and have your sign once in production. And you will work with an open-minded, young team excited to exchange ideas and to get new inputs.

### System versions

Node 14

npm 6.14.11

nextjs 10

### Build Status

| Branch  | Status                                                                                                                                                                                                                 |
| :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| main    | [![Build Status](https://dev.azure.com/E4W/Elliotforwater/_apis/build/status/ElliotForWater.efw-webapp?branchName=main)](https://dev.azure.com/E4W/Elliotfowwater/_build/latest?definitionId=17&branchName=main)       |
| develop | [![Build Status](https://dev.azure.com/E4W/Elliotforwater/_apis/build/status/ElliotForWater.efw-webapp?branchName=develop)](https://dev.azure.com/E4W/Elliotfowwater/_build/latest?definitionId=17&branchName=develop) |

## Documentation

Please find all the project related information in the [Wiki](https://github.com/ElliotForWater/efw-webapp/wiki)
Quick links:
Project set up and usage: https://github.com/ElliotForWater/elliotforwater.com/wiki/1.-Set-up-and-usage
How to contribute: https://github.com/ElliotForWater/elliotforwater.com/wiki/3.-How-to-contribute
Our code standard: https://github.com/ElliotForWater/elliotforwater.com/wiki/7.-Code-Styleguide


## How to start

This project is built with `Reactjs`, `Nextjs`, `Typescript`, `Storybook` and `Jest`.
To run the project you need to have install on your machine:

- `Nodejs > 8`
- `npm`

Once you clone the repo go ahead and install all the packages:

- `npm i` must be run from `root`
- `npm run dev` to run in development environment
- `npm run build` to run build the project and check for errors
- `npm run storybook` to run storybook and have a look at the UI components
- `npm run test` to run test coverage

Please have a look at `package.json` to discover more scripts you can run.

## API and Backend connection

This project is the Frontend code of ElliotForWater. To populate the search results, we have to use an internal API which is held in a different repository, which is not open source. (We are considering to open-source that one too but we need to research the legal implications of it.)
Our API runs in Staging and production environment.
For the purpose of development you can use the staging environment too.
You will find explanatory comments in the `.env.staging` file.

## I want to help out! How can I start?

We always welcome contributor of any kinds.
You can support us writing code, testing, writing translation, giving tips on UI, UX, SEO or spotting bugs or requesting new features.
In our [Github issues](https://github.com/ElliotForWater/elliotforwater.com/issues) you will find different tasks that mostly need help. 
You are more then welcome to grab any of those tasks and work on it.
Please assign the task you want to work on to yourself, communicate to the team any doubts, concerns, unclear specification or ideas of improvements.

We always welcome new feedback! If you have any ideas on how to improve the project, please feel free to open an issue, label with `ideas` and we will check and answer you asap.
Please remember we are a small team and we might need some time before getting back to you :prayhands:
Please read here how to pick a task and our [contribution workflow](https://github.com/ElliotForWater/efw-webapp/wiki/3.-How-to-contribute)

## Got a problem or found a bug?

If you encounter any problem in the installation, please open an [issue](https://github.com/ElliotForWater/efw-webapp/issues).

Got a question? Ask our [community](https://github.com/ElliotForWater/efw-webapp/discussions), would be easier to get an answer here then in the issues.

## License

Licensed under [MIT](https://github.com/ElliotForWater/efw-webapp/blob/main/LICENSE)

Copyright 2016-2021 Elliot for Water Organisation LTD.

Check our [Trademark guideline](https://github.com/ElliotForWater/efw-webapp/wiki/ElliotForWater-Trademark).
