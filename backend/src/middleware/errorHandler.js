const errorHandler = (err, req, res, next) => {
  console.error('❌ Error:', err);

  // Default error
  let error = {
    success: false,
    statusCode: err.statusCode || 500,
    message: err.message || 'Internal Server Error',
    errorId: `ERR_${Date.now()}`
  };

  // Mongoose Validation Error
  if (err.name === 'ValidationError') {
    error.statusCode = 400;
    error.message = 'Validation Error';
    error.errors = Object.values(err.errors).map(e => ({
      field: e.path,
      message: e.message
    }));
  }

  // Mongoose Cast Error
  if (err.name === 'CastError') {
    error.statusCode = 400;
    error.message = 'Invalid ID format';
  }

  // JWT Errors
  if (err.name === 'JsonWebTokenError') {
    error.statusCode = 401;
    error.message = 'Invalid token';
  }

  if (err.name === 'TokenExpiredError') {
    error.statusCode = 401;
    error.message = 'Token expired';
  }

  // Duplicate Key Error
  if (err.code === 11000) {
    error.statusCode = 409;
    error.message = 'Duplicate field value entered';
    error.field = Object.keys(err.keyPattern)[0];
  }

  res.status(error.statusCode).json(error);
};

module.exports = errorHandler;
