import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  const corsOptions: CorsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Accept',
      'Origin',
      'X-Requested-With',
      'Access-Control-Allow-Origin',
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Methods',
      'Access-Control-Max-Age',
      'X-Frame-Options',  
      'X-Content-Type-Options',
      'X-XSS-Protection', 
      'Cache-Control', 
      'Pragma',  
      'Expires', 
      'Set-Cookie',
    ],
  };
  app.enableCors(corsOptions);
  const config = new DocumentBuilder()
    .setTitle("NestJS CRUD with Swagger")
    .setDescription("API documentation for the NestJS CRUD application")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document, {
    customSiteTitle: "Minha API",
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(3001);
}
bootstrap();
