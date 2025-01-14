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
import Genres from "./pages/admin/genres/index.jsx"
import GenreEdit from "./pages/admin/genres/edit.jsx"
import GenreCreate from "./pages/admin/genres/create.jsx"
import Authors from "./pages/admin/authors/index.jsx"
import AuthorEdit from "./pages/admin/authors/edit.jsx"
import AuthorCreate from "./pages/admin/authors/create.jsx"
import PaymentMethodsEdit from "./pages/admin/payment_methods/edit.jsx"
import PaymentMethodsCreate from "./pages/admin/payment_methods/create.jsx"
import PaymentMethods from "./pages/admin/payment_methods/index.jsx"

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
              <Route path="edit/:id" element={<BookEdit />} />
            </Route>
            <Route path="genres">
              <Route index element={<Genres />} />
              <Route path="edit" element={<GenreEdit />} />
              <Route path="create" element={<GenreCreate />} />
            </Route>
            <Route path="authors">
              <Route index element={<Authors />} />
              <Route path="edit" element={<AuthorEdit />} />
              <Route path="create" element={<AuthorCreate />} />
            </Route>
            <Route path="payment_methods">
              <Route index element={<PaymentMethods />} />
              <Route path="edit" element={<PaymentMethodsEdit />} />
              <Route path="create" element={<PaymentMethodsCreate />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
