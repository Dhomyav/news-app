import React from 'react'


const Newsinfo = (props)=> {

   
    
        let {title,description,imageUrl,newsUrl} = props;
        return (
            <div className="my-3">

                <div className="card" >
                    <img  src={imageUrl} className="card-img-top" alt="..." />
                    <div className ="card-body">
                    <h5 className ="card-title">{title}</h5>
                    <p className ="card-text">{description}</p>
                    <a rel="noreferer" href={newsUrl} target="_blank" className ="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default Newsinfo;
