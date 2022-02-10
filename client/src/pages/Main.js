import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Main() {
const [test, setTest] = useState([])

    useEffect(() => {
      axios("/api/tests/get-all-test").then(({data}) => {
          setTest(data)
      })
    },[])

  return (
   <section className="bg-brown">
       <div className="container">
           <div className="row">
               {
                   test?.map(it => {
                       return (
                           <div key={it._id} className="col-4">
                               <div className="p-5 text-center bg-list">
                                   <Link className="w-100 text-light text-decoration-none" to={`/test/${it.name}`}>{it.name}</Link>
                               </div>
                           </div>
                       )
                   } )
               }


           </div>
       </div>
   </section>
  )
}

export default Main;
