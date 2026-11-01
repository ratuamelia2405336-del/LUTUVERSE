# LUTUVERSE
## Platform E-Comic IPA Berbasis Puzzle Interaktif untuk Konservasi Lutung Jawa

---

## Daftar Isi
1. [Tentang Proyek](#tentang-proyek)
2. [Fitur Utama](#fitur-utama)
3. [Struktur Proyek](#struktur-proyek)
4. [Setup Supabase](#setup-supabase)
5. [Menjalankan di Lokal](#menjalankan-di-lokal)
6. [Menambahkan Gambar & Ilustrasi](#menambahkan-gambar--ilustrasi)
7. [Deploy ke Internet](#deploy-ke-internet)
8. [Panduan Penggunaan](#panduan-penggunaan)

---

## Tentang Proyek

LUTUVERSE adalah media pembelajaran berbasis website yang mengintegrasikan **e-comic IPA** dan **puzzle interaktif** bertema konservasi lutung jawa (*Trachypithecus auratus*). Dikembangkan untuk meningkatkan *anticipatory competence* siswa SMP dalam kerangka *Education for Sustainable Development* (ESD).

**Stack teknologi:**
- Frontend: React 18 + Vite + Tailwind CSS
- Database & Auth: Supabase (PostgreSQL + Row Level Security)
- Routing: React Router v6

---

## Fitur Utama

| Fitur | Deskripsi |
|---|---|
| 🔐 Login Guru & Siswa | Autentikasi berbasis peran (role-based) |
| 📖 E-Comic IPA | 5 bab cerita interaktif dengan pertanyaan prediksi |
| 🧩 Puzzle Interaktif | 8 puzzle: drag & drop, mencocokkan, urutan |
| 🌍 Feedback Ekologis | Konsekuensi "kondisi buruk vs baik" + kolom refleksi |
| 📚 Lutungpedia | Referensi materi ekologi & konservasi lutung jawa |
| 🐾 Jejak Belajar | Progress belajar, badge, riwayat aktivitas |
| 📋 Evaluasi | Asesmen sumatif berbasis prediksi dampak lingkungan |
| 🧑‍🏫 Dashboard Guru | Buat kelas, bagikan kode, pantau progres siswa |

---

## Struktur Proyek

```
lutuverse/
├── public/
│   ├── favicon.svg
│   └── images/          ← taruh gambar/ilustrasi Anda di sini
│       ├── comic/       ← panel komik (panel-1.png, dst.)
│       └── mascot/      ← ilustrasi lutung maskot
├── src/
│   ├── components/
│   │   ├── puzzles/     ← komponen puzzle (FoodWeb, Matching, Sequence)
│   │   ├── AppTopBar.jsx
│   │   ├── Button.jsx
│   │   ├── ForestBackdrop.jsx  ← placeholder hutan (ganti dengan ilustrasi Anda)
│   │   ├── Logo.jsx
│   │   ├── LutungMascot.jsx    ← placeholder maskot (ganti dengan gambar Anda)
│   │   └── ProtectedRoute.jsx
│   ├── contexts/
│   │   └── AuthContext.jsx     ← state login/logout
│   ├── data/
│   │   ├── comicContent.js     ← teks panel & pertanyaan prediksi tiap bab
│   │   └── puzzleContent.js    ← soal & jawaban semua puzzle
│   ├── lib/
│   │   └── supabaseClient.js   ← koneksi Supabase
│   ├── pages/                  ← satu file per halaman
│   ├── App.jsx                 ← routing
│   ├── index.css               ← Tailwind + custom CSS
│   └── main.jsx                ← entry point
├── supabase/
│   └── schema.sql              ← ⬅ JALANKAN INI DI SUPABASE DAHULU
├── .env.example                ← template env variables
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Setup Supabase

### Langkah 1 — Buat project Supabase
1. Buka [https://supabase.com](https://supabase.com) → klik **New project**
2. Isi nama project (contoh: `lutuverse`), pilih region terdekat (Singapore), buat password database
3. Tunggu project selesai dibuat (~1 menit)

### Langkah 2 — Jalankan schema database
1. Di sidebar Supabase, klik **SQL Editor** → **New query**
2. Buka file `supabase/schema.sql` dari project ini
3. Salin seluruh isinya → tempel di SQL Editor → klik **Run** (▶)
4. Pastikan muncul pesan "Success. No rows returned"

### Langkah 3 — Aktifkan Email Auth
1. Klik **Authentication** → **Providers** → pastikan **Email** aktif
2. *(Opsional untuk development)* Klik **Authentication** → **Settings** → matikan **"Confirm email"** agar tidak perlu verifikasi email dulu

### Langkah 4 — Salin API credentials
1. Klik **Project Settings** (ikon roda gigi) → **API**
2. Salin:
   - **Project URL** (format: `https://xxxxxx.supabase.co`)
   - **anon public** key (panjang ~200 karakter)

---

## Menjalankan di Lokal

### Prasyarat
- Node.js versi 18 atau lebih baru ([download](https://nodejs.org))
- Akun Supabase (sudah selesai setup di langkah atas)

### Langkah-langkah

```bash
# 1. Masuk ke folder project
cd lutuverse

# 2. Install semua dependency
npm install

# 3. Buat file .env dari template
cp .env.example .env

# 4. Edit file .env — isi dengan URL dan key Supabase Anda
#    (gunakan editor teks biasa, mis. Notepad, VS Code, dll.)
#
#    Isi dengan:
#    VITE_SUPABASE_URL=https://xxxxxxxx.supabase.co
#    VITE_SUPABASE_ANON_KEY=eyJhbGc...

# 5. Jalankan development server
npm run dev

# 6. Buka browser → http://localhost:5173
```

---

## Menambahkan Gambar & Ilustrasi

Semua placeholder yang perlu Anda ganti ada di folder `public/images/`. Buat folder tersebut jika belum ada:

```
public/images/
├── hero-forest.png          ← latar beranda (disarankan 1440×900px)
├── mascot-sit.png           ← maskot lutung (PNG transparan, ~400×450px)
├── comic/
│   ├── bab1-panel1.jpg      ← panel komik bab 1, panel 1 (4:3 ratio)
│   ├── bab1-panel2.jpg
│   ├── bab1-panel3.jpg
│   ├── bab1-panel4.jpg
│   └── ...dst (bab2-bab5)
└── feedback/
    ├── kondisi-buruk.jpg    ← ilustrasi hutan rusak
    └── kondisi-baik.jpg     ← ilustrasi hutan sehat
```

### Cara mengganti placeholder di kode

**Background hutan beranda** — buka `src/components/ForestBackdrop.jsx`, ikuti komentar di bagian atas file.

**Maskot lutung** — buka `src/components/LutungMascot.jsx`, ikuti komentar. Atau cukup ganti tag di halaman Landing:
```jsx
// Di src/pages/Landing.jsx, ganti:
<LutungMascot className="w-72 h-auto" />
// Menjadi:
<img src="/images/mascot-sit.png" alt="Maskot Lutung Jawa" className="w-72 h-auto" />
```

**Panel komik** — buka `src/data/comicContent.js`, ganti nilai `image: null` menjadi path gambar:
```js
// Contoh:
{ id: 'p1', caption: 'Di hutan Jawa...', image: '/images/comic/bab1-panel1.jpg' },
```

**Gambar soal evaluasi** — tambahkan kolom `image_before_url` dan `image_after_url` di tabel `evaluation_questions` lewat Supabase Dashboard → Table Editor.

---

## Deploy ke Internet

### Opsi A — Vercel (termudah, gratis)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Ikuti petunjuk di terminal.
# Saat diminta env variables, tambahkan:
#   VITE_SUPABASE_URL
#   VITE_SUPABASE_ANON_KEY
```

### Opsi B — Netlify
```bash
# Build dulu
npm run build

# Hasilnya ada di folder "dist/"
# Upload folder "dist/" ke Netlify via drag & drop di netlify.com/drop
# Atau pakai Netlify CLI: netlify deploy --dir=dist --prod
# Tambahkan env variables di Netlify → Site Settings → Environment Variables
```

### Opsi C — GitHub Pages / hosting lain
```bash
npm run build
# Upload isi folder "dist/" ke hosting pilihan Anda.
```

> **Penting:** Setelah deploy, tambahkan URL domain Anda ke Supabase →
> **Authentication** → **URL Configuration** → **Site URL** dan **Redirect URLs**.

---

## Panduan Penggunaan

### Alur Siswa
1. **Daftar** sebagai Siswa → masukkan kode kelas dari guru (opsional)
2. Klik **Mulai Petualangan** dari dashboard
3. Buka **E-Comic IPA** → baca 5 bab → jawab pertanyaan prediksi di setiap bab
4. Lanjut ke **Puzzle Interaktif** → selesaikan 8 puzzle (drag & drop, cocokkan, urutkan)
5. Buka **Feedback & Konsekuensi Ekologis** → baca dampak lingkungan → tulis refleksi
6. Kerjakan **Evaluasi** → lihat skor akhir
7. Pantau perkembangan di **Jejak Belajar** → cek badge yang terkumpul

### Alur Guru
1. **Daftar** sebagai Guru
2. Login → otomatis masuk **Dashboard Guru**
3. **Buat Kelas Baru** → sistem membuat kode join unik otomatis
4. Bagikan kode join ke siswa (contoh: `HJKL-357`)
5. Pantau daftar siswa dan poin mereka di tabel kelas

### Menambah/mengedit soal evaluasi
Buka Supabase Dashboard → **Table Editor** → tabel `evaluation_questions` → tambah baris baru. Kolom yang perlu diisi: `question`, `option_a`–`option_d`, `correct_option` (A/B/C/D), `order_index`.

### Menambah badge
Buka tabel `badges` di Supabase → tambah baris baru dengan `id` (slug), `title`, `description`, `icon_emoji`.

---

## Kredit & Lisensi

Dikembangkan oleh tim LUTUVERSE, Universitas Negeri Malang, 2026.
Konten materi mengacu pada kurikulum IPA SMP Kurikulum Merdeka dan data konservasi lutung jawa (IUCN).

Untuk keperluan LIDM — Divisi Inovasi Pembelajaran Digital Pendidikan.
