import {IsNumber, IsString} from 'class-validator';

//클래스의 유효성 검사 (validator로)
// 받을 데이터 타입
export class CreateMovieDto {
    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;

    @IsString({each: true})
    readonly genres: string[];
    
}