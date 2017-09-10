import axios from 'axios';


//const API_ID = `0a998e13`;
const API_KEY = 'ed8643665c40615a00558d29adc6d001';
const BASE_URL = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=${API_KEY}&format=json`;
//const BASE_URL = `https://api.jamendo.com/v3.0/albums/tracks/?client_id=${API_ID}&format=jsonpretty&order=track_name`;


export const FETCH_ARTIST = 'FETCH_ARTIST'; 


export function fetchArtist(artist) {
    
    const url = `${BASE_URL}&artist=${artist}`;
    const request = axios.get(url);
   
    return {
    	type: FETCH_ARTIST,
    	payload: request
    }
      

}
