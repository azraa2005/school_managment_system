export const contentData = (pHeader,pTitle,pDescription)=>{
    
    content = `
    <h1>${pHeader}</h1>
        
      <div class="col-sm-6">
        <div class="card-body">
          <h5 class="card-title">${pTitle}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${pDescription}</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div> 
       `
    return content
};