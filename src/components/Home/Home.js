import React from 'react';
import { useEffect, useState } from 'react';
import SingleUniver from '../SingleUniver/SingleUniver';

const Home = () => {
    const [singleUni, setSingleUni] = useState([]);
    useEffect(() => {
        fetch('./singleUniversities.JSON')
            .then(res => res.json())
            .then(data => setSingleUni(data));
    }, [])
    return (
        <div>
            <div className="container my-5">


                <div className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
                    style={{ height: "600px", backgroundImage: "url('https://mdbootstrap.com/img/new/slides/003.jpg')" }}>
                    <h1 className="mb-3 h2">Universities In Bangladesh</h1>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus praesentium labore accusamus sequi, voluptate debitis tenetur in deleniti possimus modi voluptatum neque maiores dolorem unde? Aut dolorum quod excepturi fugit.</p>

                </div>
            </div>
            {/* Top 4 University */}
            <div>
                <h1>List of top universities in Bangladesh</h1>
                <div className="singleUni-container row">
                    {
                        singleUni.map(singleUniversity => <SingleUniver
                            key={singleUniversity.id}
                            singleUniversity={singleUniversity}
                        ></SingleUniver>)
                    }
                </div>
            </div>

            {/* FAQ */}

            <section>
                <h3 className="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
                <p className="text-center mb-5">
                    Find the answers for the most frequently asked questions below
                </p>

                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-4">
                        <h6 className="mb-3 text-primary"><i className="far fa-paper-plane text-primary pe-2"></i> A simple
                            question?</h6>
                        <p>
                            <strong><u>Absolutely!</u></strong> We work with top payment companies which guarantees
                            your
                            safety and
                            security. All billing information is stored on our payment processing partner.
                        </p>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4">
                        <h6 className="mb-3 text-primary"><i className="fas fa-pen-alt text-primary pe-2"></i> A question
                            that
                            is longer then the previous one?</h6>
                        <p>
                            <strong><u>Yes, it is possible!</u></strong> You can cancel your subscription anytime in
                            your
                            account. Once the subscription is
                            cancelled, you will not be charged next month.
                        </p>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4">
                        <h6 className="mb-3 text-primary"><i className="fas fa-user text-primary pe-2"></i> A simple
                            question?
                        </h6>
                        <p>
                            Currently, we only offer monthly subscription. You can upgrade or cancel your monthly
                            account at any time with no further obligation.
                        </p>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4">
                        <h6 className="mb-3 text-primary"><i className="fas fa-rocket text-primary pe-2"></i> A simple
                            question?
                        </h6>
                        <p>
                            Yes. Go to the billing section of your dashboard and update your payment information.
                        </p>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4">
                        <h6 className="mb-3 text-primary"><i className="fas fa-home text-primary pe-2"></i> A simple
                            question?
                        </h6>
                        <p><strong><u>Unfortunately no</u>.</strong> We do not issue full or partial refunds for any
                            reason.</p>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-4">
                        <h6 className="mb-3 text-primary"><i className="fas fa-book-open text-primary pe-2"></i> Another
                            question that is longer than usual</h6>
                        <p>
                            Of course! We’re happy to offer a free plan to anyone who wants to try our service.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;