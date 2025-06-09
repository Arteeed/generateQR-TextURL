const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const genBtn = document.getElementById("genBtn");
const container = document.querySelector(".container");

function generateQR() {
  const qrTextValue = qrText.value.trim();
  const source = (qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrTextValue);
  if (qrTextValue !== "") {
    imgBox.classList.add("show-img");
    const existingDownloadBtn = document.getElementById('downloadBtn');
    if (existingDownloadBtn) {
        existingDownloadBtn.remove();
    }
    const downloadBtn = document.createElement('a');
    downloadBtn.href = source;
    downloadBtn.setAttribute('id', 'downloadBtn');
    downloadBtn.setAttribute('target', '_target');
    downloadBtn.innerHTML = 'Open QR & Download';
    container.insertBefore(downloadBtn, genBtn)
  } else {
    alert("Please input a valid text or URL");
  }
}

genBtn.addEventListener('click', generateQR);

qrText.addEventListener('keydown', function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    generateQR();
  }
});
