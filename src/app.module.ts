import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';

// 데코레이터 : 클래스에 함수기능 추가해줌
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}


// nestjs에서 앱은 여러개의 모듈로 구성됨
// 그래서 app.module은 appservice와 appcontroller만 가져야함
// 모듈 생성! nest g mo
