window.addEventListener('load', () => {
    this.addEventListener("message", e => {
        let item = e.data;
        document.getElementById('Speed').textContent = e.data.Speed
        if (item.Display) {
            document.getElementById('all').style.display = 'block';
        } else {
            document.getElementById('all').style.display = 'none';
        }
    })
})