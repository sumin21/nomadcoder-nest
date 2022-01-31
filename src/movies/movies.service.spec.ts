import { Test, TestingModule } from '@nestjs/testing';

import { MoviesService } from './movies.service';
import { NotFoundError } from 'rxjs';
import { NotFoundException } from '@nestjs/common';
import { execPath } from 'process';

//describe : test 묘사
describe('MoviesService', () => {
  let service: MoviesService;

  // test 하기 전에 실행
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  //should be defined : test name
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  //getAll() test
  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    })
  })

  //getOne() test
  describe('getOne', ()=>{
    it('should return a movie', ()=>{
      //movie에 data 생성
      service.create({
        title: "Test Movie",
        genres: ['test'],
        year: 2000,
      });

      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    })

    it('should throw 404 error', ()=>{
      try{
        service.getOne(999);
      } catch (e){
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID 999 not found.');
      }
    })
  })

  //deleteOne() test
  describe('deleteOne', () => {
    it('deletes a movie', ()=>{
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      const beforeDelete = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toEqual(beforeDelete - 1);
    })

    it('should return a 404', ()=>{
      try{
        service.deleteOne(999);
      } catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
  
  //create() test
  describe('create', () => {
    it('should create a movie', ()=>{
      const beforeCreate = service.getAll().length;
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  //update() test
  describe('update', () => {
    it('should update a movie', ()=>{
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      service.update(1, {title: 'Update Test'});
      const movie = service.getOne(1);
      expect(movie.title).toEqual('Update Test');
    });
  });
});
