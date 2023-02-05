#Test writing

One of the inseparable parts of software development is test writing
We have two ways for testing our app:
Manual test:

In this type of testing, the developer herself tests the problematic parts of the program according to the principles of its implementation.

##Automatic test:

  In this type of testing, developer write methods that test a different part of the apps
  We have three ways to write automatic tests:

##Unit tests:

  Unit testing is a stage of software testing in which the smallest part of a program such as a function or component or module is independently tested by   providing input and making sure that the output is as expected.

The most Important points of unit tests:

1-The test should be very, very simple to run quickly and in a short period of time. (That is, tests should be small so that changes in the code are easier.)

2-Tests should be isolated and independent from each other and have no dependencies.

3-Tests should not depend on the environment and execution time. (The test must always have a specific output in any environment and time.)

4-The test output must be Pass or Fail and does not require further checks.

##Integration tests:

Test component with its dependencies
Integration testing is the most important level of testing that focuses on the interaction between components, modules, and objects that work together. Integration testing is actually a level of testing that ensures that different parts of the system interact correctly and that data and information are passed between them correctly. In the integration test, software modules are logically integrated and tested as a group.

##End-to-end tests:

The main purpose of E2E testing is to test the end user experience by simulating a real user scenario and validating the system under test and its components for integrity. At this level, all user actions are simulated from the beginning of entering the system to the last step.

Puppeteer, selenium


