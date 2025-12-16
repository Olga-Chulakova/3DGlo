const smoothScroll = (linkElement) => {
    const blockId = linkElement.getAttribute('href').substring(1);
    const targetBlock = document.getElementById(blockId);
    if (targetBlock) {
        targetBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

export default smoothScroll;