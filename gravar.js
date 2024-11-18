        function gravardados() {
            const nome = document.getElementById('nome').value;
            const login = document.getElementById('login').value;
            const senha = document.getElementById('senha').value;
            const email = document.getElementById('email').value;
            const endereco = document.getElementById('endereco').value;
            const telefone = document.getElementById('telefone').value;

            const cliente = {
                nome: nome,
                login: login,
                senha: senha,
                email: email,
                endereco: endereco,
                telefone: telefone
            };

            localStorage.setItem('cliente', JSON.stringify(cliente));

            alert('Cadastro salvo com sucesso!');
        }

        function carregarDados() {
            const cliente = JSON.parse(localStorage.getItem('cliente'));

            if (cliente) {
                document.getElementById('nome').value = cliente.nome;
                document.getElementById('login').value = cliente.login;
                document.getElementById('senha').value = cliente.senha;
                document.getElementById('email').value = cliente.email;
                document.getElementById('endereco').value = cliente.endereco;
                document.getElementById('telefone').value = cliente.telefone;
            }
        }

        window.onload = carregarDados;
        