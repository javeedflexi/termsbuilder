$(document).ready(function() {
    // Initialize event listeners
    $('#generateBtn').on('click', generateTerms);
    $('#copyBtn').on('click', copyToClipboard);

    // Generate the Terms and Conditions document based on form inputs
    function generateTerms() {
        // Get form values
        const companyName = $('#companyName').val().trim();
        const websiteUrl = $('#websiteUrl').val().trim();
        const contactEmail = $('#contactEmail').val().trim();
        const country = $('#country').val().trim();

        // Validate required fields
        if (!companyName || !websiteUrl) {
            alert('Please fill in all required fields (Company Name and Website URL)');
            return;
        }

        // Get selected sections
        const includeUserAccounts = $('#userAccounts').is(':checked');
        const includeIntellectualProperty = $('#intellectualProperty').is(':checked');
        const includeUserContent = $('#userContent').is(':checked');
        const includePayments = $('#payments').is(':checked');
        const includeTermination = $('#termination').is(':checked');
        const includeLiability = $('#liability').is(':checked');
        const includeDisputes = $('#disputes').is(':checked');

        // Generate the document
        let termsContent = generateTermsContent(
            companyName,
            websiteUrl,
            contactEmail,
            country,
            includeUserAccounts,
            includeIntellectualProperty,
            includeUserContent,
            includePayments,
            includeTermination,
            includeLiability,
            includeDisputes
        );

        // Display the generated content
        $('#termsOutput').val(termsContent);
        $('#outputSection').show();
        
        // Scroll to output section
        $('html, body').animate({
            scrollTop: $('#outputSection').offset().top - 50
        }, 500);
    }

    // Copy the generated text to clipboard
    function copyToClipboard() {
        const termsOutput = document.getElementById('termsOutput');
        termsOutput.select();
        document.execCommand('copy');
        
        const copyBtn = $('#copyBtn');
        const originalText = copyBtn.text();
        
        copyBtn.text('Copied!');
        setTimeout(function() {
            copyBtn.text(originalText);
        }, 2000);
    }

    // Generate the Terms and Conditions content
    function generateTermsContent(
        companyName,
        websiteUrl,
        contactEmail,
        country,
        includeUserAccounts,
        includeIntellectualProperty,
        includeUserContent,
        includePayments,
        includeTermination,
        includeLiability,
        includeDisputes
    ) {
        const currentDate = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        // Create the header
        let content = `# TERMS AND CONDITIONS

Last Updated: ${currentDate}

## 1. INTRODUCTION

Welcome to ${companyName} ("Company", "we", "our", "us"). These Terms and Conditions ("Terms", "Terms and Conditions") govern your use of our website located at ${websiteUrl} (the "Service") and any related applications operated by ${companyName}.

By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.

`;

        // Add Agreement to Terms section
        content += `## 2. AGREEMENT TO TERMS

These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and ${companyName}, concerning your access to and use of the ${websiteUrl} website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").

You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms and Conditions. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.

`;

        // Add User Accounts section if selected
        if (includeUserAccounts) {
            content += `## 3. USER ACCOUNTS

### 3.1 Account Creation

To use certain features of the Service, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.

### 3.2 Account Responsibilities

You are responsible for maintaining the confidentiality of your account and password, including but not limited to restricting access to your computer and/or account. You agree to accept responsibility for all activities that occur under your account or password.

### 3.3 Account Termination

We reserve the right to terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions.

`;
        }

        // Add Intellectual Property section if selected
        if (includeIntellectualProperty) {
            content += `## ${includeUserAccounts ? '4' : '3'}. INTELLECTUAL PROPERTY RIGHTS

### ${includeUserAccounts ? '4.1' : '3.1'} Service Content, Software and Trademarks

Unless otherwise indicated, the Service is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Service (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.

The Content and Marks are provided on the Service "AS IS" for your information and personal use only. Except as expressly provided in these Terms and Conditions, no part of the Service and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.

### ${includeUserAccounts ? '4.2' : '3.2'} User License

Provided that you are eligible to use the Service, you are granted a limited license to access and use the Service and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use.

`;
        }

        // Add User-Generated Content section if selected
        if (includeUserContent) {
            const sectionIndex = 3 + (includeUserAccounts ? 1 : 0) + (includeIntellectualProperty ? 1 : 0);
            content += `## ${sectionIndex}. USER-GENERATED CONTENT

### ${sectionIndex}.1 User Content

"User Content" means any and all information and content that a user submits to, or uses with, the Service (e.g., content in the user's profile or postings). You are solely responsible for your User Content and assume all risks associated with use of your User Content.

### ${sectionIndex}.2 User Content Representations and Warranties

By submitting User Content to the Service, you represent and warrant that:
- Your User Content does not violate any third-party rights, including copyright, trademark, privacy, personality, or other personal or proprietary rights;
- Your User Content does not contain material that is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, inflammatory, or otherwise objectionable;
- Your User Content does not promote sexually explicit or pornographic material, violence, or discrimination based on race, sex, religion, nationality, disability, sexual orientation, or age.

### ${sectionIndex}.3 User Content License

By posting User Content on or through the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material for any purpose.

`;
        }

        // Add Payments and Subscriptions section if selected
        if (includePayments) {
            const sectionIndex = 3 + (includeUserAccounts ? 1 : 0) + (includeIntellectualProperty ? 1 : 0) + (includeUserContent ? 1 : 0);
            content += `## ${sectionIndex}. PAYMENTS AND SUBSCRIPTIONS

### ${sectionIndex}.1 Billing

If you purchase a subscription or any paid services, you agree to provide accurate and complete billing information. You agree to pay all charges at the prices then in effect for your purchases, and you authorize us to charge your chosen payment provider for any such purchases.

### ${sectionIndex}.2 Subscription Term and Renewal

Subscriptions commence on the date of initial billing and continue for the subscription term specified at the time of purchase. Unless otherwise specified, subscriptions automatically renew for additional periods equal to the expiring subscription term, unless canceled before the renewal date.

### ${sectionIndex}.3 Cancellation and Refunds

You may cancel your subscription at any time by contacting us. Refunds are subject to our refund policy, which may be updated from time to time.

`;
        }

        // Add Termination section if selected
        if (includeTermination) {
            const sectionIndex = 3 + (includeUserAccounts ? 1 : 0) + (includeIntellectualProperty ? 1 : 0) + (includeUserContent ? 1 : 0) + (includePayments ? 1 : 0);
            content += `## ${sectionIndex}. TERMINATION

### ${sectionIndex}.1 Termination by Us

We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of these Terms and Conditions.

### ${sectionIndex}.2 Termination by You

You may terminate these Terms and Conditions by deleting your account and discontinuing your use of the Service.

### ${sectionIndex}.3 Effect of Termination

Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service, or contact us to request account deletion.

`;
        }

        // Add Limitation of Liability section if selected
        if (includeLiability) {
            const sectionIndex = 3 + (includeUserAccounts ? 1 : 0) + (includeIntellectualProperty ? 1 : 0) + (includeUserContent ? 1 : 0) + (includePayments ? 1 : 0) + (includeTermination ? 1 : 0);
            content += `## ${sectionIndex}. LIMITATION OF LIABILITY

TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ${companyName.toUpperCase()}, ITS AFFILIATES, OR THEIR RESPECTIVE DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, SUPPLIERS, OR CONTENT PROVIDERS, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:

- YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE;
- ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE;
- ANY CONTENT OBTAINED FROM THE SERVICE; AND
- UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT,

WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.

`;
        }

        // Add Dispute Resolution section if selected
        if (includeDisputes) {
            const sectionIndex = 3 + (includeUserAccounts ? 1 : 0) + (includeIntellectualProperty ? 1 : 0) + (includeUserContent ? 1 : 0) + (includePayments ? 1 : 0) + (includeTermination ? 1 : 0) + (includeLiability ? 1 : 0);
            content += `## ${sectionIndex}. DISPUTE RESOLUTION

### ${sectionIndex}.1 Governing Law

These Terms shall be governed by and defined following the laws of ${country || '[Your Country]'}. ${companyName} and yourself irrevocably consent that the courts of ${country || '[Your Country]'} shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Terms.

### ${sectionIndex}.2 Informal Dispute Resolution

To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms and Conditions ("Dispute"), you and ${companyName} agree to first attempt to negotiate any Dispute informally for at least thirty (30) days before initiating any arbitration or court proceeding.

### ${sectionIndex}.3 Binding Arbitration

If you and ${companyName} are unable to resolve a Dispute through informal negotiations, the Dispute shall be resolved by binding arbitration, rather than in court, except that you may assert claims in small claims court if your claims qualify.

`;
        }

        // Add miscellaneous and final sections
        const finalSectionIndex = 3 + (includeUserAccounts ? 1 : 0) + (includeIntellectualProperty ? 1 : 0) + (includeUserContent ? 1 : 0) + (includePayments ? 1 : 0) + (includeTermination ? 1 : 0) + (includeLiability ? 1 : 0) + (includeDisputes ? 1 : 0);

        content += `## ${finalSectionIndex}. MISCELLANEOUS

### ${finalSectionIndex}.1 Entire Agreement

These Terms and Conditions constitute the entire agreement between you and ${companyName} regarding your use of the Service and supersede all prior and contemporaneous written or oral agreements between you and ${companyName}.

### ${finalSectionIndex}.2 Waiver and Severability

Our failure to exercise or enforce any right or provision of these Terms and Conditions shall not operate as a waiver of such right or provision. If any provision of these Terms and Conditions is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced.

### ${finalSectionIndex}.3 Changes to Terms

We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.

## ${finalSectionIndex + 1}. CONTACT US

If you have any questions about these Terms and Conditions, please contact us:

- By email: ${contactEmail || '[Your Contact Email]'}
- By visiting this page on our website: ${websiteUrl}/contact

`;

        return content;
    }
});

