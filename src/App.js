import React, { Component } from 'react';

//higher order components
import Layout from './hoc/Layout/Layout';

//router
import {Route, Switch} from 'react-router-dom';

//containers
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Resume from './containers/Resume/Resume';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
              <Route path="/about" component={About}/>
              <Route path="/resume" component={Resume}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/" exact component={Home}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
