import axios from "axios";
import React, { Component } from "react";

export default class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
        lists: []
        


    }
  }
  componentDidMount() {
    axios
      .get("https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=fn8brzjQFH25NFFG4U7G5G4P91MWZVYd")
      .then(results => {
          console.log(results)
          this.setState({lists:results.data.results})
      })
      .catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
      });
  }
  

  render() {
      const {lists} = this.state
      return (
        <>
            <h1 className="font-bold text-center text-4x1 py-5">Popular Articles in the Past 7 days</h1>
            <section className="grid grid-cols-1 gap-10 px-5 sm:grid-cols-2">
                {lists.map((article) => {
                    const {section,byline,title,abstract,published_date,rank}
                    = article
   
                    return (
                        <article key={rank} className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5
                        lg:grid-cols-3 lx:grid-cols-4">
    
                        <div><h3 className="font-bold my-2 text-2x1">{title}</h3></div>
                        <p className="mb-4">{abstract}</p>
                        <p><span className="font-bold">Author: </span>
                        {byline}</p>
                        <p><span className="font-bold">Section: </span>
                        {section}</p>
                        <p><span className="font-bold">Published Date: </span>
                        {published_date}</p>
                      </article>
                    )
                })}
            </section>
        </>
    )
  }
}