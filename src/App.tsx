/** @format */

import { Route, Routes } from 'react-router-dom';

import { Home } from './components';
import './styles/App.css';

const App = () => (
	<Routes>
		<Route path='*' element={<Home />} />
	</Routes>
);

export default App;
