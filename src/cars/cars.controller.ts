import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carService: CarsService
    ){}

    @Get()
    getAllCars() {
        return this.carService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', new ParseUUIDPipe({ version: '4' })) id: string ) {

        return this.carService.findById(id);
    }

    @Post()
    // @UsePipes(ValidationPipe)
    createCar(@Body() createCardDto: CreateCarDto) {
        return this.carService.create(createCardDto);
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCarDto)
        {
        return this.carService.update(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string
    ) {
        return this.carService.delete(id);
    }

}
 