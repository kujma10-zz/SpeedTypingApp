import React from "react";
import ReactDOM from "react-dom";

const WordsFetcher = (props) => {

  return (
    <div className="fetcher">
      <button onClick={props.onFetch} hidden={props.wordsFetched} disabled={props.inProgress}>Fetch words</button>
      <button onClick={props.onCancel} hidden={!props.inProgress} className="cancel">Cancel request</button>
    </div>
  );
};

WordsFetcher.propTypes = {
  onFetch: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  inProgress: React.PropTypes.bool.isRequired,
  wordsFetched: React.PropTypes.bool.isRequired,
};
export { WordsFetcher as default };
