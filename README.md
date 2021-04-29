# Reat-native

# UX Survey links:
_________________________________________
1. This is all you need to know to conduct a UX Survey:
   https://uxplanet.org/this-is-all-you-need-to-know-to-conduct-a-ux-survey-50400af45920
2. Useful Survey Questions for User Feedback Surveys 
   https://www.interaction-design.org/literature/article/useful-survey-questions-for-user-feedback-surveys
3. LinkedIn Learning Link:
   https://www.linkedin.com/learning/ux-foundations-research/agile-vs-waterfall?u=2126025


# Unit Testing
_________________________________________
#To do unit testing,
at first install the following packages:
________________________________________

```npm install --save-dev jest```

```npm install react-test-renderer@16.8.4```

_______________________________________________________________________
#Change package.json file in your application by adding the following
_______________________________________________________________________
```
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "preset": "react-native"
  },
 ``` 
____________________________________________________________________
#Write test cases in a file (i.e., Starter.test.js) under "App" folder
____________________________________________________________________
```
test("test rendering", ()=>{
	expect(1).toBe(1);	
});
```
______________________________________________
#Run the following command to check the result
______________________________________________

```npm test```

Details can be found here ```https://jestjs.io/docs/tutorial-react-native```
