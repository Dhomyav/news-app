import React , {useEffect,useState} from "react";
import Newsinfo from "./Newsinfo";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
 
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

 

  const updateNews= async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5f9d1fcb992a49ddb49ea1acee057850&page=${page}&pageSize=${props.pageSize}`;
    
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);

    let parsedata = await data.json();
    props.setProgress(70);
    setarticles(parsedata.articles);
    settotalResults(parsedata.totalResults);
    setloading(false);
   
    props.setProgress(100);
  }

  useEffect(() => {
     document.title = `${capitalizeFirstLetter(
    props.category
  )} - News App`;
    updateNews();
    
  }, [])

  

 

  const fetchMoreData = async () => {
   
   setpage(page+1);
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5f9d1fcb992a49ddb49ea1acee057850&page=${page+1}&pageSize=${props.pageSize}`;
   
   let data = await fetch(url);

   let parsedata = await data.json();
   setarticles(articles.concat(parsedata.articles));
   settotalResults(parsedata.totalResults);
   setloading(false);
   
  };

  
    return (
      <>
        <h2 className="my-3 mx-3">
          Top Headlines from {capitalizeFirstLetter(props.category)}
        </h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
            <div className="container">
          <div className="row">
            {
              articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsinfo
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
          </div>
          </div>
        </InfiniteScroll>
      
        
      </>
    );
  
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
