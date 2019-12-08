import {Swiper, SwiperSlide} from "framework7-react";
import React, {useContext} from "react";
import * as ComponentHelper from "./../../Helper/Component";
import {AppReactContext} from "./../../Context/Contexts";

const slideCollection = (key, type, title, collection) => (
    <SwiperSlide key={key} className={`timeline-${type}`}>
        <div className={`timeline-${type}-title`}>
            <span>{title}</span>
        </div>
        <Swiper params={{
            nested:            true,
            touchEventsTarget: 'container',
            slidesPerView:     1,
            slidesPerColumn:   1,
        }}>
            {collection.map((item, index) => {
                switch (type) {
                    case 'year':
                        slideCollection(index, 'month', item['settlementDate']);
                        break;
                    case 'month':
                        slideCollection(index, 'item');
                        break;
                }
            })}
        </Swiper>
    </SwiperSlide>
);

const SwipedTimeline = () => {
    const app = useContext(AppReactContext);
    return (
        <h1>Swiper for kpir</h1>,
        <Swiper params={{
            touchEventsTarget: 'container',
            slidesPerView:     1,
            slidesPerColumn:   1,
        }} className="timeline timeline-horizontal col-100 tablet-25">
            {app.api.resource.data.books.map((book, index) => (
                <SwiperSlide key={index} className={`timeline-${'year'}`}>
                    <div className={`timeline-${'year'}-title`}>
                        <span>{book['year']}</span>
                    </div>
                    <Swiper params={{
                        nested:            true,
                        touchEventsTarget: 'container',
                        slidesPerView:     1,
                        slidesPerColumn:   1,
                    }}>
                        {book.settlements.map((settlement, index) => (
                            <SwiperSlide key={index} className={`timeline-${'month'}`}>
                                <div className={`timeline-${'month'}-title`}>
                                    <span>{settlement['settlementDate']}</span>
                                </div>
                                <div className="timeline-item no-title">
                                    <div className="timeline-item-content">
                                        {ComponentHelper.swipeCollectionFromObject(settlement, 'documents', true)}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SwiperSlide>
            ))}
        </Swiper>
    )
};
export default SwipedTimeline;