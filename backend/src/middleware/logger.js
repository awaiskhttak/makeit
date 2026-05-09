const logger = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const statusCode = res.statusCode;
    const statusColor = statusCode >= 400 ? '❌' : statusCode >= 300 ? '⚠️' : '✅';
    
    console.log(
      `${statusColor} ${req.method} ${req.originalUrl} - ${statusCode} [${duration}ms]`
    );
  });
  
  next();
};

module.exports = logger;
