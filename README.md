# Drama Pak Galuh - Soundboard

Sebuah aplikasi soundboard interaktif yang memungkinkan Anda memutar berbagai suara dengan antarmuka yang modern dan responsif.

## 🎯 Fitur

- ✨ **Antarmuka Modern** - Desain gradient yang menarik dengan animasi smooth
- 🔊 **Kontrol Volume** - Pengaturan volume dengan slider untuk semua suara
- ⏹️ **Stop All** - Tombol untuk menghentikan semua suara sekaligus
- ⏱️ **Durasi & Progress** - Tampilan durasi dan progress bar untuk suara yang sedang diputar
- 📱 **Responsif** - Bekerja sempurna di desktop, tablet, dan mobile
- 🎹 **Tombol Interaktif** - Tampilan visual saat suara sedang diputar
- ⌨️ **Keyboard Shortcut** - Tekan spacebar untuk stop all sounds

## 📁 Struktur Folder

```
Drama-Pak-Galuh/
├── index.html
├── styles.css
├── script.js
├── README.md
└── sounds/
    ├── sound1.mp3
    ├── sound2.mp3
    ├── sound3.mp3
    └── ... (file audio lainnya)
```

## 🔧 Cara Menggunakan

### 1. Setup Awal
1. Pastikan semua file HTML, CSS, dan JS sudah di folder yang sama
2. Buat folder bernama `sounds` di direktori yang sama
3. Masukkan file audio Anda ke dalam folder `sounds/`

### 2. Mengustomisasi Suara

Buka file `script.js` dan cari bagian **SOUNDBOARD CONFIGURATION** di bagian atas file:

```javascript
const soundList = [
    { name: "Suara 1", file: "sound1.mp3" },
    { name: "Suara 2", file: "sound2.mp3" },
    { name: "Suara 3", file: "sound3.mp3" },
    { name: "Suara 4", file: "sound4.mp3" },
    { name: "Suara 5", file: "sound5.mp3" },
    { name: "Suara 6", file: "sound6.mp3" },
    { name: "Suara 7", file: "sound7.mp3" },
    { name: "Suara 8", file: "sound8.mp3" },
];
```

#### Menambah Suara Baru
Tambahkan baris baru dengan format:
```javascript
{ name: "Nama Suara", file: "nama_file.mp3" }
```

**Contoh:**
```javascript
const soundList = [
    { name: "Tawa Keras", file: "laugh.mp3" },
    { name: "Tepuk Tangan", file: "applause.mp3" },
    { name: "Ledakan", file: "explosion.mp3" },
    { name: "Dentuman Gitar", file: "guitar.mp3" },
];
```

#### Mengubah Nama Suara
Ubah bagian `name` sesuai yang diinginkan:
```javascript
{ name: "Nama Baru", file: "sound1.mp3" }
```

#### Mengubah File Suara
Ubah bagian `file` dengan nama file audio yang ada di folder `sounds/`:
```javascript
{ name: "Suara 1", file: "nama_file_baru.mp3" }
```

### 3. Format File Audio yang Didukung

- `.mp3` - MP3 Audio
- `.wav` - WAV Audio
- `.ogg` - OGG Vorbis Audio
- `.m4a` - MPEG-4 Audio

## 🎮 Cara Menggunakan Soundboard

### Memutar Suara
- **Klik tombol suara** - Memutar suara
- **Klik tombol yang sama lagi** - Pause/Resume suara

### Kontrol
- **Stop All** - Menghentikan semua suara yang sedang diputar
- **Volume (🔊)** - Buka/tutup pengaturan volume
- **Slider Volume** - Atur volume dari 0% hingga 100%
- **Spacebar** - Keyboard shortcut untuk Stop All

## 📊 Display Informasi

- **Now Playing** - Menampilkan nama suara yang sedang diputar
- **Time** - Menampilkan waktu saat ini dan durasi total suara
- **Progress Bar** - Visual progress bar untuk suara yang sedang diputar

## 🎨 Kustomisasi Styling

Anda dapat mengubah warna dan styling dengan memodifikasi file `styles.css`:

### Mengubah Warna Utama
Cari dan ubah nilai hex color di `styles.css`:
```css
/* Warna utama (purple gradient) */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Ubah menjadi warna lain, contoh blue-pink */
background: linear-gradient(135deg, #0066ff 0%, #ff0099 100%);
```

### Mengubah Warna Background
```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 📋 Daftar Perintah Keyboard

| Tombol | Fungsi |
|--------|--------|
| Space | Stop All Sounds |
| Click | Play/Pause Sound |

## 🔊 Tips Penggunaan

1. **File Audio Berkualitas** - Gunakan file audio berkualitas tinggi untuk hasil terbaik
2. **Ukuran File** - File yang lebih kecil akan lebih cepat dimuat
3. **Durasi Panjang** - Aplikasi mendukung audio dengan durasi hingga berjam-jam
4. **Volume Default** - Volume default dimulai dari 70%, bisa disesuaikan
5. **Mobile Friendly** - Sangat cocok digunakan di perangkat mobile

## 🐛 Troubleshooting

### Suara Tidak Terputar
- Pastikan file audio ada di folder `sounds/`
- Pastikan nama file di `soundList` sesuai dengan nama file asli
- Cek console browser untuk error message (F12)
- Pastikan format file audio didukung

### File Audio Tidak Ditemukan
- Periksa spelling nama file (case-sensitive di beberapa sistem)
- Pastikan ekstensi file `.mp3` atau format lain sudah benar
- Verifikasi file ada di folder `sounds/`

### Durasi Tidak Tampil
- File audio mungkin belum fully loaded
- Tunggu beberapa detik agar metadata audio terload
- Refresh halaman jika masih tidak muncul

## 📝 Catatan

- Aplikasi ini tidak memerlukan internet untuk berjalan (semua asset local)
- Untuk menjalankan, cukup buka file `index.html` di browser
- Volume akan reset saat halaman di-refresh

## 🚀 Pengembangan Lebih Lanjut

Fitur yang bisa ditambahkan di masa depan:
- Tombol record untuk merekam suara baru
- Export/Import preset suara
- Visualizer audio
- Themes yang berbeda
- Playlist player
- Local storage untuk menyimpan preferences

## 📄 Lisensi

Silakan gunakan bebas untuk keperluan Anda.

---

**Dibuat dengan ❤️ untuk Drama Pak Galuh**
