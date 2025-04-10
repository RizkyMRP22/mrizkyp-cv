export function branchCheck() {
    if (typeof __GIT_BRANCH__ !== 'undefined') {
        const branch = __GIT_BRANCH__.toLowerCase();

        if (branch === 'develop' || branch === 'dev') {
            const tagEl = document.createElement('div');
            tagEl.textContent = 'Development Mode';
            tagEl.className = 'fixed top-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded shadow z-50';
            document.body.appendChild(tagEl);
        }
    }
}