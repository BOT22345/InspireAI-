import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home.jsx';
import Layout from './pages/Layout.jsx';
import DashBoard from './pages/Dashboard.jsx';
import WriteArticle from './pages/WriteArticle.jsx';
import BlogTitle from './pages/BlogTitles.jsx';
import GenerateImages from './pages/GenerateImages.jsx';
import RemoveBackground from './pages/RemoveBackground.jsx';
import RemoveObject from './pages/RemoveObject.jsx';
import ReviewResume from './pages/ReviewResume.jsx';
import Community from './pages/Community.jsx';
import Navbar from './components/Navbar.jsx';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/ai' element={<Layout></Layout>}>
          <Route index element={<DashBoard></DashBoard>}></Route>
          <Route path='write-article' element={<WriteArticle></WriteArticle>}></Route>
          <Route path='blog-titles' element={<BlogTitle></BlogTitle>}></Route>
          <Route path='generate-images' element={<GenerateImages></GenerateImages>}></Route>
          <Route path='remove-background' element={<RemoveBackground></RemoveBackground>}></Route>
          <Route path='remove-object' element={<RemoveObject></RemoveObject>}></Route>
          <Route path='review-resume' element={<ReviewResume></ReviewResume>}></Route>
          <Route path='community' element={<Community></Community>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App