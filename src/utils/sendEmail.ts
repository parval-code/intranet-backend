import * as nodemailer from 'nodemailer';

interface MessageForEmailI {
  email: string;
  user?: string;
  pass?: string;
  message?: string;
  subject: string;
  template?: any;
  attachments?: {
    filename: string,
    path: string,
    contentType: 'application/xml',
  }[];
}

export const sendMessageForEmail = async (infoMessage: MessageForEmailI) =>  {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: 'notificaciones360@parval.com.do',
        pass: 'Y.384359951812az',
      },
    });

    const correoOptions: any = {
      from: infoMessage.user ? infoMessage.user : 'notificaciones360@parval.com.do',
      to: infoMessage.email,
      subject: infoMessage.subject,
      text: infoMessage.message,
      html: infoMessage.template,
      attachments: infoMessage.attachments,
    };

    await transporter.sendMail(correoOptions);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};
