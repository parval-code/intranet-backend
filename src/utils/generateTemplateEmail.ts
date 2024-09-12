import * as fs from 'fs';

const CreateTemplateEmail = async () => {
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
    <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">Confirmación de registro en Academia Parval Santo Domingo</div>
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
                        <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                            <tbody>
                              <tr>
                                <td style="width:600px;">
                                  <img height="auto" src="https://marketing.parval.com.do/wp-content/uploads/2023/03/white-banner-parval.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="600">
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
                                        <b>Estimado Cliente,
                                          <br>
                                          <br>
                                        </b>
                                        <div class="jsd-message-content">
                                               <p>Le confirmamos la recepción de su solicitud y estaremos gestionándola. Nos estaremos poniendo en contacto con usted a la brevedad.</p>
                                                  <br>
                                                <p>Saludos Cordiales,</p>
                                                <br>
                                                <p>Negocios PARVAL</p>
                                        </div>
                                        <br>
                                        <em><p>En caso de tener sugerencias, quejas o comentarios, puede escribir al siguiente correo: <a href="mailto:carga@parval.com.do" style="color: #333333; font-style: italic;">carga@parval.com.do</a>.</p></em>
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
                                <td align="center" valign="top" style="padding-top:9px;padding-right:9px;padding-left:9px;mso-line-height-rule:exactly;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">
                                        <tbody>
                                            <tr>
                                                <td align="center" valign="top" style="mso-line-height-rule:exactly;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%"><!--[if mso]><table align="center" border="0" cellspacing="0" cellpadding="0"><tr><![endif]--><!--[if mso]><td align="center" valign="top"><![endif]--><table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnFollowStacked" style="display:inline;border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%"><tbody><tr><td align="center" valign="top" class="mcnFollowIconContent" style="padding-right:10px;padding-bottom:9px;mso-line-height-rule:exactly;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">

                                                    <a href="https://www.facebook.com/ParvalRD/" target="_blank" style="mso-line-height-rule:exactly;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-facebook-96.png" alt="Facebook" class="mcnFollowBlockIcon" width="40" style="width:30px;max-width:48px;display:block;border:0;height:auto;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td></tr></tbody></table><!--[if mso]><![endif]--><!--[if mso]><td align="center" valign="top"><![endif]--><table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnFollowStacked" style="display:inline;border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%"><tbody><tr><td align="center" valign="top" class="mcnFollowIconContent" style="padding-right:10px;padding-bottom:9px;mso-line-height-rule:exactly;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">

                                                        <a href="https://twitter.com/Parval_RD" target="_blank" style="mso-line-height-rule:exactly;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-twitter-96.png" alt="Twitter" class="mcnFollowBlockIcon" width="40" style="width:30px;max-width:48px;display:block;border:0;height:auto;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td></tr></tbody></table><!--[if mso]><![endif]--><!--[if mso]><td align="center" valign="top"><![endif]--><table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnFollowStacked" style="display:inline;border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%"><tbody><tr><td align="center" valign="top" class="mcnFollowIconContent" style="padding-right:10px;padding-bottom:9px;mso-line-height-rule:exactly;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">

                                                            <a href="https://www.instagram.com/Parvalrd/" target="_blank" style="mso-line-height-rule:exactly;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-instagram-96.png" alt="Instagram" class="mcnFollowBlockIcon" width="40" style="width:30px;max-width:48px;display:block;border:0;height:auto;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td></tr></tbody></table><!--[if mso]><![endif]--><!--[if mso]><td align="center" valign="top"><![endif]--><table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnFollowStacked" style="display:inline;border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%"><tbody><tr><td align="center" valign="top" class="mcnFollowIconContent" style="padding-right:10px;padding-bottom:9px;mso-line-height-rule:exactly;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">

                                                                <a href="https://www.linkedin.com/company/parval-puesto-de-bolsa/" target="_blank" style="mso-line-height-rule:exactly;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-linkedin-96.png" alt="LinkedIn" class="mcnFollowBlockIcon" width="40" style="width:30px;display:block;border:0;height:auto;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td></tr></tbody></table><!--[if mso]><![endif]--><!--[if mso]><td align="center" valign="top"><![endif]--><table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnFollowStacked" style="display:inline;border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%"><tbody><tr><td align="center" valign="top" class="mcnFollowIconContent" style="padding-right:0;padding-bottom:9px;mso-line-height-rule:exactly;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%">

                                                                    <a href="https://www.youtube.com/user/parvalpuestodebolsa" target="_blank" style="mso-line-height-rule:exactly;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/dark-youtube-96.png" alt="YouTube" class="mcnFollowBlockIcon" width="40" style="width:30px;display:block;border:0;height:auto;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic"></a>

                                                            </td></tr></tbody></table><!--[if mso]><![endif]--><!--[if mso]><![endif]--></td></tr></tbody></table></td>
                                                      <p>
                                                      <a class="jsd-servicedesk-link">Con tecnología de Parval Puesto de Bolsa </a>
                                                      </p>
                                </tbody>  </td>
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
      './confirmation-email.html',
      {
        flags: 'w',
      },
    );

    writeVisist.write(template);
    return template;
  }
};

export default CreateTemplateEmail;
