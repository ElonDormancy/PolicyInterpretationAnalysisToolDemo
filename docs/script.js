function btnjump() {
    var loadings = document.querySelector("#loading_part")
    var searchs = document.querySelector("#search")
    if (searchs.value == "新能源") {
        loadings.style.visibility = 'visible';
        setTimeout(() => window.location.href = "./Data_index/data_index.html", 10000)
    }
}
