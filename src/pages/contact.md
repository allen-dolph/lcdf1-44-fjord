---
form_action: /success
form_fields:
  - default_value: Your name
    input_type: text
    is_required: true
    label: Name
    name: name
    type: form_field
  - default_value: Your email address
    input_type: email
    is_required: true
    label: Email
    name: email
    type: form_field
  - default_value: Please select
    input_type: select
    label: Subject
    name: subject
    options:
      - Error on the site
      - Partnership
      - Mailing List
      - Other
    type: form_field
  - default_value: Your message
    input_type: textarea
    label: Message
    name: message
    type: form_field
  - input_type: checkbox
    label: >-
      I understand that this form is storing my submitted information so I can
      be contacted.
    name: consent
    type: form_field
form_id: contactForm
img_path: >-
  https://cdn.sanity.io/images/z8zcrwl0/production/045838fb81bba18883f74b1259d9eff7f46180e2-2075x3265.jpg
seo:
  description: This is the contact page
  extra:
    - keyName: property
      name: 'og:type'
      value: website
    - keyName: property
      name: 'og:title'
      value: Get in Touch
    - keyName: property
      name: 'og:description'
      value: This is the contact page
    - keyName: property
      name: 'og:image'
      relativeUrl: true
      value: images/contact.jpg
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Get in Touch
    - name: 'twitter:description'
      value: This is the contact page
    - name: 'twitter:image'
      relativeUrl: true
      value: images/contact.jpg
  title: Get in Touch
  type: stackbit_page_meta
stackbit_url_path: /contact
submit_label: Send Message
template: contact
title: Get in Touch
---

To get in touch fill the form below.
