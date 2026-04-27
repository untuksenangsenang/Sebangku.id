# 🎓 Sebangku.id – Company Profile & Learning Platform

Sebangku.id adalah platform edukasi berbasis permainan (board game learning) yang membantu meningkatkan pengalaman belajar siswa menjadi lebih interaktif, menyenangkan, dan bermakna.

Project ini merupakan **company profile + sistem dinamis** yang terintegrasi dengan backend menggunakan Supabase.

---

## 🚀 Tech Stack

* ⚛️ Frontend: Next.js (App Router)
* 🎨 Styling: Tailwind CSS
* 🔥 Backend: Next.js API Route
* 🗄️ Database & Storage: Supabase
* 🧠 State: React Hooks
* 🖼️ Image Handling: Next/Image + Supabase Storage

---

## 📁 Struktur Project

```
src/
 ├── app/
 │    ├── api/
 │    │    ├── contact/
 │    │    │     └── route.ts
 │    │    ├── partners/
 │    │    │     └── route.ts
 │    │
 │    ├── components/
 │    │    ├── ContactSection.tsx
 │    │    ├── TrustSection.tsx
 │    │    ├── HeroSection.tsx
 │    │    └── ...
 │    │
 │    ├── page.tsx
 │
 ├── lib/
 │    └── supabase.ts
 │
 ├── public/
 │
 └── styles/
```

---

## ⚙️ Instalasi & Setup

### 1. Clone Repository

```bash
git clone https://github.com/username/sebangku-id.git
cd sebangku-id
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Environment Variables

Buat file `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

---

### 4. Jalankan Project

```bash
npm run dev
```

Buka di browser:

```
http://localhost:3000
```

---

## 🗄️ Database (Supabase)

### Table: `partners`

| Column     | Type      | Description    |
| ---------- | --------- | -------------- |
| id         | uuid      | Primary Key    |
| name       | text      | Nama partner   |
| logo       | text      | URL logo       |
| created_at | timestamp | Auto timestamp |

---

### Table: `contacts`

| Column     | Type      | Description    |
| ---------- | --------- | -------------- |
| id         | uuid      | Primary Key    |
| name       | text      | Nama user      |
| email      | text      | Email          |
| message    | text      | Pesan          |
| created_at | timestamp | Auto timestamp |

---

## 🔐 Supabase Policy (WAJIB)

### Partners (Read)

```sql
create policy "Allow public read partners"
on "public"."partners"
for select
to public
using (true);
```

---

### Contact (Insert)

```sql
create policy "Allow insert contact"
on "public"."contacts"
for insert
to public
with check (true);
```

---

## 📡 API Endpoints

### GET Partners

```
GET /api/partners
```

Response:

```json
[
  {
    "id": "...",
    "name": "SD Bopkri",
    "logo": "https://...",
    "created_at": "..."
  }
]
```

---

### POST Contact

```
POST /api/contact
```

Body:

```json
{
  "name": "Rafi",
  "email": "rafi@email.com",
  "message": "Saya tertarik"
}
```

---

## 🖼️ Supabase Storage (Logo Partner)

Disarankan menggunakan Supabase Storage:

1. Buat bucket: `partners`
2. Upload logo
3. Ambil public URL
4. Simpan ke database

---

## ✨ Fitur Utama

* ✅ Dynamic Partner Section (Supabase)
* ✅ Contact Form (API + Database)
* ✅ Responsive Design
* ✅ Optimized Image Handling
* ✅ Clean UI (Company Profile Style)

---

## 🚧 Development Plan

* [ ] Dashboard Admin
* [ ] Upload Partner via UI
* [ ] Testimonial Management
* [ ] Authentication (Admin)
* [ ] Analytics Integration

---

## 🧑‍💻 Author

Developed by:
**Capstone Project Sebangku Gamecafe**

---

## 📄 License

This project is licensed under the MIT License.

---

## 💡 Catatan

Jika terjadi error:

* Pastikan `.env.local` benar
* Restart server setelah perubahan config
* Cek Supabase policy
* Pastikan API route berada di `app/api`

---

🔥 Happy Coding!
