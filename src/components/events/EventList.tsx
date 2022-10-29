import React from "react";

import styles from "./EventList.module.css";
import { EventType } from "../../util/types";
import useTransitionContext from "../../hooks/useTransitionContext";

interface EventListInterface {
  events: EventType[];
  btnColor?: string;
}

const EventList = ({ events, btnColor }: EventListInterface) => {
  const { nextRoute } = useTransitionContext();

  return (
    <div className={styles.eventList}>
      {events.map((event) => (
        <p key={event.id} className={styles.event}>
          {event.date}
          <br />
          {event.description}
        </p>
      ))}
      <button
        style={
          { "--fill-clr": btnColor || "var(--white)" } as React.CSSProperties
        }
        className={`btn filled ${styles.eventBtn}`}
        onClick={() => nextRoute(3)}
      >
        see all
      </button>
    </div>
  );
};

export default EventList;
