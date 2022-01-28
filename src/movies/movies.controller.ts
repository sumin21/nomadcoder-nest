import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}
    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    @Get("search")
    search(@Query('year') searchingYear: string) {
        return `We are searching for a movie made after: ${searchingYear}`;
    }

    @Get(":id")
    getOne(@Param('id') movieId: string): Movie {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData) {
        return movieData;
    }

    @Delete(":id")
    remove(@Param('id') movieId: string) {
        return `This will delete a movie with the id: ${movieId}`;
    }

    //update (put: 모든 리소스 업데이트 / patch: 일부 리소스 업데이트)
    @Patch(':id')
    path(@Param('id') movieId: string, @Body() updateData ){
        return {
            updatedMovie: movieId,
            ...updateData
        }
    }

}

// Single-responsibility principle
// 하나의 module, class, function이 하나의 기능은 꼭 책임져야 한다!!
// controller : url 매핑, 리퀘스트 받고 query 넘겨주는 등..
// service : movies 의 로직 관리