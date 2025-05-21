import React from 'react'
import ENVIROMENT from './utils/constants/enviroments.js'
import RegisterScreen from './screens/RegisterScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import { Route, Routes } from 'react-router-dom'
import ErrorScreen from './screens/ErrorScreen.jsx'
import ForgotPasswordScreen from './screens/ForgotPasswordScreen.jsx'
import ResetPasswordScreen from './screens/ResetPasswordScreen.jsx'
import ProtectedRoute from './Components/ProtectedRoute.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import CreateWorkspaceScreen from './screens/CreateWorkspaceScreen.jsx'
import WorkspaceScreen from './screens/WorkspaceScreen.jsx'

const App = () => {
	
	return (
		<div>
			<Routes>
				<Route path="/" element={<LoginScreen/>}/>
				<Route path="register" element={<RegisterScreen/>}/>
				<Route path="login" element={<LoginScreen/>}/>
				<Route path="error" element={<ErrorScreen/>}/>
				<Route path="/forgot-password" element={<ForgotPasswordScreen/>}/>
				<Route path='/reset-password' element={<ResetPasswordScreen/>}/>
				<Route element={<ProtectedRoute/>}>
					<Route path='/home' element={<HomeScreen/>}/>
					<Route path='/workspace/new' element={<CreateWorkspaceScreen/>}/>
					<Route path='/workspace/:workspace_id'element={<WorkspaceScreen/>}/>
					<Route path='/workspace/:workspace_id/:channel_id' element={<WorkspaceScreen/>}/>
				</Route>
				
			</Routes>
		</div>
	)
}

export default App