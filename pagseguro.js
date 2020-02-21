const Pagseguro = require("pagseguro-nodejs");

const pag = new Pagseguro({
  email: "",
  token: "",
  mode:
    process.env.NODE_ENV === "development"
      ? Pagseguro.MODE_SANDBOX
      : Pagseguro.MODE_PAYMENT
});

pag.currency("BRL");
pag.reference("FSROCHA");

module.exports = pag;
