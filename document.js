document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('click', () => {
        const name = area.getAttribute('data-name');
        const definition = area.getAttribute('data-definition');
        alert(`${name}: ${definition}`); // Exibe um alerta com informações
    });
});
