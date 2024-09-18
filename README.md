# All about cakes

All about cakes is a delicious list of cakes users can browse through and add their favourite cakes.

## Setup

This app runs with

- **React** (through create-react-app)
- **Typescript**
- **Webpack** (in the background to build and run the application)
- **Material UI** (for quick layout and styling of the application)

## Installation

1. Clone the repo: `git clone git@github.com:pczcanda/all-about-cakes.git`
2. Go to folder: `cd all-about-cakes`
3. Install packages and dependencies: `npm install`
4. Run the application: `npm start`

## Cakes API

The cakes data can be managed through the following endpoing: `http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api`

It provides the following methods:

- `GET` /cakes
- `GET` /cakes/{id}
- `POST` /cakes
- `PUT` /cakes/{id}
- `DELETE` /cakes/{id}

## Future Improvements

1. **Error handling**

   The UI for error handling can be improved to provide better feedback to the user and allow them to better navigate around the app when errors occur.

2. **Optimistic updating vs Loading UI**

   Currently the app uses optimistic updating when adding a new cake to the list, which allows for a seamless transition once the form dialog is removed from the page and the new cake is seen in the list without having to make a new call to the server to get the list again. However, there could be a UI requirement to add loading states when the data is submitted and refreshed, specially if many users are simultaneously adding cakes.

3. **Styling**

   Styling of the app can be vastly improved with the introduction of brand guidelines and a styleguide.

4. **Other CRUD operations**

   Users could also have options to Edit and Remove cakes since these operations are already available through the API.

5. **Caching of queries (React query)**

   To reduce the amount of calls through the API, caching the calls to GET data for a small perioid of time with a tool like React Query, could be beneficial to improve the app performance.

6. **PWA**

   The app could be turned into a full Progressive Web App (PWA) allowing users to use the app even if offline, where options to navigate with cached data and save new cakes and submit them once the device is back online.

7. **Tests**

   More test scenarios can be added to the app
