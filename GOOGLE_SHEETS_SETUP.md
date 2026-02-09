# Google Sheets Integration Setup Guide

This guide will walk you through setting up Google Sheets integration for the contact form submissions.

## Overview

The contact form sends data to a Google Apps Script Web App, which then stores the submissions in a Google Sheet. This approach is:
- ✅ Free (no third-party services needed)
- ✅ Simple to set up
- ✅ Fully customizable
- ✅ Automatically organized in spreadsheet format

---

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Vyra Labs - Contact Form Submissions"
4. In the first row, add these headers:

```
Timestamp | Name | Email | Company | Project Type | Message
```

---

## Step 2: Create the Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any code in the editor
3. Paste the following script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    var rowData = [
      data.timestamp || new Date(),
      data.name || '',
      data.email || '',
      data.company || '',
      data.projectType || '',
      data.message || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Optional: Send email notification
    sendEmailNotification(data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Send email notification when form is submitted
function sendEmailNotification(data) {
  var recipient = 'hello@vyralabs.systems'; // Change to your email
  var subject = '🚀 New Contact Form Submission - ' + data.projectType;
  
  var body = `
New contact form submission received!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 SUBMISSION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name: ${data.name}
📧 Email: ${data.email}
🏢 Company: ${data.company || 'Not provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 PROJECT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 Project Type: ${data.projectType}


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⏰ Submitted: ${new Date().toLocaleString()}

View all submissions: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
  `;
  
  try {
    MailApp.sendEmail(recipient, subject, body);
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}

// Test function - you can run this to test the script
function testDoPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Company',
        projectType: 'SaaS MVP',
        message: 'This is a test submission'
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. Click **Save** (💾 icon) and name your project "Contact Form Handler"

---

## Step 3: Deploy the Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Contact Form API"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Authorize access** when prompted:
   - Click "Review Permissions"
   - Choose your Google account
   - Click "Advanced" → "Go to Contact Form Handler (unsafe)"
   - Click "Allow"
7. **Copy the Web App URL** - it should look like:
   ```
   https://script.google.com/macros/s/ABC123.../exec
   ```

---

## Step 4: Add the URL to Your Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add this line with your Web App URL:

```bash
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec
```

3. Replace `YOUR_SCRIPT_ID_HERE` with your actual script URL

---

## Step 5: Set Up Google Analytics (Optional)

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new property for your website
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)
4. Add it to `.env.local`:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## Step 6: Test the Integration

### Local Testing

1. Start your development server:
```bash
npm run dev
```

2. Navigate to `http://localhost:3000/#contact`
3. Fill out and submit the contact form
4. Check your Google Sheet - you should see a new row with the submission
5. Check your email for the notification (if configured)

### Troubleshooting

**Form submission fails:**
- ✅ Check that `GOOGLE_SCRIPT_URL` in `.env.local` is correct
- ✅ Verify the script is deployed as "Anyone" can access
- ✅ Check browser console for error messages
- ✅ Run the `testDoPost()` function in Apps Script editor

**No email notifications:**
- ✅ Update `recipient` email in the script to your actual email
- ✅ Check spam folder
- ✅ Verify Gmail quota hasn't been exceeded (100 emails/day for free accounts)

**Data not appearing in sheet:**
- ✅ Ensure headers in row 1 match exactly
- ✅ Check Apps Script execution logs: **Executions** tab in Apps Script

---

## Step 7: Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables to your hosting platform:
   - `GOOGLE_SCRIPT_URL` (without `NEXT_PUBLIC_` prefix)
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (with `NEXT_PUBLIC_` prefix)

### Vercel Example:
```bash
vercel env add GOOGLE_SCRIPT_URL
# Paste your URL when prompted

vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID
# Paste your GA ID when prompted
```

2. Redeploy your site

---

## Security Considerations

✅ **The Web App URL is public** - this is normal, but consider:
- Adding rate limiting in the Apps Script (e.g., max submissions per IP)
- Implementing honeypot fields for spam prevention
- Adding CAPTCHA (reCAPTCHA) for additional protection

### Example: Add Rate Limiting

Add this to your Apps Script before `sheet.appendRow()`:

```javascript
// Simple rate limiting by email
var cache = CacheService.getScriptCache();
var cacheKey = 'ratelimit_' + data.email;
var lastSubmission = cache.get(cacheKey);

if (lastSubmission) {
  throw new Error('Please wait before submitting again');
}

// Set 5-minute cooldown
cache.put(cacheKey, 'true', 300);
```

---

## Customization Ideas

### 1. Add Auto-Responder Email

```javascript
function sendAutoResponse(email, name) {
  var subject = 'Thanks for reaching out to Vyra Labs!';
  var body = `
Hi ${name},

Thanks for contacting Vyra Labs! We've received your inquiry and will get back to you within 24 hours.

In the meantime, feel free to:
- Check out our case studies: https://vyralabs.systems
- Follow us on LinkedIn: https://linkedin.com/company/vyralabs

Best regards,
The Vyra Labs Team
  `;
  
  MailApp.sendEmail(email, subject, body);
}

// Call it in doPost():
sendAutoResponse(data.email, data.name);
```

### 2. Integrate with Slack

```javascript
function sendSlackNotification(data) {
  var webhookUrl = 'YOUR_SLACK_WEBHOOK_URL';
  
  var payload = {
    text: `🚀 New lead: ${data.name} (${data.projectType})`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*New Contact Form Submission*\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Project:* ${data.projectType}`
        }
      }
    ]
  };
  
  UrlFetchApp.fetch(webhookUrl, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload)
  });
}
```

---

## Support

If you encounter issues:
1. Check the [Apps Script documentation](https://developers.google.com/apps-script)
2. Review execution logs in Apps Script Editor
3. Test with the `testDoPost()` function
4. Email: hello@vyralabs.systems

---

**Setup Complete! 🎉**

Your contact form is now fully integrated with Google Sheets and ready to capture leads.
