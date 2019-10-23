import React from "react";
import Today from "../../components/Today";
import Week from "../../components/Week";
class Compile extends React.Component {
  render() {
    return (
      <div>
            <Today />
            <Week />
      </div>
    );
  }
}

export default Compile;
