import { SwaggerRouter } from 'koa-swagger-decorator';

const swaggerRouter = new SwaggerRouter();

/* swagger文档 */
swaggerRouter.swagger({
  title: 'API V1 Server',
  description: 'API DOC',
  version: '1.0.0',

  // [optional] default is root path.
  prefix: '',

  // [optional] default is /swagger-html
  swaggerHtmlEndpoint: '/swagger.html',

  // [optional] default is /swagger-json
  swaggerJsonEndpoint: '/swagger.json',

  // [optional] additional options for building swagger doc
  // eg. add api_key as shown below
  swaggerOptions: {
    securityDefinitions: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
      },
    },
  },
  swaggerConfiguration: {
    display: {
      defaultModelsExpandDepth: 4,
      defaultModelExpandDepth: 3,
      docExpansion: 'list',
      defaultModelRendering: 'model',
    },
  },
});

swaggerRouter.mapDir(__dirname, {});

export default swaggerRouter;
