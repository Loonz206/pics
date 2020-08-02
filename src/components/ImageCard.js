/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 }
    this.imageRef = React.createRef();
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil( height / 10 );
    this.setState({spans});
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  render() {
    const { urls, alt_description } = this.props.image;
    return (
      <div style={{ gridRowEnd: `spans ${this.state.spans}`}}>
        <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
      </div>
    );
  }
}

export default ImageCard;
