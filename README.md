# React-Native
_________________________________________
#To do unit testing,
At first install the following packages:
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
#Write test cases in a file (i.e., Starter.test.js) under App folder
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
