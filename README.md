# Final Frontend Exercise 

## Running the app

First of all, you need a RAPIDAPI account to create your own api key since the project uses Rapid API for retrieving hotel data. Follow this steps to create it:


1. Create a new account on RapidAPI
2. Fill in your information and choose the free plan.
3. Go to the Dashboard or Apps tab.
RapidAPI provides a default application, if you do not want to create a new one you can proceed to step 6.
4. Click 'Add New App', provide a name and description for your app and then click 'Add app'.
5. Find your API key in the 'Authorization' section of your app.
6. Copy the value in the X-RapidAPI-Key header in the SearchContext folder.
7. Now, go to [Priceline]( https://rapidapi.com/tipsters/api/priceline-com-provider) and press the button Subscribe to Test.
8. Select the 'Basic' plan.
With this, you should be able to test the API!
9. Add .env file to your root folder, follow the example in the .env.example file. Paste the key provided by Rapid API

In order to install the dependencies, make sure to be in the cinema repository. And, run 
```
npm install
```

Then, to run the app, please write the following command:

```
npm run dev
```

For running tests:

```
npm run test
```

