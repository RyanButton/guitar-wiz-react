const dropdownContainers = document.querySelectorAll(".dropdown-items-container");
    //const dropdownButtons = document.querySelectorAll(".dropdown-button");

    dropdownContainers.forEach(dropdownContainer => {
        dropdownContainer.children[0].addEventListener("click", () => {
            //dropdownButton.classList.toggle('active');

            for(i = 0; i < dropdownContainer.children.length; i++ ) {
                console.log(dropdownContainer.children[i])
            }

            const dropdownContent = dropdownContainer.children[1];
            if(dropdownContent.style.display === "none") {
                dropdownContent.style.display = "block";
            } else {
                dropdownContent.style.display = "none";
            }
        })
    })