function showContent(contentId) {
    // Oculta todos os itens de conteúdo
    var contentItems = document.querySelectorAll('.content-item');
    contentItems.forEach(function(item) {
        item.style.display = 'none';
    });

    // Exibe o item de conteúdo correspondente ao ID passado como parâmetro
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}
