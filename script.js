const button = document.getElementById('startButton');

// İlk olayı tanımla
button.addEventListener('click', () => {
    hideFirstPage();
    showCounter();
});
// Ana girişi gizleme
function hideFirstPage(){
    document.getElementById("firstPart").style.display = "none";
}
//sayacı görüntüleme
function showCounter(){
    document.getElementById('counterDiv').style.display = "block";
    document.getElementById('counterSpan').innerHTML = counter;  
}
//sayacı artırma
let counter = 0;
function counterAdder(){
    counter = counter + 1; // Sayaç artırılır
    document.getElementById('counterSpan').textContent = counter; // Sayacı göster
}
