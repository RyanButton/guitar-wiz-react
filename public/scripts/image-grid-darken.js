const pageGridItems = document.querySelectorAll('.page-grid-item-wrapper')

pageGridItems.forEach(pageGridItem => {
    pageGridItem.addEventListener('mouseover', () => {
        pageGridItem.children[0].classList.add('img-darken');
    })


    pageGridItem.addEventListener('mouseout', () => {
        pageGridItem.children[0].classList.remove('img-darken');
    })
})