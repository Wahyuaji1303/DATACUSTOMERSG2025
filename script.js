// Ganti halaman dari basa-basi ke ajakan move ke WA
document.getElementById('nextBtn').addEventListener('click', ()=>{
  document.getElementById('page1').classList.remove('active');
  document.getElementById('page2').classList.add('active');
});
