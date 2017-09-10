import React,{ Component } from 'react';
import SearchBar from '../containers/SearchBar';
import ArtistList from '../containers/ArtistList';

class App extends Component {
	render() {
		return(
			<div className="App container">
				<SearchBar />
				<ArtistList />
			</div>
		)
	}
}

export default App;