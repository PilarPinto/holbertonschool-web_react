This project is about the use of the next components:

- ## Connect

The connect() function connects a React component to a Redux store.

It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.

- ## Provider

The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.

Since any React component in a React Redux app can be connected to the store, most applications will render a <Provider> at the top level, with the entire app’s component tree inside of it.

The Hooks and connect APIs can then access the provided store instance via React's Context mechanism.


- ## Middleware

Enhancers are powerful because they can override or replace any of the store's methods: dispatch, getState, and subscribe.

But, much of the time, we only need to customize how dispatch behaves. It would be nice if there was a way to add some customized behavior when dispatch runs.

Redux uses a special kind of addon called middleware to let us customize the dispatch function.


- ## redux-thunk

Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

[Thunks repo](https://github.com/reduxjs/redux-thunk)


- ## Reselect
Simple “selector” library for Redux (and others) inspired by getters in NuclearJS, subscriptions in re-frame and this proposal from speedskater.

        - Selectors can compute derived data, allowing Redux to store the minimal possible state.
        - Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
        - Selectors are composable. They can be used as input to other selectors.

[Reaselt repo](https://github.com/reduxjs/reselect)