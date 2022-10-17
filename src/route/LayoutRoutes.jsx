import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './Routes';
import AppLayout from '../components/layout';
// import HomeLayout from '../frondend/components/layout';
import HomeLayout from '../frontend/components/layout';

const LayoutRoutes = () => {
	return (
		<>
			<Routes>
				{routes.map(({ path, Component }, i) => (
					<Route element={<AppLayout />} key={i}>
						<Route path={path} element={Component} />
					</Route>
				))}
        <Route element={<HomeLayout />} >
			      	<Route path='/uta' element={<h1>Uta</h1>} />
        </Route>
			</Routes>
		</>
	);
};

export default LayoutRoutes;
