import React, { Component } from "react";
import PricingCards from "./pricingcards";
import { FaCheck, FaTimes } from "react-icons/fa";


class PricingTable extends Component {
  state = {
    plans: [
      {
        id: 1,
        value: {
          planename: "FREE",
          planeprice: "$0",
          planeperiod: "/month",
          usercapacity: { name: <b>Single User</b>, status: <FaCheck /> },
          storage: { name: "5 GB", status: <FaCheck /> },
          communityaccess: { name: "Community Access", status: <FaCheck /> },
          unlimitedpublicproject: {
            name: "Unlimited Public Projects",
            status: <FaTimes />,
            disable: "text-muted",
          },
          dedicatedphonesupport: {
            name: "Dedicated Phone Support",
            status: <FaTimes />,
            disable: "text-muted",
          },
          freesubdomain: {
            name: "Free Subdomain",
            status: <FaTimes />,
            disable: "text-muted",
          },
          monthlystatusreports: {
            name: "Monthly Status Reports",
            status: <FaTimes />,
            disable: "text-muted",
          },
        },
      },
      {
        id: 2,
        value: {
          planename: "PLUS",
          planeprice: "$9",
          planeperiod: "/month",
          usercapacity: { name: <b>5 Users</b>, status: <FaCheck /> },
          storage: { name: "50 GB", status: <FaCheck /> },
          communityaccess: { name: "Community Access", status: <FaCheck /> },
          unlimitedpublicproject: {
            name: "Unlimited Public Projects",
            status: <FaCheck />,
            disable: "",
          },
          dedicatedphonesupport: {
            name: "Dedicated Phone Support",
            status: <FaCheck />,
            disable: "",
          },
          freesubdomain: {
            name: "Free Subdomain",
            status: <FaCheck />,
            disable: "",
          },
          monthlystatusreports: {
            name: "Monthly Status Reports",
            status: <FaTimes />,
            disable: "text-muted",
          },
        },
      },
      {
        id: 2,
        value: {
          planename: "PRO",
          planeprice: "$49",
          planeperiod: "/month",
          usercapacity: { name: <b>Unlimited Users</b>, status: <FaCheck /> },
          storage: { name: "150 GB", status: <FaCheck /> },
          communityaccess: { name: "Community Access", status: <FaCheck /> },
          unlimitedpublicproject: {
            name: "Unlimited Public Projects",
            status: <FaCheck />,
            disable: "",
          },
          dedicatedphonesupport: {
            name: "Dedicated Phone Support",
            status: <FaCheck />,
            disable: "",
          },
          freesubdomain: {
            name: "Free Subdomain",
            status: <FaCheck />,
            disable: "",
          },
          monthlystatusreports: {
            name: "Monthly Status Reports",
            status: <FaCheck />,
            disable: "",
          },
        },
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 mt-3">
          {this.state.plans.map((pricingcards) => (
            <PricingCards
              key={pricingcards.id}
              id={pricingcards.id}
              planeName={pricingcards.value.planename}
              planePrice={pricingcards.value.planeprice}
              planePeriod={pricingcards.value.planeperiod}
              userCapacity={pricingcards.value.usercapacity.name}
              userCapacityStatus={pricingcards.value.usercapacity.status}
              storageSize={pricingcards.value.storage.name}
              storageSizeStatus={pricingcards.value.storage.status}
              communityAccess={pricingcards.value.communityaccess.name}
              communityAccessStatus={pricingcards.value.communityaccess.status}
              unlimitedPublicProject={
                pricingcards.value.unlimitedpublicproject.name
              }
              unlimitedProjectStatus={
                pricingcards.value.unlimitedpublicproject.status
              }
              unlimitedProjectDisable={
                pricingcards.value.unlimitedpublicproject.disable
              }
              dedicatedPhoneSupport={
                pricingcards.value.dedicatedphonesupport.name
              }
              dedicatedPhoneSupportStatus={
                pricingcards.value.dedicatedphonesupport.status
              }
              dedicatedPhoneSupportDisable={
                pricingcards.value.dedicatedphonesupport.disable
              }
              freeSubdomain={pricingcards.value.freesubdomain.name}
              freeSubdomainStatus={pricingcards.value.freesubdomain.status}
              freeSubdomainDisable={pricingcards.value.freesubdomain.disable}
              monthlyStatusReports={
                pricingcards.value.monthlystatusreports.name
              }
              monthlyStatusReportsStatus={
                pricingcards.value.monthlystatusreports.status
              }
              monthlyStatusReportsDisable={
                pricingcards.value.monthlystatusreports.disable
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PricingTable;
