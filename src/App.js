import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import AllCourses from "./components/AllCourses";
import CoursePage from "./components/CoursePage";

// import { ContextController } from "./context";
const Placeholder = () => {
    return (
        <h1>Coming soon...</h1>
    );
}

const App = () => {
  return (
    // <ContextController>
      <Router>
        <>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={AllCourses} />
              <Route exact path="/course/:title" component={CoursePage} />

              <Route exact path="/categories" component={Placeholder} />
              <Route exact path="/top-courses" component={Placeholder} />
            </Switch>
          </main>
        </>
      </Router>
    // </ContextController>
  );
};

export default App;