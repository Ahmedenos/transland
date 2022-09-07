import React  from 'react'
import Head from '../../header/Head'
import "./style.css"
import rev1 from "../../../assets/author2.jpg"
import rev2 from "../../../assets/author3.jpg"
import rev3 from "../../../assets/author_img.jpg"
// import axios from "axios"
export default function Review() {

    // const [review ,setReview]=useState([])
    // useEffect(()=>{
    //     axios.get("data.json").then(res=>{
    //         setReview(res.data.review)
    //     })
    // },[])
    //     const myReview=review.map(item=>{
    //         return(
    //             <div className="contain-div col-lg-3" key={item.id}>
    //                 <div className="testm-img">
    //                     <img src={item.imge}/>
    //                 </div>
    //                 <h2>{item.name}</h2>
    //                 <span className="d-block pb-3">{item.job}</span>
    //                 <i class="fa-solid fa-quote-right d-block"></i>
    //                 <p>Great experience and impressive product.
    //                      It was a very professional and technically competent job 
    //                      from the whole team.
    //                 </p>
    //                 <div className="star">
    //                     <i class="fa-solid fa-star"></i>
    //                     <i class="fa-solid fa-star"></i>
    //                     <i class="fa-solid fa-star"></i>
    //                     <i class="fa-solid fa-star"></i>
    //                     <i class="fa-solid fa-star"></i>
    //                 </div>
    //             </div>
    //         )
    //     })


    return (
        <div className="review-section py-5">
            <div className="container">
                <div className="review-head text-center">
                    <Head head="review" span="Testimonials" hDesc="Client" sDesc="Feedbacks"/>
                </div>
                <div className="row justify-content-center py-5">
                   {/* {myReview} */}

                   <div className="contain-div col-lg-3">
                        <div className="testm-img">
                            <img src={rev1}/>
                        </div>
                        <h2>Thomas Smith</h2>
                        <span className="d-block pb-3">CEO & Engineer</span>
                        <i class="fa-solid fa-quote-right d-block"></i>
                        <p>Great experience and impressive product.
                            It was a very professional and technically competent job 
                            from the whole team.
                        </p>
                        <div className="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                   <div className="contain-div col-lg-3">
                        <div className="testm-img">
                            <img src={rev2}/>
                        </div>
                        <h2>Ernest Smith</h2>
                        <span className="d-block pb-3">Business Man</span>
                        <i class="fa-solid fa-quote-right d-block"></i>
                        <p>Great experience and impressive product.
                            It was a very professional and technically competent job 
                            from the whole team.
                        </p>
                        <div className="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                   <div className="contain-div col-lg-3">
                        <div className="testm-img">
                            <img src={rev3}/>
                        </div>
                        <h2>Salman Ahmed</h2>
                        <span className="d-block pb-3">Project Manager</span>
                        <i class="fa-solid fa-quote-right d-block"></i>
                        <p>Great experience and impressive product.
                            It was a very professional and technically competent job 
                            from the whole team.
                        </p>
                        <div className="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>






                </div>

            </div>
         </div>
    )
}
