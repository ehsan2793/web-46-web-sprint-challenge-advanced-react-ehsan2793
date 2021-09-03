# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

functional component are also know as stateless component are similarly accept data and display them

stateful data on the other hand can hold on to data and can keep track of changes of data

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount: is call just before mounting when mean before rendering of the page happens according to react documentation it is an unsafe component and it’s better to use constructor instead of it.

componentWillUpdate() function takes two arguments nextState and nextProps and act very similar to componentsdidMount.

3. Define stateful logic.

Any code that is used to manipulate sets of data can come together under a function and that single function handles the changes. this help us in Separation of Concerns which is each set of code must do one thing.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange: Setup the react component we are testing.
Act: Execute our behavior (if there is one).
Assert: Extract the response element and check (if necessary) that it is what we expect it to be.
