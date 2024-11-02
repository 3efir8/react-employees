import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PATHS } from './constants/paths.ts'
import { Login } from './pages/login-page.tsx'
import { Register } from './pages/register-page.tsx'
import './index.css'
import { ConfigProvider, theme } from 'antd'
import { Auth } from './components/Auth/Auth.tsx'
import { Employees } from './pages/employees-page.tsx'
import { AddEmployee } from './pages/add-employee-page.tsx'
import { Status } from './pages/status-page.tsx'
import { Employee } from './pages/employee-page.tsx'

const router = createBrowserRouter([
	{
		path: PATHS.home,
		element: <Employees />
	},
	{
		path: PATHS.login,
		element: <Login />
	},
	{
		path: PATHS.register,
		element: <Register />
	},
	{
		path: PATHS.employeeAdd,
		element: <AddEmployee />
	},
	{
		path: `${PATHS.status}/:status`,
		element: <Status />
	},
	{
		path: `${PATHS.employee}/:id`,
		element: <Employee />
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
				<Auth>
					<RouterProvider router={router} />
				</Auth>
			</ConfigProvider>
		</Provider>
	</StrictMode>,
)
