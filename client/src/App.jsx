import AddingUser from './Components/AddingUser'
import Navbar from './Components/Navbar'
import CodeForInterview from './Components/CodeForInterview'
import AllUser from './Components/AllUsers'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

	return (
		<>
			<BrowserRouter>
				<Navbar /> {/*jin-jin components pe routing chaiye usko routes se surround krdo */}
				<Routes>
					<Route path="/" element={<CodeForInterview />}>	</Route>
					<Route path="/add" element={<AddingUser />}>	</Route>
					<Route path="/all" element={<AllUser />}>		</Route>
				</Routes>
			</BrowserRouter >
		</>
	)
}

export default App
