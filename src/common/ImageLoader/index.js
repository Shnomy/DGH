import React from "react";
import firebase from "firebase";

import { connect } from "cerebral/react";
import { signal, state } from "cerebral/tags";

export default connect(
  {
    addURL: signal`app.setURL`,
    cachedURLs: state`urls`,
    imageClicked: signal`app.imageClicked`
  },
  class ImageLoader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        imageStatus: "loading",
        url: ""
      };
    }

    handleImageLoaded() {
      this.setState({ imageStatus: "loaded" });
    }

    handleImageErrored() {
      this.setState({ imageStatus: "failed to load" });
    }

    componentDidMount() {
      const url = this.props.url.substring(0, this.props.url.length - 4);

      if (Object.keys(this.props.cachedURLs).indexOf(url) !== -1) {
        this.setState({ url: this.props.cachedURLs[url] });
      } else {
        firebase
          .storage()
          .ref(`images/${this.props.url}`)
          .getDownloadURL()
          .then(res => {
            this.setState({ url: res });
            this.props.addURL({ key: url, value: res });
          });
      }
    }

    render() {
      return (
        <img
          className={this.props.className}
          src={this.state.url}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
          onClick={
            this.props.onClick
              ? this.props.onClick
              : () => this.props.imageClicked({ url: this.state.url })
          }
          alt={this.props.altText}
        />
      );
    }
  }
);
