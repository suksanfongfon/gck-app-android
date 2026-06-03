// ============================================================
//  ตั้งค่าลิงก์ตรงนี้ — แก้ 2 บรรทัดด้านล่างให้เป็นลิงก์จริงของคุณ
// ============================================================
const CONFIG = {
  // ลิงก์เข้าร่วมกลุ่มทดสอบ (Google Group)
  // ตัวอย่าง: "https://groups.google.com/g/gck-testers"
  googleGroupUrl: "https://groups.google.com/g/gckaplication",

  // ลิงก์ทดสอบบน Google Play (Opt-in / Become a tester)
  // ตัวอย่าง: "https://play.google.com/apps/testing/com.gck.app"
  playTestingUrl: "https://play.google.com/apps/testing/REPLACE.WITH.YOUR.PACKAGE",
};
// ============================================================

(function () {
  // ใส่ลิงก์ Google Group ลงในทุกปุ่มที่เกี่ยวข้อง
  document.querySelectorAll("#btn-group, #btn-group-2").forEach(function (el) {
    el.setAttribute("href", CONFIG.googleGroupUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // ใส่ลิงก์ Google Play testing ลงในทุกปุ่มที่เกี่ยวข้อง
  document.querySelectorAll("#btn-play, #btn-play-2").forEach(function (el) {
    el.setAttribute("href", CONFIG.playTestingUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // ปีปัจจุบันใน footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
