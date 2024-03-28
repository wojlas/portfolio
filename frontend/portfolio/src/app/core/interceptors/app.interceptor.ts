import { HttpInterceptorFn } from '@angular/common/http';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({ url: `http://localhost:8000/${ req.url }`});
  
  return next(req);
};