function apendmmr(){
    $("#outbklresult").val('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Google backlink maker for by mr laboratory </title></head><body><h1> Rediect backlink for <a href="'+$("#bkgurl").val()+'">'+$("#bkgurl").val()+'</a> by <a href="https://www.example.com/">Example</a></h1>'+mrmakeblinkmr($("#bkgurl").val())+mritem10+'<p>Rediect backlink for <a href="'+$("#bkgurl").val()+'">'+$("#bkgurl").val()+'</a> by <a href="https://www.mrlaboratory.info/">MR Laboratory</a></p> </body></html>');}
     function mrdataapnd(d){$(".tabledata").append(d); };
     function mrmakeblinkmr(u){
         var r='<a target="_blank" href="https://www.fudbal91.com/tz.php?zone=America/Iqaluit&amp;r=' + u + ' "> https://www.fudbal91.com/tz.php?zone=America/Iqaluit&amp;r=' + u + ' </a> <a target="_blank" href="https://edusearch.ir/Goto.aspx?url=' + u + ' "> https://edusearch.ir/Goto.aspx?url=' + u + ' </a>';
         return r; }
    
     $(".divoutbklresult .copyoutput").on("click",function(){ navigator.clipboard.writeText($(".divoutbklresult textarea").val()); 
    $(".divoutbklresult .copyoutput").html("Copyed");
    })
           


    //  for(var i = 0; i < $(".mrrrm a").length ; i++) {
    //     (function(index) {
    //         setTimeout(function() { 
    // var u = $(".mrrrm a:eq("+index+")").attr('href');
    // var popupwin = window.open(u,'anyname','width=300,height=300,right=10,bottom=10');
    // $(".tabledata2").append("<a href='"+u+"'>"+u+"</a></br>");
    // setTimeout(function() { popupwin.close();}, 2000);
    //         }, index*2000);
    //     })(i);
    // }
