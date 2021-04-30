function toggleElement(elementID) {
    const element = document.getElementById(elementID)

    if(element!=null) {

        if (element.style.display === "none") {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    }
}