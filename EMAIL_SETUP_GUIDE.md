# EmailJS Setup Guide for Contact Form

## What We've Added:
✅ **EmailJS integration** - Contact form can now send real emails  
✅ **WhatsApp floating button** - Instant chat option (bottom right corner)  
✅ **Loading states** - Better user experience with form submission  
✅ **Error handling** - Graceful failure with helpful messages  

## To Make Email Functionality Work:

### Step 1: Create EmailJS Account (FREE)
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up with your Gmail account (vrincsolutions@gmail.com)
3. Verify your email

### Step 2: Configure EmailJS Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** 
4. Connect your Gmail account (vrincsolutions@gmail.com)
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```
Subject: New VR Training Inquiry from {{from_name}}

You have received a new inquiry from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Interest: {{interest}}

Message:
{{message}}

---
Sent from VR Simulation Training website
```

4. Note down your **Template ID**

### Step 4: Get Public Key
1. Go to **Account** > **General**
2. Copy your **Public Key**

### Step 5: Update Contact.js
Replace these lines in `src/pages/Contact.js`:

```javascript
const serviceID = 'YOUR_SERVICE_ID'; // Replace with your actual Service ID
const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your actual Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual Public Key
```

### Step 6: Enable EmailJS
Uncomment this line in `src/pages/Contact.js`:
```javascript
// await emailjs.send(serviceID, templateID, templateParams, publicKey);
```
And remove the simulation line:
```javascript
// Remove this: await new Promise(resolve => setTimeout(resolve, 1000));
```

## Current Features Working:
- ✅ Form validation
- ✅ WhatsApp button (opens WhatsApp with pre-filled message)
- ✅ Navigation from all booking buttons to contact page
- ✅ Professional styling and animations
- ✅ Loading states and error handling

## Cost: $0 (Completely FREE)
- EmailJS free tier: 200 emails/month
- GitHub Pages hosting: FREE
- All functionality: FREE

## Need Help?
The form currently shows a success message but doesn't send emails until you complete the EmailJS setup above. This takes about 10 minutes to configure. 