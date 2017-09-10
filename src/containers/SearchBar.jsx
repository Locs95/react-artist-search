import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArtist } from '../actions/index';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			query: ''
		}

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

    onInputChange(e) {
    	this.setState({
    		query: e.target.value
    	});
    }

    onFormSubmit(e) {
    	e.preventDefault();
    	this.props.fetchArtist(this.state.query);
    	this.setState({
    		query: ''
    	});
    }

	render() {
		return(
			<div className="SearchBar">
			 <h3>Artists search</h3>
			 <form onSubmit={this.onFormSubmit} >
			  <div className="input-group">
			  	<div className="input-group-btn">
			  	    <input type="text" onChange={this.onInputChange} value={this.state.query} className="form-control" />
			  		<button type="submit" className="btn btn-primary">search</button>
			  	</div>
			  </div>
			 </form>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchArtist: fetchArtist },dispatch);
}


export default connect(null,mapDispatchToProps)(SearchBar);

