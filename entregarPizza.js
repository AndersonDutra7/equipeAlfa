// ================================================
// 1. Variáveis de Estado e Módulo de Entrada/Saída
// ================================================

// Módulo nativo readline:

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Dados do jogo:

let combustivel = 100;
let entregasRealizadas = 0;
let totalEntregas = 5;
let dinheiro = 20;

// Função mostrarStatus:

function mostrarStatus() {
    console.log('\n====================================');
    console.log(`Combustível atual: ${combustivel}L / 100L`);
    console.log(`Progresso: ${entregasRealizadas}/${totalEntregas} entregas`);
    console.log('====================================');
}

// ====================================
// 2. Modularização e Regras de Negócio
// ====================================

// Função entregarPizza()

function entregarPizza() {
    // Sorteia o consumo de combustível entre 10 e 30 litros
    const consumo = Math.floor(Math.random() * (30 - 10 +1 )) + 10;
    
    combustivel -= consumo;
    entregasRealizadas++;
    
    console.log(`\nEntrega feita consumo de: ${consumo}L.`);

    const pagamento = Math.floor(Math.random() * 31) + 20
    dinheiro = dinheiro + pagamento

    console.log(`\n Dinheiro recebido pela entrega: ${pagamento}`)
    console.log(`\n Dinheiro Total: ${dinheiro}`)
}

// Função abastecerMoto():

function abastecerMoto() {
    const preco = 30

     if (dinheiro < preco) {
        console.log('\nDinheiro insuficiente para abastecer!');
        return;
    }

    if (combustivel >= 100) {
        console.log('\nO tanque já está cheio!');
        return;
    }

    dinheiro = dinheiro - preco

    combustivel = Math.min(100, combustivel + 20);
    totalEntregas++;
    
    console.log(`\nVocê pagou ${preco} pelo combustivel`)
    console.log(`\n Dinheiro Total: R$${dinheiro}`)
    console.log('\n+20L Abastecidos, aumentou em +1 entrega.');
}

// =========================================
// 3. Menu Interativo e Condições de Término
// =========================================

// // Validação de Derrota ou vitória:

function checarFimDeJogo() {
    if (combustivel <= 0) {
        console.log('\nPane seca! Seu combustível acabou. Fim de jogo!');
        rl.close();
        return true;
    }
    
    if (entregasRealizadas >= totalEntregas) {
        console.log('\nParabéns! Você cumpriu todas as entregas com sucesso!');
        rl.close();
        return true;
    }

    return false;
}

// Loop principal do menu interativo

function exibirMenu() {
    mostrarStatus();

    console.log('Escolha uma opção:');
    console.log('1 - Realizar Entrega');
    console.log('2 - Abastecer Moto');
    console.log('3 - Sair');

    rl.question('\nOpção desejada: ', (opcao) => {
        switch (opcao.trim()) {
            case '1':
                entregarPizza();
                if (!checarFimDeJogo()) {
                    exibirMenu();
                }
                break;
            case '2':
                abastecerMoto();
                if (!checarFimDeJogo()) {
                    exibirMenu();
                }
                break;
            case '3':
                console.log('\nSaindo do jogo... Até a próxima!');
                rl.close();
                break;
            default:
                console.log('\nOpção inválida! Tente novamente.');
                exibirMenu();
                break;
        }
    });
}

// Inicia o título do jogo

console.log('--- BEM-VINDO AO ENTREGADOR DE PIZZA ---');
exibirMenu();