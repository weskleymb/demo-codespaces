import promptSync from 'prompt-sync';

// Inicialize o prompt
const prompt = promptSync();

// Entrada
const valor = prompt("Digite: ");

// Saída
console.log(`Bem vindo ${valor}`);
