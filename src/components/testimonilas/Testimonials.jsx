import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import {Pagination, A11y} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <section>
            <h5>Review from Clients</h5>
            <h2>Testimonial</h2>
            <Swiper className="container testimonial__container"
            modules={[Pagination,A11y]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{clickable:true}}
            >
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Avatar one"/>
                    </div>
                    <h5 className="client__name">
                        Ernest Achiever
                    </h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur cum distinctio
                        dolor magnam, molestias necessitatibus vero! Asperiores dignissimos explicabo facere
                        impedit, incidunt inventore laboriosam mollitia non, sit ullam, veritatis vero? Aspernatur,
                        assumenda consectetur corporis doloremque esse ex expedita illo in ipsam nam nesciunt nobis
                        pariatur vitae. Accusamus, nisi, nobis.

                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR2} alt="Avatar one"/>
                    </div>
                    <h5 className="client__name">
                        Ernest Achiever
                    </h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur cum distinctio
                        dolor magnam, molestias necessitatibus vero! Asperiores dignissimos explicabo facere
                        impedit, incidunt inventore laboriosam mollitia non, sit ullam, veritatis vero? Aspernatur,
                        assumenda consectetur corporis doloremque esse ex expedita illo in ipsam nam nesciunt nobis
                        pariatur vitae. Accusamus, nisi, nobis.

                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR3} alt="Avatar one"/>
                    </div>
                    <h5 className="client__name">
                        Ernest Achiever
                    </h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur cum distinctio
                        dolor magnam, molestias necessitatibus vero! Asperiores dignissimos explicabo facere
                        impedit, incidunt inventore laboriosam mollitia non, sit ullam, veritatis vero? Aspernatur,
                        assumenda consectetur corporis doloremque esse ex expedita illo in ipsam nam nesciunt nobis
                        pariatur vitae. Accusamus, nisi, nobis.

                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR4} alt="Avatar one"/>
                    </div>
                    <h5 className="client__name">
                        Ernest Achiever
                    </h5>
                    <small className="client__review">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur cum distinctio
                        dolor magnam, molestias necessitatibus vero! Asperiores dignissimos explicabo facere
                        impedit, incidunt inventore laboriosam mollitia non, sit ullam, veritatis vero? Aspernatur,
                        assumenda consectetur corporis doloremque esse ex expedita illo in ipsam nam nesciunt nobis
                        pariatur vitae. Accusamus, nisi, nobis.

                    </small>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Testimonials;
