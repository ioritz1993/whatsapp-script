async function sendScript(scriptText) {
    const lines = scriptText.split(/\s+/).filter(line => line.trim());

    const textarea = document.querySelector('div[contenteditable="true"]');
    if (!textarea) throw new Error("No hay una conversación abierta");

    for (const line of lines) {
        console.log(line);

        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', { bubbles: true }));

        const sendButton = document.querySelector('[data-testid="send"]') || document.querySelector('[data-icon="send"]');
        if (sendButton) sendButton.click();

        if (line !== lines[lines.length - 1]) {
            await new Promise(resolve => setTimeout(resolve, 250));
        }
    }

    return lines.length;
}

setInterval(() => {
    sendScript(`👍`);
}, 100);