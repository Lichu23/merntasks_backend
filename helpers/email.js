import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //INformacion del email
  const info = await transport.sendMail({
    from: '"Uptask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "Uptask - Comprueba tu cuenta",
    text: "Comprueba tu cuenta en UPTask",
    html: `<p>Hola: ${nombre}. Comprueba tu cuenta </p>
    <p>Tu cuenta ya está casi disponible, sólo debes confirmarla en el siguiente enlace</p>
    
    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a>
    
    <p>Si no creaste esta cuenta, ignora este mensaje</p>
    `,
  });
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //INformacion del email
  const info = await transport.sendMail({
    from: '"Uptask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "Reestablece tu Password",
    text: "Comprueba tu cuenta en UPTask",
    html: `<p>Hola: ${nombre} has solicitado reestablecer tu password </p>

    <p>Tu cuenta ya está casi disponible, sólo debes confirmarla en el siguiente enlace</p>
    
    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
    
    <p>Si no solicitaste el email,ignora este mensaje</p>
    `,
  });
};
