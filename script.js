async function sendScript(scriptText) {

    const textarea = document.querySelector('div[contenteditable="true"]');
    if (!textarea) throw new Error("No hay una conversación abierta");

        textarea.focus();
        document.execCommand('insertText', false, scriptText);
        textarea.dispatchEvent(new Event('change', { bubbles: true }));

        const sendButton = document.querySelector('[data-testid="send"]') || document.querySelector('[data-icon="send"]');
        if (sendButton) sendButton.click();

}

setInterval(() => {
    sendScript(`Test:
    🥑🍅
    `);
}, 15 * 60 * 1000);
