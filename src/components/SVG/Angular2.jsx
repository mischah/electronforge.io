import React, { PureComponent, PropTypes } from 'react';

export default class Angular2SVG extends PureComponent {
  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
  };

  render() {
    const { width, height } = this.props;

    return (
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={`${width}px`} height={`${height}px`} viewBox="0 0 250 250" enableBackground="new 0 0 250 250">
        <g>
          <polygon fill="#DD0031" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" />
          <polygon fill="#C3002F" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30" />
          <path fill="#FFFFFF" d="M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1 L125,52.1z M142,135.4H108l17-40.9L142,135.4z" />
        </g>
      </svg>
    );
  }
}
