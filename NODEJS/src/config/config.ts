import dotenv from 'dotenv';

dotenv.config()

export default {
    HTTP: {
        PORT: process.env.HTTP_PORT || 3000,
    },
    SQL: {
        HOST: process.env.SQL_HOST || 'localhost',
        USER: process.env.SQL_USER || 'root',
        PASSWORD: process.env.SQL_PASSWORD || '',
        PORT: Number(String(process.env.SQL_PORT)) || 3307,
        DATABASE: process.env.SQL_DATABASE || 'SYNTH',
    },
    SMTP: {
        HOST: process.env.SMTP_HOST || '',
        USER: process.env.SMTP_USER || '',
        PASSWORD: process.env.SMTP_PASSROWRD || '',
        PORT: process.env.SMTP_PORT || '',
        SECURE: process.env.SMTP_SECURE || '',
    },
    JWT: {
        SECRET: process.env.JWT_SECRET || 'myawesomesupersecretsecret',
    }
}