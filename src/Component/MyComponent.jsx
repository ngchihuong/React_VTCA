import React from "react";
import './MyComponent.scss'
function MyComponent() {
    return (
        <React.Fragment>
            <div className="mycomponent">
                <h1>ReactJs with JSX</h1>
                <p>Welcome to the world of ReactJs!</p>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>

        </React.Fragment>
    );
}
export default MyComponent;