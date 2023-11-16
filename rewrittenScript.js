function scrollToElement(id) {
    const element = document.getElementById(id);

    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        alert("ID not found");
    }
}

function greet() {
    alert("this is the requested alert!")
}