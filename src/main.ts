import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    // 이상한 값이 우리의 validator에 도달하지 않게
    whitelist: true,
    forbidNonWhitelisted: true,
    // 받은 값을 원하는 타입으로 변환
    transform: true,
  }));
  await app.listen(3000);
}
bootstrap();

//pipe
//Dto로 유효성 검사 (= 미들웨어)
//validationPipe : 유효성 검사

//nestjs
//dependency injection 있음
//-> ex) property를 import하지 않고 class만 import했음에도 됨 (타입 지정해서)
// controller, provider가 왜 저기 위치해야 하는지 알면됨
// providers: [MoviesService]

//express 위에서 돌아감 (req, res 쓸수 있음) -> 비추
//fastify에서도 돌아감 (express와 비슷 but 빠름)

//test
//1. unit test : function 단위로 test
//2. e2e test : 시스템 단위로 test (어떤 페이지에 들어가면 어떤 화면이 보여야 한다!)
//  Jest 이용 : js testing framework
