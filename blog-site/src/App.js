import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1 className="title"><span id="ytext">&lt;</span>WebDev's Blog<span id="ytext">/&gt;</span></h1>
     <NavBar />
     <div id="page-body">
       <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
          <Route path="*" element={<NotFound />} />
       </Routes>
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
