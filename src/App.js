import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
// import ErrorBoundary from "./components/Error-boundry";
import HeaderComponent from "./components/Header.Component";
import LoadingComponent from "./components/Loading.Component";

// component imported here
const HomePage = lazy(() => import("./pages/homepage/Home.componnet"));
const ContactPage = lazy(() => import("./pages/contactpage/Contact.componnet"));
const AboutPage = lazy(() => import("./pages/aboutpage/About.componnet"));
const SignInPage = lazy(() => import("./pages/signinpage/SignIn.Component"));

export default function App() {
  return (
    <>
      <HeaderComponent />
      <Switch>
        {/* <ErrorBoundary> */}
        <Suspense
          fallback={<LoadingComponent message="Please wait while loading..." />}
        >
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/contact" component={ContactPage}></Route>
          <Route path="/signin" component={SignInPage}></Route>
        </Suspense>
        {/* </ErrorBoundary> */}
      </Switch>
    </>
  );
}
