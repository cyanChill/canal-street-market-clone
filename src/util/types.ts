export type TimerType = ReturnType<typeof setTimeout>;

export type EventType = { id: string; date: string; description: string };

export type InfoPageDataType = {
  id: string | number;
  subText: string;
  primaryText: string;
  previewImgPath: string;
};

export type DayPrefix = "Mon" | "Tue" | "Wed" | "Thurs" | "Fri" | "Sat" | "Sun";

export type TimeSlot = {
  startDay: DayPrefix;
  endDay: DayPrefix;
  startTime: string;
  endTime: string;
};
