import React, { Component } from "react";

class Subscribe extends Component {
    render() {
        return (
            <section className="subscribe-box">
                <h2>
                    Be the first to hear from Us!
		        </h2>
                <h3>
                    Subscribe to get instant information in your mail box.
		        </h3>
                <form className="subscribe-box-form">
                    <input type="text" name="name" placeholder="Your name" required />
                        <input type="email" name="email" placeholder="Email address" required />
                            <button>
                                SUBSCRIBE
			                </button>
		        </form>
	        </section>
        )
    }
}

export default Subscribe;