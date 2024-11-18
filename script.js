document.addEventListener('DOMContentLoaded', function() {
  // Verifica se o botão com id "agendarButton" está presente
  const agendarButton = document.getElementById('agendarButton');

  if (agendarButton) {
      agendarButton.addEventListener('click', function() {
          const nomeCliente = document.getElementById('cliente').value;
          const dataServico = document.getElementById('data').value;
          const tipoServico = document.getElementById('servico').value;

          // Verifica se os campos estão preenchidos
          if (!nomeCliente || !dataServico || !tipoServico) {
              alert('Por favor, preencha todos os campos!');
              return;
          }

          // Envia a requisição para o servidor
          fetch('http://localhost:3000/agendar', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  cliente: nomeCliente,
                  data: dataServico,
                  servico: tipoServico
              })
          })
          .then(response => response.text())
          .then(data => {
              console.log('Resposta do servidor:', data);
              // Aqui você pode realizar outras ações após a resposta do servidor
          })
          .catch(error => {
              console.error('Erro ao agendar serviço:', error);
          });
      });
  } else {
      console.log('Botão de agendar não encontrado');
  }
});
