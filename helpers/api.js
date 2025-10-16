import { post } from './fetch';

export function registerNewsletter(email, token) {
  return post('https://app.fidsy.com/api/v1/w/websiteregister', { email, token });
}

export function contactForm(firstName, lastName, email, organisation, position, message, token) {
  return post('https://fidsywebsite.fidsy.cloud/api/contact', { firstName, lastName, email, organisation, position, message, token });
}

export function investorForm(firstName, lastName, email, organisation, position, country, phone, message, investorType, token) {
  return post('https://fidsywebsite.fidsy.cloud/api/investor', {
    firstName,
    lastName,
    email,
    organisation,
    position,
    phone,
    country,
    message,
    investorType,
    token,
  });
}

export function requestAccessForm(firstName, lastName, email, organisation, position, country, features, message, marketingConsent, token) {
  return post('https://fidsywebsite.fidsy.cloud/api/requestaccess', {
    firstName,
    lastName,
    email,
    organisation,
    position,
    country,
    features,
    message,
    marketingConsent,
    token,
  });
}
