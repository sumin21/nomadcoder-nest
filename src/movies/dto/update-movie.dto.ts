import { CreateMovieDto } from './create-movie.dto';
import { PartialType } from '@nestjs/mapped-types';

//클래스의 유효성 검사 (validator로)
// 받을 데이터 타입
//? -> 읽기전용이 아니어도 됨
// 특정한 애들만 update 하고 싶을 수 있음
//basetype 필요 (=createmovieDto)

// createmovieDto와 같음 (모두 필수가 아닌거만 차이)
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

//npm i @nestjs/mapped-types
// dto를 변환시키는 걸 도와줌