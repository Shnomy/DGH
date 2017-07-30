import React from 'react';
import {connect} from 'cerebral/react';
import firebase from 'firebase';

export default connect({

}, class ImageLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: false,
      loaded: false,
    };
  }
  componentDidMount() {
    firebase.storage().ref(`images/${this.props.url}`).getDownloadURL().then((res) => {
      this.setState({url: res})
    })
  }
  render() {
    return (
      <img
        className={this.props.className}
        src={this.state.url}
        onClick={this.props.onClick}
      />
    );
  }
});
