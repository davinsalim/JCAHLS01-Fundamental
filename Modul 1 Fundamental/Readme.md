# Introduce Git and Github 
## Git 
Merupakan bagian dari SCM (Source Code Management) yang ada pada local storage /pc 

## Github 
Management program secara online. Sehingga, program/code itu bisa kita share secara umum/open-source. 

### Bagian pada Git 
1. Modified
   * Lokasi git untuk merecord perubahan yang dilakukan pada file didalam project
   * Record perubahan, record penambahan file dan record pengurangan file 
   * Source Control: Initialize Repository (untuk merecord perubahan)
2. Staged 
   * Staged berguna untuk mengumpulkan setiap perubahan yang akan disimpan. Bagian dari git untuk menyiapkan file apa saja yang akan kita simpan kedalam git. 
3. Commited
   * Bagian dari git untuk menyimpan perubahan pada file project kita. 

## Konfigurasi Git 
>Menghubungkan git dengan Github 
- Konfigurasi username : git config --global user.name "username_github" 
- Konfigurasi email : git config -- global user.email "email@github"


>Menyiapkan project menggunakan git
1. Inisialisasi git / mengaktifkan git pada project
   - git **init** (u: untracked) (changes = modified)
2. Melihat status git pada project
   - git status: untuk cek yg untracked yg mana aja. Dilakukan ketika
3. Memindahkan ke staged session 
   - git add nama_file : jika file spesifik 
   - - git add . : jika semua file 
4. Menyimpan perubahan di commited session 
   - git commit -m "pesan mengenai perubahan yang dilakukan"
   - git log untuk melihat commit apa saja yang pernah dilakukan
5. Melihat history commit menggunakan 
   - git log 