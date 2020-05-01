import React from 'react';

async function Content(){
    let response = await fetch('http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'category=business&' +
    'apiKey=0117b26232bd4e88ae110f71ec0f05ed');
    let data = await response.json();
    console.log(data.articles,"date");
    return data.articles;
}

class BusinessContent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [],
            visible: 6,
            hideButton: false
        }
        this.showMore = this.showMore.bind(this);
        this.topFunction = this.topFunction.bind(this);
    }
    componentDidMount = async () =>{
        const newData = await Content()
        this.setState({
            data: newData
        })
    }
    generateAuthors = () =>{
        return this.state.data.slice(0,this.state.visible).map(item => {
            return(
                    <div id="news-item">
                        <a href={item.url}><img id="image" src={item.urlToImage} alt=""/>
                        <p id="image-text">{item.title}</p>  
                        </a>
                    </div>                
            ) 
        })
      
    }
    showMore (){
        this.setState({
            visible: this.state.data.length,
            hideButton: !this.state.hideButton
        })
        let remove = document.getElementById("show-more");
        remove.parentNode.removeChild(remove);

    }

    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }   

render(){
    return (
        <>
        <div id="news">
            {this.generateAuthors()};
        </div>
        <button id="show-more" onClick = {this.showMore}>Show more...</button>
        <div>
        <button id="go-to-top" onClick = {this.topFunction}>Go Top</button>
        </div>
        </>
    )}
}

export default BusinessContent; 