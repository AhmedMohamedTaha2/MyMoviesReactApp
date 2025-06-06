// App.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
=======
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4

import NavbarComponent from "./Components/NavbarComponent";
import SearchComponent from "./Components/SearchComponent";
import ContainerComponent from "./Components/ContainerComponent";
import MovieList from "./Components/MovieListComponent";
import MovieDetailModal from "./Components/MovieDetailModal";
<<<<<<< HEAD
import FooterComponent from "./Components/FooterComponent";
import HomepageComponent from "./Components/HomePageComponent";
import AboutComponent from "./Components/AboutComponent";

function AppContent() {
=======

function App() {
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4
  const apiKey = "f5e82cc2";
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
<<<<<<< HEAD
  const navigate = useNavigate();
=======
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4

  const fetchMovies = async (pageNumber) => {
    // لو مفيش كلمة بحث، متعملش أي طلب للـ API
    if (!searchTerm) {
      setMovies([]);
      setTotalResults(0);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}&page=${pageNumber}`
      );

      if (response.data.Response === "True") {
        setMovies(response.data.Search || []);
        // الـ totalResults بيجي بعدد النتائج الكلية، لازم نقسمه على 10 (عدد النتائج في الصفحة) عشان نجيب عدد الصفحات
        setTotalResults(Math.ceil(parseInt(response.data.totalResults) / 10));
      } else {
        setMovies([]);
        setTotalResults(0);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
      setTotalResults(0);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect لـ debouncing الـ searchTerm
  useEffect(() => {
    // كل ما الـ searchTerm يتغير، نرجع الصفحة للأولى
    // ده بيضمن إن أي بحث جديد يبدأ من أول صفحة
    setPage(1);

    const handler = setTimeout(() => {
      // لو الـ searchTerm فاضي، متستدعيش fetchMovies
      // الـ useEffect التاني (بتاع الـ page و searchTerm) هيتعامل مع حالة الـ searchTerm الفاضي
      if (searchTerm) {
<<<<<<< HEAD
        navigate("/search");
=======
        // ممكن نستدعي fetchMovies(1) هنا لو عايزين البحث يظهر فورًا بعد الـ debounce
        // لكن الأفضل نخلي الـ useEffect التاني هو اللي يستدعيها عشان نضمن التوافق مع تغيير الـ page
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
<<<<<<< HEAD
  }, [searchTerm, navigate]);
=======
  }, [searchTerm]);
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4

  // useEffect لجلب الأفلام بناءً على الـ searchTerm و الـ page
  // ده الـ useEffect اللي هيستدعي fetchMovies فعليًا
  useEffect(() => {
    // عشان نتجنب استدعاء API لما الـ searchTerm فاضي في البداية
    if (searchTerm) {
      fetchMovies(page);
    } else {
      // لو الـ searchTerm فاضي، هنفضي قائمة الأفلام والـ totalResults
      setMovies([]);
      setTotalResults(0);
    }
  }, [searchTerm, page]); // هيستدعي fetchMovies كل ما الـ searchTerm أو الـ page يتغيروا

<<<<<<< HEAD
  // Modify your search handler
  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <div className="w-full min-h-screen bg-gray-950 ">
      <NavbarComponent setSearchTerm={setSearchTerm}>

        <SearchComponent searchTerm={searchTerm} setSearchTerm={handleSearch} settingSearchTerm={setSearchTerm} />
      </NavbarComponent>

      <Routes>
        <Route
          path="/"
          element={
            <div className="HomeDiv w-full bg-slate-950">
              <HomepageComponent />
              <AboutComponent />
            </div>
          }
        />

        <Route
          path="/search"
          element={
            <ContainerComponent
              currentPage={page}
              totalPages={totalResults}
              setPage={setPage}
              isLoading={isLoading}
            >
              <MovieList
                movies={movies}
                setIsOpen={setIsOpen}
                setSelectedMovie={setSelectedMovie}
              />
            </ContainerComponent>
          }
        />
      </Routes>

=======
  return (
    <div className="container-fluid min-h-screen bg-slate-950">
      <NavbarComponent>
        <SearchComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </NavbarComponent>

      <ContainerComponent
        currentPage={page}
        totalPages={totalResults}
        setPage={setPage}
        isLoading={isLoading} // ممكن تبعت الـ isLoading عشان الـ ContainerComponent يعرض spinner مثلاً
      >
        <MovieList
          movies={movies}
          setIsOpen={setIsOpen}
          setSelectedMovie={setSelectedMovie}
          // currentPage={page}  // ممكن متكونش محتاجها في الـ MovieList لو مش بتستخدمها هناك
        />
      </ContainerComponent>
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4
      <MovieDetailModal
        movie={selectedMovie}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
<<<<<<< HEAD
      <FooterComponent />
=======
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4
    </div>
  );
}

<<<<<<< HEAD
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
=======
export default App;
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4
