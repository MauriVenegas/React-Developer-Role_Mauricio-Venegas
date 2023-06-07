import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import UsersList from "./UsersList";
import NewAddUser from "./WithLibreries/NewAddUser";

const AddUser = () => {
  // Setting states
  const initialFormState = { id: null, name: "", age: "" };
  const [user, setUser] = useState(initialFormState);
  const [usersList, setUsersList] = useState([]);
  const [withLibreries, setWithLibreries] = useState(false);

  /**
   * This function handles input change events and updates the state of a user object with the new input value.
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  /**
   * The function onSubmit prevents the default form submission behavior, checks if user name and age are not empty, adds
   * the user and resets the form state.
   * @param e - The parameter `e` is an event object that is passed to the `onSubmit` function when the form is submitted.
   * It is used to prevent the default behavior of the form submission, which is to reload the page.
   * @returns If either `user.name` or `user.age` is falsy (i.e. `null`, `undefined`, `0`, `false`, `NaN`, or an empty
   * string), the function will return without executing the `addUser` and `setUser` functions.
   */
  const onSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.age) return null;
    if (typeof user.name !== "string") throw new Error("name is not a string");
    if (Number.isNaN(user.age)) throw new Error("Age must be a number");

    addUser(user);
    setUser(initialFormState);
  };


  /**
   * The function adds a new user to a list of users with a unique ID.
   * @param val - The parameter `val` is an object that represents a user to be added to a list of users. 
   * The function `addUser` assigns a unique `id` to the user if it is no already provided,
   */
  const addUser = (val) => {
    val.id = val.id || usersList.length;
    setUsersList([...usersList, val]);
  };

  /**
   * The function `deleteUsers` sets an empty array as the value of `usersList`.
   */
  const deleteUsers = () => {
    setUsersList([]);
  };

  return (
    <>
      <button onClick={() => setWithLibreries(!withLibreries)}>
        {withLibreries ? "Original" : "With libreries"}
      </button>

      {withLibreries ? (
        <NewAddUser addUser={addUser} />
      ) : (
        <Card className={classes.card}>
          <form onSubmit={onSubmit} className={classes.form}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="name"
              type="text"
              value={user.name}
              onChange={handleInputChange}
            />

            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              name="age"
              type="number"
              value={user.age}
              onChange={handleInputChange}
            />

            <Button type="submit" className={classes.submit}>
              Add User
            </Button>
          </form>
        </Card>
      )}
      {usersList.length > 0 && <UsersList users={usersList} deleteUsers={deleteUsers}/>}
    </>
  );
};

export default AddUser;
