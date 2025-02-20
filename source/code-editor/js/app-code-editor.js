var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
    lineNumbers: true, // Mostrar números de línea
    mode: 'xml',
    theme: 'material-darker' // Tema material-darker
});

function copyCode() {
    navigator.clipboard.writeText(editor.getValue()).then(function() {
        alert('¡Código copiado!');
    }, function(err) {
        alert('Error al copiar el código: ', err);
    });
}

function updatePreview() {
    var iframe = document.getElementById('preview');
    var code = editor.getValue();
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(code);
    iframe.contentWindow.document.close();
}

editor.on('change', updatePreview);

// Actualizar la vista previa inicialmente
updatePreview();