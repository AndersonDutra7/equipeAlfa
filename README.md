Neste repositório, temos como objetivo versionar um jogo que fizemos em node.js em equipe, e expandi-lo para uma "Empresa".
----------------------------------------------------------------------------------------------------------------------------------------------------
Versão: 1.0.0 — Sistema de Dinheiro

Nesta atualização, foi implementado um sistema financeiro no jogo, permitindo que o jogador receba dinheiro pelas entregas de pizza e utilize seus ganhos para abastecer a moto.

Pagamento por entrega: o jogador recebe um valor aleatório entre R$ 20 e R$ 50.

Abastecimento: custa R$ 30 e adiciona até 20 litros de combustível.

Controle financeiro: o saldo é atualizado conforme os ganhos e os gastos do jogador.

Validação de saldo: impede o abastecimento quando o jogador não possui dinheiro suficiente.

O sistema foi integrado às funções entregarPizza() e abastecerMoto(), adicionando uma nova mecânica de gerenciamento de recursos ao jogo.


----------------------------------------------------------------------------------------------------------------------------------------------------

Versão: 1.0.1 — Quebra e Conserto da Moto

Nesta atualização, foi implementado um sistema de quebra e conserto da moto, adicionando um novo desafio ao jogo.

**Quebra da moto:** existe 10% de chance de a moto quebrar durante uma entrega, impedindo o jogador de realizar novas entregas.

**Conserto:** para voltar a realizar entregas, o jogador precisa pagar R$ 20 pelo conserto da moto.

**Validação de dinheiro:** o sistema verifica se o jogador possui dinheiro suficiente antes de realizar o conserto.

**Controle da moto:** enquanto a moto estiver quebrada, não será possível realizar entregas até que ela seja consertada.

O sistema foi integrado às funções `entregarPizza()` e `consertarMoto()`, adicionando uma nova mecânica de imprevistos e gerenciamento de recursos ao jogo.
