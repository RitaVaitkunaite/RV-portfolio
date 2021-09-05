import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import ProgramavimoZinynas from "./pages/programavimoZinynasPage";

import notesAppPage from "./pages/notesAppPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/projects/notesApp" component={notesAppPage} />
        <Route
          path="/projects/programavimoZinynas"
          component={ProgramavimoZinynas}
        />
        <Route path="*" component={MainPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
