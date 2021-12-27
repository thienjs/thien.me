export const SITE_URL = 'http://localhost:3000';
export const SITE_NAME = 'Thien T';
export const TWITTER_USERNAME = '@thientsx';
const dev = process.env.NODE_ENV !== "production";
export const basePath = dev ? "http://localhost:3000" : process.env.PRODUCTION_URL;