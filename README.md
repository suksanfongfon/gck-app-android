# GCK Mobile App — เว็บนำเสนอแอป Android & เข้าร่วมทดสอบ

เว็บไซต์ landing page แบบ static (HTML/CSS/JS ล้วน) สำหรับนำเสนอแอป **GCK Mobile App**
พร้อมปุ่มเข้าร่วมทดสอบผ่าน **Google Group** และลิงก์ทดสอบบน **Google Play**

## 📁 โครงสร้างไฟล์

| ไฟล์ | คำอธิบาย |
|------|----------|
| `index.html` | หน้าเว็บหลัก (ภาษาไทย) |
| `styles.css` | สไตล์ทั้งหมด |
| `script.js` | ตั้งค่าลิงก์ + การทำงานเล็กน้อย |
| `.nojekyll` | บอก GitHub Pages ไม่ต้องประมวลผลด้วย Jekyll |

## ✏️ ขั้นตอนที่ต้องแก้ก่อนใช้งานจริง

เปิดไฟล์ [`script.js`](script.js) แล้วแก้ 2 บรรทัดนี้ให้เป็นลิงก์จริง:

```js
const CONFIG = {
  googleGroupUrl: "https://groups.google.com/g/ชื่อกลุ่มของคุณ",
  playTestingUrl: "https://play.google.com/apps/testing/ชื่อแพ็กเกจแอปของคุณ",
};
```

- **googleGroupUrl** — ลิงก์กลุ่ม Google Group ที่ผู้ทดสอบต้องสมัครเข้าก่อน
- **playTestingUrl** — ลิงก์ opt-in ของ Closed Testing บน Google Play Console
  (ดูได้ที่ Play Console → Testing → Closed testing → คัดลอกลิงก์ "Copy link")

> 💡 สำหรับ Closed Testing: Google Play จะอนุญาตเฉพาะอีเมลที่อยู่ในกลุ่มทดสอบเท่านั้น
> ผู้ทดสอบจึงต้องเข้า Google Group ก่อน แล้วจึงเปิดลิงก์ทดสอบบน Play

## 🚀 วิธี deploy ขึ้น GitHub Pages

1. สร้าง repository ใหม่บน GitHub (เช่นชื่อ `gck-application`)
2. push โค้ดขึ้นไป:

   ```bash
   git init
   git add .
   git commit -m "Initial GCK Mobile App landing page"
   git branch -M main
   git remote add origin https://github.com/<ชื่อผู้ใช้>/<ชื่อ-repo>.git
   git push -u origin main
   ```

3. ไปที่ repository → **Settings** → **Pages**
4. ที่ **Source** เลือก **Deploy from a branch** → Branch: `main` → โฟลเดอร์ `/ (root)` → **Save**
5. รอสักครู่ เว็บจะเผยแพร่ที่: `https://<ชื่อผู้ใช้>.github.io/<ชื่อ-repo>/`

## 🔍 ทดสอบบนเครื่องก่อน

เปิดไฟล์ `index.html` ด้วยเบราว์เซอร์ได้เลย หรือรันเซิร์ฟเวอร์ local:

```bash
python3 -m http.server 8000
# แล้วเปิด http://localhost:8000
```
