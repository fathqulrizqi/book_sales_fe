import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/public"
import Dashboard from "./pages/admin"
import PublicLayout from "./layouts/public"
import AdminLayout from "./layouts/admin"
import AdminBooks from "./pages/admin/books"
import PublicBooks from "./pages/public/books"
import BookCreate from "./pages/admin/books/create.jsx"
import BookEdit from "./pages/admin/books/edit.jsx"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import Contact from "./components/shared/Contact/index.jsx"
import Developer from "./components/shared/Developer/index.jsx"
import Genres from "./pages/admin/genre/index.jsx"
import GenreEdit from "./pages/admin/genre/edit.jsx"
import GenreCreate from "./pages/admin/genre/create.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="/books" element={<PublicBooks />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/contacts" element={<Contact />} />
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="books">
              <Route index element={<AdminBooks />} />
              <Route path="create" element={<BookCreate />} />
              <Route path="edit" element={<BookEdit />} />
            </Route>
            <Route path="genres">
              <Route index element={<Genres />} />
              <Route path="edit" element={<GenreEdit />} />
              <Route path="create" element={<GenreCreate />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
