# Reat-native
_________________________________________
## Week 11:
_________________________________________
To install MobSF follow the links below:

1. for system requirements: https://mobsf.github.io/docs/#/requirements
2. for installation steps: https://mobsf.github.io/docs/#/installation
3. for sample apks: https://pentester.land/cheatsheets/2018/10/12/list-of-Intentionally-vulnerable-android-apps.html
_________________________________________
## Week 9:
_________________________________________
# UX Survey links:
_________________________________________
1. This is all you need to know to conduct a UX Survey:
   https://uxplanet.org/this-is-all-you-need-to-know-to-conduct-a-ux-survey-50400af45920
2. Useful Survey Questions for User Feedback Surveys: 
   https://www.interaction-design.org/literature/article/useful-survey-questions-for-user-feedback-surveys
3. LinkedIn Learning Link:
   https://www.linkedin.com/learning/ux-foundations-research/agile-vs-waterfall?u=2126025
4. Use Qualtrics to make your survey: mqedu.qualtrics.com 
5. Card Sorting:
   https://www.usability.gov/how-to-and-tools/methods/card-sorting.html
6. Eye Tracking:
   https://www.hotjar.com/conversion-rate-optimization/glossary/eye-tracking/
7. A/B testing:
   https://www.optimizely.com/optimization-glossary/ab-testing/
8. Expert Reviews:
   https://www.usability.de/en/usability-user-experience/glossary/expert-review.html
   https://www.experienceux.co.uk/faqs/what-is-an-expert-review/
9. Diary Studies:
   https://www.nngroup.com/articles/diary-studies/
10. Interviewing: 
   https://uxstudioteam.com/ux-blog/user-interviews/
_________________________________________
## Week 8:
_________________________________________
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

-----------------------------------------------------------------------------------
## Week 7
-----------------------------------------------------------------------------------
1. Passing value from one screen to another screen: 
	https://snack.expo.dev/@aboutreact/react-native-pass-value-from-one-screen-to-another-using-react-navigation?session_id=snack-session-H1OY2gb6m
2. Custom picker component example:
	https://www.npmjs.com/package/react-native-custom-picker
3. Sample project can be found here: https://www.back4app.com/docs/react-native/parse-sdk/data-objects/react-native-crud-tutorial
