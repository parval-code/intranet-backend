import * as fs from 'fs';

interface IAdminRenovationGroupTemplate {
  title: string;
  expirationDate: string;
  typeOption: string;
  day: string;
  typeMoney: string;
  money: string;
  rend: string | number;
  description: string;
  products: any[];
}

export const AdminRenovationGroupTemplate = async (props: IAdminRenovationGroupTemplate) => {
    const template = `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title></title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
      p {
        display: block;
        margin: 13px 0;
      }
    </style>
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%;
        }

        .mj-column-per-75 {
          width: 75% !important;
          max-width: 75%;
        }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
      .moz-text-html .mj-column-per-75 {
        width: 75% !important;
        max-width: 75%;
      }
    </style>
    <style type="text/css">
      @media only screen and (max-width:480px) {
        table.mj-full-width-mobile {
          width: 100% !important;
        }
        td.mj-full-width-mobile {
          width: auto !important;
        }
      }
    </style>
    <style type="text/css"></style>
  </head>
  <body style="word-spacing: normal; background-color: rgb(245, 245, 245); font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen-Sans, Ubuntu, Cantarell, sans-serif;">
    <div style="background-color:#F5F5F5;">
      <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                    <tbody>
                      <tr>
                        <td style="font-size:0px;word-break:break-word;">
                          <div style="height:50px;line-height:50px;">&hairsp;</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                    <tbody>
                      <tr>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:0;padding-top:20px;text-align:center;">
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                    <tbody>
                      <tr>
                        <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0px;padding-bottom:10px;word-break:break-word;">
                          <div style="font-family:sans-serif;font-size:22px;font-weight:600;line-height:28px;text-align:center;color:#000000;">Notificaciones Parval</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:0;padding-bottom:10px;text-align:center;">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="background:white;background-color:white;margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:0 50px 0 50px;text-align:center;">
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                    <tbody>
                      <tr>
                        <td style="background-color:#f8f8f8;border-radius:3px;vertical-align:top;padding:10px 0 10px 0;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tbody>
                              <tr>
                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                  <div style="font-family:sans-serif;font-size:15px;line-height:20px;text-align:left;color:#727272;">
                                    <style>
                                      .message p {
                                        margin: 0;
                                      }
                                    </style>
                                    <div class="message">
                                      <p>
                                        <b>Equipo de Negocios,
                                          <br>
                                          <br>
                                        </b>
                                        <div class="jsd-message-content">
                                               <p>Detalle de la operacion enviada por el cliente:</p>
                                                  <br />
                                                    <table class="center" border="3" cellspacing="1" cellpadding="1">
                                                        <tr>
                                                          <th align="center" colspan="3">Posición del cliente</th>
                                                        </tr>
                                                        <tr>
                                                          <th align="center" colspan="3">${props.title}</th>
                                                        </tr>
                                                        <tr>
                                                          <td align="center" colspan="3">
                                                                <strong>Nueva Posición </strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                          <th align="center" colspan="3">${props.title}</th>
                                                        </tr>
                                                        <tr>
                                                          <th> Fecha Valor </th>
                                                          <th> Tipo de Operacion </th>
                                                          <th> Rendimiento </th>
                                                        </tr>
                                                        <tr>
                                                          <td class="center">${props.expirationDate}</td>
                                                          <td class="center">${props.typeOption}</td>
                                                          <td class="center">${props.rend}%</td>
                                                      </tr>
                                                       <tr>
                                                            <th> Moneda </th>
                                                            <th> Monto Renovacion </th>
                                                            <th> Dias </th>
                                                        </tr>
                                                        <tr>
                                                            <td class="center">${props.typeMoney}</td>
                                                            <td class="center">${props.money}</td>
                                                            <td class="center">${props.day}</td>
                                                        </tr>
                                                    </table>
                                                <br>

                                        </div>

                                        <div class="jsd-message-content">
                                               <p>Productos Agrupados</p>
                                                  <br />
                                                    <table class="center" border="3" cellspacing="1" cellpadding="1">
                                                        <tr>
                                                          <th align="center" colspan="3">Posición del cliente</th>
                                                        </tr>
                                                        <tr>
                                                          <th align="center" colspan="3">${props.title}</th>
                                                        </tr>
                                                        <tr>
                                                          <td align="center" colspan="3">
                                                                <strong>Nueva Posición </strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                          <th align="center" colspan="3">${props.title}</th>
                                                        </tr>
                                                        <tr>
                                                          <th> Fecha Valor </th>
                                                          <th> Tipo de Operacion </th>
                                                          <th> Rendimiento </th>
                                                        </tr>
                                                        <tr>
                                                          <td class="center">${props.expirationDate}</td>
                                                          <td class="center">${props.typeOption}</td>
                                                          <td class="center">${props.rend}%</td>
                                                      </tr>
                                                       <tr>
                                                            <th> Moneda </th>
                                                            <th> Monto Renovacion </th>
                                                            <th> Dias </th>
                                                        </tr>
                                                        <tr>
                                                            <td class="center">${props.typeMoney}</td>
                                                            <td class="center">${props.money}</td>
                                                            <td class="center">${props.day}</td>
                                                        </tr>
                                                    </table>
                                                <br>

                                        </div>
                                        <br>
                                        <br>
                                        <br>
                                      </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:10px 50px 10px 50px;text-align:left;">
                <div class="mj-column-per-100 mj-outlook-group-fix author-name" style="font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: unset;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:0;padding-top:10px;text-align:center;">
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                    <tbody>
                      <tr>
                        <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                            <tbody>
                              <tr>
                                <tbody>
                                <br>
                                <br>
                                <br>
                                </tbody>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p></p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="background:#FFFFFF;background-color:#FFFFFF;margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#FFFFFF;background-color:#FFFFFF;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
                <div class="mj-column-per-75 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                    </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:15px 0 0 0;text-align:center;">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:0;text-align:center;">
                <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
     </div>
    </body>
    <footer>
    </footer>
</html>
`;

  if (template) {
    const writeVisist = fs.createWriteStream(
            './template-admin.html',
      {
        flags: 'w',
      },
        );

    writeVisist.write(template);
    return template;
  }
};
