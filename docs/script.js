function btnjump() {
    var loadings = document.querySelector("#loading_part")
    loadings.style.visibility = 'visible';
    setTimeout(() => window.location.href = "./Data_index/data_index.html", 10000)
}