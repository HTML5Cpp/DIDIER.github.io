document.getElementById("btnCV").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "../MEDIA/CV_ODSZ_Espanol.pdf";
    link.download = "CV_ODSZ_Espanol.pdf";
    link.click();
});