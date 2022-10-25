import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './Routes';
import AppLayout from '../components/layout';
import Default from '../frontend/components/dashboard/default';

import HomeLayout from '../frontend/components/layout';
import Muro from '../frontend/components/dashboard/muro';
const LayoutRoutes = () => {
	return (
		<>
			<Routes>
				{routes.map(({ path, Component }, i) => (
					<Route element={<AppLayout />} key={i}>
						<Route path={path} element={Component} />
					</Route>
				))}
				<Route element={<HomeLayout />}>
					<Route path='/uta' element={<Default />} />
					<Route path='/muro/:id' element={<Muro />} />
				</Route>
			</Routes>
		</>
	);
};

export default LayoutRoutes;
