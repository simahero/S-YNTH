import React from 'react';

const MailContext = React.createContext(true);

export const MailProvider = MailContext.Provider;
export const MailConsumer = MailContext.Consumer;

export default MailContext;