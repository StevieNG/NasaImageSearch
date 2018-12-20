import React, { Component } from 'react';
import DrawImage from './drawImage'
let request = require('request');
let link, link2, link3, link4, link5, link6
class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {value: '',
        searchImage:[
          {link:"http://gablecostello.com/wp-content/uploads/2014/08/nasa-meatball.gif", id:1},
          {link:"http://gablecostello.com/wp-content/uploads/2014/08/nasa-meatball.gif", id:2},
          {link:"http://gablecostello.com/wp-content/uploads/2014/08/nasa-meatball.gif", id:3},
          {link:"http://gablecostello.com/wp-content/uploads/2014/08/nasa-meatball.gif", id:4},
          {link:"http://gablecostello.com/wp-content/uploads/2014/08/nasa-meatball.gif", id:5},
          {link:"http://gablecostello.com/wp-content/uploads/2014/08/nasa-meatball.gif", id:6}
        ]}
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
      }


      customerInput = React.createRef()


      handleChange(event) {
        this.setState({value: event.target.value})
     


     
      }


    handleSearch = async(event) =>{
       
  
        event.preventDefault()
        await request.get(`https://images-api.nasa.gov/search?q=${this.state.value}&media_type=image`, function (error, response, body) {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode); 
  
        body= JSON.parse(body);
      
         link= body.collection.items[0].links[0].href 
          link2= body.collection.items[1].links[0].href 
           link3= body.collection.items[2].links[0].href 
           link4= body.collection.items[3].links[0].href 
           link5= body.collection.items[4].links[0].href 
           link6= body.collection.items[5].links[0].href 
    
        // console.log(link); 
       
        
        // Print the HTML for the Google homepage.
      }) 
    //   this.handleRefresh()
      setTimeout(this.handleRefresh,800)
    }   
    

    
    handleRefresh(){
        console.log("The Link is: "+this.state.searchImage.link1)
        this.setState(prevState =>{
            return{ 
              link: prevState.searchImage[0].link=link,
              link2: prevState.searchImage[1].link=link2,
              link3: prevState.searchImage[2].link=link3,
              link4: prevState.searchImage[3].link=link4,
              link5: prevState.searchImage[4].link=link5,
              link6: prevState.searchImage[5].link=link6
            }
        } )


    }
     
  

          



    render(){
   
        return (
            <div>
                
            <form onSubmit={this.handleSearch}>
            <label>  <input type="text"  value={this.state.value} onChange={this.handleChange} />  </label>
            <input type="submit" value="Submit" />
            
            </form>
          <DrawImage
          searchImage ={this.state.searchImage}
           />


            </div>)}}


export default SearchBar