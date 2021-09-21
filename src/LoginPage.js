import React, { useState, useEffect } from "react";
import Home from "./Home";
import Join from "./Join";
import Create from "./Create";
import Conf from "./Conf";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Page() {
		return (
			<BrowserRouter>
			<Switch>
			  <Route exact path="/home" component={Home} />
			  <Route exact path="/create" component={Create} />
			  <Route exact path="/join" component={Join} />
			  <Route exact path="/conf" component={Conf} />
			</Switch>
		  </BrowserRouter>
		);
	
}
export default Page;
