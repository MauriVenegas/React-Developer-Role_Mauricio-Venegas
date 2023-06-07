import React from "react";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";
import Button from "../UI/Button";

/* This variable is used to display the label for the age of each user. */
const LABBEL_YEAR = "years old";

const UsersList = ({ users, deleteUsers }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} {LABBEL_YEAR})
          </li>
        ))}
        <Button onClick={deleteUsers}>
          Delete {users.length > 1 ? "users" : "user"}
        </Button>
      </ul>
    </Card>
  );
};

export default UsersList;
