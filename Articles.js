import axios from "axios";
import React, {Component } from "react";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import {FaExternalLinkAlt} from 'react-icons/fa';
import ArticleCard from "./ArticleCard";



export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
        lists: [],
        articlesData: {
          asset_id: '',
          section: '',
          byline: '',
          abstract: '',
          published_date: ''
        }
         
    }
  }

  state={
    openModal : false
}

  toggleArticles = (asset_id,section,byline,title,abstract,published_date)=> {
    this.setState({
      articlesData: { asset_id,section,byline,title,abstract,published_date },
      openModal : true
    });
  }

onCloseModal = ()=>{
    this.setState({openModal : false})
}
  componentDidMount() {
    axios
      .get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.REACT_APP_POPULAR_API_KEY}`)
      .then(results => {
          console.log(results)
          this.setState(
            {lists:results.data.results})
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
                    return (
                        <article key={article.asset_id} className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5
                        lg:grid-cols-3 lx:grid-cols-4">  
                        <div><h3 className="font-bold my-2 text-2x1">{article.title}</h3></div>
                        <p className="mb-4">{article.abstract}</p>
                        <p><span className="font-bold">Author: </span>
                        {article.byline}</p>

                      {/*  
                        //Button
                      <button className="font-bold" onClick={this.toggleArticles.bind(
                         this,article.asset_id)}><FaExternalLinkAlt/></button>
                         //Modal
                        <Modal open={this.state.openModal} onClose={this.onCloseModal}>
                        <div><h3 className="font-bold my-2 text-2x1">{article.title}</h3></div>
                        <p className="mb-4">{article.abstract}</p>
                        <p><span className="font-bold">Author: </span>
                        {article.byline}</p>
                        <p><span className="font-bold">Section: </span>
                        {article.section}</p>
                        <p><span className="font-bold">Published Date: </span>
                        {article.published_date}</p>
                         </Modal>
                         */}
                         <ArticleCard
                          section={article.section}
                          title={article.title}
                          byline={article.byline}
                          abstract={article.abstract}
                          published_date={article.published_date}
                         />
                      </article>
                    )
                })}

            </section>
        </>
    )
  }
}