
//atributos:
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
const result = document.getElementById('result');

//função displayResult:
function displayResult(data) {
    result.textContent = JSON.stringify(data, null, 2);
}

//função getAllPosts:
function getAllPosts() {
    fetch(baseUrl)
        .then(res => res.json())
        //exibe os 5 primeiros:
        .then(data => displayResult(data.slice(0, 5)));
}

//função getPostById:
function getPostById() {
    //atributos:
    const id = document.getElementById('postIdInput').value;
    //verifica se o id é válido:
    fetch(`${baseUrl}/${id}`)
        .then(res => {
            //verifica se o id é válido:
            //se não, erro:
            if (!res.ok) throw new Error("Post não encontrado.");
            //se sim, resposta:
            return res.json();
        })
        .then(data => displayResult(data))
        .catch(err => displayResult({ error: err.message }));
}

//função createPost:
function createPost() {
    //atributos:
    const post = {
        title: "Novo Post",
        body: "Conteúdo do novo post.",
        userId: 1
    };
    //cria o post:
    fetch(baseUrl, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then(data => displayResult(data));
}

//função updatePost:
function updatePost() {
    //atributos:
    const post = {
        id: 1,
        title: "Post atualizado",
        body: "Conteúdo atualizado com sucesso.",
        userId: 1
    };
    //atualiza o post:
    fetch(`${baseUrl}/1`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then(data => displayResult(data));
}

//função deletePost:
function deletePost() {
    fetch(`${baseUrl}/1`, {
        method: "DELETE"
    })
        .then(() => displayResult({ message: "Post deletado com sucesso (simulado pela API)." })
    );
}

