# Table Filter Coding Challenge

Welcom to Determined AI!

Today we have a small little webapp that shows a table of contacts. We're looking to expand the functionality of this webpp. To kick this off, let's run the following to get setup.

```
npm install
npm start
```

You should be able to point your browser to `http://localhost:3000` if webpack-dev-server doesn't already do this for you.

## Challenge Milestones and Requirements

There are 2 milesontes for this challenge.

### 1st Milestone - Implement Search Filter

There is a large list of people that is being returned from the API and rendered inside an Ant Design table component. The task is to provide the user the ability to filter the list of people based on a search input.

* Filter the list of people based on the user's search string.
* Each key stroke inside the search input should trigger a filter.
* If any of the 4 columns match the search string, it should remain in the filtered result.
* The match should be case insensitive.
* If the search string is contained in the field it is considered a match. For example, **ac** should match **Accordion**, **Macy**, and **Tarmac**. A search of **5** should match people who are age of **65**, **57** and **5**.

### 2nd Milestone - Implement Search Debounce

Let's assume that filtering is an expensive operation and tying each
keystroke to a filtering operation is too much. We'll want to curb that
behavior by reducing how often filtering gets called. Let's implement
a basic debouncing operation.

* Implement the `debounce` function to group fast keystroke changes to just make one call to filter if these keystrokes all happen within 1 second (1000ms).
* Apply the debouncing behavior.

## Included Libraries and Packages

The following libraries and packages are available for you to use. You are not required to use them.

* [antd](https://github.com/ant-design/ant-design) Ant Design component library.

## Helpful Resources

At any time you are free to look up anything online. Here are some links that might be helpful during the challenge.

* [Ant Design Input API](https://ant.design/components/input/#API)
* [Ant Design Table API](https://ant.design/components/table/#API)

## Questions?

Please ask us any questions you have through out the challenge.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
