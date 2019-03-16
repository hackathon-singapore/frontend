import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
import BannerImage from './BannerImage';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }
  static defaultProps = {
    className: 'home-banner',
  }
  render() {
    const { className } = this.props;
    return (
      <div className={`home-layout-wrapper ${className}`}>
        <div className="home-layout">
          <QueueAnim className={`${className}-content-wrapper`} delay={300} ease="easeOutQuart">
            <h1 key="h2">
              Crowdsourced Indigenous Corpus Generator
            </h1>
            <p key="p">
              A crowdsource solution for generating indigenous language translation data using Machine Learning algorithm, developed to help 
              <b style={{color: 'grey', marginLeft: '5px'}}>FOSSASIA</b> projects
            </p>
            <span key="button">
              <Button
                type="primary"
                onClick={() => {
                this.props.handleDashboardRouting()
              }}
              >
                Get Started
              </Button>
            </span>
          </QueueAnim>
          <div className={`${className}-image-wrapper`}>
            <BannerImage />
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default Banner;
