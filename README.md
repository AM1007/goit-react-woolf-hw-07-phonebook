## Preparing for work

1. Make sure that the LTS version of Node.js is installed on the computer.
   [Download and install](https://nodejs.org/en/) if necessary.
2. Install the project's basic dependencies using the `npm install` command.
3. Start the development mode, execute the `npm start` command.
4. Go to [http://localhost:3000](http://localhost:3000) in the browser. This
   page will automatically reload after saving the changes project files.

---

## Phonebook

Refactor the code of the
[previous task](https://github.com/AM1007/goit-react-woolf-hw-04-phonebook) to
add state management using the [Redux Toolkit](https://react-redux.js.org/)
library. Let the Redux state look like this.

```
{
  contacts: [],
  filter: ""
}
```

- Create a store with `configureStore()`
- Use the `createSlice()` function
- Create actions to save and delete a contact, as well as update a filter
- Connect React components with Redux logic using the
  [react-redux](https://react-redux.js.org/) library hooks.
- Use the Redux Persist library to store an array of contacts in local storage
