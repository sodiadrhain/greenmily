import React, { Component } from "react";

class HowItWorks extends Component {
    render() {
        return (
            <div>
            <section>
                <h4>
                    How It Works
		</h4>
            </section>
            <section className="section-two">
                <div className="section-two-column-one">
                    <p>
                        Search for farm products
				<br/>
                            <span>
                                Find available farm products from our various categories
				</span>
			</p>
		</div>
                    <div className="section-two-column-two">
                        <img src="img/human-1.png" alt="human man" />
		</div>
	</section>

       {  /* mobile column switch starts */ } 
	<br/>
                        <section className="section-two-mobile">
                            <div className="section-two-column-one-mobile">
                                <p>
                                    Add to your Shopping cart
			</p>
                            </div>
                            <div className="section-two-column-two-mobile">
                                <img src="img/human-2.png" alt="human two" />
		</div>
	</section>
                           { /* mobile column switch ends */ }


	<section className="section-three">
                                <div className="section-three-column-one">
                                    <img src="img/human-2.png" alt="human three" />
		</div>
                                    <div className="section-three-column-two">
                                        <p>
                                            Add to your Shopping cart
				<br/>
                                                <br/>
			</p>
		</div>
	</section>
                                        <br/>
                                            <section className="section-two">
                                                <div className="section-two-column-one">
                                                    <p>
                                                        Choose your preferred delivery address
				<br/>
                                                            <span>
                                                                Choose your address and checkout
				</span>
			</p>
		</div>
                                                    <div className="section-two-column-two">
                                                        <img src="img/human-3.png" alt="human three" />
		</div>
	</section>

                             {   /* mobile column switch starts */}

	<section className="section-two-mobile">
                                                        <div className="section-two-column-one-mobile">
                                                            <p>
                                                                Receive items at your convenience
				<br/>
                                                                    <span>
                                                                        Easy Peasy!
				</span>
			</p>
		</div>
                                                            <div className="section-two-column-two-mobile">
                                                                <img src="img/human-4.png" alt="human four" />
		</div>
	</section>

                { /* mobile column switch ends */}

	<section className="section-three">
                                                                <div className="section-three-column-one">
                                                                    <img src="img/human-4.png" alt="human four" /> 
		</div>
                                                                    <div className="section-three-column-two">
                                                                        <p>
                                                                            Receive items at your convenience
				<br/>
                                                                                <span>
                                                                                    Easy Peasy!
				</span>
			</p>
		</div>
	</section>
            </div>
        )
    }
}

export default HowItWorks;