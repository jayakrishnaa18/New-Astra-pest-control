// Email-client compatible templates for Astra Pest Control

const adminEmailTemplate = (name, email, phone, service, timeframe, message) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #dc2626; padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">🚨 New Quote Request</h1>
              <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px;">Astra Pest Control - Richlands</p>
            </td>
          </tr>
          
          <!-- Alert Box -->
          <tr>
            <td style="padding: 30px;">
              <table width="100%" cellpadding="15" cellspacing="0" style="background-color: #fef2f2; border-left: 4px solid #dc2626; border-radius: 4px;">
                <tr>
                  <td>
                    <p style="margin: 0; color: #991b1b; font-size: 18px; font-weight: bold;">⚡ Action Required</p>
                    <p style="margin: 8px 0 0 0; color: #7f1d1d; font-size: 14px;">A new customer has requested a quote for ${service}. Please respond within 2 hours.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Customer Details -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h2 style="color: #0f172a; font-size: 20px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #dc2626;">Customer Details</h2>
              
              <table width="100%" cellpadding="12" cellspacing="0" style="background-color: #faf8f5; border-radius: 8px;">
                <tr>
                  <td style="border-bottom: 1px solid #e5e7eb; padding: 12px;">
                    <strong style="color: #64748b; font-size: 14px;">👤 Name:</strong>
                    <span style="color: #0f172a; font-size: 15px; font-weight: 600; margin-left: 10px;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="border-bottom: 1px solid #e5e7eb; padding: 12px;">
                    <strong style="color: #64748b; font-size: 14px;">📧 Email:</strong>
                    <a href="mailto:${email}" style="color: #dc2626; font-size: 15px; font-weight: 600; margin-left: 10px; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="border-bottom: 1px solid #e5e7eb; padding: 12px;">
                    <strong style="color: #64748b; font-size: 14px;">📱 Phone:</strong>
                    <a href="tel:${phone}" style="color: #dc2626; font-size: 15px; font-weight: 600; margin-left: 10px; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="border-bottom: 1px solid #e5e7eb; padding: 12px;">
                    <strong style="color: #64748b; font-size: 14px;">🐜 Service:</strong>
                    <span style="color: #0f172a; font-size: 15px; font-weight: 600; margin-left: 10px;">${service}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px;">
                    <strong style="color: #64748b; font-size: 14px;">⏰ Timeframe:</strong>
                    <span style="color: #0f172a; font-size: 15px; font-weight: 600; margin-left: 10px;">${timeframe}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          ${message ? `
          <!-- Message -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <h2 style="color: #0f172a; font-size: 20px; margin: 0 0 15px 0;">Additional Message</h2>
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
                <p style="color: #475569; font-size: 15px; line-height: 1.6; margin: 0;">${message}</p>
              </div>
            </td>
          </tr>
          ` : ''}
          
          <!-- CTA Button -->
          <tr>
            <td style="padding: 0 30px 40px 30px; text-align: center;">
              <a href="tel:${phone}" style="display: inline-block; background-color: #dc2626; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">📞 Call Customer Now</a>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 30px; text-align: center;">
              <p style="color: #ffffff; font-size: 18px; font-weight: bold; margin: 0 0 10px 0;">Astra Pest Control</p>
              <p style="color: #94a3b8; font-size: 14px; margin: 0 0 15px 0;">Richlands & Surrounding Suburbs</p>
              <p style="color: #94a3b8; font-size: 13px; margin: 0;">
                <a href="tel:0732455126" style="color: #dc2626; text-decoration: none;">(07) 3245 5126</a> | 
                <a href="mailto:info@astrapestcontrol.com.au" style="color: #dc2626; text-decoration: none;">info@astrapestcontrol.com.au</a>
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const customerEmailTemplate = (name, service, timeframe) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #dc2626; padding: 50px 30px; text-align: center;">
              <div style="width: 80px; height: 80px; background-color: #ffffff; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 40px;">✅</div>
              <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: bold;">Quote Request Received!</h1>
              <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px;">We'll contact you within 24 hours</p>
            </td>
          </tr>
          
          <!-- Success Badge -->
          <tr>
            <td style="padding: 30px; text-align: center;">
              <span style="display: inline-block; background-color: #dcfce7; color: #166534; padding: 10px 20px; border-radius: 20px; font-weight: 600; font-size: 14px;">✓ Request Confirmed</span>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 0 30px 30px 30px;">
              <p style="color: #0f172a; font-size: 20px; font-weight: 600; margin: 0 0 20px 0;">Hi ${name},</p>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.7; margin: 0 0 30px 0;">
                Thank you for choosing Astra Pest Control! We've received your quote request and our team is reviewing it now. 
                We'll contact you shortly to discuss your pest control needs and provide a free, no-obligation quote.
              </p>
              
              <!-- Request Summary -->
              <table width="100%" cellpadding="20" cellspacing="0" style="background-color: #faf8f5; border-radius: 8px; border: 2px solid #e5e7eb; margin-bottom: 30px;">
                <tr>
                  <td>
                    <h3 style="color: #0f172a; font-size: 18px; margin: 0 0 15px 0;">📋 Your Request Summary</h3>
                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td style="color: #64748b; font-size: 14px; font-weight: 600;">Service:</td>
                        <td style="color: #0f172a; font-size: 15px; font-weight: 600; text-align: right;">${service}</td>
                      </tr>
                      <tr>
                        <td style="color: #64748b; font-size: 14px; font-weight: 600;">Timeframe:</td>
                        <td style="color: #0f172a; font-size: 15px; font-weight: 600; text-align: right;">${timeframe}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Why Choose Us -->
              <h3 style="color: #0f172a; font-size: 20px; margin: 0 0 20px 0;">Why Choose Astra Pest Control?</h3>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                <tr>
                  <td width="40" valign="top">
                    <div style="width: 36px; height: 36px; background-color: #fef2f2; border-radius: 6px; text-align: center; line-height: 36px; font-size: 20px;">🏆</div>
                  </td>
                  <td valign="top">
                    <p style="margin: 0; color: #0f172a; font-size: 15px; font-weight: 600;">15+ Years Experience</p>
                    <p style="margin: 5px 0 0 0; color: #64748b; font-size: 14px;">Trusted pest control experts serving Richlands since 2008</p>
                  </td>
                </tr>
              </table>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                <tr>
                  <td width="40" valign="top">
                    <div style="width: 36px; height: 36px; background-color: #fef2f2; border-radius: 6px; text-align: center; line-height: 36px; font-size: 20px;">✅</div>
                  </td>
                  <td valign="top">
                    <p style="margin: 0; color: #0f172a; font-size: 15px; font-weight: 600;">100% Satisfaction Guarantee</p>
                    <p style="margin: 5px 0 0 0; color: #64748b; font-size: 14px;">We stand behind our work with a complete satisfaction guarantee</p>
                  </td>
                </tr>
              </table>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                <tr>
                  <td width="40" valign="top">
                    <div style="width: 36px; height: 36px; background-color: #fef2f2; border-radius: 6px; text-align: center; line-height: 36px; font-size: 20px;">🔒</div>
                  </td>
                  <td valign="top">
                    <p style="margin: 0; color: #0f172a; font-size: 15px; font-weight: 600;">Licensed & Insured</p>
                    <p style="margin: 5px 0 0 0; color: #64748b; font-size: 14px;">Fully licensed technicians with comprehensive insurance coverage</p>
                  </td>
                </tr>
              </table>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td width="40" valign="top">
                    <div style="width: 36px; height: 36px; background-color: #fef2f2; border-radius: 6px; text-align: center; line-height: 36px; font-size: 20px;">⚡</div>
                  </td>
                  <td valign="top">
                    <p style="margin: 0; color: #0f172a; font-size: 15px; font-weight: 600;">Same-Day Service Available</p>
                    <p style="margin: 5px 0 0 0; color: #64748b; font-size: 14px;">Fast response times for urgent pest control needs</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- CTA Section -->
          <tr>
            <td style="padding: 0 30px 40px 30px;">
              <table width="100%" cellpadding="25" cellspacing="0" style="background: linear-gradient(135deg, #fef2f2, #fee2e2); border-radius: 8px;">
                <tr>
                  <td style="text-align: center;">
                    <h3 style="color: #991b1b; font-size: 20px; margin: 0 0 10px 0;">Need Immediate Assistance?</h3>
                    <p style="color: #7f1d1d; font-size: 14px; margin: 0 0 20px 0;">Our team is ready to help you right now</p>
                    <a href="tel:0732455126" style="display: inline-block; background-color: #dc2626; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; margin: 5px;">📞 Call (07) 3245 5126</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Disclaimer -->
          <tr>
            <td style="padding: 0 30px 30px 30px; text-align: center;">
              <p style="color: #64748b; font-size: 12px; margin: 0;">This is an automated confirmation. Please do not reply to this email.</p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #0f172a; padding: 30px; text-align: center;">
              <p style="color: #ffffff; font-size: 20px; font-weight: bold; margin: 0 0 10px 0;">Astra Pest Control</p>
              <p style="color: #cbd5e1; font-size: 14px; margin: 0 0 15px 0;">Richlands' Trusted Pest & Termite Control Experts</p>
              <p style="color: #94a3b8; font-size: 14px; margin: 5px 0;">
                <a href="tel:0732455126" style="color: #dc2626; text-decoration: none;">(07) 3245 5126</a>
              </p>
              <p style="color: #94a3b8; font-size: 14px; margin: 5px 0;">
                <a href="mailto:info@astrapestcontrol.com.au" style="color: #dc2626; text-decoration: none;">info@astrapestcontrol.com.au</a>
              </p>
              <p style="color: #94a3b8; font-size: 13px; margin: 15px 0 0 0;">Serving Richlands & Surrounding Suburbs</p>
              <p style="color: #64748b; font-size: 12px; margin: 15px 0 0 0;">© 2025 Astra Pest Control. All rights reserved.</p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

module.exports = {
  adminEmailTemplate,
  customerEmailTemplate
};
