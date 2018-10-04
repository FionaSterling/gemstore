import React, { Component } from 'react';
import './tabs.css';
import Description from './description/description.js';
import Specs from './specs/specs.js';
import Reviews from './reviews/reviews.js';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';

class PanelTabs extends Component {
  // es6 arrow syntax automatically binds, allowing instances of this component to have their own handleClick method
  handleClick = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="PanelTabs">
        <Tabs defaultIndex={0} selectedTabClassName="active">
          {/* TabList renders what you see for the tab button */}
          <TabList>
            <ul className="nav nav-tabs">
              {/* render description button */}
              <Tab className="nav-item">
                <a onClick={this.handleClick} className="nav-link" href="/">Description</a>
              </Tab>
              {/* render reviews button */}
              <Tab className="nav-item">
                <a onClick={this.handleClick} className="nav-link" href="/">Reviews</a>
              </Tab>
              {/* render specs button */}
              <Tab className="nav-item">
                <a onClick={this.handleClick} className="nav-link" href="/">Specs</a>
              </Tab>
            </ul>
          </TabList>
          {/* TabPanel renders the proper component to show the information on that tab*/}
          <TabPanel><Description /></TabPanel>
          <TabPanel><Reviews /></TabPanel>
          <TabPanel><Specs /></TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default PanelTabs;
