import React from 'react';
import {connect} from 'cerebral/react';
import firebase from 'firebase';
import {state, signal} from 'cerebral/tags';

export default connect({
  urls: state`urls`,
  setURL: signal`app.setURL`
}, class ImageLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: false,
      loaded: false,
    };
  }
  componentDidMount() {
    const [url, ext] = this.props.url.split(".");

    if(this.props.urls[url]) {
      this.setState({url: this.props.urls[url] + ext})
    }
    firebase.storage().ref(`images/${this.props.url}`).getDownloadURL().then((res) => {
      this.props.setURL({url: res.split(".")[0], name: url});
      this.setState({url: res});
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
