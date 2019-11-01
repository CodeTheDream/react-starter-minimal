import React from "react";

const Week = props => {
  console.log("allprops", props);
  const description = props.day.description
  return (
    <div className="container">
      <div className="forecast-wrapper">
        {/* {props.renderedData.length > 0 && <div>{props.renderedData}</div>} */}
        <div className="forecast">{description}</div>
        {/* <div className="forecast">{this.props.renderData} {this.props.round} {this.props.renderWeek}</div> */}
        {/* <div className="forecast">{props.renderData[1]} {props.formattedTime + props.round} {props.renderWeek[1]}</div>
          <div className="forecast">{props.renderData[2]} {props.formattedTime + props.round} {props.renderWeek[2]}</div>
          <div className="forecast">{props.renderData[3]} {props.formattedTime + props.round} {props.renderWeek[3]}</div>
          <div className="forecast">{props.renderData[4]} {props.formattedTime + props.round} {props.renderWeek[4]}</div>
          <div className="forecast">{props.renderData[5]} {props.formattedTime + props.round} {props.renderWeek[5]}</div>
          <div className="forecast">{props.renderData[6]} {props.formattedTime + props.round} {props.renderWeek[6]}</div> */}
      </div>
    </div>
  );
};

export default Week;
