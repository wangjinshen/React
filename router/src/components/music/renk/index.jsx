import React, { Component } from 'react';

import RecommendedSwiper from './swiper/index';
import "../../../../node_modules/swiper/dist/css/swiper.css"

class Recommended extends Component {

    render() {
        return <div className="loaded current_page">
            <RecommendedSwiper/>

        </div>
    }
}
export default Recommended;