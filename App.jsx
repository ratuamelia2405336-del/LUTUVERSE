import { Routes, Route, Outlet } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import GuruDashboard from './pages/GuruDashboard'
import Cptp from './pages/Cptp'
import OrganisasiBelajar from './pages/OrganisasiBelajar'
import EcoFuture from './pages/EcoFuture'
import EComic from './pages/EComic'
import Puzzle from './pages/Puzzle'
import Lutungpedia from './pages/Lutungpedia'
import JejakBelajar from './pages/JejakBelajar'
import Evaluasi from './pages/Evaluasi'
import ProtectedRoute from './components/ProtectedRoute'

// ── LAYOUT KHUSUS SISWA ──────────────────────────────────────────────────
// Semua halaman di dalam layout ini akan otomatis memiliki background hutan
// yang sama seperti landing, login, dan register.
function StudentLayout() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/bg-hutan.png')" }}
    >
      <Outlet />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      {/* Halaman Publik (Landing, Login, Register) */}
      <Route path="/" element={<Landing />} />
      <Route path="/masuk" element={<Login />} />
      <Route path="/daftar" element={<Register />} />

      {/* ── GROUP HALAMAN SISWA ── */}
      {/* Semua rute di bawah ini otomatis memakai bg-hutan karena dibungkus StudentLayout */}
      <Route element={<StudentLayout />}>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/cptp" element={<ProtectedRoute><Cptp /></ProtectedRoute>} />

        {/* Tahap PBL */}
        <Route path="/e-comic" element={<ProtectedRoute><EComic /></ProtectedRoute>} />
        <Route path="/organisasi-belajar" element={<ProtectedRoute><OrganisasiBelajar /></ProtectedRoute>} />
        <Route path="/puzzle" element={<ProtectedRoute><Puzzle /></ProtectedRoute>} />
        <Route path="/ecofuture" element={<ProtectedRoute><EcoFuture /></ProtectedRoute>} />
        <Route path="/evaluasi" element={<ProtectedRoute><Evaluasi /></ProtectedRoute>} />

        {/* Fitur Tambahan */}
        <Route path="/lutungpedia" element={<ProtectedRoute><Lutungpedia /></ProtectedRoute>} />
        <Route path="/jejak-belajar" element={<ProtectedRoute><JejakBelajar /></ProtectedRoute>} />
      </Route>

      {/* ── HALAMAN GURU ── */}
      {/* Rute ini berada di luar StudentLayout, sehingga background-nya */}
      {/* tidak akan ikut berubah menjadi hutan dan bisa Anda kustomisasi sendiri di dalam GuruDashboard */}
      <Route path="/guru" element={<ProtectedRoute requireRole="guru"><GuruDashboard /></ProtectedRoute>} />

      {/* Fallback Route */}
      <Route path="*" element={<Landing />} />
    </Routes>
  )
}