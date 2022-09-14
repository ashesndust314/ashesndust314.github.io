function lastUpdate(){
    var lastUpdated = document.lastModified;
    document.getElementById("date").innerHTML = lastUpdated;
}

lastUpdate();