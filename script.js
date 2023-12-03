async function sendScript(scriptText) {
    const textarea = document.querySelector('div[contenteditable="true"]');
    if (!textarea) throw new Error("No hay una conversación abierta");

    textarea.focus();
    document.execCommand('insertText', false, scriptText);
    textarea.dispatchEvent(new Event('change', { bubbles: true }));
    
    setTimeout(() => {
    	const sendButton = document.querySelector('[data-testid="send"]') || document.querySelector('[data-icon="send"]');
        if (sendButton) sendButton.click();
    }, 250);
}

function sendReminder() {
    sendScript(`Hello, 
    this is a test.
    By!`);

    // Programa la próxima ejecución después de 10 minutos
    setTimeout(sendReminder, 1 * 60 * 1000);
}

// Inicia la primera ejecución después de 10 minutos
setTimeout(sendReminder, 1 * 60 * 1000);
