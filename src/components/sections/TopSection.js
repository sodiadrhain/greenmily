import React, {Component} from "react";

class TopSection extends Component {
    render(){
        return(
            <section className="section-one">
                <div className="section-one-a">
                    <div className="section-one-column-one">
                        <div className="section-one-column-one-a">
                            <h2>
                                Getting fresh farm products just got easier.
					        </h2>
                            <p>
                                Shop fresh farm products at your convenience from your mobile.
					        </p>
                        </div>
                        <div className="section-one-column-one-b">
                            <div className="section-one-column-one-b-item-a">
                                <img src="img/google-play.png" alt="google play" />
					        </div>
                                <div className="section-one-column-one-b-item-b">
                                    <img src="img/appstore.png" alt="apple store" />
					            </div>
                        </div>
                    </div>
                            <div className="section-one-column-two">
                                <h2>
                                    Get the Latest From Greenmily
				                </h2>
                                <br/>
                                    <p>
                                        Click Subscribe below to get our latest for the agricultural sector.
				                    </p>
                                    <form>
                                        <br/>
                                            <button>
                                                SUBSCRIBE
				                            </button>
				                    </form>
                        </div>
                    </div>
	        </section>
        )
    }
}

export default TopSection;