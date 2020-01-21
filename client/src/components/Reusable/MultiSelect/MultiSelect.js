import React from "react";


class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
      text: "",
      arr: [],
      newOptions: "",
      newText: [],
      otherText: [],
      check: true,
  
    };
  }

  componentDidMount(){
    this.setState({arr: this.props.options})
  }

  handleReveal = e => {
    e.preventDefault();
    if (this.state.hide) {
      this.setState({ hide: false });
    } else {
      this.setState({ hide: true });
    }
  };

  addText = (e, id = null) => {
    let newText =this.state.newText;

    let check = document.getElementById(`${id}`);


    if (this.state.text.length > 1) {
      let x = this.state.text;
      x.split(", ").map(val => {
        newText.concat(val);
        console.log(newText)
      });
    }
    let arr = newText;
    if (check.checked) {
      arr.push(check.value);
      this.setState({ text: arr.join(", ") });
   
    } else {
      arr = arr.filter(x => x !== check.value)
      this.setState({ 
        text: arr.join(", "),
        newText: arr
       
    });
    }
  };

  handleList =(input)=>{
    
    return input
  }

  handleOptions = () => {
    return this.state.arr.map((op, i) => {
      let opLow = op.toLowerCase();

      if(this.state.arr.length > this.props.options.length && this.props.options.length-1 < i){
      
       return <li key={i}>
          <input
            type="checkbox"
            name={`${opLow}_${this.props.text_id}`}
            value={op}
            onChange={(e) => this.addText(e, `${opLow}_${this.props.text_id}`)}
            id={`${opLow}_${this.props.text_id}`}
            width="50%"
           defaultChecked={true}
          />{" "}
          {op}
        </li>
      }

      return (
        <li key={i}>
          <input
            type="checkbox"
            name={`${opLow}_${this.props.text_id}`}
            value={op}
            onChange={(e) => this.addText(e, `${opLow}_${this.props.text_id}`)}
            id={`${opLow}_${this.props.text_id}`}
            width="50%"
          />{" "}
          {op}
        </li>
      );
    })
  }

  handleOther = (e, id) => {
    let otherText = this.state.otherText;

    otherText.push(
      <input
        type="text"
        id={`${this.props.text_id}`}
        name={`${this.props.text_id}`}
        className="col-md-4"
        defaultValue=""
        placeholder="Add Custom"
        width="70%"
      />
    );
//clear Input field
    if (this.state.otherText.length > 1) {
      otherText = [];
    }
    this.setState({ otherText });
  };

  handleAdditions = (e, id = null) => {
    e.preventDefault();
    let newTextArr =this.state.newText;
    let value = document.getElementById(`${id}`).value;
    if (value.length > 0) {
      let arr = this.state.arr;
      arr.push(value)
      newTextArr.push(value)
   
       this.setState({text: newTextArr.join(" ,"), arr:arr})

      console.log(this.state.arr, value, "text", this.state.text, )
      document.getElementById(`${id}`).value=""
    }
    
  };
  render() {
    let { hide, text } = this.state;
    let { custom, id, placeholder, label, required } = this.props;
    return (
      <div className="form-style-1">
        <label>{label}</label>
        <input
          className="form-control"
          autoComplete="off"
          type="text"
          name={id}
          value={text}
          onClick={this.handleReveal}
          id={id}
          placeholder={placeholder}
          required={required}
        />

        <ul style={{ listStyle: "none" }} className={hide ? "d-none" : ""}>
          {this.handleOptions()}
          {custom ? (
            <li>
              <input
                type="checkbox"
                name={`${this.props.other_id}`}
                value="Other"
                id={`${this.props.other_id}`}
                onChange={this.handleOther}
              />{" "}
              Other
            </li>
          ) : (
            ""
          )}
          {Array.isArray(this.state.otherText)
            ? this.state.otherText.map((other, i) => {
                return (
                  <li key={i}>
                    <div className="row container">
                      {other}
                      <button
                        onClick={e => this.handleAdditions(e, this.props.text_id)}
                        onKeyPress={e => this.handleAdditions(e, this.props.text_id)}
                        style={{ color: "#34CACA" }}
                        className="btn"
                      >
                        +Add
                      </button>
                    </div>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    );
  }
}

export default SelectBox;
