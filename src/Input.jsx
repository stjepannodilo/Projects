import {Component} from "react";
import React from "react";
import debounce from "lodash/debounce";

class Input extends Component {
  state = {
    text: ""
  }
 
  onChange(e) {
    this.setState({isTyping: true, text: e.target.value}, () => {
        this.handleTyping();
      });
  }

  handleTyping = debounce(function () {
    this.setState({ isTyping: false });
  }, 500);

  onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }

  

  render() {
    return (
        
      <div className="Input">
        
         <p className="user-typing">
          {this.state.isTyping && "User is typing..."}
        </p>

        <form onSubmit={e => this.onSubmit(e)}>
            
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message and press ENTER"
            autofocus="true"
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Input;