document.getElementById('memeForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const entries = Array.from(formData.entries());

  // Boş alan kontrolü
  const missingFields = entries.some(([_, value]) => !value.trim());

  if (missingFields) {
    alert("Please fill in all required fields.");
    return;
  }

  // Cevapları göster (test/deneme amaçlı)
  let result = "Form submitted:\n";
  entries.forEach(([name, value]) => {
    result += `- ${name}: ${value}\n`;
  });

  alert(result);
});

//şarkı
let isPlaying = false;

  function openMusicPlayer() {
    const audio = document.getElementById("backgroundMusic");
    const button = document.getElementById("musicButton");

    if (!isPlaying) {
      audio.play();
      button.innerText = "⏸️ Şarkıyı Durdur";
      button.style.backgroundColor = "#1111"; // kırmızımsı
      button.style.width = "140px"
    } else {
      audio.pause();
      audio.currentTime = 0;
      button.innerText = "🎵 Şarkıyı Aç";
      button.style.backgroundColor = "#ffff"
      button.style.width = "110px"
    }

    isPlaying = !isPlaying;
  }