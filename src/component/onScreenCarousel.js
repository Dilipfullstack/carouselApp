import React, {Component} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import image1 from '../assets/photos/1.jpg'
class OnScreenCarousel extends Component {
    render() {
        return (
            <div>
                <h2>On Screen Carousel</h2>
                <Carousel autoPlay interval="5000" transitionTime="3000" infiniteLoop>
                    <div>
                        <img src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt="By Mauro Lima on Unsplash" />
                        <p className="legend">Yosemite Valley, United States</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        <p className="legend">Wanaka, Otago, New Zealand</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        <p className="legend">Lago di Braies</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />
                        <p className="legend">Alpine mountains under a clear sky</p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        <p className="legend">Cappadocia, Turky</p>
                    </div>
                </Carousel>
            </div>
        )
    };
}
export default OnScreenCarousel