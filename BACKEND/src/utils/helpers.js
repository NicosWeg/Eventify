export const getClientIp = req => {
  const forwarded = req.headers["x-forwarded-for"];
  if (!forwarded) return req.ip;
  const ips = forwarded.split(',')[0].trim();
  if (ips && ips.length > 0) return ips;
  return req.ip;
}