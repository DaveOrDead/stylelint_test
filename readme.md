## Workflows Builder Prototype

1. Clone repo
2. In terminal `cd path/to/where/you/cloned`
3. run `npm install`
4. run `npm start`
5. navigate to localhost:5000

### Brief Redux summary

1. User selects a ruletype from dropdown in view.

2. View requests an action addInitialRuleForGroup.

3. Actions creator formats and returns an action object setting the ruleTypeId and groupIndex

4. View dispatches action object to the Store automatically because we are using connect (from react-redux) to wrap our view.  We have two functions that need to be passed to the wrapper in order to handle the state changes and the actions dispatch.

5. Store receives the action.  It sends the current state tree and the action to the rootReducer

6.  The root reducer cuts apart the state tree into slices. In our case we only have one slice - segementbuilder.  Then it passes each slice to the subreducer that knows how to deal with it.

7. SubReducer uses switch statement based on the action type to find out what to do with it, in this case "ADD_INITIAL_RULE_FOR_GROUP".

8. It is vital in Redux that you don't mutate the state object.  Instead the subreducer copies the slice and makes changes to the copy. It returns the copy of the slice to the root reducer.

9. Once all of the subreducers have returned their slice copies (in our case just one), the root reducer pastes all of them together to form the whole updated state tree, which it returns to the store. The store replaces the old state tree with the new one.

10. The store tells the view layer binding that there’s new state.

11. The view layer binding asks the store to send over the new state.

12. The view layer binding triggers a rerender.


Stylelint shout be installed globally

npm install --save-dev stylelint-loader stylelint