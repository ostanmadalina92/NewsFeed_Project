import React from 'react';

async function Content(){
    let responseBusiness = await fetch('http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'category=business&' +
    'apiKey=0117b26232bd4e88ae110f71ec0f05ed');
    let responseScience = await fetch('http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'category=science&' +
    'apiKey=0117b26232bd4e88ae110f71ec0f05ed')
    let dataBusiness = await responseBusiness.json();
    let dataScience = await responseScience.json();
    console.log(dataBusiness.articles, "date");
    console.log(dataScience.articles, "date");
    console.log( [...dataBusiness.articles,...dataScience.articles]);
    return [...dataBusiness.articles,...dataScience.articles];
}

class SearchContent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [],
        }
    }
    componentDidMount = async () => {
        const newData = await Content();
        this.setState({
            data:newData
        })
    }
    generateNews = () => {
        return this.state.data.map(item =>{
            return(
                <div id="news-item">
                    <a href={item.url}><img id="image" src={item.urlToImage} alt=""/>
                    <p id="image-text">{item.title}</p>  
                    </a>       
                </div>      
            )
        })   
    }


    render(){
        return(
            <>
            <div class="search-box">
                <a class="search-btn">
                <i class="fas fa-search"></i></a>
                <input onChange={this.searchBar()} id="searchId" class="search-txt" name="" type="text" placeholder="Search.."/>
            </div>
            <div id="news">
                {this.generateNews()};
            </div> 
            </>
        )
    }
}
export default SearchContent;