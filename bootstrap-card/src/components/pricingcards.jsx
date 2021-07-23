import React, { Component } from "react";
import "./pricingcards.css";
class PricingCards extends Component {
  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title text-muted text-center">
              {this.props.planeName}
            </h4>
            <h6 className="card-price text-center">
              {this.props.planePrice}
              <span className="period">{this.props.planePeriod}</span>
            </h6>
            <hr />
            <ul className="fa-ul">
              <li>
                <span className="fa-li">{this.props.userCapacityStatus}</span>
                {this.props.userCapacity}
              </li>
              <li>
                <span className="fa-li">{this.props.storageSizeStatus}</span>
                {this.props.storageSize}
              </li>
              <li>
                <span className="fa-li">
                  {this.props.communityAccessStatus}
                </span>
                {this.props.communityAccess}
              </li>
              <li className={this.props.unlimitedProjectDisable}>
                <span className="fa-li">
                  {this.props.unlimitedProjectStatus}
                </span>
                {this.props.unlimitedPublicProject}
              </li>
              <li className={this.props.dedicatedPhoneSupportDisable}>
                <span className="fa-li">
                  {this.props.dedicatedPhoneSupportStatus}
                </span>
                {this.props.dedicatedPhoneSupport}
              </li>
              <li className={this.props.freeSubdomainDisable}>
                <span className="fa-li">{this.props.freeSubdomainStatus}</span>
                {this.props.freeSubdomain}
              </li>
              <li className={this.props.monthlyStatusReportsDisable}>
                <span className="fa-li">
                  {this.props.monthlyStatusReportsStatus}
                </span>
                {this.props.monthlyStatusReports}
              </li>
            </ul>
            <a href="#" class="btn btn-block btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingCards;
