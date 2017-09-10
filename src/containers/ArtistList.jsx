import React,{ Component } from 'react';
import { connect } from 'react-redux';



class ArtistList extends Component {

    renderList(artistData) {
         
      
         if(artistData.artist){
                   
                 const image = (artistData.artist) ? artistData.artist.image.slice('#text')[3] : '';

		         return(

					<div className="col-sm-12" key={Math.random()}>
						<div className="panel panel-default">
							<div className="panel-body">
							    <div className="col-sm-12">
							    	<h3>{(artistData.artist) ? artistData.artist.name : 'No name'}</h3>
							    </div>
								<div className="col-sm-6">
								  <img className="img-responsive" src={(image) ? image['#text']: 'No image'} alt="" />
								</div>
								<div className="col-sm-6">
								{ <div dangerouslySetInnerHTML={ {__html: artistData.artist.bio.summary} } />}
								</div>
							</div>
						</div>
					</div>				
				)

         }
        
        
        

    }

	render() {
		var error = this.props.artist.map(item => {
			return (item.error) ? item.error : '' 
		})
	
		return(
			<div className="ArtistList row">
				{
					(error.slice()[0] !== 6) ? this.props.artist.map(this.renderList) : <div></div>
				
				}
			</div>
		)
	}
}






function mapStateToProps(state) {
     return {
     	 artist: state.artist
     }
}



export default connect(mapStateToProps)(ArtistList);