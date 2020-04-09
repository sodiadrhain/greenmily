import React, {Component} from "react";

class Header extends Component {

    constructor(props){
        super();
        this.state = {
            elementIdOpen: "",
            elementIdClose: "none",
        }
    }

    render(){

        return (
            <header>
                <div className="header">
                    <div className="logo">
                        <img src="img/mily-logo.png" alt="Greenmily Logo" />
		         </div>
                        <nav-a>
                            <ul>
                                <li>
                                    <a href="#home">Home</a>
                                </li>
                                <li>
                                    <a href="#how">How It Works</a>
                                </li>
                                <li>
                                    <a href="#farm">For Farmers</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </nav-a>
                    </div>

	                <div className="mobile-nav">
                        <div className="mobile-nav-flex">
                            <div className="logo">
                                <img src="img/mily-logo.png" alt="Greenmily Logo" />
		            </div>
                                <nav>
                            <div id="nav-bar" onClick={ e => this.setState({ elementIdClose: "", elementIdOpen: "none"})} style={{ display: this.state.elementIdOpen }}>
                                        <span className="fa fa-bars"></span>
                                    </div>
                            <div id="nav-drop" onClick={ e => this.setState({ elementIdClose: "none", elementIdOpen: ""})} style={{ display: this.state.elementIdClose }}>
                                        <div className="nav-drop">
                                            <span className="fa fa-times"></span>
                                        </div>

                                    </div>
                                </nav>
                            </div>
                        <div id="drop-down" style={{ display: this.state.elementIdClose }}>
                                <ul>
                                    <li>
                                        <a href="#home">Home</a>
                                    </li>
                                    <li>
                                        <a href="#how">How It Works</a>
                                    </li>
                                    <li>
                                        <a href="#farm">For Farmers</a>
                                    </li>
                                    <li>
                                        <a href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
</header>
        )
    }
}

export default Header;