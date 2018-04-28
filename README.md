# burger
## Description
Displays the contents of a MySQL database in two columns: burgers eaten and burgers uneaten. Each time a user requests a page, the server dynamically creates the tables from querying the database and compiling the webpage.

User can consume a burger by clicking the "devour" button. User can add a burger by typing in a name and clicking the "submit" button. These actions update the database. Each time the user performs an action, the page reloads, retrieving the updated page.

## Api
GET `/api/burgers` returns json of all the burgers.

POST `/api/burgers` creates a new burger with `{"name": name}`

PUT `/api/burgers` eats a burger with `{"id": id}`