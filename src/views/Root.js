import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MainTemplate from 'templates/MainTemplate';
import Home from 'views/Home';
import Portfolio from 'views/Portfolio';
import ContactForm from 'views/ContactForm';
import SideBar from 'components/organisms/SideBar';
import 'css/animationRoute.css';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <SideBar />
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={1000}
              classNames="fade"
              onExit={() => {
                document.body.scrollIntoView();
              }}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={ContactForm} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </MainTemplate>
  </BrowserRouter>
);
export default Root;
