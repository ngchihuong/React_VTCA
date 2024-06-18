import React from "react";

class Embed extends React.Component {
    shoot = () => {
        alert("Great Shot!");
      }
    render() {
        return (
            <React.Fragment>
                <div>
                <button onClick={() => this.shoot()}>Take the shot!</button>
                </div>
            </React.Fragment>
        )
    }
}
export default Embed;