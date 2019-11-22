import React from "react";
import "./App.css";
// import the Container Component from the semantic-ui-react
import { Container } from "semantic-ui-react";
// import the ToDoList component
import SlackUserList from "./Slack-User-List";
function App() {
  return (
    <div>
      <Container>
        <SlackUserList />
      </Container>
    </div>
  );
}
export default App