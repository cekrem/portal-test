import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class Portal extends Component {
  static propTypes = {
    onClose: PropTypes.func
  }

  containerEl = document.createElement('div');
  externalWindow = null;
  
  render() {
    // Append props.children to the container <div> that isn't mounted anywhere yet
    return ReactDOM.createPortal(this.props.children, this.containerEl);
  }

  componentDidMount() {
    // Open a new browser window and store a reference to it
    this.externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');

    // Append the container <div> (that has props.children appended to it) to the body of the new window
    this.externalWindow.document.body.appendChild(this.containerEl);

    // Add close handler
    this.externalWindow.onbeforeunload = this.props.onClose
  }

  componentWillUnmount() {
    // This will fire when this.state.showWindowPortal in the parent component becomes false
    // So we tidy up by closing the window
    this.externalWindow.close();
  }
}

export default Portal;
