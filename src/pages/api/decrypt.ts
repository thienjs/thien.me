import crypto from 'crypto';


export default (req, res) => {
  const algorithm = 'aes-128-cbc';
  const decipher = crypto.createDecipheriv(
    algorithm,
    process.env.SERVICE_ENCRYPTION_KEY,
    process.env.SERVICE_ENCRYPTION_IV
  );
  let decrypted = decipher.update(req.body.data, 'base64', 'utf8');
  decrypted += decipher.final('utf8');
  res.status(200).json(JSON.parse(decrypted))
}