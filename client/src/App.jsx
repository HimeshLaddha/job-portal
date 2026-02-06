import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Applications from './pages/Applications'
import ApplyJob from './pages/ApplyJob'
import RecruiterLogin from './components/RecruiterLogin'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import Dashboard from './pages/Dashboard'
import AddJobs from './pages/AddJobs'
import ManageJobs from './pages/ManageJobs'
import ViewApplications from './pages/ViewApplications'
import 'quill/dist/quill.snow.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const { showRecruiterLogin, companyToken } = useContext(AppContext)

  return (
    <>
      <div>
        {
          showRecruiterLogin && <RecruiterLogin />
        }
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/applications' element={<Applications />} />
          <Route path='/apply-job/:id' element={<ApplyJob />} />
          <Route path='/dashboard' element={<Dashboard />}>
            {companyToken ? <>
              <Route path='add-job' element={<AddJobs />} />
              <Route path='manage-jobs' element={<ManageJobs />} />
              <Route path='view-applications' element={<ViewApplications />} />
            </>
            :
            null}
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
