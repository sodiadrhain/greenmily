import React, {Component} from "react";

class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="section">
                    <div className="column-one">
                        <img src="img/mily-logo.png" alt="Greemily Logo" />
                            <p>
                                Greenmily is a forward thinking agric-tech company focused on providing customers the opportunity to buy fresh farm products and also aid farmers in reaching larger markets.
		                    </p>
                            <div className="icons">
                                <a href="#facebook">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a href="#twitter">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="#instagram">
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a href="#linkendin">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </div>
	                </div>
                        <div className="column-two">
                            <h2>
                                Company
		                    </h2>
                            <ul>
                                <li>
                                    About Us
			                    </li>
                                <li>
                                    Values
			                    </li>
                                <li>
                                    Contact Us
			                    </li>
                                <li>
                                    FAQ's
			                    </li>
                            </ul>
                        </div>
                        <div className="column-two">
                            <h2>
                                Legal
		                    </h2>
                            <ul>
                                <li>
                                    Terms and Conditions
			                    </li>
                                <li>
                                    Privacy
			                    </li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                        <br/>
                            <div className="copyright">
                                © Copyright Greenmily.com
	                        </div>
    
    </footer>
        )
}
    }

export default Footer;