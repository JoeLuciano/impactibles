import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { SvgPage } from 'components/svgPage/SvgPage';
import { SymbolPage } from 'components/symbolPage/SymbolPage';

export const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<SvgPage />} />
        <Route path={'/:symbol_id'} element={<SvgPage />} />
        <Route path={'/symbol/:symbol_id'} element={<SymbolPage isPage />} />
      </Routes>{' '}
    </Router>
  );
};
