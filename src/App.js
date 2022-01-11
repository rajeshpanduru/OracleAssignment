import "./styles.css";
import { UserComponent } from "./Components/UserComponent";
import { SearchComponent } from "./Components/SearchComponent";

// Create a User Component to display user list. Fetch users with appropriate React hooks and Redux.
// List should display name & email address along with checkbox at right of each user.
// Display another list on same time in this manner.
//  * If checkbox is checked, selected user name  should display in this list.
//  * If checkbox is unchecked, it should remove user entry from list.
//  * Implement search feature so that list can be searchable based on name of user.

// Reference: For getting user list use: https://jsonplaceholder.typicode.com/users

export default function App() {
  return (
    <div className="App">
      <h1>User App</h1>

      <UserComponent />
    </div>
  );
}
