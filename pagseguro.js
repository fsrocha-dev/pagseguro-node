const Pagseguro = require("pagseguro-nodejs");

// Seta as variáveis do modo e do token do pagseguro de acordo o ambiente.
const mode =
  process.env.NODE_ENV === "development"
    ? Pagseguro.MODE_SANDBOX
    : Pagseguro.MODE_PAYMENT;

const tokenDev = "";
const tokenProd = "";

const token = process.env.NODE_ENV === "development" ? tokenDev : tokenProd;

// Cria a instância do pagseguro.
const pag = new Pagseguro({
  email: "contato.frankrocha@gmail.com",
  token,
  mode
});

pag.currency("BRL");
pag.reference("FSROCHA");

module.exports = pag;
