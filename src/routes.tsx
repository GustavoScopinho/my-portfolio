import { Page } from './page/Page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Error } from './page/error/Error'

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes
