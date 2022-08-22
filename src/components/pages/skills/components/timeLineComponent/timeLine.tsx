import React from "react";
import {
  TimeLineSection,
  TimeLineItems,
  TimeLineItem,
  TimeLineDot,
  TimeLineDate,
  TimeLineContent,
} from "./style";

interface ITimelineItem {
  date: number;
  header: string;
  description: string;
}

export function TimeLine(props: { array: ITimelineItem[] }) {
  return (
    <TimeLineSection>
      <TimeLineItems>
        {props.array.map((item: any, index) => (
          <TimeLineItem key={index}>
            <TimeLineDot></TimeLineDot>
            <TimeLineDate>{item.date}</TimeLineDate>
            <TimeLineContent>
              <h3>{item.header}</h3>
              <p>{item.description}</p>
            </TimeLineContent>
          </TimeLineItem>
        ))}
      </TimeLineItems>
    </TimeLineSection>
  );
}
