import { Retailers } from "../data";
import { ReactComponent as RoseSVG } from "../assets/Rose.svg";
import InfoPageTemplate from "./InfoPageTemplate";

const RetailPage = () => {
  return (
    <InfoPageTemplate
      pageName={{ short: "Retail", english: "Retail Market", chinese: "購物" }}
      pageImg="/assets/home_page_2.jpg"
      hours={[
        {
          startDay: "Fri",
          endDay: "Sun",
          startTime: "11:00AM",
          endTime: "7:00PM",
        },
      ]}
      hero={{ primaryText: "The Best of NYC", subText: "All under one roof" }}
      HeroSVG={RoseSVG}
      data={Retailers}
    />
  );
};

export default RetailPage;
