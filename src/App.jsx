import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/MainLayout';
import { Error404Page, NexusPage } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <NexusPage />
          </MainLayout>} />

        <Route path="/404" element={<Error404Page />} />

        <Route path="/*" element={<Error404Page />} />
      </Routes>
    </>
  )
}

export default App