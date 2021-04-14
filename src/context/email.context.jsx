import { createContext, useContext, useMemo, useState } from 'react';
import axios from 'axios';

const CONTACT_TEMPLATE_ID = process.env.REACT_APP_CONTACT_TEMPLATE_ID;
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const SUBSCRIPTION_TEMPLATE_ID = process.env.REACT_APP_SUBSCRIPTION_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

const EmailContext = createContext();
function useEmailState() {
  const context = useContext(EmailContext);
  if (!context) throw new Error('useEmailState must be used within EmailProvider');
  const [state, setState] = context;

  async function sendEmail({form, templateId}) {
    if (!form || !templateId) throw new Error('form and templateId are required to sendEmail');
    if (!state.templateKeys[templateId]) throw new Error(`${templateId} not found in templateKeys`);
    if (!Object.keys(form).every(key => state.templateKeys[templateId].includes(key))) throw new Error(`form key mismatch: received - ${Object.keys(form).join(', ')}; required - ${state.templateKeys[templateId].join(', ')}`);

    console.log('form', form);

    return axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: SERVICE_ID,
      template_id: templateId,
      template_params: form,
      user_id: USER_ID
    });
  }

  return {
    templateIds: state.templateIds,

    sendEmail
  };
}
function EmailProvider(props) {
  const [state, setState] = useState({
    templateKeys: {
      [CONTACT_TEMPLATE_ID]: ['email', 'message', 'name', 'phone'],
      [SUBSCRIPTION_TEMPLATE_ID]: ['email', 'name']
    },
    templateIds: {
      CONTACT_TEMPLATE_ID,
      SUBSCRIPTION_TEMPLATE_ID
    }
  });
  const value = useMemo(() => [state, setState], [state]);
  return <EmailContext.Provider value={value} {...props} />;
}
export { EmailProvider, useEmailState };
