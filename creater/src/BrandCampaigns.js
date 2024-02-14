import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Brand_dashboard from './Brand_dashboard';
import HeadetForBrand from './HeadetForBrand';
import './BrandCamaigns.css';


function BrandCampaigns() {

    const [image, setimage] = useState('');
    const [collab_name, setcollab_name] = useState('');
    const [collab_content, setcollab_content] = useState('');
    const [payment, setpayment] = useState('');
    const [followers, setfollowers] = useState('');
    const [engagement, setengagement] = useState('');
    const [min_age, setmin_age] = useState('');
    const [max_age, setmax_age] = useState('');
    const [residence, setresidence] = useState('');
    const [Compensation, setCompensation] = useState('');
    const [Campaign_Description, setCampaign_Description] = useState('');
    const [Deliverables, setDeliverables] = useState('');

    const button = () => {
        if (
            image !== "" &&
            collab_name !== "" &&
            collab_content !== "" &&
            payment !== "" &&
            followers !== "" &&
            engagement !== "" &&
            min_age !== "" &&
            max_age !== "" &&
            residence !== "" &&
            Compensation !== "" &&
            Campaign_Description !== "" &&
            Deliverables !== ""

        ) {
            axios.post("http://localhost:5000/Collabration/collab_form", {
                image: image,
                collab_name: collab_name,
                collab_content: collab_content,
                payment: payment,
                followers: followers,
                engagement: engagement,
                min_age: min_age,
                max_age: max_age,
                residence: residence,
                Compensation: Compensation,
                Campaign_Description: Campaign_Description,
                Deliverables: Deliverables
            })
                .then((response) => {
                    console.log(response)
                })

                .catch((error) => {
                    console.log(error)
                })
        }
        else {

        }
    }


    return (
        <>

            <HeadetForBrand />
            <div id='wel-main'>
                <div id="sidebar" data-aos="flip-left">
                    <Brand_dashboard />
                </div>
                <div className='from-sections'>
                    <div className='second_div '>
                        <section className=''>
                            <form action="" className='fromforcampaings'>
                                <h3>Campaign basic</h3>
                                <div>
                                    <div className='mainfor'>
                                        <span className='specialmarginforspan youme'>Company Name:</span>
                                        <input className='widthfull ant-input' type="text"
                                            placeholder="Name"
                                            value={collab_name}
                                            onChange={(e) => { setcollab_name(e.target.value) }}
                                            required />
                                    </div>
                                </div>
                                <div>
                                    <div className='mainfor'>
                                        <span className='specialmarginforspan youme'>Enter Content:</span>
                                        <input className='widthfull ant-input' type="text" placeholder="Enter Content"
                                            value={collab_content}
                                            onChange={(e) => { setcollab_content(e.target.value) }}
                                            required />
                                    </div>
                                </div>
                                <div>
                                    <div className='mainfor'>
                                        <span className=' specialmarginforspan'>Retail value </span>
                                        <span className=' specialmarginforspan'> (For your Product or Servise)</span>
                                        <input className=' ant-input' type="number" placeholder="Payment"
                                            value={payment}
                                            onChange={(e) => { setpayment(e.target.value) }}
                                            required />
                                    </div>
                                </div>
                                <div>
                                    <div className='mainfor'>
                                        <span className='specialmarginforspan youme'>Followers</span>
                                        <input className='widthfull ant-input' type="text" id="inputPassword3"
                                            placeholder="Followers"
                                            value={followers}
                                            onChange={(e) => { setfollowers(e.target.value) }}
                                            required />
                                    </div>
                                </div>
                                <div>
                                    <div className='mainfor'>
                                        <span className='specialmarginforspan youme'>Engagement</span>
                                        <input className='widthfull ant-input' type="text" id="inputPassword3"
                                            placeholder="Engagement"
                                            value={engagement}
                                            onChange={(e) => { setengagement(e.target.value) }}
                                            required />
                                    </div>
                                </div>
                                <div>
                                    <div className='mainfor'>
                                        <span className='specialmarginforspan youme'>Min_Age</span>
                                        <input className='widthfull ant-input' type="number" id="inputPassword3"
                                            placeholder="Min_Age"
                                            value={min_age}
                                            onChange={(e) => { setmin_age(e.target.value) }}
                                            required />
                                    </div>
                                </div>
                                <div>
                                    <div className='mainfor'>
                                        <span className='specialmarginforspan youme'>Max_Age</span>
                                        <input className='widthfull ant-input' type="number" id="inputPassword3"
                                            placeholder="Max_Age"
                                            value={max_age}
                                            onChange={(e) => { setmax_age(e.target.value) }}
                                            required />
                                    </div>
                                </div>
                                <div>
                                    <div className='mainfor'>
                                        <span className='specialmarginforspan youme'>Residence</span>
                                        <input className='widthfull ant-input' type="text" id="inputPassword3"
                                            value={residence}
                                            onChange={(e) => { setresidence(e.target.value) }}
                                            placeholder="Recidence"
                                            required />
                                    </div>
                                </div>
                                <div>
                                    <div className='mainfor'>
                                        <span className='specialmarginforspan youme'>Compensation</span>
                                        <input className='widthfull ant-input' type="text" id="inputPassword3"
                                            value={Compensation}
                                            onChange={(e) => { setCompensation(e.target.value) }}
                                            placeholder="Compensation"
                                            required
                                            minLength="50" />
                                    </div>
                                </div>
                                <div>
                                    <div className='mainfor'>
                                        <span className='specialmarginforspan youme'>Campaign Description</span>
                                        <input className='widthfull ant-input' type="text" id="inputPassword3"
                                            value={Campaign_Description}
                                            onChange={(e) => { setCampaign_Description(e.target.value) }}
                                            placeholder="Campaign Description"
                                            required
                                            minLength="50" />
                                    </div>
                                </div>
                                <div>
                                    <div className='mainfor'>
                                        <span className='specialmarginforspan youme'>Deliverables</span>
                                        <input className='widthfull ant-input' type="text" id="inputPassword3"
                                            value={Deliverables}
                                            onChange={(e) => { setDeliverables(e.target.value) }}
                                            placeholder="Deliverables"
                                            required />
                                    </div>
                                </div>
                                <div>
                                    <div className='mainfor'>
                                        <span className='specialmarginforspan '>Gallery Images </span>
                                        <span className=' '>(URl only) </span>
                                        <input className='widthfull ant-input' type="text"
                                            placeholder="Image_url"
                                            value={image}
                                            onChange={(e) => { setimage(e.target.value) }}
                                            required />
                                    </div>
                                </div>
                                <div className="card-footer">
                                <Link to='/Collabration' id='lnk'>
                                    <button type="submit" className="btn btn-info" onClick={() => { button() }}>
                                    Submit
                                    </button>
                                         </Link>
                                    
                                </div>


                            </form>

                        </section>
                    </div>
                </div>
            </div>


        </>
    )
}

export default BrandCampaigns
