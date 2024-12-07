import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Loginpage from './pages/Loginpage'
import TravelForm from './pages/TravelForm'
import ExpensesForm from './pages/ExpenseForm'
import ReportForm from './pages/ReportForm'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'
import ManagerDashboard from './pages/ManagerDashboard'
import DashboardTravelForm from './pages/DashboardTravelForm'
import DashboardExpenseForm from './pages/DashboardExpenseForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='/travel' element={<TravelForm/>}/>
        <Route path='/expense' element={<ExpensesForm/>}/>
        <Route path='/report' element={<ReportForm/>}/>
        <Route path='/userdashboard' element={<UserDashboard/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/managerdashboard' element={<ManagerDashboard/>}/>
        <Route path='/travelcard' element={<DashboardTravelForm/>}/>
        <Route path='/expensecard' element={<DashboardExpenseForm/>}/>


      </Routes>
    </BrowserRouter>
  )
}

export default App