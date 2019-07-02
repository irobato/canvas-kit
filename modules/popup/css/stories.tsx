import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import './index.scss';
import './stories.scss';

storiesOf('CSS/Popup', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <section className="popup-demo-section">
        <div className="wdc-type popup-demo">
          <div className="wdc-popup">
            <div className="wdc-popup-title">Popup Title</div>
            <p>Popup line 1</p>
            <p>Popup line 2</p>
          </div>
          <div className="wdc-popup wdc-popup-tooltip">Tooltip</div>
        </div>
        <div className="wdc-type popup-demo">
          <div className="wdc-popup wdc-popup-right">
            <div className="wdc-popup-title">Total Salary & Allowances</div>
            <p>Start Date: 01/01/2000</p>
            <p>Total Salary & Allowances: $78,798.88</p>
          </div>

          <div className="wdc-popup wdc-popup-left">
            <div className="wdc-popup-title">Total Salary & Allowances</div>
            <p>Start Date: 01/01/2000</p>
            <p>Total Salary & Allowances: $78,798.88</p>
          </div>

          <div className="wdc-popup wdc-popup-top">
            <div className="wdc-popup-title">Total Salary & Allowances</div>
            <p>Start Date: 01/01/2000</p>
            <p>Total Salary & Allowances: $78,798.88</p>
          </div>

          <div className="wdc-popup wdc-popup-bottom">
            <div className="wdc-popup-title">Total Salary & Allowances</div>
            <p>Start Date: 01/01/2000</p>
            <p>Total Salary & Allowances: $78,798.88</p>
          </div>
        </div>
      </section>

      <section className="popup-demo-section">
        <h2>Hover to activate</h2>
        <div className="wdc-type popup-demo">
          <div className="wdc-popup-container">
            Right popup
            <div className="wdc-popup wdc-popup-right">This is a popup</div>
          </div>

          <div className="wdc-popup-container">
            Left popup
            <div className="wdc-popup wdc-popup-left">This is a popup</div>
          </div>

          <div className="wdc-popup-container">
            Top popup
            <div className="wdc-popup wdc-popup-top">This is a popup</div>
          </div>

          <div className="wdc-popup-container">
            Bottom popup
            <div className="wdc-popup wdc-popup-bottom">This is a popup</div>
          </div>
        </div>
      </section>
    </div>
  ));
