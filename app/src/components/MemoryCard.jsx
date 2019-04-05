import React from "react";
import "./MemoryCard.css";

export default function MemoryCard(props) {
  const { image, name} = props.body
  return(
    <div>
      <img src={image} alt={name} onClick={() => props.check(props.body.name)} className="mem-card img-thumbnail"/>
    </div>
  );
  
}

/*


class MemoryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  clicked = () => {
    this.setState({clicked: true});
    alert(this.state.clicked)
  };

  render() {
    const { image, name } = this.props.body;
    return (
      <div>
        <img
          src={image}
          alt={name}
          className="mem-card img-thumbnail"
          onClick={this.props.check}
        />
      </div>
    );
  }
}

export default MemoryCard;

*/
