import React, { Component } from "react";
import InfoIcon from "./InfoIcon";

class SiteHeader extends Component {
  constructor(props) {
    super();
    this.state = {
      isClicked: false,
    };
  }
  render() {
    const { isClicked } = this.state;

    const onClick = () => {
      this.setState({
        isClicked: !isClicked,
      });
    };
    let style = {};
    if (!isClicked) {
      style = {
        visibility: "collapse",
      };
    }
    return (
      <div>
        <h1 className="Site-Header">
          Condé Nast Sites Performance Dashboard
          <div className="siteHeader-detail" onClick={onClick}>
            <InfoIcon />
          </div>
        </h1>

        <div
          className={!isClicked ? "siteHeader-detail-box-hidden" : "siteHeader-description"}
          style={style}
        >
          Condé Nast uses tooling in Splunk to generate thousands of tests every
          hour against our and our competitors' brand sites. Each test generates a
          Lighthouse report against a random page on the brand using mobile data
          rates. This dashboard is reflective only of Verso articles, however
          Splunk runs tests against other types of content and Legacy apps as
          well. Additionally, in order to keep the metrics consistent, we are
          only loading simple ads for Condé Nast domains. This cannot be controlled
          for our competitors' sites, so the performance metrics are slightly
          biased in Condé Nast’s favor. The data in this dashboard is aggregated from
          the average results of these tests.
        </div>

        <p className="siteHeader-description">
          Shipping Forecast tracks performance metrics for all Condé Nast brands
          and 95 competitors. We are able to gain insights into web performance
          across our industry with this high-volume performance monitoring tool.
          We currently monitor our competitors to understand our standing in the
          industry.
        </p>
      </div>
    );
  }
}

export default SiteHeader;
