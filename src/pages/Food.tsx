import { FoodVendors } from "../data";
import { ReactComponent as SmileySVG } from "../assets/SmileyFace.svg";
import InfoPageTemplate from "./InfoPageTemplate";

const FoodPage = () => {
  return (
    <InfoPageTemplate
      pageName={{ short: "Food", english: "Food Market", chinese: "餐饮" }}
      pageImg="/assets/home_page_3.jpg"
      hours={[
        {
          startDay: "Mon",
          endDay: "Thurs",
          startTime: "11:00AM",
          endTime: "6:00PM",
        },
        {
          startDay: "Fri",
          endDay: "Sun",
          startTime: "11:00AM",
          endTime: "7:00PM",
        },
      ]}
      hero={{
        primaryText: "Happy Hours",
        subText: "Every Weekday, 5 - 7PM $4 Beer & $7 Wine Come Hang With Us!",
      }}
      HeroSVG={SmileySVG}
      data={FoodVendors}
    />
  );
};

export default FoodPage;
