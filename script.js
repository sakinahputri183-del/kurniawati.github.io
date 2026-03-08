function searchEnola() {

    let keyword = document.getElementById("searchInput").value;

    if(keyword === ""){
        alert("Silakan masukkan kata yang ingin dicari");
    }else{
        window.open("https://www.google.com/search?q=" + keyword);
    }

}

function clearText(){
    document.getElementById("searchInput").value = "";
}