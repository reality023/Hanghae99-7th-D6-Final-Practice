import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyPage from "./pages/MyPage";
import Search from "./pages/Search";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Social from "./pages/Social";
import Write from "./pages/Write";
import AddMemo from "./pages/AddMemo";
import ModifyMemo from "./pages/ModifyMemo";
import DeleteMemo from "./pages/DeleteMemo";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/social" element={<Social />} />
        <Route path="/write" element={<Write />} />
        <Route path="/addmemo" element={<AddMemo />} />
        <Route path="/modifymemo/:id" element={<ModifyMemo />} />
        <Route path="/deleltememo/:id" element={<DeleteMemo />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
