const yazi = document.querySelector(".yazi");

const karakter = document.querySelector(".karakter");

yazi.oninput = function(){
    const max = 30 ;
    this.value = this.value.substr(0,max);
    var kalan = max-this.value.length;

    karakter.innerHTML=kalan;
    if (kalan==0){
        alert(max+" karakter sınırı aşıldı")
    }
}