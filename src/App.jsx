import Footer from "./Components/home/utilities/Footer"
import NavbarLogin from "./Components/home/utilities/NavbarLogin"
import HomePage from "./Page/home/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./Page/auth/LoginPage"
import Register from "./Page/auth/Register"
import AllCategoriesPage from "./Page/category/AllCategoriesPage"
import AllBrandPage from "./Page/brand/AllBrandPage"
import ShopProductsPage from "./Page/products/ShopProductsPage"
import ProductDetailsPage from "./Page/products/ProductDetailsPage"
import CartPage from "./Page/cart/CartPage"
import ChoosePayMethod from "./Page/checkout/ChoosePayMethod"
import AdminAllProductsPage from "./Page/admin/AdminAllProductsPage"
import AdminAllOrdersPage from "./Page/admin/AdminAllOrdersPage"
import AdminOrdersDetailsPage from "./Page/admin/AdminOrdersDetailsPage"
import AdminAddBrandPage from "./Page/admin/AdminAddBrandPage"
import AdminAddCategoryPage from "./Page/admin/AdminAddCategoryPage"
import AdminAddSubcategoryPage from "./Page/admin/AdminAddSubcategoryPage"
import AdminAddProductPage from "./Page/admin/AdminAddProductPage"
import UserAllOrdersPage from "./Page/user/UserAllOrdersPage"
import UserFavoriteProductsPage from "./Page/user/UserFavoriteProductsPage"
import UserAddressesPage from "./Page/user/UserAddressesPage"
import UserAddAddressPage from "./Page/user/UserAddAddressPage"
import UserEditAddressPage from "./Page/user/UserEditAddressPage"
import UserProfilePage from "./Page/user/UserProfilePage"



function App() {


  return (
    <>
      <NavbarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/allcategory" element={<AllCategoriesPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethoud" element={<ChoosePayMethod />} />
          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrdersDetailsPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route path="/admin/addsubcategory" element={<AdminAddSubcategoryPage />} />
          <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
          <Route path="/user/addresses" element={<UserAddressesPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address" element={<UserEditAddressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App

