import React, { Component } from 'react';
import './dynamiccomponent.css';
import PropTypes from 'prop-types';


class DynamicCover extends Component {
	constructor(props){
			super(props);
			this.state = {
				title: props.title,
				img: props.img,
				desc: props.desc,
			}
		}
		
		
    render() {
    
		const{title,img,desc} = this.state;
		
        return (
            <>
                <div className="box">
                    <div className="imgBx">
                        <img
                            src={img}
                            alt={title}
                        />
                    </div>

                    <div className="contentBx">
                        <div>
                            <h2>{title}</h2>
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

DynamicCover.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.element.isRequired,
    desc: PropTypes.string.isRequired
}

export default DynamicCover;
