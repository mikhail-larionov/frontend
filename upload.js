document.getElementById("upload_btn")
    .addEventListener('click', async () => {
        const file_input = document.querySelector('input[type="file"]');
        const heading_input = document.querySelector('#headings');
        const data = new FormData();
        data.append('file', file_input.files[0])
        data.append('heading', heading_input.value)
        const server_resp = await fetch('http://host.docker.internal:9090/upload', {
            method: 'POST',
            body: data
        }).then(response => response.json())
            .then(data => {
                console.log(data)

            })
            .catch(error => {
                console.error(error)

            });
    })





