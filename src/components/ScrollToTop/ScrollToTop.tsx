import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component<any> {
  componentDidUpdate(prevProps: { location: any }) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
