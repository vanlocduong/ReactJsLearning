import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className={"col-lg-6 "+ this.props.canhtrai}>
                            <div className="p-5">
                                <img className="img-fluid rounded-circle" src={this.props.anh} alt />
                            </div>
                        </div>
                        <div className={"col-lg-6 " + this.props.canhphai}>
                            <div className="p-5">
                                <h2 className="display-4">{this.props.tieude}...</h2>
                                <p>{this.props.trichdan}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;