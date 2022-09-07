import React  from 'react'
import "./style.css"
import Head from '../../header/Head'
import n1 from "../../../assets/b1.jpg"
import n2 from "../../../assets/b2.jpg"
import n3 from "../../../assets/b5.jpg"
// import axios from "axios"
export default function News() {
//     const[news ,setNews]=useState([])
//     useEffect(()=>{
//             axios.get("data.json").then(res=>{
//                 setNews(res.data.news)
//             }) 
//     },[])
//    const myNews= news.map(item=>{
//         return(
//             <div className="col-lg-4 py-2"  key={item.id}>
//             <div className="news1">
//                 <div className="news-overlay">
//                     <div className="imge-b">
//                         <img src={item.img} />
//                     </div>
//                 <div className="news-links">
                     
//                 <div className="news-span">
//                     <span className="news-s1">
//                         <a href="#">Transport /</a>
//                     </span>
//                     <span className="news-s2">
//                         <a href="#">16 February 2022</a>
//                     </span>
//                 </div>
//                 <h5 className="news-h5">{item.body}</h5>
//                 <div className="read-more d-flex">
//                     <a href="#"> more</a>
//                     <div className="author">
//                         <h6>admin</h6>
//                         <span>author</span>
//                     </div>
//                 </div>
//             </div>
//             </div>
//             </div>
//         </div>
//         )
//     })
    return (
        <div className="news-section py-5" id="news-s">
            <div className="container">
            <Head head="news" span="News Feeds" hDesc="Blog &" sDesc="Insights"/>
                <div className="row p-0 m-0 pt-4">
                    {/* {myNews} */}

                    <div className="col-lg-4 py-2"  >
                        <div className="news1">
                        <div className="news-overlay">
                            <div className="imge-b">
                                <img src={n1} />
                            </div>
                        <div className="news-links">
                            
                        <div className="news-span">
                            <span className="news-s1">
                                <a href="#">Transport /</a>
                            </span>
                            <span className="news-s2">
                                <a href="#">16 February 2022</a>
                            </span>
                        </div>
                        <h5 className="news-h5">Helping Companies in Their Green Transition</h5>
                        <div className="read-more d-flex">
                            <a href="#"> more</a>
                            <div className="author">
                                <h6>admin</h6>
                                <span>author</span>
                        </div>
                </div>
            </div>
            </div>
            </div>
        </div>
                    <div className="col-lg-4 py-2"  >
                        <div className="news1">
                        <div className="news-overlay">
                            <div className="imge-b">
                                <img src={n2} />
                            </div>
                        <div className="news-links">
                            
                        <div className="news-span">
                            <span className="news-s1">
                                <a href="#">Transport /</a>
                            </span>
                            <span className="news-s2">
                                <a href="#">16 February 2022</a>
                            </span>
                        </div>
                        <h5 className="news-h5">Tips to Lowering Freight Shipping Costs Transition</h5>
                        <div className="read-more d-flex">
                            <a href="#"> more</a>
                            <div className="author">
                                <h6>admin</h6>
                                <span>author</span>
                        </div>
                </div>
            </div>
            </div>
            </div>
        </div>
                    <div className="col-lg-4 py-2"  >
                        <div className="news1">
                        <div className="news-overlay">
                            <div className="imge-b">
                                <img src={n3} />
                            </div>
                        <div className="news-links">
                            
                        <div className="news-span">
                            <span className="news-s1">
                                <a href="#">Transport /</a>
                            </span>
                            <span className="news-s2">
                                <a href="#">16 February 2022</a>
                            </span>
                        </div>
                        <h5 className="news-h5">Drivers Deliver Much More Than Products</h5>
                        <div className="read-more d-flex">
                            <a href="#"> more</a>
                            <div className="author">
                                <h6>admin</h6>
                                <span>author</span>
                        </div>
                </div>
            </div>
            </div>
            </div>
        </div>
                </div>
            </div>
        </div>
    )
}
