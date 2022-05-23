import React from 'react';
import axios from 'axios';

export default axios.create( {
	baseURL: 'https://rosterbuster.aero/wp-content/uploads/'
});